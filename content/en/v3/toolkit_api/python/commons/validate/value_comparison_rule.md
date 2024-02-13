---
type: docs
title: "ValueComparisonRule"
linkTitle: "ValueComparisonRule"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
   Validation rule that compares a value to a constant.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The ValueComparisonRule class allows you to create a validation rule that compares a value to a constant.

### Constructors
Creates a new validation rule and sets its values.

> ValueComparisonRule(operation: str, value: Any)

- **operation**: str - a comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value**: Any - a constant value to compare to

### Instance methods

#### validate
Validates a given value against this rule.

> validate(path: str, schema: [Schema](../schema), value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **schema**: [Schema](../schema) - a schema this rule is called from
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.

### Examples
```python
schema = Schema().with_rule(ValueComparisonRule("EQ", 1))

schema.validate(1)          # Result: no errors
schema.validate(2)          # Result: 2 is not equal to 1
```

### See also
- #### [IValidationRule](../ivalidation_rule)
