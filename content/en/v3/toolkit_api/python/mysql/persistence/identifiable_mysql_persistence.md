---
type: docs
title: "IdentifiableMySqlPersistence"
linkTitle: "IdentifiableMySqlPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mysql-python"
description: >

    Abstract persistence component that stores data in MySQL
    and implements a number of CRUD operations over data items with unique ids.
    

---

**Implements:** [MySqlPersistence](../mysql_persistence), [IIdentifiable](../../../commons/data/iidentifiable)

### Description

The IdentifiableMySqlPersistence class allows you to create persistence components that store data in MySQL databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios, child classes shall only override [get_page_by_filter](../mysql_persistence/#get_page_by_filter), [get_list_by_filter](../mysql_persistence/#get_list_by_filter) or [delete_by_filter](../mysql_persistence/#delete_by_filter)  operations with the specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing the **self._collection** and **self._model** properties.

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

> IdentifiableMySqlPersistence(table_name: str = None, schema_name: str = None)

- **table_name**: str - (optional) collection name.
- **schema_name**: str - (optional) a schema name

### Fields

<span class="hide-title-link">

#### _auto_generate_id

Flag to turn on automated string ID generation

> **_auto_generate_id**: bool = True

</span>

### Instance methods

#### _convert_from_public_partial
Converts the given object from the public partial format.

> _convert_from_public_partial(value: Any): Any

- **value**: Any - the object to convert from the public partial format.
- **returns**: Any - the initial object.


#### create
Creates a data item.

> create(correlation_id: Optional[str], item: T): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Optional[T] - created item


#### delete_by_id
Deletes a data item by it's unique id.

> delete_by_id(correlation_id: Optional[str], id: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any - id of the item to be deleted
- **returns**: T - deleted item


#### delete_by_ids
Deletes multiple data items by their unique ids.

> delete_by_ids(correlation_id: Optional[str], ids: List[Any])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **ids**: List[Any] - ids of the data items to be deleted.


#### get_list_by_ids
Gets a list of data items retrieved by given unique ids.

> get_list_by_ids(correlation_id: Optional[str], ids: List[Any]): List[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **ids**: List[Any] - ids of the data items to be retrieved
- **returns**: List[T] - data list


#### get_one_by_id
Gets a data item by its unique id.

> get_one_by_id(correlation_id: Optional[str], id: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any - id of the data item to be retrieved.
- **returns**: T - data item


#### set
Sets a data item. If the data item exists it updates it,
otherwise it creates a new data item.

> set(correlation_id: Optional[str], item: T): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: Optional[T] - new or updated item


#### update
Updates a data item.

> update(correlation_id: Optional[str], item: T): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: Optional[T] - updated item


#### update_partially
Updates only a few selected fields in a data item.

> update_partially(correlation_id: Optional[str], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Optional[T] - updated item

### Examples
```python
class MyMySqlPersistence(IdentifiableMySqlPersistence):
    def __init__(self):
        super(MyMySqlPersistence, self).__init__("mydata", MyDataMySqlSchema())

    def __compose_filter(self, filter):
        filter = filter or FilterParams()
        criteria = []
        name = filter.get_as_nullable_string('name')
        if name:
            criteria.append({'name': name})
        return {'$and': criteria} if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id, filter, paging):
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, None, None)

persistence = MyMySqlPersistence()
persistence.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 27017
))

persistence.open('123')
persistence.create('123', {'id': "1", 'name': "ABC"})

page = persistence.get_page_by_filter('123', FilterParams.from_tuples('name', 'ABC'), None)
print(page.data) # Result: { id: "1", name: "ABC" }
persistence.delete_by_id("123", "1")
# ...
```
