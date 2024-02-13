---
type: docs
title: "BuildReferencesDecorator"
linkTitle: "BuildReferencesDecorator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    References decorator that automatically creates missing components using
    available component factories upon component retrival.
---

**Implements:** [ReferencesDecorator](../references_decorator)


### Description
The BuildReferencesDecorator class allows you to create a references decorator that automatically creates missing components using availale component factories upon component retrieval.

### Constructors
Creates a new instance of the decorator.

> BuildReferencesDecorator(next_references: [IReferences](../../../commons/refer/ireferences), top_references: [IReferences](../../../commons/refer/ireferences))

- **next_references**: [IReferences](../../../commons/refer/ireferences) - the next references or decorator in the chain.
- **top_references**: [IReferences](../../../commons/refer/ireferences) - the decorator at the top of the chain.

### Instance methods

#### clarify_locator
Clarifies a component locator by merging two descriptors into one to replace missing fields.
That allows to get a more complete descriptor that includes all possible fields.

> clarify_locator(locator: Any, factory: [IFactory](../../../components/build/ifactory)): Any
- **locator**: Any - component locator to clarify.
- **factory**: [IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: Any - clarified component descriptor (locator)

#### create
Creates a component identified by the given locator.

> create(locator: Any, factory: [IFactory](../../../components/build/ifactory)): Any
- **locator**: Any - locator used to identify the component to be created.
- **factory**: [IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: Any - created component.

#### find
Gets all component references that match the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to True but no references are found.

> find(locator: Any, required: bool): List[Any]
- **locator**: Any - locator to find a reference by.
- **required**: bool - it True, it forces to raise an exception when no reference is found.
- **returns**: List[Any] - list with matching component references.


#### find_factory
Finds a factory capable creating a component by given descriptor
from the components registered in the references.

> find_factory(locator: Any): Optional[[IFactory](../../../components/build/ifactory)]
- **locator**: Any - locator of the component to be created.
- **returns**: Optional[[IFactory](../../../components/build/ifactory)] - found factory or None if no factory was found.
