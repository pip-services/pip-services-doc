---
type: docs
title: "CommandableGrpcService"
linkTitle: "CommandableGrpcService"
gitUrl: "https://github.com/pip-services3-python/pip-services3-grpc-python"
description: > 
    Abstract service that receives commands via the GRPC protocol.

---

**Implements:** [GrpcService](../../services/grpc_service)

See also [CommandableGrpcClient](../../clients/commandable_grpc_client)


### Description

Abstract service that receives commands via GRPC protocol
to operations automatically generated for commands defined in [ICommandable](../../../commons/commands/icommandable).

Important points

- Each command is exposed as an Invoke method that receives a command name and parameters.
- Commandable services require only 3 lines of code to implement a robust external
GRPC-based remote interface.

#### Configuration parameters

- **dependencies**:    
    - **endpoint**: override for HTTP Endpoint dependency    
    - **controller**: override for Controller dependency    
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)    
    - **protocol**: connection protocol: http or https    
    - **host**: host name or IP address    
    - **port**: port number    
    - **uri**: resource URI or connection string with all parameters in it    

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements as specified by the counter's source.
- **\*:endpoint:grpc:*:1.0** - (optional) [GrpcEndpoint](../grpc_endpoint) reference

### Constructors

Creates a new instance of the service.

> CommandableGrpcService(name: str)

- **name**: str - service name.


### Instance methods

#### register
Registers all service routes in a gRPC endpoint.

> register()


#### _register_commandable_method
Registers a commandable method in this objects GRPC server (service) by the given name.,

> _register_commandable_method(method: str, schema: [Schema](../../../commons/validate/schema), action: Callable[[Optional[str], Any], Any])

- **method**: str - the GRPC method name.
- **schema**: [Schema](../../../commons/validate/schema) - the schema to use for parameter validation.
- **action**: Callable[[Optional[str], Any], Any] - the action to perform at the given route.



### Examples

```python
class MyCommandableGrpcService(CommandableGrpcService):
   def __init__(self):
        super().__init__('service name')

        self._dependency_resolver.put(
            "controller",
            Descriptor("mygroup","controller","*","*","1.0")
        )

service = MyCommandableGrpcService()
service.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))
service.set_references(References.from_tuples(
    Descriptor("mygroup","controller","default","default","1.0"), controller
))
service.open("123")
```


### See also
- #### [CommandableGrpcClient](../../clients/commandable_grpc_client)
- #### [GrpcService](../grpc_service)

 
