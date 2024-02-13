
```ts
import { ConfigParams, Descriptor, IReferenceable, IReferences, References } from "pip-services3-commons-nodex";
import { CachedCounters, ContextInfo } from "pip-services3-components-nodex";
import { PrometheusCounters, PrometheusMetricsService } from "pip-services3-prometheus-nodex";


export async function main() {

    let mycomponent = new MyComponentA();

    // Create an instance of PrometheusCounters and configure it
    let counters = new PrometheusCounters();
    counters.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080
    ));

    // Create an instance of PrometheusMetricsService and configure it
    let service = new PrometheusMetricsService();
    service.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080
    ));

    // Create the references
    let context_info = new ContextInfo();
    context_info.name = "Test";
    context_info.description = "This is a test container";

    let references = References.fromTuples(
        new Descriptor("pip-services", "context-info", "default", "default", "1.0"), context_info,
        new Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
        new Descriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service
    );

    service.setReferences(references);
    counters.setReferences(references);
    mycomponent.setReferences(references);

    // Connect the service and counters objects
    await service.open(null);
    await counters.open(null);
    
    //  Run "mymethod"
    var countExec = 2;

    for (let i = 0; i < countExec; i++)
        mycomponent.myMethod();

    // Get the counters
    let result = counters.getAll();

    // close counter, for closing Http client for prometheus
    await counters.close("123");
    // close service for closing Http server
    await service.close(null);
}

class MyComponentA implements IReferenceable {
    public consoleLog: boolean = true; // console log flag
    private counters: CachedCounters;

    public constructor() {

        if (this.consoleLog)
            console.log("MyComponentA has been created.");
    }
    public setReferences(references: IReferences): void {
        this.counters = references.getOneRequired<CachedCounters>(
            new Descriptor("*", "counters", "*", "*", "*")
        );
    }

    public myMethod(): void {
        // Count the number of calls to this method
        this.counters.increment("mycomponent.mymethod.calls", 1);

        // Measure execution time
        var timing = this.counters.beginTiming("mycomponent.mymethod.exec_time");

        // Task for this method: print greetings in two languages.
        try {
            if (this.consoleLog) {
                console.log("Hola amigo");
                console.log("Bonjour mon ami");
            }
        } finally {
            timing.endTiming();
        }
        // Save the values of counters
        this.counters.dump();
    }
}
```
