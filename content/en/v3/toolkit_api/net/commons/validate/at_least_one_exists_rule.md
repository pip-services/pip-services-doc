---
type: docs
title: "AtLeastOneExistsRule"
linkTitle: "AtLeastOneExistsRule"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Validation rule that checks that at least one of the object properties exists.
---

**Inherits**: [IValidationRule](../ivalidation_rule)

### Description

The AtLeastOneExistsRule class allows you to check that given a set of properties, at least one of them exists. 

### Constructors
Creates a new validation rule and sets its values

> `public` AtLeastOneExistsRule(params string[] properties)

- **properties**: string[] - list of property names where at least one property must exist

### Instance methods

#### Validate
Validates a given value against this rule.

> `public` void Validate(string path, [Schema](../schema) schema, object value, List<[ValidationResult](../validation_result)> results) 

- **path**: string - path to the value in dot notation.
- **schema**: [Schema](../schema) - schema this rule is called from
- **value**: object - value to be validated.
- **results**: List<[ValidationResult](../validation_result)> - list with validation results to add new results.

### Examples
```cs
var schema = new Schema().WithRule(new AtLeastOneExistsRule("field1", "field2"));

schema.Validate({ field1: 1, field2: "A" });     // Result: no errors
schema.Validate({ field1: 1 });                  // Result: no errors
schema.Validate({ });                            // Result: at least one of properties field1, field2 must exist

```

### See also
- #### [IValidationRule](../ivalidation_rule)
