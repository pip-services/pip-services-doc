
```go
import (
	"fmt"

	data "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

value := data.NewAnyValue("123.456")

value1 := value.GetAsInteger() // Returns 123
value2 := value.GetAsLong()    // Returns 123
value3 := value.GetAsFloat()   // Returns 123.456

valueB := data.NewAnyValue("ABC")
value4 := valueB.GetAsIntegerWithDefault(25) // Returns 25

value5 := value.GetAsString()                 // Returns '123.456'
value6 := value.GetAsStringWithDefault("ABC") // Returns '123.456'

valueB = data.NewAnyValue("1")
value7 := valueB.GetAsBoolean() // Returns True

valueC := data.NewAnyValue("abc")
value8 := valueC.GetAsBooleanWithDefault(false) // Returns False

type1 := value.TypeCode() // Returns TypeCode.String
```
