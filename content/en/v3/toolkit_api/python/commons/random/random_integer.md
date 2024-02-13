---
type: docs
title: "RandomInteger"
linkTitle: "RandomInteger"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Random generator for integer values.
---

### Description

The RandomInteger class allows you to generate random integer values.

### Static methods

#### next_integer
Generates a integer in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `static` next_integer(min: int, max: int = None): int

- **min**: int - minimum value of the integer that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int = None - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: int - generated random integer value.

#### update_integer
Updates (drifts) a integer value within specified range defined

> `static` update_integer(value: int, range: int = None): int

- **value**: int - a integer value to drift.
- **range**: int = None - (optional) a range. Default: 10% of the value
- **returns**: int - updated integer value.

### Examples

```python
value1 = RandomInteger.next_integer(5, 10)     # Possible result: 5
value2 = RandomInteger.next_integer(10)        # Possible result: 4
value3 = RandomInteger.update_integer(10, 3)   # Possible result: 12
```
