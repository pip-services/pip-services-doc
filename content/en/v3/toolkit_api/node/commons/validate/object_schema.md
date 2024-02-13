---
type: docs
title: "ObjectSchema"
linkTitle: "ObjectSchema"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Schema to validate user defined objects.
---

**Extends:** [Schema](../schema)

### Description

The ObjectSchema class allows you to create a validation schema that can be used to validate user defined objects.

### Constructors
Creates a new validation schema and sets its values. 
See [IValidationRule](../ivalidation_rule)

> `public` constructor(allowUndefined?: boolean, required?: boolean, rules?: [IValidationRule](../ivalidation_rule)[])

- **allowUndefined**: boolean - true to allow properties undefined in the schema.
- **required**: boolean - (optional) true to always require non-null values.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) list with validation rules.

### Properties

#### isUndefinedAllowed
Gets a flag used to allow undefined properties.

> `public` isUndefinedAllowed(): boolean

- **returns**: boolean - true to allow undefined properties and false to disallow.

Sets a flag used to allow undefined properties.

> `public` isUndefinedAllowed(value: boolean): void

- **value**: boolean - true to allow undefined properties and false to disallow.

### Instance methods

#### allowUndefined
Sets a flag used to allow undefined properties.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.

> `public` allowUndefined(value: boolean): [ObjectSchema](../object_schema)

- **value**: boolean - true to allow undefined properties and false to disallow.
- **returns**: [ObjectSchema](../object_schema) - validation schema.


#### getProperties
Gets validation schemas for object properties.
See [PropertySchema](../property_schema)

> `public` getProperties(): [PropertySchema](../property_schema)[]

- **returns**: [PropertySchema](../property_schema)[] - list of property validation schemas.


#### performValidation
Validates a given value against the schema and configured validation rules.

> `protected` performValidation(path: string, value: any, results: [ValidationResult](../validation_result)[]): void

- **path**: string - dot notation path to the value.
- **value**: any - value to be validated.
- **results**: [ValidationResult](../validation_result)[] - list with validation results.


#### setProperties
Sets validation schemas for object properties.
See [PropertySchema](../property_schema)

> `public` setProperties(value: [PropertySchema](../property_schema)[]): void

- **value**: [PropertySchema](../property_schema)[] - list of property validation schemas.


#### withOptionalProperty
Adds a validation schema for an optional object property.

> `public` withOptionalProperty(name: string, type?: any, ...rules: [IValidationRule](../ivalidation_rule)[]): [ObjectSchema]()

- **name**: string - property name.
- **type**: any - (optional) property schema or type.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) list of property validation rules.
- **returns**: [ObjectSchema]() - returns Schema with added optional property


#### withProperty
Adds a validation schema for an object property.
This method returns a reference to this exception to implement the Builder pattern
to chain additional calls.
See [PropertySchema](../property_schema)

> `public` withProperty(schema: [PropertySchema](../property_schema)): [ObjectSchema]()

- **schema**: [PropertySchema](../property_schema) - property validation schema to be added.
- **returns**: [ObjectSchema]() - validation schema.


#### withRequiredProperty
Adds a validation schema for a required object property.

> `public` withRequiredProperty(name: string, type?: any, ...rules: [IValidationRule](../ivalidation_rule)[]): [ObjectSchema]()

- **name**: string - property name.
- **type**: any - (optional) property schema or type.
- **rules**: [IValidationRule](../ivalidation_rule)[] - (optional) list of property validation rules.
- **returns**: [ObjectSchema]() - validation schema.

### Examples

```typescript
let schema = new ObjectSchema(false)
    .withOptionalProperty("id", TypeCode.String)
    .withRequiredProperty("name", TypeCode.String);
  
schema.validate({ id: "1", name: "ABC" });       // Result: no errors
schema.validate({ name: "ABC" });                // Result: no errors
schema.validate({ id: 1, name: "ABC" });         // Result: id type mismatch
schema.validate({ id: 1, _name: "ABC" });        // Result: name is missing, unexpected _name
schema.validate("ABC");                          // Result: type mismatch

```
