
See: [PagingParams](../../../toolkit_api/net/commons/data/paging_params/)

```cs
// skip = 25, take = 50, total = False
var paging = new PagingParams(25, 50, false);
var result = await persistence.GetPageByFilterAsync(null, null, paging);

```

