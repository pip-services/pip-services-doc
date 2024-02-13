---
type: docs
title: "IConfigReader"
linkTitle: "IConfigReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for configuration readers that retrieve a configuration from various sources
    and make it available for other components.
    
---

### Description

The IConfigReader interface is used in configuration readers that retrieve a configuration from various sources and make it availale for other components.

**Important points**

- Some IConfigReader implementations may support configuration parameterization.
- The parameterization allows you to use a configuration as a template and inject there dynamic values. The values may come from application command like arguments or environment variables.

### Instance methods

#### AddChangeListener
Adds a listener that will be notified when configuration is changed

> void AddChangeListener([INotifiable](../../../commons/run/inotifiable) listener)

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be added.


#### RemoveChangeListener
Remove a previously added change listener.

> void RemoveChangeListener(INotifiable listener)

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be removed.

#### ReadConfig
Reads a configuration and parameterizes it with given values.

> `public` [ConfigParams](../../../commons/config/config_params) ReadConfig(string correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters the configuration or null to skip parameterization.
- **returns**: [ConfigParams](../../../commons/config/config_params) - ConfigParams configuration.
