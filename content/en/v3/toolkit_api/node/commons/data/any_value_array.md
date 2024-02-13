---
type: docs
title: "AnyValueArray"
linkTitle: "AnyValueArray"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Cross-language implementation of a dynamic array object that can hold values of any type.
    It also provides methods to convert the stored values to different types.
---

**Extends:** Array\<any\> 

**Implements:** [ICloneable](../icloneable)

### Description

The AnyValueArray class provides a cross-language implementation of a dynamic array object that can hold values of any type. In addition, it provides several methods to convert the stored values to different types, such as boolean, integer or datetime.

### Constructors
Creates a new instance of the array and assigns its value.

> `public` constructor(values: any[] = null)

- **values**: any[] - (optional) values used to initialize this array.


### Instance methods

#### append
Appends new elements to this array.

> `public` append(elements: any[]): void

- **elements**: any[] - list of elements to be added.


#### clear
Clears this array by removing all its elements.

> `public` clear(): void


#### clone
Creates a binary clone of this object.

> `public` clone(): any

- **returns**: any - clone of this object.


#### contains
Checks if this array contains a value.
The check uses direct comparison between the elements of the array and the specified value.

> `public` contains(value: any): boolean

- **value**: any - value to be checked
- **returns**: boolean - true if this array contains the value or false otherwise.


#### containsAsType
Checks if this array contains a value.
The check converts elements and the value to type specified by type code before comparison.   
See [TypeConverter.toType](../../convert/type_converter/#totype), [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` containsAsType\<T\>(typeCode: [TypeCode](../../convert/type_code), value: any): boolean

- **typeCode**: [TypeCode](../../convert/type_code) - type code that defines a type to convert values before comparison
- **value**: any - value to be checked
- **returns**: boolean - true if this array contains the value or false otherwise.


#### get
Gets an array element specified by its index.

> `public` get(index: number): any

- **index**: number - index of the element to get.
- **returns**: any - value of the array element.


#### getAsArray
Converts array element into an AnyValueArray or returns an empty AnyValueArray if the conversion is not possible.

> `public` getAsArray(index: number): [AnyValueArray](../any_value_array)

- **index**: number - index of the element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if the conversion is not supported. 


#### getAsArrayWithDefault
Converts array element into an AnyValueArray or returns a givne default value if conversion is not possible.

> `public` getAsArrayWithDefault(index: number, defaultValue: [AnyValueArray](../any_value_array)): [AnyValueArray](../any_value_array)

- **index**: number - index of the element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if the conversion is not supported.


#### getAsBoolean
Converts an array's element into a boolean or returns false if the conversion is not possible.

> `public` getAsBoolean(index: number): boolean

- **index**: number - index of the element to get.
- **returns**: boolean - boolean value of the element or false if the conversion is not supported. 


#### getAsBooleanWithDefault
Converts an array's element into a boolean or returns a given default value if the conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` getAsBooleanWithDefault(index: number, defaultValue: boolean): boolean

- **index**: number - index of the element to get.
- **defaultValue**: boolean - default value
- **returns**: boolean - boolean value of the element or default value if the conversion is not supported.


#### getAsDateTime
Converts an array's element into Date or returns the current date if the conversion is not possible.

> `public` getAsDateTime(index: number): Date

- **index**: number - index of the element to get.
- **returns**: Date - Date value ot the element or the current date if the conversion is not supported. 


#### getAsDateTimeWithDefault
Converts an array's element into a Date or returns a given default value if the conversion is not possible.  
See [DateTimeConverter.toDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` getAsDateTimeWithDefault(index: number, defaultValue: Date): Date

- **index**: number - index of the element to get.
- **defaultValue**: Date - default value
- **returns**: Date - Date value ot the element or given default value if theconversion is not supported. 


#### getAsDouble
Converts an array's element into a double or returns 0 if the conversion is not possible.

> `public` getAsDouble(index: number): number

- **index**: number - index of element to get.
- **returns**: number - double value of the element or 0 if the conversion is not supported. 


#### getAsDoubleWithDefault
Converts an array's element into a double or returns a given default value if the conversion is not possible.

> `public` getAsDoubleWithDefault(index: number, defaultValue: number): number

- **index**: number - index of the element to get.
- **defaultValue**: number - default value
- **returns**: number - double value of the element or given default value if the conversion is not supported.

#### getAsFloat
Converts an array's element into a float or returns 0 if the conversion is not possible.

> `public` getAsFloat(index: number): number

- **index**: number - index of the element to get.
- **returns**: number - float value of the element or 0 if the conversion is not supported.


#### getAsFloatWithDefault
Converts an array's element into a float or returns a given default value if the conversion is not possible.   
See [FloatConverter.toFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` getAsFloatWithDefault(index: number, defaultValue: number): number

- **index**: number - index of the element to get.
- **defaultValue**: number - default value
- **returns**: number - float value of the element or given default value if the conversion is not supported. 


#### getAsInteger
Converts an array's element into an integer or returns 0 if the conversion is not possible.

> `public` getAsInteger(index: number): number

- **index**: number - index of the element to get.
- **returns**: number - integer value of the element or 0 if the conversion is not supported. 


#### getAsIntegerWithDefault
Converts an array's element into an integer or returns a given default value if the conversion is not possible.  
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` getAsIntegerWithDefault(index: number, defaultValue: number): number

- **index**: number - index of the element to get.
- **defaultValue**: number - default value
- **returns**: number - integer value of the element or default value if the conversion is not supported.


#### getAsLong
Converts an array's element into a long or returns 0 if the conversion is not possible.

> `public` getAsLong(index: number): number

- **index**: number - index of the element to get.
- **returns**: number - long value ot the element or 0 if the conversion is not supported.


#### getAsLongWithDefault
Converts an array's element into a long or returns a given default value if the conversion is not possible.  
See [LongConverter.toLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> `public` getAsLongWithDefault(index: number, defaultValue: number): number

- **index**: number - index of the element to get.
- **defaultValue**: number - default value
- **returns**: number - long value of the element or given default value if the conversion is not supported. 


#### getAsMap
Converts an array's element into an AnyValueMap object or returns an empty AnyValueMap object if the conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> `public` getAsMap(index: number): [AnyValueMap](../any_value_map)

- **index**: number - index of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or empty AnyValueMap object if conversion is not supported.


#### getAsMapWithDefault
Converts an array's element into an AnyValueMap oject or returns a given default value if the conversion is not possible.

> `public` getAsMapWithDefault(index: number, defaultValue: [AnyValueMap](../any_value_map)): [AnyValueMap](../any_value_map)

- **index**: number - index of element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or given default value if the conversion is not supported.


#### getAsNullableArray
Converts an array's element into an AnyValueArray object or returns null if the conversion is not possible.

> `public` getAsNullableArray(index: number): [AnyValueArray](../any_value_array)

- **index**: number - index of the element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or null if the conversion is not supported. 


#### getAsNullableBoolean
Converts an array's element into a boolean or returns null if the conversion is not possible.  
See [BooleanConverter.toNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> `public` getAsNullableBoolean(index: number): boolean

- **index**: number - index of the element to get.
- **returns**: boolean - boolean value of the element or null if the conversion is not supported.


#### getAsNullableDateTime
Converts an array's element into a Date or returns null if the conversion is not possible.  
See [DateTimeConverter.toNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> `public` getAsNullableDateTime(index: number): Date

- **index**: number - index of the element to get.
- **returns**: Date - Date value of the element or null if the conversion is not supported. 


#### getAsNullableDouble
Converts an array's element into a double or returns null if the conversion is not possible.  
See [DoubleConverter.toNullableDouble](../../convert/double_converter/#tonullabledouble)

> `public` getAsNullableDouble(index: number): number

- **index**: number - index of the element to get.
- **returns**: number - double value of the element or null if the conversion is not supported.


#### getAsNullableFloat
Converts an array's element into a float or returns null if the conversion is not possible.  
See [FloatConverter.toNullableFloat](../../convert/float_converter/#tonullablefloat)

> `public` getAsNullableFloat(index: number): number

- **index**: number - index of the element to get.
- **returns**: number - float value of the element or null if the conversion is not supported. 


#### getAsNullableInteger
Converts an array's element into a float or returns null if the conversion is not possible.  
See [IntegerConverter.toNullableInteger](../../convert/integer_converter/#tonullableinteger)

> `public` getAsNullableInteger(index: number): number

- **index**: number - index of the element to get.
- **returns**: number - integer value of the element or null if the conversion is not supported. 


#### getAsNullableLong
Converts an array's element into a long or returns null if the conversion is not possible.  
See [LongConverter.toNullableLong](../../convert/long_converter/#tonullablelong)

> `public` getAsNullableLong(index: number): number

- **index**: number - index of the element to get.
- **returns**: number - long value of the element or null if the conversion is not supported.


#### getAsNullableMap
Converts an array's element into a long or returns null if the conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap](../any_value_map/#fromvalue)

> `public` getAsNullableMap(index: number): [AnyValueMap](../any_value_map)

- **index**: number - index of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if the conversion is not supported. 


#### getAsNullableString
Converts an array's element into a string or returns null if the conversion is not possible.  
See [StringConverter.toNullableString](../../convert/string_converter/#tonullablestring),

> `public` getAsNullableString(index: number): string

- **index**: number - index of the element to get.
- **returns**: string - string value of the element or null if the conversion is not supported.


#### getAsNullableType
Converts an array's element into a value defined by a specified typecode.
If conversion is not possible, it returns null.  
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` getAsNullableType\<T\>(type: [TypeCode](../../convert/type_code), index: number): T

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **index**: number - index of the element to get.
- **returns**: T - element value defined by the typecode or null if the conversion is not supported. 


#### getAsObject
Gets the value stored in an array element without any conversion.
When the element's index is not defined, it returns the entire array value.

> `public` getAsObject(index: number = undefined): any 

- **index**: number - (optional) index of the element to get
- **returns**: any - element value or value of the array when the index is not defined.


#### getAsString
Converts an array's element into a string or returns *""* if the conversion is not possible.

> `public` getAsString(index: number): string

- **index**: number - index of the element to get.
- **returns**: string - string value ot the element or *""* if the conversion is not supported. 


#### getAsStringWithDefault
Converts an array's element into a string or returns a given default value if the conversion is not possible.  
See [StringConverter.toStringWithDefault](../../convert/string_converter/#tostringwithdefault)

> `public` getAsStringWithDefault(index: number, defaultValue: string): string

- **index**: number - index of the element to get.
- **defaultValue**: string - default value
- **returns**: string - string value of the element or given default value if the conversion is not supported.


#### getAsType
Converts an array's element into a value defined by a specified typecode.
If conversion is not possible, it returns a given default value for the specified type.

> `public` getAsType\<T\>(type: [TypeCode](../../convert/type_code), index: number): T

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result.
- **index**: number - index of the element to get.
- **returns**: T - element value defined by the typecode or given default if the conversion is not supported.


#### getAsTypeWithDefault
Converts an array's element into a value defined by a specified typecode.
If conversion is not possible it returns default value for the specified type.  
See [TypeConverter.toTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> `public` getAsTypeWithDefault\<T\>(type: [TypeCode](../../convert/type_code), index: number, defaultValue: T): T 

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **index**: number - index of the element to get.
- **defaultValue**: T - default value
- **returns**: T - element value defined by the typecode or given default value if the conversion is not supported. 


#### getAsValue
Converts an array's element into an AnyValue object or returns an empty AnyValue object if the conversion is not possible.  
See [AnyValue](../any_value), [AnyValues.constructors](../any_value/#constructors)

> `public` getAsValue(index: number): [AnyValue](../any_value)

- **index**: number - index of element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or empty AnyValue object if the conversion is not supported. 


#### put
Puts a new value into an array's element specified by its index. 

> `public` put(index: number, value: any): void

- **index**: number - index of the element to put.
- **value**: any - new value for the array's element.


#### remove
Removes an array's element specified by its index

> `public` remove(index: number): void

- **index**: number - index of the element to remove.


#### setAsObject
Sets a new value to an array's element specified by its index.
When the index is not defined, it resets the entire array value.
This method has double purpose because method overrides are not supported in JavaScript.  
See [ArrayConverter.toArray](../../convert/array_converter/#toarray)

> `public` setAsObject(index: any, value: any = undefined): void

- **index**: number - (optional) index of the element to set.
- **value**: any - new element or array's value.


#### toString
Gets a string representation of the object.
The result is a comma-separated list of string representations of individual elements as
*"value1,value2,value3"*  
See [StringConverter.toString](../../convert/string_converter/#tostring)

> `public` toString(): string

- **returns**: string - string representation of the object.


### Static methods

#### fromString
Splits a specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.

> `public static` fromString(values: string, separator: string, removeDuplicates: boolean = false): [AnyValueArray](../any_value_array)

- **values**: string - string value to be split and assigned to an AnyValueArray object.
- **separator**: string - separator to split the string.
- **removeDuplicates**: boolean - (optional) true to remove duplicated elements.
- **returns**: [AnyValueArray](../any_value_array) - newly created AnyValueArray object.


#### fromValue
Splits a specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.  
See [ArrayConverter.toNullableArray](../../convert/array_converter/#tonullablearray)

> `public static` fromValue(value: any): [AnyValueArray](../any_value_array)

- **values**: any - value to be converted
- **returns**: [AnyValueArray](../any_value_array) - newly created AnyValueArray object.


#### fromValues
Creates a new AnyValueArray object from a list of values.

> `public static` fromValues(...values: any[]): [AnyValueArray](../any_value_array)

- **values**: any[] - list of values used to initialize the created AnyValueArray object.
- **returns**: [AnyValueArray](../any_value_array) - newly created AnyValueArray object.




### Examples
```typescript
let value1 = new AnyValueArray([1, "123.456", "2018-01-01"]);
   
value1.getAsBoolean(0);   // Result: true
value1.getAsInteger(1);   // Result: 123
value1.getAsFloat(1);     // Result: 123.456
value1.getAsDateTime(2);  // Result: new Date(2018,0,1)
```


### See also
- #### [StringConverter](../../convert/string_converter)
- #### [TypeConverter](../../convert/type_converter)
- #### [StringConverter](../../convert/string_converter)
- #### [BooleanConverter](../../convert/boolean_converter)
- #### [IntegerConverter](../../convert/integer_converter)
- #### [LongConverter](../../convert/long_converter)
- #### [DoubleConverter](../../convert/double_converter)
- #### [FloatConverter](../../convert/float_converter)
- #### [DateTimeConverter](../../convert/date_time_converter)
- #### [ICloneable](../icloneable)
