---
type: docs
title: "ICommandable"
linkTitle: "ICommandable"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: > 
    An interface used to expose the functionality of commandable objects as commands and events grouped into a [CommandSet](../command_set) object.
    
---

### Description

The ICommandable interface allows you to expose the functionality of commandable objects as commands and events grouped into a [CommandSet](../command_set) object.

Important points

- This interface is typically implemented by controllers and is used to auto generate external interfaces. 

### Methods

#### GetCommandSet
Gets a command set with all supported commands and events.

> GetCommandSet() [*CommandSet](../command_set)

- **returns**: [CommandSet](../command_set) - command set with commands and events.

### Examples

```go
type MyDataController {
 _commandSet  *CommandSet;
}

func (dc *MyDataController) GetCommandSet() *CommandSet {
  if (dc._commandSet == nil)
    dc._commandSet = NewDataCommandSet();
  return dc._commandSet;
}
 

```

### See also
- #### [CommandSet](../command_set)
