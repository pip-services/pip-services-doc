---
type: docs
title: "Expressions module"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-expressions-gox"
no_list: true
weight: 100
description: > 
    Provides syntax and lexical analyzers, and an expression calculator optimized for repeated calculations.
---

### Packages

The module contains the following packages:
- [**Calculator**](calculator) - expression calculator
- [**CSV**](csv) - CSV tokenizer
- [**IO**](io) - input/output utility classes to support lexical analysis
- [**Mustache**](mustache) - Mustache templating engine
- [**Tokenizers**](tokenizers) - lexical analyzers to break incoming character streams into tokens
- [**Variants**](variants) - dynamic objects that can hold any values and operators for them


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-gox/pip-services3-expressions-gox@latest
```

The example below shows how to use expression calculator to dynamically
calculate user-defined expressions.

```golang
import (
    "fmt"

    calc "github.com/pip-services3-gox/pip-services3-expressions-gox/calculator"
    vars "github.com/pip-services3-gox/pip-services3-expressions-gox/calculator/variables"
    variants "github.com/pip-services3-gox/pip-services3-expressions-gox/variants"
)

...
calculator := calc.NewExpressionCalculator()

calculator.SetExpression("A + b / (3 - Max(-123, 1)*2)")

variables := vars.NewVariableCollection()
variables.Add(vars.NewVariable("A", variants.NewVariantFromInteger(1)))
variables.Add(vars.NewVariable("B", variants.NewVariantFromString("3")))

result, err := calculator.EvaluateWithVariables(variables)
if err != nil {
    fmt.Println("Failed to calculate the expression")
} else {
    fmt.Println("The result of the expression is " + result.AsString())
}
...
```

This is an example to process mustache templates.

```golang
import (
    "fmt"

    mustache "github.com/pip-services3-gox/pip-services3-expressions-gox/mustache"
)

template := mustache.NewMustacheTemplate()
template.SetTemplate("Hello, {{{NAME}}}{{#ESCLAMATION}}!{{/ESCLAMATION}}{{#unless ESCLAMATION}}.{{/unless}}")
result, err := template.EvaluateWithVariables(map[string]string{ "NAME": "Mike", "ESCLAMATION": "true" })
if err != nil {
    fmt.Println("Failed to evaluate mustache template")
} else {
    fmt.Println("The result of template evaluation is '" + result + "'")
}
```