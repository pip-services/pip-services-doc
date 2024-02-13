---
type: docs
title: "DateTime"
linkTitle: "DateTime"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Random generator for Date time values.
---

### Description

The DateTime class allows you to generate random dates.

Important points:

- Month must be in 1..12 format.

### Methods

#### NextDate
Generates a random Date in the range ['minYear', 'maxYear'].
This method generate dates without time (or time set to 00:00:00)

> NextDate(min time.Time, max time.Time) time.Time

- **min**: time.Time - (optional) minimum range value
- **max**: time.Time - max range value
- **returns**: time.Time - random Date value.

#### NextDateTime
Generates a random Date and time in the range ['minYear', 'maxYear'].
This method generate dates without time (or time set to 00:00:00)

> NextDateTime(min time.Time, max time.Time) time.Time

- **min**: time.Time - (optional) minimum range value
- **max**: time.Time - max range value
- **returns**: time.Time - random Date and time value.

#### UpdateDateTime
Updates (drifts) a Date value within specified range defined

> UpdateDateTime(value time.Time, interval int64) time.Time

- **value**: time.Time - Date value to drift.
- **range**: int64 - (optional) range in milliseconds. Default: 10 days
- **returns**: time.Time - updated DateTime

### Examples

```go
value1 := DateTime.NextDate(time.Parse(shortForm, "2007-Jan-01"), time.Parse(shortForm, "2010-Jan-01")); // Possible result: 2008-01-03
value2 := DateTime.NextDateTime(time.Parse(shortForm, "2006-Jan-01"), time.Parse(shortForm, "2017-Jan-01")); // Possible result: 2007-03-11 11:20:32
value3 := DateTime.UpdateDateTime(time.Parse(shortForm, "2010-Jan-01"), ); // Possible result: 2010-02-05 11:33:23

```
