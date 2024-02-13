---
type: docs
title: "IWriter<T, K>"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-persistence-dart"
description: >
    Interface for data processing components that can create, update and delete data items.
---

### Description

The IWriter interface is used by data processng components that can create, update and delete data items.

### Instance methods

#### create
Creates a data item.

> Future\<T?\> create(IContext? context, T? item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T? - item to be created.
- **returns**: Future\<T?\> - created item


#### update
Updates a data item.

> Future\<T?\> update(IContext context, T? item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T? - item to be updated.
- **returns**: Future\<T?\> - updated item


#### deleteById
Updates a data item.

> Future\<T?\> deleteById(IContext? context, K? id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K? - id of the item to be deleted
- **returns**: Future\<T\> - deleted item.
