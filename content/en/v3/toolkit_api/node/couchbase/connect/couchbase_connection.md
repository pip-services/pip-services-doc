---
type: docs
title: "CouchbaseConnection"
linkTitle: "CouchbaseConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-couchbase-nodex"
description: >
    Couchbase connection using the default Couchbase driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description
The CouchbaseConnection class allows you to create connections to a Couchbase database using the default Couchbase driver.

**Important points**

- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing **this._collection** or **this._model** properties.

#### Configuration parameters

- **bucket**: (optional) Couchbase bucket's name
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
    - **auto_create**: (optional) automatically create a missing bucket (default: false)
    - **auto_index**: (optional) automatically create a primary index (default: false)
    - **flush_enabled**: (optional) bucket flush enabled (default: false)
    - **bucket_type**: (optional) bucket type (default: couchbase)
    - **ram_quota**: (optional) RAM quota in MB (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` constructor(bucketName?: string)

- **bucketName**: string - name of the couchbase bucket


### Fields

<span class="hide-title-link">


#### _connection
Couchbase cluster connection object.
> `protected` **_connection**: any

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [CouchbaseConnectionResolver](../couchbase_connection_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _options
Configuration options.
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params)

#### _bucketName
Couchbase bucket's name.
> `protected` **_bucketName**: string

#### _bucket
Couchbase bucket's object.
> `protected` **_bucket**: any

</span>


### Instance methods

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getBucket
Gets the Couchbase bucket's object.
> `public` getBucket(): any

- **returns**: any - Couchbase bucket's object.


#### getBucketName
Gets Couchbase bucket's name.

> `public` getBucketName(): string

- **returns**: string - Couchbase bucket's name.

#### getConnection
Gets the connection.
> `public` getConnection(): any

- **returns**: any - connection to a Couchbase database

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
