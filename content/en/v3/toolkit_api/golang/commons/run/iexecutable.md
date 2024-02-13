---
type: docs
title: "IExecutable"
linkTitle: "IExecutable"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Interface that allows you to create a component that can be called to execute work.

---

### Description

The IExecutable interface allows you to create a component that can be called to execute work.

### Methods

#### Execute
Executes a component with arguments and receives the execution result.

> Execute(ctx context.Context, correlationId string, args [*Parameters](../parameters)) (result any, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [*Parameters](../parameters) - execution arguments.
- **returns**: (result any, err error) - execution result. 

### Examples

```go
type EchoComponent struct {}
...
func  (ec* EchoComponent) Execute(ctx context.Context, correlationId string, args Parameters) (result any, err error) {
    return nil, result = args.getAsObject("message")
}
 
echo := EchoComponent{};
message = "Test";
res, err = echo.Execute("123", NewParametersFromTuples("message", message));
fmt.Println(res);

```

### See also
- #### [Executor](../executor)
- #### [INotifiable](../inotifiable)
- #### [Parameters](../parameters)
