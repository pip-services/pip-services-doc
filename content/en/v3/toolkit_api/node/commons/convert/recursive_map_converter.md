---
type: docs
title: "RecursiveMapConverter"
linkTitle: "RecursiveMapConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The RecursiveMapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.

---

### Description
 The RecursiveMapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.
 
 Important points:
 
 - This class is similar to [MapConverter](../map_converter). The difference is that it recursively converts all values stored in objects and arrays.

### Instance methods

#### toMap
Converts a  value into a map object or returns an empty map when the conversion is not possible.

> `public static` toMap(value: any): any

- **value**: any - value to convert.
- **returns**: any - map object or empty map when the conversion is not supported.  

#### toMapWithDefault
Converts a value into a map object or returns default when the conversion is not possible.

> `public static` toMapWithDefault(value: any, defaultValue: any): any

- **value**: any - value to convert.
- **defaultValue**: any - default value.
- **returns**: any - map object or empty map when the conversion is not supported.

#### toNullableMap
Converts a value into a map object or returns null when the conversion is not possible.

> `public static` toNullableMap(value: any): any

- **value**: any - value to convert.
- **returns**: any - map object or null when the conversion is not supported.


### Examples

```typescript
let value1 = RecursiveMapConverted.toNullableMap("ABC"); // Result: null
let value2 = RecursiveMapConverted.toNullableMap({ key: 123 }); // Result: { key: 123 }
let value3 = RecursiveMapConverted.toNullableMap([1,[2,3]); // Result: { "0": 1, { "0": 2, "1": 3 } }
```
