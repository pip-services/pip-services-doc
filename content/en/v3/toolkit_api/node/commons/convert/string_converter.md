---
type: docs
title: "StringConverter"
linkTitle: "StringConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The StringConverter class allows you to convert arbitrary values into strings.

---

### Description

 The StringConverter class allows you to convert arbitrary values into strings using the following extended conversion rules:

- Numbers: are converted with '.' as decimal point
- DateTime: using the ISO format
- Boolean: "true" for true and "false" for false
- Arrays: as comma-separated list  
- Other objects: using **toString()** method

### Static methods

#### toNullableString
Converts a value into a string or returns null when the value is null.

> `public static` toNullableString(value: any): string

- **value**: any - value to convert.
- **returns**: string - string value or null when value is null.

#### toString
Converts a value into string or returns "" when the value is null.

> `public static` toString(value: any): string

- **value**: any - value to convert.
- **returns**: string - string value or "" when value is null.

#### toStringWithDefault
Converts a value into a string or returns a given default when the value is null.

> `public static` toStringWithDefault(value: any, defaultValue: string): string

- **value**: any - value to convert.
- **defaultValue**: string - default value.
- **returns**: string - string value or given default when value is null.


### Examples

```typescript
let value1 = StringConverter.ToString(123.456); // Result: "123.456"
let value2 = StringConverter.ToString(true); // Result: "true"
let value3 = StringConverter.ToString(new Date(2018,0,1)); // Result: "2018-01-01T00:00:00.00"
let value4 = StringConverter.ToString([1,2,3]); // Result: "1,2,3"
```
