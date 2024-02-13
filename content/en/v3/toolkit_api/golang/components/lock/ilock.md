---
type: docs
title: "ILock"
linkTitle: "ILock"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Interface for locks used to synchronize work or parallel processes and to prevent collisions.

    
---

### Description

The ILock interface provides the methods to create locks used to synchronize work or parallel processes and to prevent collisions.

Important points

- The interface allows to manage multiple locks identified by unique keys. 

### Methods

#### AcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> AcquireLock(ctx context.Context, correlationId string, key string, ttl int64, timeout int64) error

- **ctx**: context.Context - operation context.
- **correlationId**: string -(optional) transaction id used to trace execution through the call chain. 
- **key**: string - unique lock key to acquire.
- **ttl**: int64 - lock timeout (time to live) in milliseconds.
- **timeout**: int64 - lock acquisition timeout.
- **returns**: error - returns error if not acquired



#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> TryAcquireLock(ctx context.Context, correlationId string, key string, ttl int64) (bool, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string -(optional) transaction id used to trace execution through the call chain. 
- **key**: string - unique lock key to acquire.
- **ttl**: int64 - lock timeout (time to live) in milliseconds.
- **return**: (bool, error) - lock result


#### ReleaseLock
Releases prevously acquired lock by its key.

> ReleaseLock(ctx context.Context, correlationId string, key string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.
- **returns**: error - returns error if not released
