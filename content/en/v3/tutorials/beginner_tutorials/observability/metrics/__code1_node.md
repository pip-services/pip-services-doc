
```ts
import { ICounters } from "pip-services3-components-nodex";

export class MyComponent {
    private _consoleLog: boolean = true;

    private counters: ICounters;

    public constructor(counters: ICounters) {
        this.counters = counters;

        if (this._consoleLog) {
            console.log("MyComponent has been created.");
        }
    }

    public mymethod(): void {
        this.counters.increment("mycomponent.mymethod.calls", 1);
        let timing = this.counters.beginTiming("mycomponent.mymethod.exec_time");

        try {
            if (this._consoleLog) {
                console.log("Hola amigo");
                console.log("Bonjour mon ami");
            }
        } finally {
            timing.endTiming();
        }
    }
}
```
