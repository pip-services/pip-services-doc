
See: [YamlConfigReader](../../../toolkit_api/dart/components/config/yaml_config_reader/)

```dart
var configReader = YamlConfigReader('config.yml');
var parameters = ConfigParams.fromTuples(['KEY1_VALUE', 123, 'KEY2_VALUE', 'ABC']);
var result = await configReader.readConfig('correlationId', parameters); // Result: key1=1234;key2=ABCD

```

