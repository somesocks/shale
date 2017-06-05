# shale
A Javascript library for creating and manipulating immutable objects

<a name="shale"></a>

## shale : <code>object</code>
**Kind**: global namespace  

* [shale](#shale) : <code>object</code>
    * [.array](#shale.array) : <code>object</code>
        * [.hashcode(arr)](#shale.array.hashcode) ⇒
        * [.compact(arr)](#shale.array.compact) ⇒
        * [.equals(arr1, arr2)](#shale.array.equals) ⇒
        * [.slice(arr, begin, end)](#shale.array.slice) ⇒
        * [.push(arr, end)](#shale.array.push) ⇒
        * [.pop(arr)](#shale.array.pop) ⇒
        * [.map(arr, func)](#shale.array.map) ⇒
        * [.filter(arr, func)](#shale.array.filter) ⇒
        * [.sort(arr, func)](#shale.array.sort) ⇒
    * [.boolean](#shale.boolean) : <code>object</code>
        * [.hashcode(val)](#shale.boolean.hashcode) ⇒
        * [.compact(val)](#shale.boolean.compact) ⇒
        * [.equals(val1, val2)](#shale.boolean.equals) ⇒
    * [.null](#shale.null) : <code>object</code>
        * [.hashcode(val)](#shale.null.hashcode) ⇒
        * [.compact(val)](#shale.null.compact) ⇒
        * [.equals(val1, val2)](#shale.null.equals) ⇒
    * [.number](#shale.number) : <code>object</code>
        * [.hashcode(val)](#shale.number.hashcode) ⇒
        * [.compact(val)](#shale.number.compact) ⇒
        * [.equals(val1, val2)](#shale.number.equals) ⇒
    * [.object](#shale.object) : <code>object</code>
        * [.hashcode(val)](#shale.object.hashcode) ⇒
        * [.compact(val)](#shale.object.compact) ⇒
        * [.equals(val1, val2)](#shale.object.equals) ⇒
        * [.patch(target)](#shale.object.patch) ⇒
        * [.filter(obj, filter)](#shale.object.filter) ⇒
        * [.map(obj, ma)](#shale.object.map) ⇒
    * [.string](#shale.string) : <code>object</code>
        * [.hashcode(val)](#shale.string.hashcode) ⇒
        * [.compact(val)](#shale.string.compact) ⇒
        * [.equals(val1, val2)](#shale.string.equals) ⇒
    * [.undefined](#shale.undefined) : <code>object</code>
        * [.hashcode(val)](#shale.undefined.hashcode) ⇒
        * [.compact(val)](#shale.undefined.compact) ⇒
        * [.equals(val1, val2)](#shale.undefined.equals) ⇒
    * [.type](#shale.type) ⇒
    * [.hashcode(val)](#shale.hashcode) ⇒
    * [.compact(val)](#shale.compact) ⇒
    * [.equals(val1, val2)](#shale.equals) ⇒

<a name="shale.array"></a>

### shale.array : <code>object</code>
**Kind**: static namespace of <code>[shale](#shale)</code>  

* [.array](#shale.array) : <code>object</code>
    * [.hashcode(arr)](#shale.array.hashcode) ⇒
    * [.compact(arr)](#shale.array.compact) ⇒
    * [.equals(arr1, arr2)](#shale.array.equals) ⇒
    * [.slice(arr, begin, end)](#shale.array.slice) ⇒
    * [.push(arr, end)](#shale.array.push) ⇒
    * [.pop(arr)](#shale.array.pop) ⇒
    * [.map(arr, func)](#shale.array.map) ⇒
    * [.filter(arr, func)](#shale.array.filter) ⇒
    * [.sort(arr, func)](#shale.array.sort) ⇒

<a name="shale.array.hashcode"></a>

#### array.hashcode(arr) ⇒
A function that returns a hashcode for an array.
You should never need to call this directly, just call shale.hashcode

**Kind**: static method of <code>[array](#shale.array)</code>  
**Returns**: an hashcode for arr  

| Param | Description |
| --- | --- |
| arr | the array to hash |

<a name="shale.array.compact"></a>

#### array.compact(arr) ⇒
A function that compacts an array into an immutable representation.
You should never need to call this directly, just call shale.compact

**Kind**: static method of <code>[array](#shale.array)</code>  
**Returns**: an immutable representation of arr  

| Param | Description |
| --- | --- |
| arr | the array to compact |

<a name="shale.array.equals"></a>

#### array.equals(arr1, arr2) ⇒
A function that compares two arrays for deep equality.
You should never call this directly, use shale.equals

**Kind**: static method of <code>[array](#shale.array)</code>  
**Returns**: true if arr1 is equal to arr2, false otherwise  

| Param | Description |
| --- | --- |
| arr1 | an array to compare |
| arr2 | an array to compare |

<a name="shale.array.slice"></a>

#### array.slice(arr, begin, end) ⇒
A function that slices an array or an immutable array.
This doesn't modify the source array.

**Kind**: static method of <code>[array](#shale.array)</code>  
**Returns**: an immutable slice of val  

| Param | Description |
| --- | --- |
| arr | the array or immutable array to slice |
| begin | the beginning index |
| end | the ending index |

<a name="shale.array.push"></a>

#### array.push(arr, end) ⇒
A function that pushes any number of elements onto an array or an immutable array.
This doesn't modify the source array.

**Kind**: static method of <code>[array](#shale.array)</code>  
**Returns**: an immutable array equivalent to [ ...arr, ...elements ]  

| Param | Description |
| --- | --- |
| arr | the array or immutable array to 'push' onto |
| ...elements | any number of elements to push onto the end of the arr |
| end | the ending index |

<a name="shale.array.pop"></a>

#### array.pop(arr) ⇒
A function that 'pops' one element off the source array.
This doesn't modify the source array, it returns an immutable copy of the array, minus the last element.

**Kind**: static method of <code>[array](#shale.array)</code>  
**Returns**: an immutable array that is a copy of arr, with the last element removed  

| Param | Description |
| --- | --- |
| arr | the array or immutable array to 'pop' |

<a name="shale.array.map"></a>

#### array.map(arr, func) ⇒
A function that maps every element of an array to a new array using a mapping function.
This is equivalent to array.map, but the returned array is immutable

**Kind**: static method of <code>[array](#shale.array)</code>  
**Returns**: an immutable array that is a mapped copy of the original  

| Param | Description |
| --- | --- |
| arr | the array to map |
| func | the mapping function |

<a name="shale.array.filter"></a>

#### array.filter(arr, func) ⇒
A function that filters elements from an array using a filter function.
This is equivalent to array.filter, but the returned array is immutable

**Kind**: static method of <code>[array](#shale.array)</code>  
**Returns**: an immutable array that is a filter copy of the original  

| Param | Description |
| --- | --- |
| arr | the array to filter |
| func | the filter function |

<a name="shale.array.sort"></a>

#### array.sort(arr, func) ⇒
A function that sorts an array or an immutable array.
This doesn't modify the original array, but returns an immutable sorted copy.

**Kind**: static method of <code>[array](#shale.array)</code>  
**Returns**: an immutable array that is a sorted immutable copy of the original  

| Param | Description |
| --- | --- |
| arr | the array to filter |
| func | the sorting function |

<a name="shale.boolean"></a>

### shale.boolean : <code>object</code>
**Kind**: static namespace of <code>[shale](#shale)</code>  

* [.boolean](#shale.boolean) : <code>object</code>
    * [.hashcode(val)](#shale.boolean.hashcode) ⇒
    * [.compact(val)](#shale.boolean.compact) ⇒
    * [.equals(val1, val2)](#shale.boolean.equals) ⇒

<a name="shale.boolean.hashcode"></a>

#### boolean.hashcode(val) ⇒
A function that returns a hashcode for a boolean.
You should never need to call this directly, just call shale.hashcode

**Kind**: static method of <code>[boolean](#shale.boolean)</code>  
**Returns**: an hashcode for val  

| Param | Description |
| --- | --- |
| val | the boolean to hash |

<a name="shale.boolean.compact"></a>

#### boolean.compact(val) ⇒
A function that compacts a boolean into an immutable representation.
You should never need to call this directly, just call shale.compact

**Kind**: static method of <code>[boolean](#shale.boolean)</code>  
**Returns**: an immutable representation of val  

| Param | Description |
| --- | --- |
| val | the boolean to compact |

<a name="shale.boolean.equals"></a>

#### boolean.equals(val1, val2) ⇒
A function that compares two booleans for equality.
You should never call this directly, use shale.equals

**Kind**: static method of <code>[boolean](#shale.boolean)</code>  
**Returns**: true if val1 is equal to val2, false otherwise  

| Param | Description |
| --- | --- |
| val1 | a boolean to compare |
| val2 | a boolean to compare |

<a name="shale.null"></a>

### shale.null : <code>object</code>
**Kind**: static namespace of <code>[shale](#shale)</code>  

* [.null](#shale.null) : <code>object</code>
    * [.hashcode(val)](#shale.null.hashcode) ⇒
    * [.compact(val)](#shale.null.compact) ⇒
    * [.equals(val1, val2)](#shale.null.equals) ⇒

<a name="shale.null.hashcode"></a>

#### null.hashcode(val) ⇒
A function that returns a hashcode for a null.
You should never need to call this directly, just call shale.hashcode

**Kind**: static method of <code>[null](#shale.null)</code>  
**Returns**: an hashcode for val  

| Param | Description |
| --- | --- |
| val | the null to hash |

<a name="shale.null.compact"></a>

#### null.compact(val) ⇒
A function that compacts a null into an immutable representation.
You should never need to call this directly, just call shale.compact

**Kind**: static method of <code>[null](#shale.null)</code>  
**Returns**: an immutable representation of val  

| Param | Description |
| --- | --- |
| val | the null to compact |

<a name="shale.null.equals"></a>

#### null.equals(val1, val2) ⇒
A function that compares two nulls for equality.
You should never call this directly, use shale.equals

**Kind**: static method of <code>[null](#shale.null)</code>  
**Returns**: true if val1 is equal to val2, false otherwise  

| Param | Description |
| --- | --- |
| val1 | a null to compare |
| val2 | a null to compare |

<a name="shale.number"></a>

### shale.number : <code>object</code>
**Kind**: static namespace of <code>[shale](#shale)</code>  

* [.number](#shale.number) : <code>object</code>
    * [.hashcode(val)](#shale.number.hashcode) ⇒
    * [.compact(val)](#shale.number.compact) ⇒
    * [.equals(val1, val2)](#shale.number.equals) ⇒

<a name="shale.number.hashcode"></a>

#### number.hashcode(val) ⇒
A function that returns a hashcode for a number.
You should never need to call this directly, just call shale.hashcode

**Kind**: static method of <code>[number](#shale.number)</code>  
**Returns**: an hashcode for val  

| Param | Description |
| --- | --- |
| val | the number to hash |

<a name="shale.number.compact"></a>

#### number.compact(val) ⇒
A function that compacts a number into an immutable representation.
You should never need to call this directly, just call shale.compact

**Kind**: static method of <code>[number](#shale.number)</code>  
**Returns**: an immutable representation of val  

| Param | Description |
| --- | --- |
| val | the number to compact |

<a name="shale.number.equals"></a>

#### number.equals(val1, val2) ⇒
A function that compares two numbers for equality.
You should never call this directly, use shale.equals

**Kind**: static method of <code>[number](#shale.number)</code>  
**Returns**: true if val1 is equal to val2, false otherwise  

| Param | Description |
| --- | --- |
| val1 | a number to compare |
| val2 | a number to compare |

<a name="shale.object"></a>

### shale.object : <code>object</code>
**Kind**: static namespace of <code>[shale](#shale)</code>  

* [.object](#shale.object) : <code>object</code>
    * [.hashcode(val)](#shale.object.hashcode) ⇒
    * [.compact(val)](#shale.object.compact) ⇒
    * [.equals(val1, val2)](#shale.object.equals) ⇒
    * [.patch(target)](#shale.object.patch) ⇒
    * [.filter(obj, filter)](#shale.object.filter) ⇒
    * [.map(obj, ma)](#shale.object.map) ⇒

<a name="shale.object.hashcode"></a>

#### object.hashcode(val) ⇒
A function that returns a hashcode for an object.
You should never need to call this directly, just call shale.hashcode

**Kind**: static method of <code>[object](#shale.object)</code>  
**Returns**: an hashcode for val  

| Param | Description |
| --- | --- |
| val | the object to hash |

<a name="shale.object.compact"></a>

#### object.compact(val) ⇒
A function that compacts an object into an immutable representation.
You should never need to call this directly, just call shale.compact

**Kind**: static method of <code>[object](#shale.object)</code>  
**Returns**: an immutable representation of val  

| Param | Description |
| --- | --- |
| val | the object to compact |

<a name="shale.object.equals"></a>

#### object.equals(val1, val2) ⇒
A function that compares two objects for deep equality.
You should never call this directly, use shale.equals

**Kind**: static method of <code>[object](#shale.object)</code>  
**Returns**: true if val1 is equal to val2, false otherwise  

| Param | Description |
| --- | --- |
| val1 | an object to compare |
| val2 | an object to compare |

<a name="shale.object.patch"></a>

#### object.patch(target) ⇒
A function that "patches" one object with others.
This works like Object.assign, but without modifying the target object

**Kind**: static method of <code>[object](#shale.object)</code>  
**Returns**: an immutable representation of the patched target  

| Param | Description |
| --- | --- |
| target | the target object to "patch" |
| ...sources | any number of source objects to patch target with |

<a name="shale.object.filter"></a>

#### object.filter(obj, filter) ⇒
A function that returns a "filtered" copy of an object.
This works like array.filter, but on each key-value pair of the object

**Kind**: static method of <code>[object](#shale.object)</code>  
**Returns**: a filtered representation of obj  

| Param | Description |
| --- | --- |
| obj | the target object to "filter" |
| filter | a filtering function  (value, key, obj) => boolean |

<a name="shale.object.map"></a>

#### object.map(obj, ma) ⇒
A function that returns a "mapped" copy of an object.
This works like array.map, but on each key-value pair of the object

**Kind**: static method of <code>[object](#shale.object)</code>  
**Returns**: a mapped representation of obj  

| Param | Description |
| --- | --- |
| obj | the target object to "map" |
| ma | a mapping function (value, key, obj) => newValue |

<a name="shale.string"></a>

### shale.string : <code>object</code>
**Kind**: static namespace of <code>[shale](#shale)</code>  

* [.string](#shale.string) : <code>object</code>
    * [.hashcode(val)](#shale.string.hashcode) ⇒
    * [.compact(val)](#shale.string.compact) ⇒
    * [.equals(val1, val2)](#shale.string.equals) ⇒

<a name="shale.string.hashcode"></a>

#### string.hashcode(val) ⇒
A function that returns a hashcode for a string.
You should never need to call this directly, just call shale.hashcode

**Kind**: static method of <code>[string](#shale.string)</code>  
**Returns**: an hashcode for val  

| Param | Description |
| --- | --- |
| val | the string to hash |

<a name="shale.string.compact"></a>

#### string.compact(val) ⇒
A function that compacts a string into an immutable representation.
You should never need to call this directly, just call shale.compact

**Kind**: static method of <code>[string](#shale.string)</code>  
**Returns**: an immutable representation of val  

| Param | Description |
| --- | --- |
| val | the string to compact |

<a name="shale.string.equals"></a>

#### string.equals(val1, val2) ⇒
A function that compares two strings for equality.
You should never call this directly, use shale.equals

**Kind**: static method of <code>[string](#shale.string)</code>  
**Returns**: true if val1 is equal to val2, false otherwise  

| Param | Description |
| --- | --- |
| val1 | a string to compare |
| val2 | a string to compare |

<a name="shale.undefined"></a>

### shale.undefined : <code>object</code>
**Kind**: static namespace of <code>[shale](#shale)</code>  

* [.undefined](#shale.undefined) : <code>object</code>
    * [.hashcode(val)](#shale.undefined.hashcode) ⇒
    * [.compact(val)](#shale.undefined.compact) ⇒
    * [.equals(val1, val2)](#shale.undefined.equals) ⇒

<a name="shale.undefined.hashcode"></a>

#### undefined.hashcode(val) ⇒
A function that returns a hashcode for an undefined.
You should never need to call this directly, just call shale.hashcode

**Kind**: static method of <code>[undefined](#shale.undefined)</code>  
**Returns**: an hashcode for val  

| Param | Description |
| --- | --- |
| val | the undefined to hash |

<a name="shale.undefined.compact"></a>

#### undefined.compact(val) ⇒
A function that compacts an undefined into an immutable representation.
You should never need to call this directly, just call shale.compact

**Kind**: static method of <code>[undefined](#shale.undefined)</code>  
**Returns**: an immutable representation of val  

| Param | Description |
| --- | --- |
| val | the undefined to compact |

<a name="shale.undefined.equals"></a>

#### undefined.equals(val1, val2) ⇒
A function that compares two undefineds for equality.
You should never call this directly, use shale.equals

**Kind**: static method of <code>[undefined](#shale.undefined)</code>  
**Returns**: true if val1 is equal to val2, false otherwise  

| Param | Description |
| --- | --- |
| val1 | an undefined to compare |
| val2 | an undefined null to compare |

<a name="shale.type"></a>

### shale.type ⇒
A function that returns the type of a value

**Kind**: static constant of <code>[shale](#shale)</code>  
**Returns**: a type string  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="shale.hashcode"></a>

### shale.hashcode(val) ⇒
A function that returns the shale hashcode of a value

**Kind**: static method of <code>[shale](#shale)</code>  
**Returns**: a 32-bit hashcode  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="shale.compact"></a>

### shale.compact(val) ⇒
A function that compacts a value into an immutable representation

**Kind**: static method of <code>[shale](#shale)</code>  
**Returns**: an immutable representation of val  

| Param | Description |
| --- | --- |
| val | the value to compact |

<a name="shale.equals"></a>

### shale.equals(val1, val2) ⇒
A function that checks if two values are equal

**Kind**: static method of <code>[shale](#shale)</code>  
**Returns**: a boolean, true if val1 is equal to val2  

| Param | Description |
| --- | --- |
| val1 | a value to compare |
| val2 | a value to compare |

