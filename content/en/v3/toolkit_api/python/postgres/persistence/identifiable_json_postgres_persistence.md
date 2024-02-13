---
type: docs
title: "IdentifiableJsonPostgresPersistence"
linkTitle: "IdentifiableJsonPostgresPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-postgres-python"
description: >
    Abstract persistence component that stores data in PostgreSQL in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Implements:** [IdentifiablePostgresPersistence](../identifiable_postgres_persistence), [IIdentifiable](../../../commons/data/iidentifiable)

### Description

The IdentifiableJsonPostgresPersistence class allows you to create persistence components used to store data in PosgreSQL databases in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override the [get_page_by_filter](../postgres_persistence/#get_page_by_filter), [get_list_by_filter](../postgres_persistence/#get_list_by_filter) or [delete_by_filter](../postgres_persistence/#delete_by_filter)  operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **self._collection** and **self._model** properties.

#### Configuration parameters

- **table**: (optional) PostgreSQL table name
- **schema**: (optional) PostgreSQL schema name

**connection(s)**:    
- **discovery_key**: (optional) key used to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
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
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))



### Constructors
Creates a new instance of the persistence component.

> IdentifiableJsonPostgresPersistence(table_name: str = None, schema_name: str = None)

- **table_name**: str - (optional) a table name.
- **schema_name**: str - (optional) a schema name.


### Instance methods

#### _convert_from_public
Converts object value from public to internal format.

> _convert_from_public(value: Any): Any

- **value**: Any - object in public format to convert.
- **returns**: Any - converted object in internal format.


#### _convert_to_public
Converts object value from internal to public format.

> _convert_to_public(value: Any): Any

- **value**: Any - object in internal format to convert.
- **returns**: Any - converted object in public format.


#### _ensure_table
Adds DML statement to automatically create a JSON(B) table

> _ensure_table(id_type: str = 'TEXT', data_type: str = 'JSONB')

- **id_type**: str - type of the id column (default: TEXT)
- **data_type**: str - type of the data column (default: JSONB)


#### update_partially
Updates only few selected fields in a data item.

> update_partially(correlation_id: Optional[str], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: Optional[T] - updated item

### Examples

```python
class MyPostgresPersistence(IdentifiablePostgresJsonPersistence):

    def __init__(self):
        super(MyPostgresPersistence, self).__init__('mydata', MyDataPostgresSchema())

    def __compose_filter(self, filter):
        filter = filter or FilterParams()
        criteria = []
        name = filter.get_as_nullable_string('name')
        if name is not None:
            criteria.append({'name':name})
        return { '$and': criteria } if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id, filter, paging):
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, None, None)

persistence = MyPostgresPersistence()
persistence.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 27017
))

persistence.open("123")
persistence.create("123", {'id': "1", 'name': "ABC"})

page = persistence.get_page_by_filter('123', FilterParams.from_tuples('name', 'ABC'), None)
print(page.data)  # Result: { id: "1", name: "ABC" }
persistence.delete_by_id("123", "1")
# ...

```
