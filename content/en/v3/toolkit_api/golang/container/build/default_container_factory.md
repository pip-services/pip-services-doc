---
type: docs
title: "DefaultContainerFactory"
linkTitle: "DefaultContainerFactory"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-container-gox"
description: >
    Creates default container components (loggers, counters, caches, locks, etc.) by their descriptors.
---

**Implements:** [CompositeFactory](../../../components/build/composite_factory)


### Description

The DefaultContainerFactory class allows you to create factories used to create default container components by their descriptors. The factories included are:

1. [DefaultInfoFactory](../../../components/info/default_info_factory)
2. [DefaultLoggerFactory](../../../components/log/default_logger_factory)
3. [DefaultCountersFactory](../../../components/count/default_counters_factory)
4. [DefaultConfigReaderFactory](../../../components/config/default_config_reader_factory)
5. [DefaultCacheFactory](../../../components/cache/default_cache_factory)
6. [DefaultCredentialStoreFactory](../../../components/auth/default_credential_store_factory)
7. [DefaultDiscoveryFactory](../../../components/connect/default_discovery_factory)
8. [DefaultTestFactory](../../../components/test/default_test_factory)
9. [DefaultTracerFactory](../../../components/trace/default_tracer_factory) 

### Constructors

#### NewDefaultContainerFactoryFromFactories
Creates a new instance of the factory and sets nested factories.

> NewDefaultContainerFactoryFromFactories(factories ...[IFactory](../../../components/build/ifactory)) [*CompositeFactory](../../../components/build/composite_factory)

- **factories**: ...[IFactory](../../../components/build/ifactory) - list of nested factories

#### NewDefaultContainerFactory
Create a new instance of the factory and sets nested factories.

> NewDefaultContainerFactory() [*CompositeFactory](../../../components/build/composite_factory)


### See also
- #### [Factory](../../../components/build/factory)

