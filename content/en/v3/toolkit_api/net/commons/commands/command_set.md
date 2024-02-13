---
type: docs
title: "CommandSet"
linkTitle: "CommandSet"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Contains a set of commands and events supported by a [commandable](../icommandable) object.
    The CommandSet supports command interceptors and command call chains.
    
 
    
---

### Description

The CommandSet class allows you to create a set of commands and events supported by a [commandable](../icommandable) object. In addition, it supports command interceptors and command call chains.

**Important points**

- CommandSets can be used as an alternative commandable interface to a business object.
- This class can be used to auto generate multiple external services for a business object.

### Constructors

Creates an empty CommandSet object.

> CommandSet()


### Properties

#### Commands
Gets all commands registered in this command set.
See [ICommand](../icommand).

> `public` List<[ICommand](../icommand)> Commands { get; }


#### Events
Gets all events registred in this command set.  
See [IEvent](../ievent).

> `public` List<[IEvent](../ievent)> Events { get; }


### Instance methods

#### AddCommand
Adds a [command](../icommand) to this command set.  
See [ICommand](../icommand).

> `public` void AddCommand([ICommand](../icommand) command)

- **command**: [ICommand](../icommand) - command to add.

#### AddCommandSet
Adds all of the commands and events from a specified [command set](../command_set)
into this one. 

> `public` void AddCommandSet([CommandSet](../command_set) commandSet)

- **commandSet**: [CommandSet](../command_set) - CommandSet to add.

#### AddCommands
Adds multiple [commands](../icommand) to this command set.  
See [ICommand](../icommand).

> `public` void AddCommands(IEnumerable<[ICommand](../icommand)> commands)

- **commands**: IEnumerable<[ICommand](../icommand)> - array of commands to add.

#### AddEvent
Adds an [event](../ievent) to this command set.  
See [IEvent](../ievent).

> `public` void AddEvent([IEvent](../ievent) ev) 

- **ev**: [IEvent](../ievent) - event to add.

#### AddEvents
Adds multiple [events](../ievent) to this command set.  
See [IEvent](../ievent).

> `public` void AddEvents(IEnumerable<[IEvent](../ievent)> events)

- **events**: IEnumerable<[IEvent](../ievent)> - array of events to add.

#### AddInterceptor
Adds a [command interceptor](../icommand_interceptor) to this command set.

> `public` void AddInterceptor([ICommandInterceptor](../icommand_interceptor) intercepter)

- **intercepter**: [ICommandInterceptor](../icommand_interceptor) interceptor to add.

#### AddListener
Adds a [listener](../ievent_listener) to receive notifications on fired events.  
See [IEventListener](../ievent_listener).

> `public` void AddListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener to add.

#### ExecuteAsync
Executes a [command](../icommand) specificed by its name.  
See [ICommand](../icommand), [Parameters](../../run/parameters).

> `public` Task<\object\> ExecuteAsync(string correlationId, string command,  [Parameters](../../run/parameters) args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **command**: string - name of that command that is to be executed.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Task<\object\> - execution result

#### FindCommand
Searches for a command by its name.
See [ICommand](../icommand).

> `public` [ICommand](../icommand) FindCommand(string command)

- **command**: [ICommand](../icommand) - name of the command to search for.
- **returns**: [ICommand](../icommand) - command, whose name matches the provided name.

#### FindEvent
Searches for an event by its name in this command set.

> `public` [IEvent](../ievent) FindEvent(string ev)

- **ev**: string - name of the event to search for.
- **returns**: [IEvent](../ievent) - event whose name matches the provided name.

#### NotifyAsync
Fires event specified by its name and notifies all registered
[listeners](../ievent_listener).

> `public` Task NotifyAsync(correlationId: string, ev: string, args: [Parameters](../../run/parameters))

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ev**: string - name of the event that is to be fired.
- **args**: [Parameters](../../run/parameters) - event arguments (parameters).



#### RemoveListener
Removes a previosly added [listener](../ievent_listener).  
See [IEventListener](../ievent_listener).

> `public` void RemoveListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener to remove.


#### validate
Validates [args](../../run/parameters) for a command specified by its name using a defined schema.
If the validation schema is not defined, then the methods returns no errors.
It returns a validation error if the command is not found.


> IList<[ValidationResult](../../validate/validation_result)> validate(string command, [Parameters](../../run/parameters) args)

- **command**: string - name of the command for which the 'args' must be validated.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to validate.
- **returns**: IList<[ValidationResult](../../validate/validation_result)> - array of ValidationResults. If no command is found by the given name, then the returned array of ValidationResults will contain a single entry, whose type will be [ValidationResultType.Error](../../validate/validation_result_type).



### Examples

```cs
public class MyDataCommandSet: CommandSet 
{
    private IMyDataController _controller;
    /// 
    public MyDataCommandSet(IMyDataController controller)  // Any data controller interface
    {
        base();
        this._controller = controller;
        this.addCommand(this.MakeGetMyDataCommand()); }
    
        private ICommand MakeGetMyDataCommand() 
        {
            return new Command(
            "get_mydata", 
            null,
            async(correlationId, args)=> {
                String param = args.getAsString("param");
                return this._controller.getMyData(correlationId, param);  });
        }
}
```

### See also
- #### [Command](../command)
- #### [ICommandable](../icommandable)
- #### [Event](../event)
