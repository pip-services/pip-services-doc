
See: [YamlConfigReader](../../../toolkit_api/python/components/config/yaml_config_reader/)

```python
configReader = YamlConfigReader("config.yml")
parameters = ConfigParams.from_tuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader.read_config_("123", parameters)    # Result: key1=1234;key2=ABCD

```

