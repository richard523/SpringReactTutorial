module.exports = function (condition, message, statusCode) {
  if (!condition){
    var error = new Error(message || "Assertion failed")
    if(statusCode) error.statusCode = statusCode
    throw error
  }
}