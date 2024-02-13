---
type: docs
title: "IFunction"
linkTitle: "IFunction"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-expressions-gox"
description: > 
    An interface for expression functions.
---


### Description

The IFunction is an interface for expression functions.


### Methods

#### Calculate
Function calculation method.

> Calculate(parameters [[]*Variant](../../../variants/variant), variantOperations [IVariantOperations](../../../variants/ivariant_operations)) ([*Variant](../../../variants/variant), error)

- **params**: [[]*Variant](../../../variants/variant) - array with function parameters.
- **variantOperations**: [IVariantOperations](../../../variants/ivariant_operations) - variants operations manager.
- **returns**: ([*Variant](../../../variants/variant), error) - returned function's result.


#### Name
Function's name.
> Name() string

- **retuns**: string - function's name.