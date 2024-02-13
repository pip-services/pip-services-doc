
```ts
import { IdentifiablePostgresPersistence } from "pip-services3-postgres-nodex";

export class HelloFriendPersistence2 extends IdentifiablePostgresPersistence<MyFriend, string> implements IMyDataPersistence {
    public constructor() {
        super("myfriends3");
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE IF NOT EXISTS ' + this._tableName + ' (id TEXT PRIMARY KEY, type TEXT, name TEXT)');
    }

    private composeFilter(filter: FilterParams): string {
        filter ??= new FilterParams();
        let type = filter.getAsNullableString("type");
        let content = filter.getAsNullableString("content");

        let filterCondition = "";
        if (type != null)
            filterCondition += "type='" + type + "'";
        if (content != null)
            filterCondition += "content='" + content + "'";

        return filterCondition;
    }

    public getOneRandom(correlationId: string, filter: FilterParams): Promise<MyFriend> {
        return super.getOneRandom(correlationId, this.composeFilter(filter));
    }
}

```

