var object = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign( {}, object)
  newObj[key] = value;
  return newObj;
}

destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;
}
