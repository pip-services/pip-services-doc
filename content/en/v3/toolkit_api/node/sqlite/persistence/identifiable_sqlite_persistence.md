---
type: docs
title: "IdentifiableSqlitePersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableSqlitePersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-sqlite-nodex"
description: >
    Abstract persistence component that stores data in SQLite
    and implements a number of CRUD operations over data items with unique ids.
---

**Extends:** [SqlitePersistence<T>](../sqlite_persistence)

**Implements:** [IWriter<T, K>](../../../data/core/iwriter), [IGetter<T, K>](../../../data/core/igetter), [ISetter<T>](../../../data/core/isetter)

### Description

**Important points**
    
- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface. 
- In basic scenarios, child classes shall only override [getPageByFilter](../sqlite_persistence/#getpagebyfilter), [getListByFilter](../sqlite_persistence/#getlistbyfilter) or [deleteByFilter](../sqlite_persistence/#deletebyfilter) operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.

#### Configuration parameters

- **table**: (optional) SQLite table name
- **schema**: (optional) SQLite schema name
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **database**: database file path
    - **uri**: resource URI with file:// protocol


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName: string)

- **tableName**: string - (optional) collection name.

### Fields


<span class="hide-title-link">

Flag to turn on automated string ID generation
> `protected` **_autoGenerateId**: boolean = true

</span>

### Instance methods

#### convertFromPublicPartial
Converts the given object from the public partial format.

> `protected` convertFromPublicPartial(value: any): any

- **value**: any - object to convert from the public partial format.
- **returns**: any - initial object.


#### create
Creates a data item.

> `public` create(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### deleteById
Deletes a data item by it's unique id.

> `public` deleteById(correlationId: string, id: K): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be deleted
- **returns**: Promise\<T\> - deleted item


#### deleteByIds
Deletes multiple data items by their unique ids.

> `public` deleteByIds(correlationId: string, ids: K[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of the data items to be deleted.


#### getListByIds
Gets a list of data items retrieved by given unique ids.

> `public` getListByIds(correlationId: string, ids: K[]): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of the data items to be retrieved
- **returns**: Promise\<T[]\> - data list


#### getOneById
Gets a data item by its unique id.

> `public` getOneById(correlationId: string, id: K): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be retrieved.
- **returns**: Promise\<T\> - data item


#### set
Sets a data item. If the data item exists, it updates it.
Otherwise, it creates a new data item.

> `public` set(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: Promise\<T\> - new or updated item


#### update
Updates a data item.

> `public` update(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: Promise\<T\> - updated item


#### updatePartially
Updates only a few selected fields in a data item.

> `public` updatePartially(correlationId: string, id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: any - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Promise\<T\> - updated item

### Examples
```typescript
class MySqlitePersistence extends IdentifiableSqlitePersistence<MyData, string> {
    public constructor() {
        super("mydata");
    }
    
    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE "' + this._tableName + '" ("id" VARCHAR(32) PRIMARY KEY, "name" VARCHAR(50), "content" TEXT)');
        this.ensureIndex(this._tableName + '_name', { name: 1 }, { unique: true });
    }
    
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let name = filter.getAsNullableString('name');

        let filterCondition: string = null;
        if (name != null)
            filterCondition = "\"name\"='" + name + "'";
        return filterCondition;
    }
    
    public getPageByFilter(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }
}

let persistence = new MySqlitePersistence();
persistence.configure(ConfigParams.fromTuples(
    "connection.database", "./data/mydb.db"
));

await persitence.open("123");
let item = await = persistence.create("123", { id: "1", name: "ABC" });
let page = await persistence.getPageByFilter(
    "123",
    FilterParams.fromTuples("name", "ABC"),
    null
);

console.log(page.data);          // Result: { id: "1", name: "ABC" }
await persistence.deleteById("123", "1");
```
