---
type: docs
title: "AnyValueMap"
linkTitle: "AnyValueMap"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Cross-language implementation of a dynamic map (dictionary) object that can hold values of any type.
    It also provides several methods to convert the stored values to different types.
---

**Implements:** [ICloneable](../icloneable), dict

### Description

The AnyValueMap class provides a cross-language implementation of a dynamic map (dictionary) object that can hold values of any type. In addition, it provides several methods to convert the stored values to different types, such as boolean, integer or datetime.

### Constructors
Creates a new instance of the map and assigns its value.

> AnyValueMap(values: Any = None)

- **values**: Any = None - (optional) values to initialize this map.


### Instance methods

#### append
Appends new elements to this map.

> append(map: Any)

- **map**: Any - a map with elements to be added.


#### clear
Clears this map by removing all its elements.

> clear()


#### clone
Creates a binary clone of this object.

> clone(): Any

- **returns**: Any - a clone of this object.


#### get
Gets a map element specified by its key.

> get(key: str): Any

- **key**: str - a key of the element to get.
- **returns**: Any - the value of the map element.


#### get_as_array
Converts map element into an AnyValueArray or returns empty AnyValueArray if conversion is not possible.  
See [AnyValueArray](../any_value_array), [AnyValueArray.from_value](../any_value_array/#from_value)

> get_as_array(key: str): [AnyValueArray](../any_value_array)

- **key**: str - a key of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if conversion is not supported. 



#### get_as_array_with_default
Converts map element into an AnyValueArray or returns default value if conversion is not possible.  
See [AnyValueArray](../any_value_array)

> get_as_array_with_default(key: str, default_value: [AnyValueArray](../any_value_array)): [AnyValueArray](../any_value_array)

- **key**: str - a key of element to get.
- **default_value**: [AnyValueArray](../any_value_array) - the default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if conversion is not supported.


#### get_as_boolean
Converts map element into a boolean or returns false if conversion is not possible.

> get_as_boolean(key: str): bool

- **key**: str - a key of element to get.
- **returns**: bool - value of the element or false if conversion is not supported. 


#### get_as_boolean_with_default
Converts map element into a boolean or returns default value if conversion is not possible.  
See [BooleanConverter.to_boolean_with_default](../../convert/boolean_converter/#to_boolean_with_default).

> get_as_boolean_with_default(key: str, default_value: bool): bool

- **key**: str - a key of element to get.
- **default_value**: bool - the default value.
- **returns**: bool - boolean value of the element or default value if conversion is not supported. 


#### get_as_datetime
Converts map element into a Date or returns the current date if conversion is not possible.

> get_as_datetime(key: str): datetime

- **key**: str - a key of element to get.
- **returns**: datetime - Date value of the element or the current date if conversion is not supported.



#### get_as_datetime_with_default
Converts map element into a Date or returns default value if conversion is not possible.  
See [DateTimeConverter.to_datetime_with_default](../../convert/date_time_converter/#to_datetime_with_default).

> get_as_datetime_with_default(key: str, default_value: datetime): datetime

- **key**: str - a key of element to get.
- **default_value**: datetime - the default value
- **returns**: datetime - Date value of the element or default value if conversion is not supported. 


#### get_as_double
Converts map element into a double or returns 0 if conversion is not possible.

> get_as_double(key: str): float

- **key**: str - a key of element to get.
- **returns**: float - double value of the element or 0 if conversion is not supported. 


#### get_as_double_with_default
Converts map element into a double or returns default value if conversion is not possible.  
See [DoubleConverter.to_double_with_default](../../convert/double_converter/#to_double_with_default).

> get_as_double_with_default(key: str, default_value: float): float

- **key**: str - a key of element to get.
- **default_value**: float - the default value.
- **returns**: float - double value of the element or default value if conversion is not supported. 


#### get_as_float
Converts map element into a float or returns 0 if conversion is not possible.   

> get_as_float(key: str): float

- **key**: str - a key of element to get.
- **returns**: float - float value of the element or 0 if conversion is not supported. 


#### get_as_float_with_default
Converts map element into a flot or returns default value if conversion is not possible.  
See [FloatConverter.to_float_with_default](../../convert/float_converter/#to_float_with_default).

> get_as_float_with_default(key: str, default_value: float): float

- **key**: str - a key of element to get.
- **default_value**: float - the default value
- **returns**: float - flot value of the element or default value if conversion is not supported. 


#### get_as_integer
Converts map element into an integer or returns 0 if conversion is not possible.   

> get_as_integer(key: str): int

- **key**: str - a key of element to get.
- **returns**: int - integer value of the element or 0 if conversion is not supported. 



#### get_as_integer_with_default
Converts map element into an integer or returns default value if conversion is not possible.  
See [IntegerConverter.to_integer_with_default](../../convert/integer_converter/#to_integer_with_default)

> get_as_integer_with_default(key: str, default_value: int): int

- **key**: str - a key of element to get.
- **default_value**: int - the default value
- **returns**: int - integer value of the element or default value if conversion is not supported.


#### get_as_long
Converts map element into a long or returns 0 if conversion is not possible.  
See [IntegerConverter.to_integer_with_default](../../convert/integer_converter/#to_integer_with_default)

> get_as_long(key: str): float

- **key**: str - a key of element to get.
- **returns**: float - long value of the element or 0 if conversion is not supported. 



#### get_as_long_with_default
Converts map element into a long or returns default value if conversion is not possible.  
See [LongConverter.to_long_with_default](../../convert/long_converter/#to_long_with_default)

> get_as_long_with_default(key: str, default_value: float): float

- **key**: str - a key of element to get.
- **default_value**: float - the default value
- **returns**: float - long value of the element or default value if conversion is not supported.


#### get_as_map
Converts map element into an AnyValueMap or returns empty AnyValueMap if conversion is not possible.    
See [LongConverter.to_long_with_default](../../convert/long_converter/#to_long_with_default)

> get_as_map(key: str): [AnyValueMap](../any_value_map)

- **key**: str - a key of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or empty AnyValueMap if conversion is not supported. 


#### get_as_map_with_default
Converts map element into an AnyValueMap or returns default value if conversion is not possible.

> get_as_map_with_default(key: str, default_value: [AnyValueMap](../any_value_map)): [AnyValueMap](../any_value_map)

- **key**: str - a key of element to get.
- **default_value**: [AnyValueMap](../any_value_map) - the default value.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if conversion is not supported. 


#### get_as_nullable_array
Converts map element into an AnyValueArray or returns None if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.from_value](../any_value_map/#from_value)

> get_as_nullable_array(key: str): [AnyValueMap](../any_value_map)

- **key**: str - a key of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueArray value of the element or None if conversion is not supported. 


#### get_as_nullable_boolean
Converts map element into a boolean or returns None if conversion is not possible.  
See [BooleanConverter.to_nullable_boolean](../../convert/boolean_converter/#to_nullable_boolean).

> get_as_nullable_boolean(key: str): Optional[bool]

- **key**: str - a key of element to get.
- **returns**: Optional[bool] - boolean value of the element or None if conversion is not supported. 


#### get_as_nullable_datetime
Converts map element into a long or returns default value if conversion is not possible.  
See [DateTimeConverter.to_nullable_datetime](../../convert/date_time_converter/#to_nullable_datetime).

> get_as_nullable_datetime(key: str): Optional[datetime]

- **key**: str - a key of element to get.
- **returns**: Optional[datetime] - Date value of the element or None if conversion is not supported. 


#### get_as_nullable_double
Converts map element into a double or returns None if conversion is not possible.  
See [DoubleConverter.to_nullable_double](../../convert/double_converter/#to_nullable_double)

> get_as_nullable_double(key: str): Optional[float]

- **key**: str - a key of element to get.
- **returns**: Optional[float] - double value of the element or None if conversion is not supported. 


#### get_as_nullable_float
Converts map element into a float or returns None if conversion is not possible. 
See [FloatConverter.to_nullable_float](../../convert/float_converter/#to_nullable_float).

> get_as_nullable_float(key: str): Optional[float]

- **key**: str - a key of element to get.
- **returns**: Optional[float] - float value of the element or None if conversion is not supported. 


#### get_as_nullable_integer
Converts map element into an integer or returns None if conversion is not possible.  
See [IntegerConverter.to_nullable_integer](../../convert/integer_converter/#to_nullable_integer)

> get_as_nullable_integer(key: str): Optional[int]

- **key**: str - a key of element to get.
- **returns**: Optional[int] - integer value of the element or None if conversion is not supported. 


#### get_as_nullable_long
Converts map element into a long or returns None if conversion is not possible.  
See [LongConverter.to_nullable_long](../../convert/long_converter/#to_nullable_long)

> get_as_nullable_long(key: str): Optional[float]

- **key**: str - a key of element to get.
- **returns**: Optional[float] - long value of the element or None if conversion is not supported. 


#### get_as_nullable_map
Converts map element into an AnyValueMap or returns None if conversion is not possible.  

> get_as_nullable_map(key: str): Optional[[AnyValueMap](../any_value_map)]

- **key**: str - a key of element to get.
- **returns**: Optional[[AnyValueMap](../any_value_map)] - AnyValueMap value of the element or None if conversion is not supported. 


#### get_as_nullable_string
Converts map element into a string or returns None if conversion is not possible.    
See [StringConverter.to_nullable_string](../../convert/string_converter/#to_nullable_string)

> get_as_nullable_string(key: str): Optional[str]

- **key**: str - a key of element to get.
- **returns**: Optional[str] - string value of the element or None if conversion is not supported. 


#### get_as_nullable_type
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns None.     
See [TypeConverter.to_nullable_type](../../convert/type_converter/#to_nullable_type)

> get_as_nullable_type(value_type: [TypeCode](../../convert/type_code), key: str): Any

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **key**: str - a key of element to get.
- **returns**: Any - element value defined by the typecode or None if conversion is not supported. 


#### get_as_object
Gets the value stored in map element without any conversions.
When element key is not defined it returns the entire map value.

> get_as_object(key: str = None): Any

- **key**: str - (optional) a key of the element to get
- **returns**: Any - the element value or value of the map when index is not defined. 


#### get_as_string
Converts map element into a string or returns *""* if conversion is not possible.

> get_as_string(key: str): str 

- **key**: str - a key of element to get.
- **returns**: str - string value of the element or *""* if conversion is not supported. 


#### get_as_string_with_default
Converts map element into a string or returns default value if conversion is not possible. 
See [StringConverter.to_string_with_default](../../convert/string_converter/#to_string_with_default)

> get_as_string_with_default(key: str, default_value: str): str

- **key**: str - a key of element to get.
- **default_value**: str - the default value
- **returns**: str - string value of the element or default value if conversion is not supported.


#### get_as_type
Converts map element into a value defined by a specified typecode.
If conversion is not possible it returns default value for the specified type. 

> get_as_type(value_type: [TypeCode](../../convert/type_code), key: str): Any

- **value_type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result.
- **key**: str - a key of element to get.
- **returns**: Any - element value defined by the typecode or default if conversion is not supported. 


#### get_as_type_with_default
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns default value.    
See [TypeConverter.to_type_with_default](../../convert/type_converter/#to_type_with_default).

> get_as_type_with_default(value_type: [TypeCode](../../convert/type_code), key: str, default_value: Any): Any

- **value_type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result.
- **key**: str - a key of element to get.
- **default_value**: Any - the default value.
- **returns**: Any - element value defined by the typecode or default value if conversion is not supported.



#### get_as_value
Converts map element into an AnyValue or returns an empty AnyValue if conversion is not possible.   
See [AnyValue](../any_value), [AnyValue.constructors](../any_value/#constructors)

> get_as_value(key: str): [AnyValue](../any_value)

- **key**: str - a key of element to get.
- **returns**: [AnyValue](../any_value) -AnyValue value of the element or empty AnyValue if conversion is not supported. 


#### get_keys
Gets keys of all elements stored in this map.

> get_keys(): List[str]

- **returns**: List[str] - a list with all map keys. 


#### length
Gets a number of elements stored in this map.

> length(): int

- **returns**: int - the number of elements in this map.


#### put
Puts a new value into map element specified by its key.

> put(key: str, value: Any)

- **key**: str - a key of the element to put.
- **value**: Any - a new value for map element.


#### remove
Removes a map element specified by its key

> remove(key: str)

- **key**: str - a key of the element to remove.


#### set_as_object
Sets a new value to map element specified by its index.
When the index is not defined, it resets the entire map value.

> set_as_object(key: Any, value: Any = None)

- **key**: Any - (optional) a key of the element to set
- **value**: Any - a new element or map value.


#### to_string
Gets a string representation of the object.
The result is a semicolon-separated list of key-value pairs as
*"key1=value1;key2=value2;key=value3"*.

> to_string(): str

- **returns**: str - a string representation of the object.


#### from_maps
Creates a new AnyValueMap by merging two or more maps.
Maps defined later in the list override values from previously defined maps.

> `static` from_maps(*maps: dict): [AnyValueMap](../any_value_map).

- **maps**: dict - an array of maps to be merged
- **returns**: [AnyValueMap](../any_value_map) - a newly created AnyValueMap.


#### from_tuples
Creates a new AnyValueMap from a list of key-value pairs called tuples.

> `static` from_tuples(*tuples: Any): [AnyValueMap](../any_value_map).

- **tuples**: Any - a list of values where odd elements are keys and the following even elements are values.
- **returns**: [AnyValueMap](../any_value_map) - a newly created AnyValueArray.


#### from_tuples_array
Creates a new AnyValueMap from a list of key-value pairs called tuples.
The method is similar to [fromTuples](#fromtuples) but tuples are passed as array instead of parameters.

> `static` from_tuples_array(tuples: Sequence[Any]): [AnyValueMap](../any_value_map)

- **tuples**: Sequence[Any] - a list of values where odd elements are keys and the following even elements are values.
- **returns**: [AnyValueMap](../any_value_map) - a newly created AnyValueArray.


#### from_value
Converts specified value into AnyValueMap.

> `static` from_value(value: Any): [AnyValueMap](../any_value_map)

- **value**: Any - value to be converted
- **returns**: [AnyValueMap](../any_value_map) - a newly created AnyValueMap.

### Examples
```python
value1 = AnyValueMap({ 'key1': 1, 'key2': "123.456", 'key3': "2018-01-01" }) 

value1.get_as_boolean("key1")   # Result: true
value1.get_as_integer("key2")   # Result: 123
value1.get_as_float("key2")     # Result: 123.456
value1.get_as_datetime("key3")  # Result: new Date(2018,0,1)
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
