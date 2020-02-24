module.exports = function dumpObject(input, key) {
  const output = {};
  const propertyReferences = new WeakMap();
  const stack = [[output, key, input[key], '$["window"]']];

  let state;

  while ((state = stack.pop())) {
    const [root, key, value, path] = state;

    // Handle null values
    if (value === null) {
      root[key] = null;
      continue;
    }

    // Handle undefined values
    if (typeof value === 'undefined' || value === '$undefined') {
      root[key] = '$undefined';
      continue;
    }

    // Handle arrays
    if (Array.isArray(value)) {
      root[key] = [];

      value.forEach((element, i) => {
        stack.unshift([root[key], i, element, `${path}[${i}]`]);
      });

      continue;
    }

    // Handle objects and functions
    if (typeof value === 'object' || typeof value === 'function') {
      // Prevent circular references
      var propertyPath = propertyReferences.get(value);

      if (propertyPath !== undefined) {
        root[key] = { $ref: propertyPath };
        continue;
      }

      propertyReferences.set(value, path);

      root[key] = {};

      Object.keys(value).forEach(propertyName => {
        stack.unshift([
          root[key],
          propertyName,
          value[propertyName],
          `${path}[${JSON.stringify(propertyName)}]`
        ]);
      });

      continue;
    }

    // Handle other types
    root[key] = value;
  }

  return output;
};
