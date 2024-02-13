
```ts
import { FilterParams } from "pip-services3-commons-nodex";
import { IdentifiableMySqlPersistence } from "pip-services3-mysql-nodex";

export class HelloFriendPersistence extends IdentifiableMySqlPersistence<MyFriend, string> {
    public constructor() {
        super("myfriends3");
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE IF NOT EXISTS `' + this._tableName + '` (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)');
    }

    private composeFilter(filter: FilterParams): string {
        filter ??= new FilterParams();
        let type = filter.getAsNullableString("type");
        let name = filter.getAsNullableString("name");

        let filterCondition = "";
        if (type != null)
            filterCondition += "type='" + type + "'";
        if (name != null)
            filterCondition += "name='" + name + "'";

        return filterCondition;
    }

    public getOneRandom(correlationId: string, filter: FilterParams): Promise<MyFriend> {
        return super.getOneRandom(correlationId, this.composeFilter(filter));
    }
}

```
