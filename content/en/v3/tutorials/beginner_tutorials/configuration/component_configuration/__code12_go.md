
See: [MemoryConfigReader](../../../toolkit_api/golang/components/config/memory_config_reader/), [ConfigReader](../../../toolkit_api/golang/components/config/config_reader/)

```go
config := cconfig.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", "8080",
)

configReader := creader.NewEmptyMemoryConfigReader()
configReader.Configure(ctx context.Context, config)
parameters := cconfig.NewConfigParamsFromValue(os.Args)
configReader.ReadConfig(ctx context.Context, "123", parameters) // Result: connection.host=localhost;connection.port=8080

```
