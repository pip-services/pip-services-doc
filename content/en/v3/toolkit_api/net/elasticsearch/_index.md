---
type: docs
title: "ElasticSearch module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-elasticsearch-dotnet"
no_list: true
weight: 500
description: > 
    Contains packages used to create Elasticsearch components, including logging components with data storage on the Elasticsearch server.
---


### Packages

The module contains the following packages:

- [**Build**](build) - contains a factory for the construction of components
- [**Log**](log) - Logging components


### Use

Install the dotnet package as
```bash
dotnet add package PipServices3.ElasticSearch
```

Microservice components shall perform logging the usual way using the CompositeLogger component.
The CompositeLogger will get ElasticSearchLogger from references and will redirect log messages
there among other destinations.

```cs
using PipServices3.Commons.Refer;
using PipServices3.Commons.Config;
using PipServices3.Components.Log;

class MyComponent: IConfigurable, IReferenceable 
{
    CompositeLogger _logger = new CompositeLogger();
    public void Configure(ConfigParams config)
    {
        this._logger.Configure(config);
        ...
    }
    public void SetReferences(IReferences references)
    {
        this._logger.SetReferences(references);
        ...
    }
    public void MyMethod(String correlationId)
    {
        this._logger.Debug(correlationId, "Executed method mycomponent.mymethod");
        ...
    }
}
```

The configuration for your microservice that includes ElasticSearch logger may look the following way.

```yaml
...
{{#if ELASTICSEARCH_ENABLED}}
- descriptor: pip-services:logger:elasticsearch:default:1.0
  connection:
    uri: {{{ELASTICSEARCG_SERVICE_URI}}}
    host: {{{ELASTICSEARCH_SERVICE_HOST}}}{{#unless ELASTICSEARCH_SERVICE_HOST}}localhost{{/unless}}
    port: {{ELASTICSEARCG_SERVICE_PORT}}{{#unless ELASTICSEARCH_SERVICE_PORT}}9200{{/unless}}\ 
{{/if}}
...
```
