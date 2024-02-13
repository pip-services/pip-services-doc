---
type: docs
title: "Auth"
linkTitle: "Auth"
no_list: true
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    
    This package contains interfaces and classes for credential stores, which can be used to save or retrieve credential parameters. 

---
---

**Important points**   
    
- Examples of credentials are passwords, logins, application keys, and secrets. 
- Credential information is usually linked with connection parameters. 
- Configuration and connection parameters are stored separately from authentication information as they need added security and protection

<div class="module-body">  

<br>

### Interfaces

#### [ICredentialStore](icredential_store)
Interface for credential stores which are used to store and lookup credentials
to authenticate against external services.

<br>

### Classes

#### [CredentialParams](credential_params)
Contains credentials used to authenticate against external services.
They are used together with connection parameters, but usually stored
in a separate store, protected from unauthorized access.

#### [CredentialResolver](credential_resolver)
Helper class used to retrieve component credentials.

If credentials are configured to be retrieved from [ICredentialStore](icredential_store),
this component automatically locates [ICredentialStore](icredential_store) in component references
and retrieves credentials from there using store_key parameter.

#### [DefaultCredentialStoreFactory](default_credential_store_factory)
Creates [ICredentialStore](icredential_store) components based on their descriptors.

#### [MemoryCredentialStore](memory_credential_store)
Credential store that keeps credentials in memory.

</div>
