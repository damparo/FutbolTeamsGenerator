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
    console.log(vals);

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

  recieveData: function (cols, vals, cb) {

    // var queryString = "SELECT ??, ??, ??, ?? FROM ?? WHERE Roster_name = '??'";

    // console.log(vals);
    // console.log(cols);
    const nameName = vals.toString();
    // console.log(nameName);


    var queryString = "SELECT ";

    // queryString += " (";
    queryString += cols[0].toString() + ",";
    queryString += cols[1].toString() + ",";
    queryString += cols[2].toString() + ",";
    queryString += cols[3].toString();
    // queryString += ") ";
    queryString += " FROM ";
    queryString += cols[4].toString();
    queryString += " WHERE Roster_name = ";
    // queryString += "(";
    // queryString += "?" ;
    queryString += printQuestionMarks(vals.length);
    // queryString += ")";

    console.log(queryString);

    connection.query(queryString, nameName, function(err, result) {
      if (err) {
        throw err;
      }

      // cb({ teams: data });
      cb(result);
      console.log(result)
    });
  },
};

// Export the orm object for the model (futbol.js).
module.exports = orm;
