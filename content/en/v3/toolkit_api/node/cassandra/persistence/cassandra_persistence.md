---
type: docs
title: "CassandraPersistence<T>"
linkTitle: "CassandraPersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-cassandra-nodex"
description: >
    Abstract persistence component that stores data in Cassandra using the default driver.
    
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description
The CassandraPersistence class allows you to create abstract persistence components that store data in Cassandra using the default driver.
    
**Important points**
    
- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **this._db** or **this._collection** properties.

#### Configuration parameters

- **table**: (optional) Cassandra table name
- **keyspace**: (optional) Cassandra keyspace name
- **connection(s)**:    
  - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
  - **host**: host name or IP address
  - **port**: port number (default: 27017)
  - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
  - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
  - **username**: (optional) username
  - **password**: (optional) user's password
- **options**:
  - **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
  - **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
  - **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName?: string, keyspaceName?: string)

- **tableName**: string - (optional) table's name.
- **keyspaceName**: string - (optional) keyspace's name.


### Fields

<span class="hide-title-link">

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _connection
Cassandra connection component.
> `protected` **_connection**: [CassandraConnection](../../connect/cassandra_connection) 

#### _client
Cassandra connection pool object.
> `protected` **_client**: any 

#### _datacenter 
Cassandra datacenter's name.
> `protected` **_datacenter**: string

#### _tableName 
Cassandra table's name.

> `protected` **_tableName**: string

#### _keyspaceName
Cassandra keyspace's name.
> `protected` **_keyspaceName**: string

#### _maxPageSize
The maximum number of records to return from the database per request.
> `protected` **_maxPageSize**: number = 100

</span>


### Instance methods


#### clear
Clears a component's state.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### clearSchema
Clears all auto-created objects

> `protected` clearSchema(): void


#### close
Closes a component and frees the used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### convertFromPublic
Converts an object value from public to internal format.

> `protected` convertFromPublic(value: any): any

- **value**: any - object in public format to convert.
- **returns**: any - converted object in internal format.


#### convertToPublic
Converts an object value from internal to public format.

> `protected` convertToPublic(value: any): any

- **value**: any - object in internal format to convert.
- **returns**: any - converted object in public format.


#### create
Creates a data item.

> `public` create(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### createSchema
Checks if a table exists and if not, it creates the necessary database objects.
> `protected` createSchema(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### defineSchema
Defines a database schema via auto-create objects or convenience methods.

> `protected` defineSchema(): void


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` deleteByFilter(correlationId: string, filter: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter function to filter items.


#### ensureIndex
Adds an index definition to create it on opening.

> `protected` ensureIndex(keys: any, options)

- **keys**: any - index keys (fields)
- **options**: any - index options


#### ensureSchema
Adds a statement to a schema definition.

> `protected` ensureSchema(schemaStatement: string): void

- **schemaStatement**: string - statement to be added to the schema


#### generateColumns
Generates a list of column names to use in SQL statements like: *"column1,column2,column3"*.

> `protected` generateColumns(values: any): string

- **values**: any - array with column values or a key-value map
- **returns**: string - generated list of column names 


#### generateParameters
Generates a list of value parameters to use in SQL statements like: "$1,$2,$3"

> `protected` generateParameters(values: any): string

- **values**: any - array with values or a key-value map
- **returns**: string - generated list of value parameters


#### generateSetParameters
Generates a list of column sets to use in UPDATE statements like: column1=$1,column2=$2

> `protected` generateSetParameters(values: any): string

- **values**: any - key-value map with columns and values
- **returns**: string - generated list of column sets


#### generateValues
Generates a list of column parameters.

> `protected` generateValues(values: any): any[]

- **values**: any - key-value map with columns and values
- **returns**: any[] - generated list of column values



#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getCountByFilter(correlationId: string, filter: any): Promise\<number\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) JSON object filter
- **returns**: Promise\<number\> - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getListByFilter(correlationId: string, filter: any, sort: any, select: any): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter function to filter items
- **sort**: any - (optional) sorting parameters
- **select**: any - (optional) projection parameters (not used yet)
- **returns**: Promise\<T[]\> - data list of results by filter.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **getOneRandom** method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getOneRandom(correlationId: string, filter: any): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter JSON object
- **returns**: Promise\<T\> - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from the a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getPageByFilter(correlationId: string, filter: any, paging: PagingParams, sort: any, select: any): Promise<[DataPage<T>](../../../commons/data/data_page)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter for JSON objects.
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: any - (optional) sorting JSON object
- **select**: any - (optional) projection JSON object
- **returns**: Promise<[DataPage<T>](../../../commons/data/data_page)> - data page of results by the filter



#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### quoteIdentifier
Adds single quotes to a string.

> `protected` quoteIdentifier(value: string): string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes

#### quotedTableName
Adds the kespace's name to a table's name.
> `protected` quotedTableName(): string

- **returns**: string - table's name with added keyspace's name on the left.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

### Examples

```typescript
class MyCassandraPersistence extends CassandraPersistence<MyData> {
  public constructor() {
      super("mydata");
  }

  public getByName(correlationId: string, name: string): Promise<MyData> {
    let criteria = { name: name };
    return new Promise((resolve, reject) => {
      this._model.findOne(criteria, (err, item) => {
        if (err != null) {
          reject(err);
          return;
        }
        item = this.convertToPublic(item);
        resolve(item);
      });
     });
  }); 

  public set(correlatonId: string, item: MyData): Promise<MyData> {
    let criteria = { name: item.name };
    let options = { upsert: true, new: true };
    return new Promise((resolve, reject) => {
      this.findOneAndUpdate(criteria, item, options, (err, item) => {
        if (err != null) {
          reject(err);
          return;
        }
        item = this.convertToPublic(item);
        resolve(item);
      });
     });
  }
}

let persistence = new MyCassandraPersistence();
persistence.configure(ConfigParams.fromTuples(
    "host", "localhost",
    "port", 27017
));

await persitence.open("123");
let item = await persistence.set("123", { name: "ABC" });
item = await persistence.getByName("123", "ABC");
console.log(item);   // Result: { name: "ABC" }
```
