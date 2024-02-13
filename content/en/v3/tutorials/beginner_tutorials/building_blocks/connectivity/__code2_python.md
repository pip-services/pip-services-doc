
```python
from pip_services3_commons.config import ConfigParams, IConfigurable
from pip_services3_commons.refer import IReferenceable, IReferences
from pip_services3_components.auth import CredentialResolver


class MyPersistence(IConfigurable, IReferenceable):
    ...
    _credential_resolver = CredentialResolver()
    _username: str
    _password: str

    def configure(self, config: ConfigParams):
        ...
        self._connection_resolver.configure(config)

    def set_references(self, refs: IReferences):
        ...
        self._credential_resolver.set_references(refs)

        credentials = self._credential_resolver.lookup(None)
        self._username = credentials.get_username()
        self._password = credentials.get_password()


```
