---
type: docs
title: "ISchemaBase"
linkTitle: "ISchemaBase"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Interface with a method to perform a validation.
---

### Description

The ISchemaBase interface is used by classes that need to perform a validation against a schema.


### Methods


#### PerformValidation
Validates a given value against the schema and configured validation rules..

> PerformValidation(path string, value any) [][*ValidationResult](../validation_result)

- **path**: any - dot notation path to the value
- **returns**: [][*ValidationResult](../validation_result) - list with validation results
