---
type: docs
title: "FixedRateTimer"
linkTitle: "FixedRateTimer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Timer that is triggered in equal time intervals.

---

**Implements:** [IClosable](../iclosable)

### Description

The FixerRateTimer class represents a timer that is triggered in equal time intervals.

Important points

- It has symmetric cross-language implementation and is often used by the Pip.Services toolkit to perform periodic processing and cleanup in microservices.

### Constructors
Creates new instance of the timer and sets its values.

> FixedRateTimer(task_or_object: Any = None, interval: int = None, delay: int = None)

- **task_or_object**: Any - (optional) a Notifiable object or callback function to call when timer is triggered.
- **interval**: int - (optional) an interval to trigger timer in milliseconds.
- **delay**: int - (optional) a delay before the first triggering in milliseconds.

### Instance methods

#### close
Closes the timer.

This is required by [IClosable](../iclosable) interface,
but besides that it is identical to [stop()](#stop).

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

#### get_callback
Gets the callback function that is called when this timer is triggered.

> get_callback(): Callable

- **returns**: Callable - the callback function or None if it is not set. 


#### get_delay
Gets initial delay before the timer is triggered for the first time.

> getDelay(): int

- **returns**: int - the delay in milliseconds.

#### get_interval
Gets periodic timer triggering interval.

> get_interval(): int

- **returns**: int - the interval in milliseconds


#### get_task
Gets the INotifiable object that receives notifications from this timer.

> get_task(): [INotifiable](../inotifiable)

- **returns**: [INotifiable](../inotifiable) - the INotifiable object or None if it is not set.


#### set_task
Sets a new INotifiable object to receive notifications from this timer.

> set_task(value: [INotifiable](../inotifiable))

- **value**: [INotifiable](../inotifiable) - a INotifiable object to be triggered.

#### is_started
Checks if the timer is started.

> is_started(): bool

- **returns**: bool - true if the timer is started and false if it is stopped.

#### set_callback
Sets the callback function that is called when this timer is triggered.

> set_callback(value: Callable)

- **value**: Callable - the callback function to be called.

#### set_delay
Sets initial delay before the timer is triggered for the first time.

> set_delay(value: int)

- **value**: int - a delay in milliseconds. 

#### set_interval
Sets periodic timer triggering interval.

> set_interval(value: int)

- **value**: int - an interval in milliseconds.


#### start
Starts the timer.

Initially the timer is triggered after delay.
After that it, is triggered after interval until it is stopped.

> start()


#### stop
Stops the timer.

> stop()


### Examples

```python
class MyComponent:

    timer: FixedRateTimer = FixedRateTimer(self.__cleanup, 60000)

    ...
    def open(correlation_id: str): 
        ...
        timer.start()
        ...
    
    
    def close(correlationId: str): 
        ...
        timer.stop()
        ...
    
    
    def __cleanup(): 
        ...
    
    ...

```

### See also
- #### [INotifiable](../inotifiable)
