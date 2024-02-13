---
type: docs
title: "ITrackable"
linkTitle: "ITrackable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Interface for data objects that can track their changes, including logical deletion.
---

**Implements:** [IChangeable](../ichangeable)

### Description

The ITrackagle interface allows you to define data objects that can track their changes, including logical deletion.

### Fields

<span class="hide-title-link">

#### create_time
UTC time at which the object was created.
> **create_time**: Date

#### change_time
UTC time at which the object was last changed (created, updated, or deleted).
> **change_time**: Date

#### deleted
Logical deletion flag. True when object is deleted and null or false otherwise
> **deleted**: boolean

</span>

### Examples

```typescript
export class MyData implements IStringIdentifiable, ITrackable {
    public id: string;
    public field1: string;
    public field2: number;
    ...
    public change_time: Date;
    public create_time: Date;
    public deleted: boolean;
}
```

### See also
- #### [IChangeable](../ichangeable)
