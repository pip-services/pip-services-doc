
See: [YamlConfigReader](../../../toolkit_api/golang/components/config/yaml_config_reader/)


```go
configReader := creader.NewYamlConfigReader("config.yml")
parameters := cconfig.NewConfigParamsFromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader.ReadConfig(ctx context.Context, "123", parameters) // Result: key1=123;key2=ABC

```
