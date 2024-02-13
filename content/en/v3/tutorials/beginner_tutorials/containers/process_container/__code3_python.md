
```python
from pip_services3_components.build import Factory 

class MyFactory(Factory):
    def __init__(self):
        super(MyFactory, self).__init__()

        ComponentADescriptor = Descriptor("myservice", "MyComponentA", "*", "*", "1.0")
        self.register_as_type(ComponentADescriptor, MyComponentA)
```
