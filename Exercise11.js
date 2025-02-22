// Create a function groupById(arr) that creates an object from it, with id as key, and array items as values.

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

