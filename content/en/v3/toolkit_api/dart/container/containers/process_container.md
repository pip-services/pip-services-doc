---
type: docs
title: "ProcessContainer"
linkTitle: "ProcessContainer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-container-dart"
description: >
    Inversion of control (IoC) container that runs as a system process.
   
---

**Extends:** [Container](../container)

### Description

The ProcessContainer class allows you to create an inversion of control (IoC) container that runs as a system process.

**Important points**

- It processes command line arguments and handles unhandled exceptions and Ctrl-C signal to shutdown the container properly.

### Command line arguments
- **--config / -c**            path to a JSON or YAML file with the container's configuration (default: "./config/config.yml")
- **--param / --params / -p**   configuration parameters
- **--help / -h**              prints the container usage help

### Constructors
Creates a new instance of the container.

> ProcessContainer([String? name, String? description])

- **name**: String? - (optional) container's name (accessible via [ContextInfo](../../../components/info/context_info))
- **description**: String? - (optional) container's description (accessible via [ContextInfo](../../../components/info/context_info))

### Fields

<span class="hide-title-link">

#### configPath
Path to the configuration file.
> **configPath**: String = "./config/config.yml"

</span>

### Instance methods

#### run
Runs the container by instantiating and running components inside the container.

It reads the container configuration and creates, configures, references and opens components.
On process exit; it closes, unreferences and destroys components, in order to shutdown properly.

> void run(List\<String\> args)

- **args**: List\<String\> - command line arguments

### Examples

```dart
var container = new ProcessContainer();
container.addFactory(MyComponentFactory());

container.run(process.args);
```

### See also
- #### [Container](../container)
