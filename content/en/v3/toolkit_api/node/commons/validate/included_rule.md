---
type: docs
title: "IncludedRule"
linkTitle: "IncludedRule"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Validation rule used to check that a list contains only specified values.
---

**Implements:** [IValidationRule](../ivalidation_rule)

### Description

The InclidedRule class allows you to check that a list contains only specified values.

### Constructors
Creates a new validation rule and sets its values.

> `public` constructor(...values: any[])

- **values**: any[] - list of constants that value must be included to.

### Instance methods


#### validate
Validates a given value against this rule.

> `public` validate(path: string, schema: [Schema](../schema), value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - dot notation path to the value.
- **schema**: [Schema](../schema) - schema this rule is called from.
- **value**: any - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results.


### Examples
```typescript
let schema = new Schema()
    .withRule(new IncludedRule(1, 2, 3));
    
schema.validate(2);      // Result: no errors
schema.validate(10);     // Result: 10 must be one of 1, 2, 3
```

### See also
- #### [IValidationRule](../ivalidation_rule)
