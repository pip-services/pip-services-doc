---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Lock used to synchronize the execution of a process using shared memory.

    
---

**Implements:** [Lock](../lock)

### Description

The MemoryLock class is used to synchronize the execution of a process using shared memory.

Important points

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### release_lock
Releases previously acquired lock by its key.

> release_lock(correlation_id: Optional[str], key: str)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique lock key to release.


#### try_acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> try_acquire_lock(correlation_id: Optional[str], key: str, ttl: int): bool

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result

### Examples

```python
lock = MemoryLock()
lock.acquire_lock("123", "key1", None, None)
# processing
lock.release_lock("123", "key1")

```

### See also
- #### [ILock](../ilock)
- #### [Lock](../lock)
