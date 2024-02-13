---
type: docs
title: "PagingParams"
linkTitle: "PagingParams"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: > 
    Defines a data transfer object used to pass paging parameters for queries.

---

### Description

The PagingParams class allows you to create data transfer objects used to pass paging parameters for queries.

Important points

- A page is defined by two parameters:
    - *skip*: number of items to skip.
    - *take*: number of items to return in a page.
 - Additionally, the optional *total* parameter defines whether to return the total number of items or not.
 - However, not all implementations support the *total* parameter, because its generation may lead to severe performance implications.

### Constructors

#### NewPagingParams
Creates a new instance and sets its values.

> NewPagingParams(skip, take int64, total bool) [*PagingParams]()

- **skip**: int64 - the number of items to skip.
- **take**: int64 - the number of items to return. 
- **total**: bool - true to return the total number of items.


#### NewPagingParamsFromMap
Creates a new PagingParams and sets its parameters from the specified map

> NewPagingParamsFromMap(value [*AnyValueMap](../any_value_map)) [*PagingParams]()

- **map**: [*AnyValueMap](../any_value_map) - AnyValueMap or StringValueMap to initialize this PagingParams
- **returns**: [*PagingParams]() - newly created PagingParams.


#### NewPagingParamsFromTuples
Creates a new PagingParams from a list of key-value pairs called tuples.

> NewPagingParamsFromTuples(tuples ...any) [*PagingParams]()

- **tuples**: ...any - list of values where odd elements are keys and the following even elements are values
- **returns**: [*PagingParams]() - newly created PagingParams.


#### NewPagingParamsFromValue
Converts specified value into PagingParams.

> NewPagingParamsFromValue(value any) [*PagingParams]()

- **value**: any - value to be converted
- **returns**: [*PagingParams]() - newly created PagingParams.


#### NewEmptyPagingParams
Creates a new instance.

> NewEmptyPagingParams() [*PagingParams]()


### Fields

<span class="hide-title-link">

#### Skip
Number of items to skip.
> **Skip**: *int64

#### Take
Number of items to return. 
> **Take**: *int64

#### Total
Flag to return the total number of items.
> **Total**: bool

</span>


### Methods

#### GetSkip
Gets the number of items to skip.

> (c *PagingParams) GetSkip(minSkip int64) int64

- **minSkip**: int64 - minimum number of items to skip.
- **returns**: int64 - number of items to skip.


#### GetTake
Gets the number of items to return in a page.

> (c *PagingParams) GetTake(maxTake int64) int64

- **maxTake**: int64 - Maximum number of items to return.
- **returns**: int64 - Number of items to return.



### Examples
```go
filter := NewFilterParamsFromTuples("type", "Type1");
paging := NewPagingParams(0, 100);

page, err = myDataClient.GetDataByFilter(context.Background(), filter, paging);

```
