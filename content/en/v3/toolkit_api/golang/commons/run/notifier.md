---
type: docs
title: "Notifier"
linkTitle: "Notifier"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Helper class that can be used to notify one or more components.
---

### Description

The Notifier class is a helper class that can be used to notify one or more components.

### Methods

#### Notify
Sets execution parameters.

> Notify(correlationId string, components []any, args [*Parameters](../parameters))

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: []any - list of components that are to be notified.
- **args**: [*Parameters](../parameters) - notification arguments.

#### NotifyOne
Notifies specific component.

To be notiied components must implement [INotifiable](../inotifiable) interface.
If they don't the call to this method has no effect.

> NotifyOne(correlationId string, component any, args [*Parameters](../parameters))

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: any - component that is to be notified.
- **args**: [Parameters](../parameters) - notification arguments.


### See also
- #### [INotifiable](../inotifiable)
