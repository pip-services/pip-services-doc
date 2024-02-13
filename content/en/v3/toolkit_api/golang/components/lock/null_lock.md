---
type: docs
title: "NullLock"
linkTitle: "NullLock"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Dummy lock implementation with no real effect.

   
---

**Implements:** [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

Important points

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Constructors

#### NewNullLock
Creates a new null lock

> NewNullLock() [*NullLock]()

### Methods

#### AcquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> (c [*NullLock]()) AcquireLock(ctx context.Context, correlationId string, key string, ttl int, timeout int) error

- **ctx**: context.Context - operation context.
- **correlationId**: string -(optional) transaction id used to trace execution through the call chain. 
- **key**: string - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **timeout**: int - lock acquisition timeout.
- **returns**: error - returns error if not acquired.


#### ReleaseLock
Releases a prevously acquired lock by its key.

> (c [*NullLock]()) ReleaseLock(ctx context.Context, correlationId string, key string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.
- **returns**: error - returns error if not released.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> (c [*NullLock]()) TryAcquireLock(ctx context.Context, correlationId string, key string, ttl int) (bool, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **returns**: (bool, error) - lock result


### See also
- #### [ILock](../ilock)
