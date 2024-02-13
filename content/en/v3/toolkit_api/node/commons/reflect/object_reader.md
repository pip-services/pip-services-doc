---
type: docs
title: "ObjectReader"
linkTitle: "ObjectReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class that allows you to examine the properties of an object (property instrospection) and to dynamically read them.


---

### Description

The ObjectReader class allows you to examine the properties of an object (property instrospection) and to dynamically read them.

Important points

- In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects, this ObjectReader is also able to handle maps and arrays.
- For maps, properties are key-pairs identified by string keys.
- For arrays, properties are elements identified by integer indexes.
- This class has a symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, this ObjectReader treats all property names as case insensitive.

### Static methods

#### getProperties
Get values of all properties in a specified object
and returns them as a map.

The object can be a user defined object, map or array.
Returned properties correspondently are object properties,
map key-pairs or array elements with their indexes.

> `public static` getProperties(obj: any): any

- **obj**: any - object to get properties from.
- **returns**: any - map, containing the names of the object's properties and their values.

#### getProperty
Gets the value of an object's property specified by its name.

The object can be a user defined object, map or array.
The property name correspondently must be an object property,
map key or array index.

> `public static` getProperty(obj: any, name: string): any

- **obj**: any - object to read property from.
- **name**: string - name of the property to get.
- **returns**: any - property value or null if  the property doesn't exist or introspection failed.

#### getPropertyNames
Gets the names of all the properties implemented in a specified object.
 
The object can be a user defined object, map or array.
Returned property names correspondently are object properties,
map keys or array indexes.

> `public static` getPropertyNames(obj: any): string[]

- **obj**: any - object to introspect.
- **returns**: string[] - list with property names.

#### getValue
Gets an object's value.
If object is a wrapper, it unwraps the value behind it. 
Otherwise it returns the same object value.

> `public static` getValue(obj: any): any

- **obj**: any - object to unwrap..
- **returns**: any - actual (unwrapped) object value. 

#### hasProperty
Checks if an object has a property with a specified name.

The object can be a user defined object, map or array.
The property name correspondently must be an object property,
map key or array index.

> `public static` hasProperty(obj: any, name: string): boolean

- **obj**: any - object to introspect.
- **name**: string - name of the property to check.
- **returns**: boolean - true if the object has the property and false if it doesn't.

### Examples

```typescript
let myObj = new MyObject();
    
let properties = ObjectReader.getPropertyNames();
ObjectReader.hasProperty(myObj, "myProperty");
let value = PropertyReflector.getProperty(myObj, "myProperty");
     
let myMap = { key1: 123, key2: "ABC" };
ObjectReader.hasProperty(myMap, "key1");
let value = ObjectReader.getProperty(myMap, "key1");
    
let myArray = [1, 2, 3]
ObjectReader.hasProperty(myArrat, "0");
let value = ObjectReader.getProperty(myArray, "0");

```

### See also
- #### [PropertyReflector](../property_reflector)
