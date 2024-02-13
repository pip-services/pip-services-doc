
```ts
import { Factory } from "pip-services3-components-nodex";

class MyClassFactory extends Factory {
    public constructor() {
        super();

        var ComponentADescriptor = new Descriptor("myservice", "mycomponentA", "default", "*", "1.0");
        var ComponentBDescriptor = new Descriptor("myservice", "mycomponent-b", "default", "*", "1.0");

        this.registerAsType(ComponentADescriptor, MyComponentA);
        this.registerAsType(ComponentBDescriptor, MyComponentB);
    }
}

```

