---
type: docs
title: "NullCounters"
linkTitle: "NullCounters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Dummy implementation of performance counters.

---

**Implements:** [ICounters](../icounters)

### Description

The NullCounters class allows you to create dummy performance counters.

Important points

- It can be used in testing or in situations when a counter is required but must be disabled.

### Instance methods

#### begin_timing
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.end_timing](../counter_timing/#end_timing) to end the measurement and update the counter.

> begin_timing(name: str): [CounterTiming](../counter_timing)

- **name**: str - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### increment
Increments counter by given value.

>  increment(name: str, value: float)

- **name**: str - a counter name of Increment type.
- **value**: float - a value to add to the counter.

#### increment_one
Increments counter by 1.

> increment_one(name: str)

- **name**: str - a counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> last(name: str, value: float)

- **name**: str - a counter name of Last type.
- **value**: float - a last value to record.


#### stats
Calculates min/average/max statistics based on the current and previous values.

> stats(name: str, value: float)

- **name**: str - a counter name of Statistics type
- **value**: float - a value to update statistics


#### timestamp
Records the given timestamp.

> timestamp(name: str, value: datetime.datetime)

- **name**: str - a counter name of Timestamp type.
- **value**: datetime.datetime - a timestamp to record.


#### timestamp_now
Records the current time as a timestamp.

> timestamp_now(name: str)

- **name**: str - a counter name of Timestamp type.

### See also 

- [ICounters](../icounters)
