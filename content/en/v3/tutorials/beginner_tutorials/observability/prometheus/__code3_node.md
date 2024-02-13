
```ts
import { PrometheusCounters } from "pip-services3-prometheus-nodex";

let counters = new PrometheusCounters();
counters.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

await counters.open(null);

let mycomponent = new MyComponentA(counters);
```