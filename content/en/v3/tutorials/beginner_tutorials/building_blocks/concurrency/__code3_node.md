
```ts
import { ILock } from "pip-services3-components-nodex";

class MyComponent {
  private _lock: ILock;

  ...
  public processMyObject(correlationId: string, objectId: string) {
    // Acquire lock for 10 secs
    await this._lock.acquireLock(correlationId, "mycomponent:" + objectId, 10000, 10000);
    try {
      ...
    } finally {
      // Release lock
      await this._lock.releaseLock(correlationId, "mycomponent:" + objectId);
    }
  }
}
```
