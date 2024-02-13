---
type: docs
title: "SortField"
linkTitle: "SortField"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Defines a field name and the order type used to sort query results.
---

### Description

The SortField class allows you to define a field used to sort query results. In addition, it allows you to specify the order type as ascending or descending.

### Constructors
Creates a new instance and assigns its values.

> `public` constructor(name: string = null, ascending: boolean = true)

- **name**: string - name of the field to sort by.
- **ascending**: boolean - true to sort in ascending order, and false to sort in descending order. 


### Fields

<span class="hide-title-link">

#### name
Field name to sort by.
> `public` **name**: string

#### ascending
Flag used to define the sorting order. True to sort ascending, false to sort descending
> `public` **ascending**: boolean

</span>

### Examples
```typescript
let filter = FilterParams.fromTuples("type", "Type1");
let paging = new PagingParams(0, 100);
let sorting = new SortingParams(new SortField("create_time", true));
     
let result = await myDataClient.getDataByFilter(filter, paging, sorting);
```

### See also
- #### [SortParams](../sort_params)
