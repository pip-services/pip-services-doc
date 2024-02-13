
See: [IStringdentifiable](../../../toolkit_api/node/commons/data/istring_identifiable/)

```ts
import { IStringIdentifiable } from 'pip-services3-commons-nodex';

export class Dummy implements IStringIdentifiable {
    public id: string;
    public key: string;
    public content: string;
}

let dummy1: Dummy = {id:'1', key:'key 1', content:'content 1'};
let dummy2: Dummy = { id: 'id 1', key: "key 2", content: "Content 1" };
let dummy3: Dummy = {id: null, key: 'key 3', content:'content 3'};
```
