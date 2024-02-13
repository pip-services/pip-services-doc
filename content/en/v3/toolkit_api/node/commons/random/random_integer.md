---
type: docs
title: "RandomInteger"
linkTitle: "RandomInteger"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Random generator for integer values.
---

### Description

The RandomInteger class allows you to generate random integer values.

### Static methods

#### nextInteger
Generates an integer in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `public static` nextInteger(min: number, max: number = null): number

- **min**: number - minimum value of the integer that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: number - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: number - generated random integer value.

#### updateInteger
Updates (drifts) a integer value within specified range.

> `public static` updateInteger(value: number, range: number = null): number

- **value**: number - integer value to drift.
- **range**: number - (optional) range. Default: 10% of the value
- **returns**: number - updated integer value.

### Examples

```typescript
let value1 = RandomInteger.nextInteger(5, 10);     // Possible result: 7
let value2 = RandomInteger.nextInteger(10);        // Possible result: 3
let value3 = RandomInteger.updateInteger(10, 3);   // Possible result: 9

```
