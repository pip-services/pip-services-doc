---
type: docs
title: "ContextInfo"
linkTitle: "ContextInfo"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Context information component that provides detailed information
    about an execution context.

   
---

### Description

The ContextInfo class allows you to create context information components that provide detailed information about execution contexts.

Important points

- Most often ContextInfo is used by logging and performance counters to identify the source of the collected logs and metrics.


#### Configuration parameters

- **name**: context's (container or process) name
- **description**: human-readable description of the context
- **properties**: entire section of additional descriptive properties
- **...**

### Constructors

#### NewContextInfo
Creates a new instance of this context info.

> NewContextInfo() [*ContextInfo]()


#### NewContextInfoFromConfig
Creates a new ContextInfo and sets its configuration parameters.

> NewContextInfoFromConfig(ctx context.Context, cfg [*config.ConfigParams](../../../commons/config/config_params)) [*ContextInfo]()

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters for the new ContextInfo.
- **returns**: [*ContextInfo]() - newly created ContextInfo


### Fields

<span class="hide-title-link">

#### ContextId
Gets and sets the unique context id. Usually it is the current host name.

> ContextId: string

#### Description
Gets and sets the human-readable description of the context.

> Description: string

#### Name
Gets and sets  the context's name.

> Name: string

#### Properties
Gets context's additional parameters.

> Properties: map[string]string

#### StartTime
Gets the context's start time.

> StartTime: time.Time

</span>


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*ContextInfo]()) Configure(ctx context.Context, cfg [*config.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **cfg**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


### Examples

```go
contextInfo := NewContextInfo();
contextInfo.Configure(context.Background(), NewConfigParamsFromTuples(
	ContextInfoParameterName, "MyMicroservice",
	ContextInfoParameterDescription, "My first microservice",
))

context.Name;     	// Result: "MyMicroservice"
context.ContextId;	// Possible result: "mylaptop"
context.StartTime;	// Possible result: 2018-01-01:22:12:23.45Z
```
