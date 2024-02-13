---
type: docs
title: "MapSchema"
linkTitle: "MapSchema"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Schema to validate maps.
---

**Implements:** [Schema](../schema)

### Description

The MapSchema class provides you with a schema to validate maps

### Constructors
Creates a new instance of validation schema and sets its values.
See [IValidationRule](../ivalidation_rule), [TypeCode](../../convert/type_code)

> MapSchema(key_type: Any = None, value_type: Any = None, required: bool = None,
                 rules: List[[IValidationRule](../ivalidation_rule)] = None)

- **key_type**: Any - a type of map keys. Null means that keys may have any type.
- **value_type**: Any - a type of map values. Null means that values may have any type.
- **required**: boolean - (optional) true to always require non-None values.
- **rules**: List[[IValidationRule](../ivalidation_rule)] - (optional) a list with validation rules.



### Instance methods

#### get_key_type
Gets the type of map keys.
Null means that keys may have any type.

> get_key_type(): Any

- **returns**: Any - the type of map keys.

#### get_value_type
Gets the type of map values.
Null means that values may have any type.

> get_value_type(): Any

- **returns**: Any - the type of map values.

#### perform_validation
Validates a given value against the schema and configured validation rules.

> _perform_validation(path: str, value: Any, results: List[[ValidationResult](../validation_result)])

- **path**: str - a dot notation path to the value.
- **value**: Any - a value to be validated.
- **results**: List[[ValidationResult](../validation_result)] - a list with validation results to add new results.

#### set_key_type
Sets the type of map keys.
Null means that keys may have any type.

> set_key_type(value: Any)

- **value**: Any - a type of map keys.

#### set_value_type
Sets the type of map values.
Null means that values may have any type.

> set_value_type(value: Any)

- **value**: Any - a type of map values.

### Examples
```python
schema = MapSchema(TypeCode.String, TypeCode.Integer)

schema.validate({ "key1": "A", "key2": "B" })       # Result: no errors
schema.validate({ "key1": 1, "key2": 2 })           # Result: element type mismatch
schema.validate([ 1, 2, 3 ])                        # Result: type mismatch

```
