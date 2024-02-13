
```python
# Pre-requisites
from bottle import request
from pip_services3_rpc.services import RestService
from pip_services3_commons.config import ConfigParams


class MyRestService(RestService):

    def __init__(self):
        super(MyRestService, self).__init__()
        self._base_route = "/my_service"

    # GET
    def my_page_get(self, name):
        result = f"{request.query.get('message')}, {name}"
        return self.send_result(result)

    # HEAD
    def my_page_head(self, name):
        return self.send_result(None)

    # POST
    def my_page_post(self, name):
        body_data = self._get_data()
        result = f"{request.query.get('message')}, {name}, " \
                 f'data:{body_data.get("data1")}'
        return self.send_result(result)

    # PUT
    def my_page_put(self, name):
        body_data = self._get_data()
        result = f"{request.query.get('message')}, {name}, " \
                 f'data:{body_data.get("data1")}'
        return self.send_result(result)

    # Route registration
    def register(self):
        self.register_route(method="GET", route="/my_page/<name>", schema=None, handler=self.my_page_get)
        self.register_route(method="HEAD", route="/my_page/<name>", schema=None, handler=self.my_page_head)
        self.register_route(method="POST", route="/my_page/<name>", schema=None, handler=self.my_page_post)
        self.register_route(method="PUT", route="/my_page/<name>", schema=None, handler=self.my_page_put)


# Instantiation
service = MyRestService()

# Configuration
service.configure(ConfigParams.from_tuples("connection.protocol", "http",
                                           "connection.host", "localhost",
                                           "connection.port", 15231))
# Connection
service.open("123")


```
