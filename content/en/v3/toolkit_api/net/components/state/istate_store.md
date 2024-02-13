---
type: docs
title: "IStateStore"
linkTitle: "IStateStore"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for state storages that are used to store and retrieve transaction states.
---

### Description

TODO: add description

### Instance methods

#### DeleteAsync
Deletes a state from the store by its key.

> Task\<T\> DeleteAsync\<T\>(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.
- **return**: Task\<T\> - removed item


#### LoadAsync
Loads state from the store using its key.
If value is missing in the store it returns null.

> Task\<T\> LoadAsync\<T\>(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **return**: Task\<T\> - the state value or `null` if value wasn't found.


#### LoadBulkAsync
Loads an array of states from the store using their keys.

> Task\<List\<[StateValue](../state_value)\<T\>\>\> LoadBulkAsync\<T\>(string correlationId, List\<string\> keys)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **keys**: List\<string\> - unique state keys.
- **returns**: Task\<List\<[StateValue](../state_value)\<T\>\>\> - an array with state values and their corresponding keys.


#### SaveAsync
Saves state into the store.

> Task\<T\> SaveAsync\<T\>(string correlationId, string key, T value)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **value**: T - a state value.
- **returns**: Task\<T\> - execution duration in milliseconds.
