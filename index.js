// --- String ---
String.prototype.isBlank = function() {
  return this.trim().length === 0;
};

// --- Array ---
Array.prototype.isBlank = function() {
  return this.length === 0;
};

// --- Object ---
Object.prototype.isBlank = function() {
  if (this.constructor !== Object) return false;
  return Object.keys(this).length === 0;
};

// --- Boolean ---
Boolean.prototype.isBlank = function() {
  return this.valueOf() === false;
};

// --- Number ---
Number.prototype.isBlank = function() {
  return false;
};
