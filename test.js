const assert = require('assert');
require('./index.js');

console.log('Running tests...');

// Test strings
assert.strictEqual("".isBlank(), true, 'Empty string should be blank');
assert.strictEqual("   ".isBlank(), true, 'Whitespace string should be blank');
assert.strictEqual("hello".isBlank(), false, 'Non-empty string should not be blank');

// Test arrays
assert.strictEqual([].isBlank(), true, 'Empty array should be blank');
assert.strictEqual([1, 2].isBlank(), false, 'Non-empty array should not be blank');

// Test objects
assert.strictEqual({}.isBlank(), true, 'Empty object should be blank');
assert.strictEqual({ a: 1 }.isBlank(), false, 'Non-empty object should not be blank');

// Test booleans
assert.strictEqual(false.isBlank(), true, 'False should be blank');
assert.strictEqual(true.isBlank(), false, 'True should not be blank');

// Test numbers
assert.strictEqual((0).isBlank(), false, 'Number 0 should not be blank');

console.log('All tests passed! ✅');
