---
type: docs
title: "YamlConfigReader"
linkTitle: "YamlConfigReader"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Config reader that reads configuration from YAML file.
---

**Implements**: [FileConfigReader](../file_config_reader)

### Description

The YamlConfigReader allows you to create a config reader that reads a configuration from a YAML file.

#### Configuration parameters

- **path**: path to the configuration file
- **parameters**: this entire section is used as template parameters
- ...


### Constructors

#### NewYamlConfigReader
Creates a new instance of the config reader.

> NewYamlConfigReader(path string) [*YamlConfigReader]()

- **path**: string - (optional) path to the configuration file.

#### NewEmptyYamlConfigReader
Creates a new instance of the config reader.

> NewEmptyYamlConfigReader() [*YamlConfigReader]()


### Methods


#### ReadConfig
Reads a configuration and parameterizes it with given values.

> (c [*YamlConfigReader]()) ReadConfig(ctx context.Context, correlationId string, parameters [*cconfig.ConfigParams](../../../commons/config/config_params)) (result [*cconfig.ConfigParams](../../../commons/config/config_params), err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [*cconfig.ConfigParams](../../../commons/config/config_params) - values of the configuration parameters or nil to skip parameterization.
- **returns**: (result [*cconfig.ConfigParams](../../../commons/config/config_params), err error) - ConfigParams configuration.


#### ReadObject
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> (c [*YamlConfigReader]()) ReadObject(ctx context.Context, correlationId string, parameters [*cconfig.ConfigParams](../../../commons/config/config_params)) (any, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **parameters**: [*cconfig.ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: (any, error) - YAML object with a configuration.

#### ReadYamlConfig
Reads a configuration from a file, parameterizes it with given values, and returns a new ConfigParams object.

> ReadYamlConfig(ctx context.Context, correlationId string, path string, parameters [*cconfig.ConfigParams](../../../commons/config/config_params)) ([*cconfig.ConfigParams](../../../commons/config/config_params), error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace the execution through the call chain.
- **path**: string - path to a configuration file.
- **parameters**: [*cconfig.ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: ([*cconfig.ConfigParams](../../../commons/config/config_params), error) - ConfigParams configuration.


#### ReadYamlObject
Reads a configuration file, parameterizes its content and converts it into a YAML object.

> ReadYamlObject(ctx context.Context, correlationId string, path string, parameters [*cconfig.ConfigParams](../../../commons/config/config_params)) (any, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace the execution through the call chain.
- **path**: string - path to configuration file.
- **parameters**: [*cconfig.ConfigParams](../../../commons/config/config_params) - values of the configuration parameters.
- **returns**: (any, error) - YAML object containing a configuration.

### Examples

```yaml
key1: "{{KEY1_VALUE}}"
key2: "{{KEY2_VALUE}}"
```
    
        
```go
configReader := NewYamlConfigReader("config.yml")
parameters := NewConfigParamsFromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
res, err := configReader.ReadConfig(context.Background(), "123", parameters) // Result: key1=123;key2=ABC
```

### See also
- #### [IConfigReader](../iconfig_reader)
- #### [FileConfigReader](../file_config_reader)
