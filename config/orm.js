const connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

const orm = {
  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES ";
    queryString += "(";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  recieveData: function (table, cols, vals, cb) {
    var queryString = "SELECT";

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "FROM ";
    queryString += table;
    queryString += " WHERE Roster_name = ";
    // queryString += " ?";
    queryString += printQuestionMarks(vals.length);
    

    console.log(queryString);

    connection.query(queryString, vals, function (err, data) {
      if (err) {
        throw err;
      }

      cb({ teams: data });
    });
  },
};

// Export the orm object for the model (futbol.js).
module.exports = orm;
