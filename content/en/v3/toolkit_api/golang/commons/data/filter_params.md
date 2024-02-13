---
type: docs
title: "FilterParams"
linkTitle: "FilterParams"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: > 
    Data transfer object used to pass filter parameters as key-value pairs.
---

**Implements:** [StringValueMap](../string_value_map)

### Description

The FilterParams class allows you to create a data transfer object that can be used to pass filter parameters as key-value pairs.


### Constructors

#### NewFilterParams
Creates a new instance and initalizes it with elements from the specified map.

> NewFilterParams(values map[string]string) [*FilterParams]()

- **map**: map[string]string - a map to initialize this instance.


#### NewFilterParamsFromValue
Converts a specified value into FilterParams.

> NewFilterParamsFromValue(value any) [*FilterParams]()

- **value**: any - value to be converted
- **returns**: [*FilterParams]() - newly created FilterParams.

#### NewFilterParamsFromString
Parses semicolon-separated key-value pairs and returns them as a FilterParams.  
See [StringValueMap.NewStringValueMapFromString](../string_value_map/#newstringvaluemapfromstring)

> NewFilterParamsFromString(line string) [*FilterParams]()

- **line**: string - semicolon-separated key-value list to initialize FilterParams.
- **returns**: [*FilterParams]() - newly created FilterParams.


#### NewFilterParamsFromTuples
Creates a new FilterParams from a list of key-value pairs called tuples.

> NewFilterParamsFromTuples(tuples ...any) [*FilterParams]()

- **tuples**: ...any - list of values where odd elements are keys and the following even elements are values
- **returns**: [*FilterParams]() - newly created FilterParams.


### Examples
```go
filter := NewFilterParamsFromTuples(
	"type", "Type1",
	"from_create_time", new Date(2000, 0, 1),
	"to_create_time", new Date(),
	"completed", true
);

paging = NewPagingParams(0, 100)

err, page = myDataClient.getDataByFilter(context.Background(), filter, paging);

```

### See also
- #### [StringValueMap](../string_value_map)
