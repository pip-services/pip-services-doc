---
type: docs
title: "TypeReflector"
linkTitle: "TypeReflector"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Helper class that allows you to examine the type of an object, and create instancies of objects based on their type.


---

### Description

The TypeReflector class allows you to examine the type of an object, and create instancies of objects based on their type.

Important points

- This class has a symmetric implementation across all languages supported by the Pip.Services toolkit and used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the TypeReflector class treats all type names as case insensitive.



### Methods

#### CreateInstance

Creates an instance of an object type specified by its name
and library where it is defined.

See [GetType](#gettype)
See [CreateInstanceByType](#createinstancebytype)

> func (c *TTypeReflector) CreateInstance(name string, pkg string, args ...any) (any, error)

- **name**: string - an object type name.
- **pkg**: string - a library (module) where object type is defined.
- **args**: any - arguments for the object constructor.
- **returns**: (any, error) - the created object instance.

#### CreateInstanceByType
Creates an instance of an object type.

> (c *TTypeReflector) CreateInstanceByType(typ refl.Type, args ...any) (any, error)

- **typ**: refl.Type - object type (factory function) to create.
- **args**: ...any - arguments for the object constructor.
- **returns**: (any, error) - created object instance.

#### CreateInstanceByDescriptor
Creates an instance of an object type specified by a type descriptor.

> (c *TTypeReflector) CreateInstanceByDescriptor(typ [*TypeDescriptor](../type_descriptor), args ...any) (any, error)

- **typ**: [*TypeDescriptor](../type_descriptor) - type descriptor that points to an object type
- **args**: ...any - arguments for the object constructor.
- **returns**: (any, error) - created object instance.

#### CreateInstanceByType
Creates an instance of an object type.

> (c *TTypeReflector) CreateInstanceByType(typ refl.Type, args ...any) (any, error)

- **type**: refl.Type - object type (factory function) to create.
- **args**: ...any - arguments for the object constructor.
- **returns**: (any, error) - created object instance.


#### GetType
Gets an object's type by its name and library where it is defined.

> (c *TTypeReflector) GetType(name string, pkg string) refl.Type

- **name**: string - object type name.
- **pkg**: string - library where the type is defined
- **returns**: refl.Type - object type or nil is the type wasn't found.

#### GetTypeByDescriptor
Gets an object's type by type descriptor.

> (c *TTypeReflector) GetTypeByDescriptor(typ [*TypeDescriptor](../type_descriptor)) refl.Type

- **typ**: [*TypeDescriptor](../type_descriptor) - type descriptor that points to an object type
- **returns**: refl.Type - object type or nil is the type wasn't found.

#### IsPrimitive!
**Note: this is not implemented for this language yet**

Checks if a value has a primitive type.

Primitive types are: numbers, strings, booleans, date and time.
Complex (non-primitive types are): objects, maps and arrays.  
See [TypeConverter.ToTypeCode](../../convert/type_converter/#totypecode), [TypeCode](../../convert/type_code)


### Examples

```go
descriptor := NewTypeDescriptor("MyObject", "mylibrary")
TypeReflector.GetTypeByDescriptor(descriptor)
myObj = TypeReflector.CreateInstanceByDescriptor(descriptor)

```

### See also
- #### [TypeDescriptor](../type_descriptor)
