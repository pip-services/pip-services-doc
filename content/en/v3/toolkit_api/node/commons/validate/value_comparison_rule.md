---
type: docs
title: "ValueComparisonRule"
linkTitle: "ValueComparisonRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
   Validation rule that compares a value to a constant.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The ValueComparisonRule class allows you to create a validation rule that compares a value to a constant.

### Constructors
Creates a new validation rule and sets its values.

> `public` constructor(operation: string, value: any)

- **operation**: string - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value**: any - constant value to compare to

### Instance methods

#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: any - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results to add new results.

### Examples
```typescript
let schema = Schema().withRule(ValueComparisonRule("EQ", 1))

schema.validate(1)          // Result: no errors
schema.validate(2)          // Result: 2 is not equal to 1
```

### See also
- #### [IValidationRule](../ivalidation_rule)
