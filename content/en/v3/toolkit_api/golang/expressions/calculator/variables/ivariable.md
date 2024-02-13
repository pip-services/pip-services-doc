---
type: docs
title: "IVariable"
linkTitle: "IVariable"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-expressions-gox"
description: > 
    Defines a variable interface.
---

### Description

The IVariable interface allows you to define a variable.


### Methods

#### Name
The variable name.
> Name() string
- **returns**: string - variable name.

#### Value
The variable value.
> Value() [*Variant](../../../variants/variant)

- **returns**: [*Variant](../../../variants/variant) - variable value

#### SetValue
Sets the variable value.
> SetValue(value [*Variant](../../../variants/variant))

- **value**: [*Variant](../../../variants/variant) - variable value.
