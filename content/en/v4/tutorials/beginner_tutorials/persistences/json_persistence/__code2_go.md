
```go
import (
	persist "github.com/pip-services4/pip-services4-go/pip-services4-persistence-go/persistence"
)

persister := persist.NewJsonFilePersister[any]("./data.json")
```
