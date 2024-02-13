---
type: docs
title: "RestClient"
linkTitle: "RestClient"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Abstract client that calls remote endpoints using the HTTP/REST protocol.
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The RestClient class allows you to create clients that call remote endpoints using the HTTP/REST protocol.

#### Configuration parameters

- **base_route**: base route for a remote URI
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **options**:
    - **retries**: number of retries (default: 3)
    - **connect_timeout**: connection timeout in milliseconds (default: 10 sec)
    - **timeout**: invocation timeout in milliseconds (default: 10 sec)
    - **correlation_id**: place for adding correalationId, query - in query string, headers - in headers, both - in query and headers (default: query)


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve a connection





### Fields

<span class="hide-title-link">

#### _counters
A list of counters.
> **_counters**: List[[ICounters]ICounters](../../../components/count/icounters)] = []

#### _client
The HTTP client.
> **_client**: Any

#### _uri
The remote service uri which is defined on openning.
> **_uri**: str

#### _timeout
The invocation timeout in milliseconds.
> **_timeout** = 1000

#### _connection_resolver
The connection resolver.
> **_connection_resolver**: [HttpConnectionResolver](../../connect/http_connection_resolver) = HttpConnectionResolver()

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
The performance counters.
> **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _tracer
The tracer.
> **_tracer**: [CompositeTracer](../../../components/trace/composite_tracer) = CompositeTracer()

#### _options
The configuration options.
> **_options**: [ConfigParams](../../../commons/config/config_params) = ConfigParams()

#### _base_route
The base route.
> **_base_route**: str

#### _retries
The number of retries.
> **_retries** = 1

#### _headers
The default headers to be added to every request.
> **_headers**: dict = {}

#### _connect_timeout
The connection timeout in milliseconds.
> **_connect_timeout** = 1000

#### _correlation_id_location
Defines where to add the correlation id.
> **_correlation_id_location**: str = "query"

</span>



### Instance methods

#### add_correlation_id
Adds a correlation id (correlation_id) to the invocation parameter map.

> add_correlation_id(params: Any = None, correlation_id: Optional[str] = None): Any

- **params**: Any - invocation parameters.
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **returns**: Any - invocation parameters with added correlation id.


#### add_filter_params
Adds filter parameters (with the same name as they defined)
to the invocation parameter map.

> add_filter_params(params: Any = None, filters: Any = None): dict

- **params**: Any -  invocation parameters.
- **filters**: Any -  (optional) filter parameters
- **returns**: dict - invocation parameters with added filter parameters.


#### add_paging_params
Adds paging parameters (skip, take, total) to invocation parameter map.

> add_paging_params(params: Any = None, paging: Any = None): dict

- **params**: Any - invocation parameters.
- **paging**: Any - (optional) paging parameters
- **returns**: dict - invocation parameters with added paging parameters.



#### _call
Calls a remote method via HTTP/REST protocol.

> call(method: str, route: str, correlation_id: Optional[str] = None, params: Any = None, data: Any = None): Any
- **method**: str - HTTP method: "get", "head", "post", "put", "delete"
- **route**: str - a command route. Base route will be added to this route
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **params**: Any - (optional) query parameters.
- **data**: Any - (optional) body object.
- **returns**: Any - result object


#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> _instrument(correlation_id: Optional[str], name: str): [InstrumentTiming](../../services/instrument_timing)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **name**: str - method name.
- **returns**: [InstrumentTiming](../../services/instrument_timing) - InstrumentTiming object used to end the time measurement.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - True if the component is open and False otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component dependencies.

### Examples

```python
class MyRestClient(RestClient, IMyClient):
    def get_data(self, correlation_id, id):
        timing = self.instrument(correlationId, 'myclient.get_data')
        result = self._controller.get_data(correlationId, id)
        timing.end_timing()
        return result
        
    # ...

client = MyRestClient()

client.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                         "connection.host", "localhost",
                                         "connection.port", 8080))
data = client.getData("123", "1")
# ...
```

### See also
- #### [RestService](../../services/rest_service)
- #### [CommandableHttpService](../../services/commandable_http_service)
