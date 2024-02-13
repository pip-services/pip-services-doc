---
type: docs
title: "CommandableGrpcClient"
linkTitle: "CommandableGrpcClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-grpc-python"
description: > 
    Abstract client that calls a commandable GRPC service.

---

**Implements:** [GrpcClient](../grpc_client)

### Description

The CommandableGrpcClient class allows you to create clients that call a commandable GRPC service.

Important points

- Commandable services are generated automatically for [ICommandable](../../../commons/commands/icommandable). Each command is exposed as an Invoke method that receives all parameters as args.

#### Configuration parameters

- **connection(s)**:   
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)   
    - **protocol**: connection protocol: http or https   
    - **host**: host name or IP address   
    - **port**: port number   
    - **uri**: resource URI or connection string with all parameters in it   
- **options**:   
    - **retries**: number of retries (default: 3)   
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)   
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)   

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements and specify the counter's source.

### Constructors

Creates a new instance of the client.

> CommandableGrpcClient(name: str)

- **name**: str - service name.


### Fields

<span class="hide-title-link">

#### _name
A service name.
> **_name**: str

</span>


### Instance methods

#### call_command
Calls a remote method via the GRPC commadable protocol.
The call is made via Invoke method and all parameters are sent in args object.
The complete route to remote method is defined as serviceName + '.' + name.

> call_command(name: str, correlation_id: Optional[str], params: dict): Any

- **name**: str - name of the command to call.
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **params**: dict - command parameters.
- **returns**: Any - feature that receives the result



### Examples

```python
class MyCommandableGrpcClient(CommandableGrpcClient, IMyClient):
     def __init__(self):
        super().__init__('my_data')
    ...
    def get_data(self, correlation_id, id):

        return self.call_command(
                    "get_data",
                    correlation_id,
                    { 'id': id }
                )

client = new MyCommandableGrpcClient()
client.configure(ConfigParams.from_tuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
))
result = client.get_data("123", "1")
```
