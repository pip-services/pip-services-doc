---
type: docs
title: "RestService"
linkTitle: "RestService"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Abstract service that receives remove calls via the HTTP/REST protocol.
---

**Inherits:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IRegisterable](../iregisterable)


### Description

The RestService class allows you to create REST services that receive remote calls via the HTTP/REST protocol.


#### Configuration parameters

- **base_route**: base route for remote URI
- **dependencies**:
    - **endpoint**: override for HTTP Endpoint dependency
    - **controller**: override for Controller dependency
- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **protocol**: connection protocol (http or https)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential**: the HTTPS credentials:
    - **ssl_key_file**: SSL private key in PEM
    - **ssl_crt_file**: SSL certificate in PEM
    - **ssl_ca_file**: certificate authorities (root cerfiticates) in PEM


#### References

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:traces:\*:\*:1.0** - (optional) [ITracer](../../../components/trace/itracer) components to record traces
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections
- **\*:endpoint:http:\*:1.0** - (optional) [HttpEndpoint](../http_endpoint) reference



### Fields

<span class="hide-title-link">

#### _dependencyResolver
Dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger) = CompositeLogger()

#### _counters
Performance counters.
> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters) = CompositeCounters()

#### _debug
Boolean that set debugging to true or false.
> `protected` **_debug**: boolean = false

#### _baseRoute
Base route.
> `protected` **_baseRoute**: string

#### _endpoint
HTTP endpoint that exposes this service.
> `protected` **_endpoint**: [HttpEndpoint](../http_endpoint)

#### _config
Service's configuration paramters.
> `protected` **_config**: [ConfigParams](../../../commons/config/config_params)

#### _swaggerService
Swagger service.
> `protected` **_swaggerService**: [ISwaggerService](../iswagger_service)

#### _swaggerEnable
Boolean that defines if the Swagger sevice is enabled or not.
> `protected` **_swaggerEnable**: bool = false

#### _swaggerRoute
Swagger's route.
> `protected` **_swaggerRoute**: string = 'swagger'

</span>


### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.


#### GetCorrelationId
Returns correlationId from a request

> `protected` string GetCorrelationId(HttpRequest request)

- **request**: HttpRequest - HTTP request
- **returns**: string - correlation id from request.

#### GetFilterParams
TODO: add description
> `protected` [FilterParams](../../../commons/data/filter_params) GetFilterParams(HttpRequest request)

- **request**: HttpRequest - TODO: add description
- **returns**: [FilterParams](../../../commons/data/filter_params) - TODO: add description

#### GetSortParams
TODO: add description
> `protected` [SortParams](../../../commons/data/sort_params) GetSortParams(HttpRequest request)

- **request**: HttpRequest - TODO: add description
- **returns**: [SortParams](../../../commons/data/sort_params) - TODO: add description

#### GetParameters
TODO: add description
> `protected` [RestOperationParameters](../rest_operation_parameters) GetParameters(HttpRequest request)

- **request**: HttpRequest - TODO: add description
- **returns**: [RestOperationParameters](../rest_operation_parameters) - TODO: add description

#### GetContextItem
TODO: add description
> `public static` T GetContextItem\<T\>(HttpRequest request, string name)

- **request**: HttpRequest - TODO: add description
- **name**: string - TODO: add description

#### Instrument
Adds instrumentation to log calls and measure call time.
It returns a Timing object that is used to end the time measurement.

> `protected` [CounterTiming](../../../components/count/counter_timing) Instrument(string correlationId, string methodName)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **methodName**: string - method name.
- **returns**: [CounterTiming](../../../components/count/counter_timing) - CounterTiming object to end the time measurement.

#### InstrumentError
Adds instrumentation to error handling.

> `protected` void InstrumentError(string correlationId, string methodName, Exception ex, bool rethrow = false)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **methodName**: string - method name.
- **ex**: Exception - Error that occured during the method call
- **rethrow**: bool - True to throw the exception


#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### OpenAsync
Opens the component.

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Register
Registers all service routes in an HTTP endpoint.

This method is called by the service and must be overriden
in child classes.

> `public virtual` void Register()


#### RegisterInterceptor
Registers a middleware for a given route in an HTTP endpoint.

> `public` void RegisterInterceptor(string route, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\>, Task\> action)

- **route**: string - command route. Base route will be added to this route
- **action**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\> - action function that is called when the middleware is invoked.


#### RegisterOpenApiSpec
Registers the open api spec.

> `protected virtual` void RegisterOpenApiSpec(string content)

- **content**: string - response header content


#### RegisterOpenApiSpecFromFile
Registers the open api spec from a file.

> `protected virtual` void RegisterOpenApiSpecFromFile(string path)

- **path**: string - path to the file

#### RegisterOpenApiSpecFromResource
Registers the open api spec from a resource.

> `protected virtual` void RegisterOpenApiSpecFromResource(string name)

- **name**: string - resource name.

#### RegisterOpenApiSpecFromMetadata
Registers the open api spec from metadata.

> `protected virtual` void RegisterOpenApiSpecFromMetadata()



#### RegisterRoute
Registers a route in an HTTP endpoint.

> `protected virtual` void RegisterRoute(string method, string route, Func\<HttpRequest, HttpResponse, RouteData, Task\> action)

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. base route will be added to this route
- **action**: Func\<HttpRequest, HttpResponse, RouteData, Task\> - action function that is called when an operation is invoked.


#### RegisterRouteWithAuth
Registers a route with authorization in an HTTP endpoint.

> `protected virtual` void RegisterRouteWithAuth(string method, string route, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> autorize, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\> action)

- **method**: string - HTTP method: "get", "head", "post", "put", "delete"
- **route**: string - command route. base route will be added to this route
- **authorize**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - authorization interceptor
- **action**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\> - action function that is called when an operation is invoked.


#### RegisterRouteWithMetadata
TODO: add description

> `protected virtual` void RegisterRouteWithMetadata(string method, string route, Func\<HttpRequest, HttpResponse, RouteData, Task\> action, [RestRouteMetadata](../rest_route_metadata) metadata)

- **method**: string - TODO: add description
- **action**: Func\<HttpRequest, HttpResponse, RouteData, Task\> - TODO: add description
- **metadata**: [RestRouteMetadata](../rest_route_metadata) - TODO: add description


#### RegisterRouteWithAuthAndMetadata
TODO: add description

> `protected virtual` void RegisterRouteWithAuthAndMetadata(string method, string route, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> autorize, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\> action, [RestRouteMetadata](../rest_route_metadata) metadata)

- **method**: string - TODO: add description
- **route**: string - TODO: add description
- **autorize**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - TODO: add description
- **action**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\> - TODO: add description
- **metadata**: [RestRouteMetadata](../rest_route_metadata) - TODO: add description


#### SendCreatedResult
Creates a callback function that sends a newly created object as JSON. The callack function can be called directly or passed as a parameter to business logic components.

If the object is not null, it returns 200 status code. For null results it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.

> `protected` Task SendCreatedResultAsync(HttpResponse response, object result)

- **res**: HttpResponse - HTTP response
- **result**: object - execution result


#### SendDeletedAsync
Creates a callback function that sends a deleted object as JSON.
That callack function can be called directly or passed
as a parameter to business logic components.

If object is not null, it returns 200 status code.
For null results it returns 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.


> `protected` Task SendDeletedAsync(HttpResponse response, object result)

- **response**: HttpResponse - HTTP response
- **result**: object - body object to result.


#### SendErrorAsync
Sends an error serialized as ErrorDescription object and the appropriate HTTP status code. If status code is not defined, it uses the 500 status code.


> `protected` Task SendErrorAsync(HttpResponse response, Exception ex)

- **response**: HttpResponse - HTTP response
- **ex**: Exception - error object to be sent.


#### SendResultAsync
Creates a callback function that sends a result as a JSON object. The callack function can be called directly or passed as a parameter to business logic components.

If the object is not null, it returns 200 status code. For null results, it returns
204 status code. If an error occurs, it sends ErrorDescription with the approproate status code.


> `protected` Task SendResultAsync(HttpResponse response, object result)

- **response**: HttpResponse - HTTP response
- **result**: object - body object to result.

#### SendEmptyResultAsync
Creates a callback function that sends an empty result with 204 status code.
If error occur it sends ErrorDescription with approproate status code.

> `protected` Task SendEmptyResultAsync(HttpResponse response)

- **response**: HttpResponse - a Http response

#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> `public virtual` void UnsetReferences()


### Examples

```cs
class MyRestService: RestService 
{
    private IMyController _controller;
    ...
    public MyRestService()
    {
        base();
        this._dependencyResolver.put(
        "controller", new Descriptor("mygroup", "controller", "*", "*", "1.0"));
    }
    
    public void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        this._controller = this._dependencyResolver.getRequired<IMyController>("controller");
    }
    
    public void register()
    {
        ...
    }
}

var service = new MyRestService();
service.Configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080 ));

service.SetReferences(References.fromTuples(
    new Descriptor("mygroup","controller","default","default","1.0"), controller ));

service.Open("123");
Console.Out.WriteLine("The REST service is running on port 8080");
```


### See also
- #### [RestClient](../../clients/rest_client)
