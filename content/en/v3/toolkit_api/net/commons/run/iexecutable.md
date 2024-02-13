---
type: docs
title: "IExecutable"
linkTitle: "IExecutable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Interface that allows you to create a component that can be called to execute work.

---

### Description

The IExecutable interface allows you to create a component that can be called to execute work.

### Instance methods

#### ExecuteAsync
Executes a component with arguments and receives an execution result.

> Task\<object\> ExecuteAsync(string correlationId, [Parameters](../parameters) args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Task\<object\> - execution result. 

### Examples

```cs
class EchoComponent: IExecutable 
{
    ...
    public void Execute(string correlationId, Parameters args)
    {
        var result = args.GetAsObject("message");
    }
}
var echo = new EchoComponent();
string message = "Test";
echo.Execute("123", Parameters.FromTuples("message", message));

```

### See also
- #### [Executor](../executor)
- #### [INotifiable](../inotifiable)
- #### [Parameters](../parameters)
