---
type: docs
title: "GrpcEndpoint"
linkTitle: "GrpcEndpoint"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-grpc-gox"
description: > 
    Used for creating GRPC endpoints. 

---


### Description
The GrpcEndpoint class allows you to create GRPC endpoints. An endpoint is a URL, at which a given service can be accessed by a client.

#### Configuration parameters
Parameters to pass to the :func:`configure` method for component configuration:

**connection(s)**: the connection resolver's connections:
- **"connection.discovery_key"**: key used for connection resolving in a discovery service;
- **"connection.protocol"**: connection's protocol;
- **"connection.host"**: target host;
- **"connection.port"**: target port;
- **"connection.uri"**: target URI.
**credential**: HTTPS credentials:
- **"credential.ssl_key_file"**: SSL private key in PEM
- **"credential.ssl_crt_file"**: SSL certificate in PEM
- **"credential.ssl_ca_file"**: certificate authorities (root cerfiticates) in PEM

#### References
A logger, counters, and a connection resolver can be referenced by passing the
following references to the object's [set_references](#set_references)

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurementsand as specified by the counter's source.

### Constructors

#### NewGrpcEndpoint
NewGrpcEndpoint method are creates new instance of GrpcEndpoint

> NewGrpcEndpoint() [*GrpcEndpoint]()

### Methods

#### AddInterceptors
AddInterceptors method are registers a middleware for methods in GRPC endpoint.

[See interceptor](https://github.com/grpc/grpc-go/tree/master/examples/features/interceptor)
> (c [*GrpcEndpoint]()) AddInterceptors(interceptors ...grpc.ServerOption)

- **interceptors**: ...grpc.ServerOption - interceptor functions (Stream or Unary use grpc.UnaryInterceptor() or grpc.StreamInterceptor() for inflate in grpc.ServerOption)

#### Close
Closes this endpoint and the GRPC server (service) that was opened earlier.

> (c [*GrpcEndpoint]()) Close(ctx context.Context, correlationId string) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### Configure
Configures this HttpEndpoint using the given configuration parameters.

> (c [*GrpcEndpoint]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### IsOpen
Checks if the component is open.

> (c [*GrpcEndpoint]()) IsOpen() bool

- **returns**: bool - whether or not this endpoint is open with an actively listening GRPC server.


#### Open
Opens a connection using the parameters resolved by the referenced connection resolver and creates a GRPC server (service) using the set options and parameters.

> (c [*GrpcEndpoint]()) Open(ctx context.Context, correlationId string) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### Register
Registers a registerable object for dynamic endpoint discovery.

> (c [*GrpcEndpoint]()) Register(registration [IRegisterable](../iregisterable))

- **registration**: [IRegisterable](../iregisterable) - registration to be added.


#### RegisterCommandableMethod
Registers a commandable method in the object's GRPC server (service) by the given name.

> (c [*GrpcEndpoint]()) RegisterCommandableMethod(method string, schema [*cvalid.Schema](../../../commons/validate/schema), action func(ctx context.Context, correlationId string, args [*crun.Parameters](../../../commons/run/parameters)) (result any, err error))

- **method**: string - GRPC method name.
- **schema**: [*cvalid.Schema](../../../commons/validate/schema) - schema to use for parameter validation.
- **action**: func(correlationId string, args [*crun.Parameters](../../../commons/run/parameters)) (result any, err error) - action to perform at the given route.

#### RegisterService
Registers a service with related implementation

> (c [*GrpcEndpoint]()) RegisterService(sd *grpc.ServiceDesc, implementation any)

- sd: *grpc.ServiceDesc - a GRPC service object.
- implementation: any - the service implementation methods.

#### SetReferences
Sets references to this endpoint's logger, counters, and connection resolver.

> (c [*GrpcEndpoint]()) SetReferences(references [cref.IReferences](../../../commons/refer/ireferences))
- **references**: [cref.IReferences](../../../commons/refer/ireferences) - an IReferences object, containing references to a logger, counters, and a connection resolver.

#### Unregister
Unregisters a registerable object, so that it is no longer used in dynamic 

> (c [*GrpcEndpoint]()) Unregister(registration [IRegisterable](../iregisterable))

- **registration**: [IRegisterable](../iregisterable) - the registration to remove.


### Examples

```go
func (c* Endpoint) MyMethod(ctx context.Context, config ConfigParams, references IReferences) {
    endpoint := NewGrpcEndpoint();
    if c.config != nil {
        endpoint.Configure(ctx, c._config);
    }
    if c.references != nil {
        endpoint.SetReferences(ctx, c.references
    }
    ...

    err := c.endpoint.Open(ctx, correlationId)
    if err != nil {
        // error ocured
        return err
    }
    c.Opened = true
    return nil
    ...
}
```


