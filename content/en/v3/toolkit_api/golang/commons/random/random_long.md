---
type: docs
title: "Long"
linkTitle: "Long"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Random generator for long values.
---

### Description

The Long class allows you to generate random integer values.

### Methods

#### NextLong
Generates a integer in the range ['min', 'max']. If 'max' is omitted, then the range
will be set to [0, 'min'].

> NextLong(min int64, max int64) int64

- **min**: int64 - minimum value of the integer that will be generated. If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int64 - maximum value of the int that will be generated. Defaults to 'min' if omitted.
- **returns**: int64 - generated random integer value.

#### UpdateInteger
Updates (drifts) a integer value within specified range defined

> UpdateLong(value int64, interval int64) int64

- **value**: int64 - a integer value to drift.
- **interval**: int64 - (optional) a range. Default: 10% of the value
- **returns**: int64 - updated integer value.

#### Sequence
Generates a random sequence of integers starting from 0 like: \[0,1,2,3...??\]

> Sequence(min int64, max int64) []int64

- **min**: int64 - minimum value of the integer that will be generated. If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int64 - maximum value of the int that will be generated. Defaults to 'min' if omitted.
- **returns**: int64[] - generated array of integers.

### Examples

```go
value1 := RandomLong.nextLong(5, 10);     // Possible result: 7
value2 := RandomLong.nextLong(10);        // Possible result: 3
value3 := RandomLong.updateLong(10, 3);   // Possible result: 9

```
