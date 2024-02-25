---
type: docs
title: "FileConfigReader"
linkTitle: "FileConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Config reader that reads a configuration from a file.
    
---

**Extends**: [ConfigReader](../config_reader)

### Description

The FileConfigReader class allows you to create a config reader that reads a configuration from a file.

#### Configuration parameters

- **path**: path to configuration file
- **parameters**: this entire section is used as template parameters
- ...

### Constructors
Creates a new instance of the config reader.

> `public` FileConfigReader(String path)

- **path**: String - (optional) a path to configuration file.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### getPath
Gets the path to configuration file.

> String getPath()

- **returns**: string - path to configuration file.


#### setPath
Sets the path to configuration file.

> void setPath(String value)

- **path**: String - new path to configuration file.


### See also
- #### [IConfigReader](../iconfig_reader)
- #### [ConfigReader](../config_reader)
