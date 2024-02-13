---
type: docs
title: "IValidationRule"
linkTitle: "IValidationRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface used to implement custom validation rules.

---

### Description

The IValidationRule interface allows you to implement custom validation rules.

### Instance methods

#### validate
Validates a given value against this rule.

> validate(path: str, schema: [Schema](../schema), value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.
