
See: [IUnreferenceable](../../../toolkit_api/node/commons/refer/iunreferenceable/)

```typescript
class SimpleController implements IReferenceable, IUnreferenceable {
    private _worker: any;
    
    constructor() {}

    public setReferences(references) {
        this._worker = references.getOneRequired(111)
    }
    public unsetReferences() {
        this._worker = null;
    }
    public greeting(name) {
        this._worker.do(LogLevel.Debug,  "Hello, " + (name) + "!");
    }
}
  

```

