---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    The DoubleConverter class allows you to convert arbitrary values into double using extended conversion rules.

   
---

### Description

The DoubleConverter class allows you to convert arbitrary values into double using the following extended conversion rules:

 - Strings are converted to double values

 - DateTime: total number of milliseconds since unix epoch
    
 - Boolean: 1 for true and 0 for false  

### Static methods

#### to_double
Converts a value into a double or returns 0 when the conversion is not possible.  
See [to_double_with_default](#to_double_with_default)

> `static` to_double(value: Any): float

- **value**: Any - the value to convert.
- **returns**: float - double value or 0 when conversion is not supported.

#### to_double_with_default
Converts a value into a double or returns a default value when the conversion is not possible.

> `static` to_double_with_default(value: Any, default_value: float = 0): float

- **value**: Any - the value to convert.
- **default_value**: float = None - the default value.
- **returns**: float - double value or default when conversion is not supported.

#### to_nullable_double
Converts a value into a double or returns None when conversion is not possible.

> `static` to_nullable_double(value: Any): Optional[float]

- **value**: Any - the value to convert.
- **returns**: Optional[float] - double value or None when the conversion is not supported.

### Examples

```python
value1 = DoubleConverter.to_nullable_double("ABC")     # Returns None
value2 = DoubleConverter.to_nullable_double("123.456") # Returns 123.456
value3 = DoubleConverter.to_nullable_double(True)      # Returns 1
value4 = DoubleConverter.to_nullable_double(datetime.datetime.now()) # Returns current milliseconds (E.g. 1619812281454)

```
