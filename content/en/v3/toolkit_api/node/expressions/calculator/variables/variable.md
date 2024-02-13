---
type: docs
title: "Variable"
linkTitle: "Variable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a variable holder object.
---

**Implements**: [IVariable](../ivariable)

### Description

The Variable class allows you to implement a variable holder object.

### Constructors

> `public` constructor(name: string, value?: [Variant](../../../variants/variant)) 

- **name**: string - name of this variable.
- **value**: [Variant](../../../variants/variant) - value of this variable.


### Properties

#### name
Name of the variable
> `public` name(): string

- **returns**: string - variable name.

#### value
Gets the variable's value.
> `public` value(): [Variant](../../../variants/variant)

- **returns**: [Variant](../../../variants/variant) - variable value.

Sets the variable's value.

> `public` value(value: [Variant](../../../variants/variant))

- **value**: [Variant](../../../variants/variant) - variable's value.
