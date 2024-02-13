
See: [MemoryConfigReader](../../../toolkit_api/python/components/config/memory_config_reader/), [ConfigReader](../../../toolkit_api/python/components/config/config_reader/)

```python
config = ConfigParams.from_tuples(
	"connection.host", "localhost",
	"connection.port", "8080"
)
config_reader = MemoryConfigReader()
config_reader.configure(config)
parameters = ConfigParams.from_value(sys.argv)
config_reader.read_config("123", parameters) # Result: connection.host=localhost;connection.port=8080

```

