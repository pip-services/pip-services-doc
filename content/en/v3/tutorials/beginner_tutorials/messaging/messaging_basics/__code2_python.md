
```python
from pip_services3_messaging.queues import IMessageReceiver

class MyMessageReceiver(IMessageReceiver):
    def receive_message(self, envelop, queue):
        print("Received message: " + envelop.get_message_as_string())
```
