
```ts
import { ConfigParams } from 'pip-services3-commons-nodex';

export class MyIdentifiableMongoDbPersistence extends IdentifiableMongoDbPersistence<MyData, string> {
    public constructor() {
        super("mydata");
    }
}
let persistence = new MyIdentifiableMongoDbPersistence();

let config = ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 27017,
    "connection.database", "pipdatabase"
);

persistence.configure(config);
```
