---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Dummy cache implementation that doesn't do anything.

---

**Inherits**: [ICache](../icache)

### Description

The NullCache class allows you to implement a dummy cache that doesn't do anything.

**Important points**

- It can be used in testing or in situations where a cache is required but must be disabled.

### Instance methods

#### RemoveAsync
Removes a value from the cache by its key.

> `public override` Task Remove(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.


#### RetrieveAsync
Retrieves a cached value from the cache using its key.
If value is missing in the cache or expired, it returns null.

> `public` Task\<T\> RetrieveAsync\<T\>(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to used trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: Task\<T\> - cached value or null, if value wasn't found or timeout expired.


#### StoreAsync
Stores a value in the cache with expiration time.

> `public` Task\<T\> StoreAsync\<T\>(string correlationId, string key, T value, long timeout)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **value**: T - value to store.
- **timeout**: long - timeout in milliseconds.
- **returns**: Task\<T\> - cached value stored in the cache.


### See also
- #### [ICache](../icache)
