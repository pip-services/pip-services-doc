---
type: docs
title: "Command"
linkTitle: "Command"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Command allows you to call a method or a function.
---

**Inherits**: [ICommand](../icommand)

### Description

The Command class allows you to call a method or a function.

### Constructors

Creates a new command object and assigns it's parameters.

> `public` Command(string name, [Schema](../../validate/schema) schema, [ExecutableDelegate](#executable_delegate) function)

- **name**: string - command name.
- **schema**: [Schema](../../validate/schema) - schema to validate command arguments.
- **action**:  [ExecutableDelegate](../executable_delegate) - function to be executed by this command.


### Delegate Constructors
nitializes a delegate that invokes the specified instance method.

> ExecutableDelegate(string correlationId, [Parameters](../../run/parameters) args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../../run/parameters) - parameters


### Properties

#### Name
Gets the command name.

> `public` string Name { get; }

#### Schema
Gets the command schema.

> `public` [Schema](../../validate/schema) Schema { get; }


### Instance methods

#### ExecuteAsync
Executes the command. Before execution it validates [args](../../run/parameters) using the defined schema.

Raise [ApplicationException](../../errors/application_exception) when execution fails for whatever reason.  
See [Parameters](../../run/parameters)

> `public` Task\<object\> ExecuteAsync(string correlationId, [Parameters](../../run/parameters) args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) used to pass to this command for execution.
- **returns**: Task\<object\> - execution result


#### validate
Validates the command [args](../../run/parameters) before execution using the defined schema.

> `public` IList<[ValidationResult](../../validate/validation_result)> validate([Parameters](../../run/parameters) args)

- **args**: [Parameters](../../run/parameters) - parameters (arguments) used to validate using this command's schema.
- **returns**: IList<[ValidationResult](../../validate/validation_result)> - array of ValidationResults or an empty array (if no schema is set).

### Examples

```cs
var command = new Command("add", null, async(args) => {
var param1 = args.GetAsFloat("param1");
var param2 = args.GetAsFloat("param2");
return param1 + param2; });
var result = command.ExecuteAsync("123", Parameters.FromTuples(
"param1", 2,
"param2", 2 ));
Console.WriteLine(result.ToString()); 
// Console output: 4

```

### See also
- #### [ICommand](../icommand)
- #### [CommandSet](../command_set) 
