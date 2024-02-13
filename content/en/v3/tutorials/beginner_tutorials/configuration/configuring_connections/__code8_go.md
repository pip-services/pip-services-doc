
```go
config := conf.NewConfigParamsFromTuples(
	// use connection if one connection and connections if more than one connection
	"connections.connection1.uri", "http://www.example1.com",
	"connections.connection1.protocol", "http",
	"connections.connection1.host", "host152",
	"connections.connection1.my_conn_parameter", "value1",
	"connections.connection2.uri", "http://www.example2.com",
	"connections.connection2.protocol", "http",
	"connections.connection2.host", "host153",
	"connections.connection2.my_conn_parameter", "value3",
	// use credential if one credential and credentials if more than one credential
	"credentials.database1.username", "user1",
	"credentials.database1.password", "userpass123",
	"credentials.database2.username", "user2",
	"credentials.database2.password", "userpass457",
	"credentials.database2.my_custom_credential_param", "myvalue",
)

connection := conn.NewManyConnectionParamsFromConfig(config)

// Returns a list with all connections

// [{'uri': 'http://www.example.com', 'protocol': 'http', 'host': 'host15', 'my_conn_parameter': 'value1'},
// {'uri': 'http://www.example2.com', 'protocol': 'http', 'host': 'host153', 'my_conn_parameter': 'value3'}]
```
