---
type: docs
title: "HttpEndpoint"
linkTitle: "HttpEndpoint"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Used for creating HTTP endpoints. 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The HttpEndpoint class allows you to create HTTP endpoints. 

**Important points**

- An endpoint is a URL, at which a given service can be accessed by a client. 

#### Configuration parameters
Parameters to pass to the [configure](#configure) method for component configuration:

- **cors_headers**: a comma-separated list of allowed CORS headers
- **cors_origins**: a comma-separated list of allowed CORS origins
- **connection(s)**: the connection resolver's connections:
    - **"connection.discovery_key"**: key to use for connection resolving in a discovery service;
    - **"connection.protocol"**: connection's protocol;
    - **"connection.host"**: target host;
    - **"connection.port"**: target port;
    - **"connection.uri"**: target URI.
- **credential**: the HTTPS credentials:
    - **"credential.ssl_key_file"**: SSL private key in PEM
    - **"credential.ssl_crt_file"**: SSL certificate in PEM
    - **"credential.ssl_ca_file"**: certificate authorities (root cerfiticates) in PEM


#### References
A logger, counters, and a connection resolver can be referenced by passing the 
following references to the object's [set_references](#setreferences) method:

- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connections


### Instance methods

#### close
Closes this endpoint and the REST server (service) that was opened earlier.

`@override`
> Future close(String? correlationId)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures this HttpEndpoint using the given configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters, containing a "connection(s)" section.

#### getServer
Gets an HTTP server instance.

> HttpServer? getServer()

- **returns**: HttpServer? - an HTTP server instance of `null` if endpoint is closed.

#### getCorrelationId
Returns correlationId from request

> String? getCorrelationId(shelf.Request req)

- **req**: shelf.Request - http request
- **returns**: String? - Returns correlationId from request


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - whether or not this endpoint is open with an actively listening REST server.


#### register
Registers a registerable object for dynamic endpoint discovery.

> void register([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - registration to add.


#### registerInterceptor
Registers a middleware action for the given route.

> void registerInterceptor(String? route, Function(shelf.Request req) action)

- **route**: String? - route to register in this object's REST server (service).
- **action**: Function(shelf.Request req) - middleware action to perform at the given route.


#### registerRoute
Registers an action in this objects REST server (service) by the given method and route.

> void registerRoute(String method, String route, [Schema?](../../../commons/validate/schema) schema, FutureOr\<shelf.Response\> Function(shelf.Request req) action)

void registerRoute(String method, String route, [Schema?](../../../commons/validate/schema) schema, action(angel.RequestContext req, angel.ResponseContext res))

- **method**: String - HTTP method of the route.
- **route**: String - route to register in this object's REST server (service).
- **schema**: [Schema?](../../../commons/validate/schema) - schema to use for parameter validation.
- **action**: FutureOr\<shelf.Response\> Function(shelf.Request req) - action to perform at the given route.


#### registerRouteWithAuth
Registers an action with authorization in this objects REST server (service)
by the given method and route.

> void registerRouteWithAuth(String method, String route, [Schema](../../../commons/validate/schema) schema, Future Function(shelf.Request req, Function next)? authorize, Future Function(shelf.Request req) action)

- **method**: String - HTTP method of the route.
- **route**: String - route to register in this object's REST server (service).
- **schema**: [Schema](../../../commons/validate/schema) - schema to use for parameter validation.
- **authorize**: Future Function(shelf.Request req, Function next)? - authorization interceptor
- **action**: Future Function(shelf.Request req) - action to perform at the given route.


#### setReferences
Sets references to this endpoint's logger, counters, and connection resolver.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - IReferences object, containing references to a logger, counters, and a connection resolver.


#### unregister
Unregisters a registerable object, so that it is no longer used in dynamic endpoint discovery.

> void unregister([IRegisterable](../iregisterable) registration)

- **registration**: [IRegisterable](../iregisterable) - registration to remove.

### Examples

```dart
void MyMethod(ConfigParams _config, IReferences _references) {
    var endpoint = HttpEndpoint();
    if (config != null)
        endpoint.configure(_config);
    if (references)
        endpoint.setReferences(references);
    ...
    _endpoint.open(correlationId)
    _opened = true;
    ...
}
```

### See also
- #### [IConfigurable](../../../commons/config/iconfigurable)
- #### [IReferenceable](../../../commons/refer/ireferenceable)
- #### [IOpenable](../../../commons/run/iopenable)
