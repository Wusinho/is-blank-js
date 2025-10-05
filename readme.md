
# is-blank-js

A JavaScript utility to check for blank values, inspired by Ruby on Rails' `blank?` method.

This library extends the prototypes of `String`, `Array`, `Object`, and `Boolean` to include an `isBlank()` method.

## Installation

```bash
npm install is-blank-js
```

## Usage

First, require the package to extend the prototypes:

```javascript
require('is-blank-js');
```

Then, you can use the `isBlank()` method on your objects:

### Strings

A string is blank if it's empty or contains only whitespace.

```javascript
"".isBlank() // => true
"   ".isBlank() // => true
"hello".isBlank() // => false
```

### Arrays

An array is blank if it's empty.

```javascript
[].isBlank() // => true
[1, 2].isBlank() // => false
```

### Objects

An object is blank if it's a plain object with no keys.

```javascript
({}).isBlank() // => true
({ a: 1 }).isBlank() // => false
```

### Booleans

A boolean is blank if it's `false`.

```javascript
false.isBlank() // => true
true.isBlank() // => false
```

### Numbers

A number is never blank.

```javascript
(0).isBlank() // => false
(1).isBlank() // => false
```

## Behavior at a Glance

This library aims to replicate the behavior of Rails' `blank?` method for common JavaScript types.

| Value in JavaScript | `isBlank()` | 
| ------------------- | ----------- |
| `""`                | `true`      |
| `"   "`             | `true`      |
| `[]`                | `true`      |
| `{}`                | `true`      |
| `false`             | `true`      |
| `true`              | `false`     |
| `0`                 | `false`     |
| `null`              | (error)     |
| `undefined`         | (error)     |

**Note:** This library does not handle `null` or `undefined` because they don't have prototypes to extend. Calling `isBlank()` on `null` or `undefined` will result in a `TypeError`.

## Development

To run the tests:

```bash
node test.js
```
