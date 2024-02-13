---
type: docs
title: "IdentifiableMySqlPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableMySqlPersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mysql-nodex"
description: >

    Abstract persistence component that stores data in MySQL
    and implements a number of CRUD operations over data items with unique ids.
    

---

**Extends:** [MySqlPersistence<T>](../mysql_persistence)

### Description

The IdentifiableMySqlPersistence class allows you to create persistence components that store data in MySQL databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios, child classes shall only override [getPageByFilter](../mysql_persistence/#getpagebyfilter), [getListByFilter](../memory_persistence/#getlistbyfilter) or [deleteByFilter](../mysql_persistence/#deletebyfilter) operations with the specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing the **this._collection** and **this._model** properties.

#### Configuration parameters

- **table**: (optional) MySQL table name
- **schema**: (optional) MySQL schema name

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName: string, schemaName?: string)

- **tableName**: string - (optional) collection name.
- **schemaName**: string - (optional) a schema name


### Fields

<span class="hide-title-link">

#### _autoGenerateId

Flag to turn on automated string ID generation

> `protected` **_autoGenerateId**: boolean = true

</span>

### Instance methods

#### convertFromPublicPartial
Converts the given object from the public partial format.

> `protected` convertFromPublicPartial(value: any): any

- **value**: any - the object to convert from the public partial format.
- **returns**: any - the initial object.


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
Sets a data item. If the data item exists it updates it,
otherwise it creates a new data item.

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
class MyMySqlPersistence extends IdentifiableMySqlPersistence<MyData, string> {
    public constructor() {
        super("mydata", new MyDataMySqlSchema());
    }
    
    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE `' + this._tableName + '` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)');
        this.ensureIndex(this._tableName + '_key', { key: 1 }, { unique: true });
    }
    
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let name = filter.getAsNullableString('name');

        let filterCondition: string = null;
        if (name != null) {
            filterCondition += "`name`='" + name + "'";
        }
    
        return filterCondition;
    }
    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }
}

let persistence = new MyMySqlPersistence();
persistence.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 5432,
    "credential.username", "mysql",
    "credential.password", "mysql",
    "connection.database", "mytestobjects"
));

await persitence.open("123");

let item = await persistence.create("123", { id: "1", name: "ABC" });

let page = await persistence.getPageByFilter(
    "123",
    FilterParams.fromTuples("name", "ABC"),
    null,
)

console.log(page.data);     // Result: { id: "1", name: "ABC" }
item = await persistence.deleteById("123", "1");
```
