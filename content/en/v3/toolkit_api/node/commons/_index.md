---
type: docs
title: "Commons module"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
no_list: true
weight: 30
description: > 
 
    Provides a set of tools used in microservices or backend services, and it is designed to facilitate
    symmetric implementation accross different programming languages.

---


### Packages

The module contains the following packages:

* [**Commands**](commands) - commands and events 
* [**Config**](config) - component configuration
* [**Convert**](convert) - portable value converters
* [**Data**](data) - data patterns
* [**Errors**](errors) - application errors
* [**Random**](random) - random data generators
* [**Refer**](refer) - component dependencies (Based on the inversion of control (IoC) pattern)
* [**Reflect**](reflect) - portable reflection utilities
* [**Run**](run) - component life-cycle management
* [**Validate**](validate) - validation rules



### Use

Install the NPM package as
```bash
npm install pip-services3-commons-nodex --save
```

Then you are ready to start using the Pip.Services patterns to augment your backend code.

For instance, the code below shows how you can implement a component that receives a configuration, gets assigned references, and
can be opened and closed using the patterns available from this module.

```typescript
import { IConfigurable } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IOpenable } from 'pip-services3-commons-node';

export class MyComponentA implements IConfigurable, IReferenceable, IOpenable {
    private _param1: string = "ABC";
    private _param2: number = 123;
    private _anotherComponent: MyComponentB;
    private _opened: boolean = true;

    public configure(config: ConfigParams): void {
        this._param1 = config.getAsStringWithDefault("param1", this._param1);
        this._param2 = config.getAsIntegerWithDefault("param2", this._param2);
    }

    public setReferences(refs: IReferences): void {
        this._anotherComponent = refs.getOneRequired<MyComponentB>(
            new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        );
    }

    public isOpen(): boolean {
        return this._opened;
    }

    public async open(correlationId: string): Promise<void> {
        this._opened = true;
        console.log("MyComponentA has been opened.");
    }

    public async close(correlationId: string): Promise<void> {
        this._opened = true;
        console.log("MyComponentA has been closed.");
        callback(null);
    }

}
```

The code below shows how this component can be used in practice:

```typescript
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';

let myComponentA = new MyComponentA();

// Configure the component
myComponentA.configure(ConfigParams.fromTuples(
  'param1', 'XYZ',
  'param2', 987
));

// Set references to the component
myComponentA.setReferences(References.fromTuples(
  new Descriptor("myservice", "mycomponent-b", "default", "default", "1.0",) myComponentB
));

// Open the component
await myComponentA.open("123");
console.log("MyComponentA has been opened.")
```
