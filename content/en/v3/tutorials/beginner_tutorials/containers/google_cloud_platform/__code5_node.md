
```ts
import { Descriptor, IReferenceable, IReferences } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";
import { CloudFunction } from "pip-services3-gcp-nodex";
import { HttpResponseSender } from "pip-services3-rpc-nodex";

export class MyController implements IReferenceable {
    public setReferences(references: IReferences): void {

    }

    public async greetings(name: string): Promise<string> {
        return "Hello, " + name + " !";
    }
}

export class MyFactory extends Factory {
    public constructor() {
        super();
        this.registerAsType(new Descriptor("mygroup", "controller", "default", "controller", "1.0"), MyController)
    }
}

export class MyCloudFunction extends CloudFunction {

    private _controller: MyController;

    public constructor() {
        super("mygroup", "MyGroup");
        this._configPath = "./config.yaml"
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '*'))
        this._factories.add(new MyFactory());
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
        // this._dependencyResolver.put('controller', new Descriptor('mygroup', 'controller', 'default', 'controller', '*'));
        // Comment out the next line of code when using the dependency resolver, uncomment for configuration file
        this._controller = references.getOneRequired(new Descriptor('mygroup', 'controller', 'default', 'controller', '*'));
    }

    private async action(req: any, res: any): Promise<void> {
        let name = req.body.name ?? 'default name';
        let result = await this._controller.greetings(name);
        
        HttpResponseSender.sendResult(req, res, result);
    }

    protected register() {
        this.registerAction('greetings', null, this.action);
    }
}
```