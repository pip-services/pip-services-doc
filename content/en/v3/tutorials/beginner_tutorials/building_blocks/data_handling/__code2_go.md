
```go
filter := cdata.NewFilterParamsFromTuples(
    "key1", "ABC",
    "key2", 123
)

values := client.GetMyObjects(context.Background(), filter)

```
