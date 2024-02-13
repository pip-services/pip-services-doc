---
type: docs
title: "AndRule"
linkTitle: "AndRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule that allows you to check combinations of rules created with AND logical operations.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The AndRule class allows you to validate combinations of rules created with AND logical operations.

Important points

-  When one or more of the combined rules return errors, then this rule returns all the errors that appeared.
-  When none of the combined rules returns errors, then this rule also returns no errors.

### Constructors
Creates a new validation rule and sets its values.

> `public` constructor(...rules: [IValidationRule](../ivalidation_rule)[])

- **rules**: [IValidationRule](../ivalidation_rule)[] - list of rules to join with the AND operator.

### Instance methods

#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from.
- **value**: any - value to be validated.
- **results**: [IValidationRule](../ivalidation_rule)[] - list with validation results to add new results.

### Example
```typescript
let schema = Schema().withRule(AndRule(ValueComparisonRule("GTE", 1), ValueComparisonRule("LTE", 10)))
schema.validate(0)          // Result: 0 must be greater or equal to 1
schema.validate(5)          // Result: no error
schema.validate(20)         // Result: 20 must be letter or equal 10

```

### See also
- #### [IValidationRule](../ivalidation_rule)
