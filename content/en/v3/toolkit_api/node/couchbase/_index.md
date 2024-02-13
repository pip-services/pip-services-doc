---
type: docs
title: "Couchbase module"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-couchbase-nodex"
no_list: true
weight: 500
description: > 
   A set of components used to implement Couchbase persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create Couchbase persistence components.
- [**Connect**](connect) - connection component to configure a Couchbase connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

As an example, lets create persistence for the following data object. 

```typescript
import { IIdentifiable } from 'pip-services3-commons-nodex';

export class MyObject implements IIdentifiable {
  public id: string;
  public key: string;
  public value: number;
}
```

The persistence component shall implement the following interface with a basic set of CRUD operations.

```typescript
export interface IMyPersistence {
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>>;
    
    getOneById(correlationId: string, id: string): Promise<MyObject>;
    
    getOneByKey(correlationId: string, key: string): Promise<MyObject>;
    
    create(correlationId: string, item: MyObject): Promise<MyObject>;
    
    update(correlationId: string, item: MyObject): Promise<MyObject>;
    
    deleteById(correlationId: string, id: string): Promise<MyObject>;
}
```

To implement couchbase persistence component you shall inherit `IdentifiableCouchbasePersistence`. 
Most CRUD operations will come from the base class. You only need to override the `getPageByFilter` method with a custom filter function.
And then, implement a `getOneByKey` custom persistence method that doesn't exist in the base class.

```typescript
export class MyCouchbasePersistence extends IdentifiableCouchbasePersistence<MyObject, string>  {
  public constructor() {
    super("app", "myobjects");
    this.ensureIndex({ key: 1 }, { unique: true });
  }

  private composeFilter(filter: FilterParams): any {
    filter = filter || new FilterParams();
    
    let criteria = [];

    let id = filter.getAsNullableString('id');
    if (id != null)
        criteria.push("id='" + this.generateBucketId(id) + "'");

    let tempIds = filter.getAsNullableString("ids");
    if (tempIds != null) {
        let ids = tempIds.split(",");
        ids = _.map(ids, id => this.generateBucketId(id));
        filters.push("id IN ('" + ids.join("','") + "')");
    }

    let key = filter.getAsNullableString("key");
    if (key != null)
        criteria.push("key='" + key + "'");

    return criteria.length > 0 ? criteria.join(" AND ") : null;
  }
  
  public async getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams):  Promise<DataPage<MyObject>> {
    return await super.getPageByFilter(correlationId, this.composeFilter(filter), paging, "id", null);
  }  
  
  public async getOneByKey(correlationId: string, key: string): Promise<MyObject> {
    
    let statement = "SELECT * FROM `" + this._bucketName + "` WHERE _c='" + this._collectionName + "' AND key='" + key + "'";
    let query = this._query.fromString(statement);
    query.consistency(this._query.Consistency.REQUEST_PLUS);
    let item = await new Promise<any>((resolve, reject) => {
        this._bucket.query(query, [], (err, items) => {
          err = err || null;

          items = _.map(items, this.convertToPublic);
          let item = item != null ? item[0] : null;

          if (item == null)
            this._logger.trace(correlationId, "Nothing found from %s with key = %s", this._collectionName, key);
          else
            this._logger.trace(correlationId, "Retrieved from %s with key = %s", this._collectionName, key);

          if (err != null) reject(err);
            
          resolve(item);
        });
    });

    item = this.convertToPublic(item);
    return item;
  }
}
```

The configuration for your microservice that includes couchbase persistence may look the following way:

```yaml
...
{{#if COUCHBASE_ENABLED}}
- descriptor: pip-services:connection:couchbase:con1:1.0
  connection:
    uri: {{{COUCHBASE_SERVICE_URI}}}
    host: {{{COUCHBASE_SERVICE_HOST}}}{{#unless COUCHBASE_SERVICE_HOST}}localhost{{/unless}}
    port: {{COUCHBASE_SERVICE_PORT}}{{#unless COUCHBASE_SERVICE_PORT}}8091{{/unless}}
    bucket: {{COUCHBASE_BUCKET}}{{#unless COUCHBASE_BUCKET}}app{{/unless}}
  credential:
    username: {{COUCHBASE_USER}}
    password: {{COUCHBASE_PASS}}
    
- descriptor: myservice:persistence:couchbase:default:1.0
  dependencies:
    connection: pip-services:connection:couchbase:con1:1.0
  collection: {{COUCHBASE_COLLECTION}}{{#unless COUCHBASE_COLLECTION}}myobjects{{/unless}}
{{/if}}
...
```
