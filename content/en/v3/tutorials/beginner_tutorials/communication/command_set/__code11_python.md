
```python
class MyListener(IEventListener):
    def on_event(self, correlation_id, event, args):
        print("Fired event name " + event.get_name())

class MyEventSet(CommandSet):
    _controller = None
    _event = None
    def __init__(self, controller):
        super(MyEventSet, self).__init__()
        self.add_events([self._event2(),self._event3()])
        self.add_listener(self._listener1())
    
    def _event2(self):
        return Event("event2")
        
    def _event3(self):
        return Event("event3")
    
    def _listener1(self):
        return MyListener()
```
