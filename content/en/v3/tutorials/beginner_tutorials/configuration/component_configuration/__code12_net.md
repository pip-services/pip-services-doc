
See: [MemoryConfigReader](../../../toolkit_api/net/components/config/memory_config_reader/), [ConfigReader](../../../toolkit_api/net/components/config/config_reader/)

```cs
var config = ConfigParams.FromTuples(
	"connection.host", "localhost",
	"connection.port", "8080"
);
var configReader = MemoryConfigReader();
configReader.configure(config);
var parameters = ConfigParams.FromValue(args);
configReader.ReadConfig("123", parameters); // Result: connection.host=localhost;connection.port=8080

```

