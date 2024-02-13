---
type: docs
title: "IMessageQueueConnection"
linkTitle: "IMessageQueueConnection"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Defines an interface for message queue connections
---

### Description

The IMessageQueueConnection interface is used to create message queue connections.

### Instance methods

#### create_queue
Creates a message queue.
If connection doesn't support this function, it exits without error.

> create_queue(name: str)

- **name**: str - name of the queue to be created.

#### delete_queue
Deletes a message queue.
If connection doesn't support this function, it exits without error.

> delete_queue(name: str)

- **name**: str - name of the queue to be deleted.

#### read_queue_names
Reads a list of registered queue names. If connection doesn't support this function returns an empty list.

> read_queue_names(): List[str]

- **returns**: List[str] - list with registered queue names.

