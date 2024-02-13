
```cs
using PipServices3.Commons.Config;

var persistence = new MyMySqlPersistence();
persistence.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", "3306",
    "connection.database", "pip",
    "credential.username", "user",
    "credential.password", "password"
));

```
