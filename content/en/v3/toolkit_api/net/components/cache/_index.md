---
type: docs
title: "Cache"
linkTitle: "Cache"
no_list: true
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    
    The Cache package contains interfaces and classes used to create caches.

---
---

<div class="module-body"> 

### Interfaces

#### [ICache](icache)
Interface for caches that are used to cache values to improve performance.

<br>

### Classes

#### [CacheEntry](cache_entry)
Data object to store cached values with their keys used by [MemoryCache](memory_cache).

#### [DefaultCacheFactory](default_cache_factory)
Creates [ICache](icache) components by their descriptors.

#### [MemoryCache](memory_cache)
Cache that stores values in the process memory.
Remember: This implementation is not suitable for synchronization of distributed processes.

#### [NullCache](null_cache)
Dummy cache implementation that doesn't do anything.

It can be used in testing or in situations when a cache is required
but shall be disabled.


</div>
