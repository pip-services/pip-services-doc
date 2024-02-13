---
type: docs
title: "RecursiveMapConverter"
linkTitle: "RecursiveMapConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The RecursiveMapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.

---

### Description
 The RecursiveMapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.
 
 **Important points**
 
 - This class is similar to [MapConverter](../map_converter). The difference is that it recursively converts all values stored in objects and arrays.

### Instance methods

#### ToMap
Converts value into a map object or returns an empty map when the conversion is not possible

> `public static` IDictionary\<string, object\> ToMap(object value)

- **value**: object - value to convert.
- **returns**: IDictionary\<string, object\> - map object or empty map when the conversion is not supported.

#### ToMapWithDefault
Converts value into a map object or returns a given default value when the conversion is not possible

> `public static` IDictionary\<string, object\> ToMapWithDefault(object value, IDictionary\<string, object\> defaultValue)

- **value**: object - value to convert.
- **defaultValue**: IDictionary\<string, object\> - default value.
- **returns**: IDictionary\<string, object\> - map object or empty map when the conversion is not supported.

#### ToNullableMap
Converts value into map object or returns null when the conversion is not possible.

> `public static` IDictionary\<string, object\> ToNullableMap(object value)

- **value**: object - value to convert.
- **returns**: IDictionary\<string, object\> - map object or null when the conversion is not supported.


### Examples

```cs
var value1 = RecursiveMapConverted.ToNullableMap("ABC"); // Result: null
var value2 = RecursiveMapConverted.ToNullableMap({ key: 123 }); // Result: { key: 123 }
var result = new List<Object>();
result.Add(1); 
result.Add(new int[]{2, 3});
var value3 = RecursiveMapConverted.ToNullableMap(result); // Result: { "0": 1, { "0": 2, "1": 3 } }
```
