
```python
class MyEventSet(CommandSet):
    _controller = None
    _event = None
    def __init__(self, controller):
        super(MyEventSet, self).__init__()
        self.add_event(self._event1())

    def _event1(self):
        return Event("event1")
```
