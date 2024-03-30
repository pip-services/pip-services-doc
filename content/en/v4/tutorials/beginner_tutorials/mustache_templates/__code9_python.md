
```python
variable = {
    'NAME': 'Joe ',
    'SURNAME': 'Smith',
    'ESCLAMATION': None
}

template = MustacheTemplate()
template.template = "Hello Mr, {{{NAME}}} {{{SURNAME}}}"
template.default_variables = variable
result = template.evaluate()
print(result)
```
