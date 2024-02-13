---
type: docs
title: "ConfigReader"
linkTitle: "ConfigReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Abstract config reader that supports configuration parameterization.
---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IConfigReader](../iconfig_reader)

### Description

The ConfigReader class allows you to create config readers that support configuration parameterization.

#### Configuration parameters
- **parameters**: this entire section is used as template parameters
    - **...**


### Instance methods

#### addChangeListener
Adds a listener that will be notified when configuration is changed

`@override`
> void addChangeListener([INotifiable](../../../commons/run/inotifiable) listener)

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be added.


#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### parameterize
Parameterized configuration template given as string with dynamic parameters.

> String? parameterize(String config, [ConfigParams](../../../commons/config/config_params) parameters)

- **config**: String - string with configuration template to be parameterized
- **parameters**: [ConfigParams](../../../commons/config/config_params) - dynamic parameters to inject into the template
- **returns**: String? - parameterized configuration string.


#### removeChangeListener
Remove a previously added change listener.

`@override`
> void removeChangeListener([INotifiable](../../../commons/run/inotifiable) listener)

- **listener:** [INotifiable](../../../commons/run/inotifiable) - a listener to be removed.


#### readConfig
Reads configuration and parameterizes it with given values.

`@override`
> Future<[ConfigParams](../../../commons/config/config_params)> readConfig(String? correlationId, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String? - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [ConfigParams](../../../commons/config/config_params) - values to parameters of the configuration or null to skip parameterization.
- **returns**: Future<[ConfigParams](../../../commons/config/config_params)> - ConfigParams configuration.


### See also
- #### [IConfigReader](../iconfig_reader/)
