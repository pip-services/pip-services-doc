---
type: docs
title: "MongoDbConnection"
linkTitle: "MongoDbConnection"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mongodb-python"
description: >
    MongoDB connection using the official driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description

The MongoDbConnection class allows you to create a MongoDB connection using the official driver.

Important points

- By defining a connection and sharing it through multiple persistence components you can reduce the number of used database connections.

#### Configuration parameters
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
- **max_pool_size**: (optional) maximum connection pool size (default: 2)
- **keep_alive**: (optional) enable connection keep alive (default: true)
- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5000)
- **socket_timeout**: (optional) socket timeout in milliseconds (default: 360000)
- **auto_reconnect**: (optional) enable auto reconnection (default: true)
- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000)
- **max_page_size**: (optional) maximum page size (default: 100)
- **replica_set**: (optional) name of replica set
- **ssl**: (optional) enable SSL connection (default: false)
- **auth_source**: (optional) authentication source
- **debug**: (optional) enable debug output (default: false).

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> MongoDbConnection()

### Fields

<span class="hide-title-link">

#### _logger
Logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _connection_resolver
Connection resolver.
> **_connection_resolver**: [MongoDbConnectionResolver](../mongodb_connection_resolver) 

#### _options
Configuration options.
> **_options**: [ConfigParams](../../../commons/config/config_params) 

#### _connection
MongoDB connection object.
> **_connection**: Any

#### _database_name
MongoDB database name.
> **_database_name**: str

#### _db
MongoDB database object.
> **_db**: Any
    
     
</span>


### Instance methods

#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### get_connection
Gets the connection.

> get_connection(): Any

- **return**: Any - connection to a MongoDB database


#### get_database
Gets the MongoDB database.

> get_database(): Any

- **return**: Any - MongoDB database


#### is_open
Checks if the component is opened.

> is_open(): bool

- **return**: bool - True if the component has been opened and False otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### set_references
Sets the references to the dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
