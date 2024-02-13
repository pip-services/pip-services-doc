
```python
client = MyCommandableHttpClient("commandable_hello_friend")
client.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                                 "connection.host", "localhost",
                                                 "connection.port", 8080))
client.open(None)
```
