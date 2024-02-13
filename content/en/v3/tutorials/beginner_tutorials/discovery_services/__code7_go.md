
```go
package main

// Pre-requisites
import (
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cconn "github.com/pip-services3-gox/pip-services3-components-gox/connect"
)

// Runner
func main() {
	config := cconf.NewConfigParamsFromTuples(
		"key1.host", "10.1.1.100",
		"key1.port", "8080",
		"key2.host", "10.1.1.100",
		"key2.port", "8082",
	)

	discovery := cconn.NewEmptyMemoryDiscovery()
	discovery.Configure(context.Background(), config)

	// Adding more parameters
	discovery.Register("123", "key1", cconn.NewConnectionParamsFromTuples(
		"param1", "val1",
		"param2", "val2",
	))

	discovery.Register("123", "key3", cconn.NewConnectionParamsFromTuples(
		"host", "localhost",
		"port", "8000",
	))

	// Resolving connections
	res1, _ := discovery.ResolveOne("123", "key1")
	res2, _ := discovery.ResolveAll("123", "key1")
	res3, _ := discovery.ResolveOne("123", "key3")

	fmt.Println(res1)
	fmt.Println(res2)
	fmt.Println(res3)
}

```

Which after running produces the following result:

![figure 1](./figure1.png)
