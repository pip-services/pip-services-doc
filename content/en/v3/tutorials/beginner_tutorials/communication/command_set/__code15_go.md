
```go
import (
	"fmt"

	ccmd "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	crun "github.com/pip-services3-gox/pip-services3-commons-gox/run"
)

// Step 1 - Create the command set with events
type MyEventSet struct {
	ccmd.CommandSet
}

func NewMyEventSet() *MyEventSet {
	c := &MyEventSet{
		CommandSet: *ccmd.NewCommandSet(),
	}

	c.AddEvent(c.event1())
	c.AddEvents([]ccmd.IEvent{c.event2(), c.event3()})
	c.AddListener(c.listener1())
	return c
}

func (c *MyEventSet) event1() ccmd.IEvent {
	return ccmd.NewEvent("event1")
}

func (c *MyEventSet) event2() ccmd.IEvent {
	return ccmd.NewEvent("event2")
}

func (c *MyEventSet) event3() ccmd.IEvent {
	return ccmd.NewEvent("event3")
}

func (c *MyEventSet) listener1() ccmd.IEventListener {
	return NewMyListener()
}

// Step 2 - Create a listener
type MyListener struct{}

func (c *MyListener) OnEvent(ctx context.Context, correlationId string, event ccmd.IEvent, value *crun.Parameters) {
	fmt.Println("Fired event " + event.Name())
}

func NewMyListener() *MyListener {
	return &MyListener{}
}


// Step 3  - Create an instance of the command set
myEvents := NewMyEventSet()

// Step 4 - Obtain events
event1 := myEvents.FindEvent("event1")
events := myEvents.Events()  // Returns a list with event1, event2 and event3

// Step 5 - Select event1 (first element in the list)
event2 := events[1]  // Returns event1

// Step 6 - Notify the listener of an event occurrence
event1.Notify(context.Background(), "123", nil)
event2.Notify(context.Background(), "123", nil)
myEvents.Notify(context.Background(), "123", "event3", nil)
```

After running, this code produces the following output:         
         
![figure 2](./figure2.png)
