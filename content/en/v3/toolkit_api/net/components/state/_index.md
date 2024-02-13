---
type: docs
title: "State"
linkTitle: "State"
no_list: true
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Todo: Rewrite the description
    
    Abstract implementation of various distributed states. We can save an object 
    to state and retrieve it object by its key, using various implementations.  
---
---

<div class="module-body"> 

### Interfaces

#### [IStateStore](istate_store)
Interface for state storages that are used to store and retrieve transaction states.

<br>

### Classes

#### [DefaultStateStoreFactory](default_state_store_factory)
Creates [IStateStore](istate_store) components by their descriptors.

#### [MemoryStateStore](memory_state_store)
State store that keeps states in the process memory.

#### [NullStateStore](null_state_store)
Dummy state store implementation that doesn't do anything.

#### [StateEntry](state_entry)
Data object to store state values with their keys used by [MemoryStateStore](memory_state_store)

#### [StateValue](state_value)
A data object that holds a retrieved state value with its key.


</div>
