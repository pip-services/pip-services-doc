---
type: docs
title: "SqliteConnectionResolver"
linkTitle: "SqliteConnectionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-sqlite-nodex"
description: >
    Helper class that resolves a SQLite connection and credential parameters,
    validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description
The SqliteConnectionResolver class is used to resolve SQLite connections and credential paramters, validate them and generate connection URIs.

**Important points**  

- It is able to process multiple connections to SQLite cluster nodes.


#### Configuration parameters

- **connection(s)**:    
  - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
  - **database**: database file path
  - **uri**: resource URI with file:// protocol



#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) stores to resolve credentials


### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credentialResolver
Credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Instance methods


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### resolve
Resolves a SQLite connection URI from connection and credential parameters.

> `public` resolve(correlationId: string): Promise\<string\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise\<string\> - resolved config.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
