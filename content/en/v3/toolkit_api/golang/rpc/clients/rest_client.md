---
type: docs
title: "RestClient"
linkTitle: "RestClient"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-rpc-gox"
description: >
    Abstract client that calls remote endpoints using the HTTP/REST protocol.
---

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
    - **correlationId**: place for adding correalationId, query - in query string, headers - in headers, both - in query and headers (default: query)


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve a connection


### Constructors

#### NewRestClient
NewRestClient creates new instance of RestClient

> NewRestClient() [*RestClient]()


### Fields

<span class="hide-title-link">

#### Counters
A list of counters.
> **Counters**: [ICounters]ICounters](../../../components/count/icounters)[]

#### Client
The HTTP client.
> **Client**: *http.Client

#### Uri
The remote service uri which is defined on openning.
> **Uri**: string

#### Timeout
The invocation timeout in milliseconds.
> **Timeout**: int

#### ConnectionResolver
The connection resolver.
> **ConnectionResolver**: [HttpConnectionResolver](../../connect/http_connection_resolver)

#### Logger
The logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### Counters
The performance counters.
> **Counters**: [*CompositeCounters](../../../components/count/composite_counters)

#### Tracer
> **Tracer**: [*CompositeTracer](../../../components/trace/composite_tracer)

#### Options
The configuration options.
> **Options**: [ConfigParams](../../../commons/config/config_params)

#### BaseRoute
The base route.
> **BaseRoute**: string

#### Retries
The number of retries.
> **Retries**: int

#### Headers
The default headers to be added to every request.
> **Headers**: [StringValueMap](../../../commons/data/string_value_map)

#### ConnectTimeout
The connection timeout in milliseconds.
> **ConnectTimeout**: int

#### passCorrelationId
Add correlation id to headers

> **passCorrelationId**: string

</span>



### Methods

#### AddCorrelationId
Adds a correlation id (correlationId) to the invocation parameter map.

> (c [*RestClient]()) AddCorrelationId(params [*StringValueMap](../../../commons/data/string_value_map), correlationId string) [*StringValueMap](../../../commons/data/string_value_map)

- **params**: [*StringValueMap](../../../commons/data/string_value_map) - invocation parameters.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: [*StringValueMap](../../../commons/data/string_value_map) - invocation parameters with added correlation id.


#### AddFilterParams
Adds filter parameters (with the same name as they defined)
to the invocation parameter map.

> (c [*RestClient]()) AddFilterParams(params [*cdata.StringValueMap](../../../commons/data/string_value_map), filter [*cdata.FilterParams](../../../commons/data/filter_params)) [*cdata.StringValueMap](../../../commons/data/string_value_map)

- **params**: [*cdata.StringValueMap](../../../commons/data/string_value_map) -  invocation parameters.
- **filter**: [*cdata.FilterParams](../../../commons/data/filter_params) -  (optional) filter parameters
- **returns**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters with added filter parameters.


#### AddPagingParams
Adds paging parameters (skip, take, total) to invocation parameter map.

> (c [*RestClient]()) AddPagingParams(params [*cdata.StringValueMap](../../../commons/data/string_value_map), paging [*cdata.PagingParams](../../../commons/data/paging_params)) [*cdata.StringValueMap](../../../commons/data/string_value_map)

- **params**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters.
- **paging**: [*cdata.PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **returns**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - invocation parameters with added paging parameters.



#### Call
Calls a remote method via HTTP/REST protocol.

> (c [*RestClient]()) Call(ctx context.Context, method string, route string, correlationId string, params [*cdata.StringValueMap](../../../commons/data/string_value_map), data interface{}) (result interface{}, err error)

- **ctx**: context.Context - operation context.
- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - a command route. Base route will be added to this route
- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **params**: [*cdata.StringValueMap](../../../commons/data/string_value_map) - (optional) query parameters.
- **data**: interface{} - (optional) body object.
- **returns**: (result interface{}, err error) - result object


#### Close
Closes a component and frees used resources.

> (c [*RestClient]()) ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **returns**: error - returns error if not closed


#### Configure
Configures a component by passing configuration parameters.

> (c [*RestClient]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Instrument
Adds instrumentation to log calls and measures call time.
It returns a Timing object that is used to end the time measurement.

> (c [*RestClient]()) Instrument(ctx context.Context, correlationId string, name string) [*service.InstrumentTiming](../../services/instrument_timing)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **name**: string - method name.
- **returns**: [*service.InstrumentTiming](../../services/instrument_timing) - Instrument Timing object used to end the time measurement.


#### IsOpen
Checks if the component is open.

> (c [*RestClient]()) IsOpen() bool

- **returns**: bool - True if the component is open and False otherwise.


#### Open
Opens the component.

> (c [*RestClient]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **returns**: error - returns error if not opened


#### SetReferences
Sets references to dependent components.

> (c [*RestClient]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operations context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references used to locate the component dependencies.

### Examples

```go
type MyRestClient struct {
	*RestClient
}
...
func (c *MyRestClient) GetData(ctx context.Context, correlationId string, id string) (result *tdata.MyDataPage[MyData], err error) {
	timind := c.Instrument(ctx, correlationId, "myData.get_page_by_filter")
	defer timing.EndTiming(ctx)

	params := cdata.NewEmptyStringValueMap()
	params.Set("id", id)
	response, calErr := c.Call(MyDataPageType, "get", "/data", correlationId, params, nil)
	if calErr != nil {
		return nil, calErr
	}

	return return clients.HandleHttpResponse[*tdata.MyDataPage[MyData]](response, correlationId)
}

client := NewMyRestClient()
client.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))

result, err := client.GetData(context.Background(), "123", "1")
...
```

### See also
- #### [RestService](../../services/rest_service)
- #### [CommandableHttpService](../../services/commandable_http_service)
