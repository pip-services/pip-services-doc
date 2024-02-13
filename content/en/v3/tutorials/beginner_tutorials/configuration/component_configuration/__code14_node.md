
See: [YamlConfigReader](../../../toolkit_api/node/components/config/yaml_config_reader/)

```typescript
let configReader = new YamlConfigReader("config.yml");
let parameters = ConfigParams.fromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");
let result = await configReader.readConfig("correlationId", parameters); // Result: key1=1234;key2=ABCD

```

