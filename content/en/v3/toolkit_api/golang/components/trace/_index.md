---
type: docs
title: "Trace"
linkTitle: "Trace"
no_list: true
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    This package provides interfaces and classes used to create different types of tracers. The main tools available from this package are a tracer factory and a tracer composite class. The first allows you to create a factory for tracers, and the second to combine different tracers into one. Additionally, it provides tracers that allow yuor to store their contents in memory and logs. 
---
---

<div class="module-body"> 

### Interfaces

#### [ITracer](itracer)
Interface for tracer components that capture operation traces.

<br>

### Types

#### [CachedTracer](cached_tracer)
Abstract tracer that caches recorded traces in memory and periodically dumps them.

#### [CompositeTracer](composite_tracer)
Aggregates all tracers from component references under a single component.

#### [DefaultTracerFactory](default_tracer_factory)
Creates [ITracer](itracer) components by their descriptors.

#### [LogTracer](log_tracer)
Tracer that dumps recorded traces to logger.

#### [NullTracer](null_tracer)
Dummy implementation of tracer that doesn't do anything.

#### [OperationTrace](operation_trace)
Data object to store captured operation traces.

#### [TraceTiming](trace_timing)
Timing object returned by [ITracer.BeginTrace](itracer/#beginTrace) to end timing
of execution block and record the associated trace.


</div>
