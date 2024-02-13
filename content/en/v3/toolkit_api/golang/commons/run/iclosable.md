---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Interface that allows you to create a component with a method that closes it and frees the used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees the used resources.

### Methods

#### Close
Closes a component and frees the used resources.

> Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context. 
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns an error if not cleared

### Examples
```go
type MyConnector {
    _client interface{}
}

... // The _client can be lazy created
 
func (mc *MyConnector) Close(ctx context.Context, correlationId string) error {
    if (mc._client != nil) {
        mc._client.Close()
		mc._client = nil
		return nil
	}
}

```

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)
