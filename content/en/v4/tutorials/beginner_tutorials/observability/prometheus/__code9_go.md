
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	pcount "github.com/pip-services4/pip-services4-go/pip-services4-prometheus-go/count"
)

func main() {
	counters := pcount.NewPrometheusCounters()
	counters.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))

	err := counters.Open(context.Background())

	if err != nil {
		fmt.Println(err)
	}

	myComponentA := NewMyComponentA(counters)
}

type MyComponentA struct {
	counters *pcount.PrometheusCounters

	ConsoleLog bool
}

func NewMyComponentA(counter *pcount.PrometheusCounters) *MyComponentA {
	c := MyComponentA{
		counters:   counter,
		ConsoleLog: true,
	}
	if c.ConsoleLog {
		fmt.Println("MyComponentA has been created.")
	}
	return &c
}

func (c *MyComponentA) MyMethod(ctx context.Context) {
	c.counters.Increment(ctx, "mycomponent.mymethod.calls", 1)
	timing := c.counters.BeginTiming(ctx, "mycomponent.mymethod.exec_time")

	defer timing.EndTiming(ctx)

	if c.ConsoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Bonjour mon ami")
	}

	c.counters.Dump(ctx)
}
```
