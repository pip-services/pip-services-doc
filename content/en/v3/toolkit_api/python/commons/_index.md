---
type: docs
title: "Commons module"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
no_list: true
weight: 30
description: > 
 
    Provides a set of tools used in microservices or backend services, and it is designed to facilitate
    symmetric implementation accross different programming languages.

---

### Packages

The module contains the following packages:

* [**Commands**](commands) - commands and events 
* [**Config**](config) - component configuration
* [**Convert**](convert) - portable value converters
* [**Data**](data) - data patterns
* [**Errors**](errors) - application errors
* [**Random**](random) - random data generators
* [**Refer**](refer) - component dependencies (Based on the inversion of control (IoC) pattern)
* [**Reflect**](reflect) - portable reflection utilities
* [**Run**](run) - component life-cycle management
* [**Validate**](validate) - validation rules



### Use

Install the Python package as
```bash
pip install pip-services3-commons
```

Then you are ready to start using the Pip.Services patterns to augment your backend code.

For instance, here is how you can implement a component, that receives configuration, get assigned references,
can be opened and closed using the patterns from this module.

```python
from pip_services3_commons.config import IConfigurable, ConfigParams
from pip_services3_commons.refer import IReferenceable, IReferences, Descriptor
from pip_services3_commons.run import IOpenable


class MyComponentA(IConfigurable, IReferenceable, IOpenable):
    _param1 = 'ABC'
    _param2 = 123
    _another_component: MyComponentB
    _opened = True

    def configure(self, config):
        self._param1 = config.get_as_string_with_default("param1", self._param1)
        self._param2 = config.get_as_integer_with_default("param2", self._param2)

    def set_references(self, references):
        self._another_component = references.get_one_required(
            Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        )

    def is_opened(self):
        return self._opened

    def open(self, correlation_id):
        self._opened = True
        print("MyComponentA has been opened.")

    def close(self, correlation_id):
        self._opened = False
        print("MyComponentA has been closed.")
```

Then here is how the component can be used in the code

```python
from pip_services3_commons.config import IConfigurable, ConfigParams
from pip_services3_commons.refer import References, Descriptor

my_component_A = MyComponentA()

# Configure the component
my_component_A.configure(ConfigParams.from_tuples(
    'param1', 'XYZ',
    'param2', 987
))

# Set references to the component
my_component_A.set_references(References.from_tuples(
    Descriptor("myservice", "mycomponent-b", "default", "default", "1.0"), my_component_B
))

# Open the component
my_component_A.open("123")

```
