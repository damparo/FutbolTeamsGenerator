const connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  // var arrArr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
    // arrArr.push(arr);
  }

  return arr.toString();
  // return arrArr.toString();
}

const orm = {
  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    // queryString += " (";
    // queryString += cols.toString();
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ") ";

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    // queryString += "VALUES (";
    queryString += "VALUES ";
    queryString += printQuestionMarks(vals.length);
    // queryString += "), ";
    // queryString += "(";
    // queryString += printQuestionMarks(vals.length);
    // queryString += "), ";
    // queryString += "(";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ")";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (futbol.js).
module.exports = orm;
