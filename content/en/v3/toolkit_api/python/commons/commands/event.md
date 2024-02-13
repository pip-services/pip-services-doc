---
type: docs
title: "Event"
linkTitle: "Event"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Concrete implementation of the [IEvent](../ievent) interface.
   
---

**Implements:** [IEvent](../ievent)

### Description

The Event class allows you to create events.

Important points

- It allows you to send asynchronous notifications to multiple subscribed listeners.

### Constructors

Creates a new event and assigns its name.  
Throws an Error if the name is None.

> Event(name: str)

- **name**: str - the name of the event that is to be created.

### Instance methods

#### add_listener
Adds a listener to receive notifications when this event is fired.

> add_listener(listener: [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener reference to add.

#### get_listeners
Gets all listeners registred in this event.

> getListeners(): List[[IEventListener](../ievent_listener)]

- **returns**: List[[IEventListener](../ievent_listener)] - a list of listeners.

#### get_name
Gets the name of the event.

> get_name(): str 

- **returns**: str - the name of this event.

#### notify
Fires this event and notifies all registred listeners.  
Throws an [InvocationException](../../errors/invocation_exception) if the event fails to be raised.

> notify(correlation_id: Optional[str], args: [Parameters](../../run/parameters))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../../run/parameters) - the parameters to raise this event with.

#### remove_listener
Removes a listener, so that it no longer receives notifications for this event.

> removeListener(listener: [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener reference to remove.

**Example**:

```python
event_name = Event("my_event")
event_name.add_listener(myListener)
event_name.notify("123", Parameters.from_tuples("param1", "ABC", "param2", 123)
```

### See also
- #### [IEvent](../ievent)
- #### [IEventListener](../ievent_listener)
