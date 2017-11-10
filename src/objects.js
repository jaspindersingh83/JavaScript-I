// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.entries(obj);
};

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const valuesarray = Object.values(obj);
  const keysarray = Object.keys(obj);
  const newvals = valuesarray.map(cb);
  for (let i = 0; i < keysarray.length; i++) {
    obj[keysarray[i]] = newvals[i];
  }
  return obj;
};
/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const valuesarray = Object.values(obj);
  const keysarray = Object.keys(obj);
  const newobj = {};
  for (let i = 0; i < keysarray.length; i++) {
    newobj[valuesarray[i]] = keysarray[i];
  }
  return newobj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const kys = Object.keys(obj);
  const defaultPropskeys = Object.keys(defaultProps);
  const defaultPropsvals = Object.values(defaultProps);
  for (let i = 0; i < defaultPropskeys.length; i++) {
    if (kys.includes(defaultPropskeys[i]) === false) {
      obj[defaultPropskeys[i]] = defaultPropsvals[i];
    }
  }
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
