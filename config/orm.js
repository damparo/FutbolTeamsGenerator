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

    let queryString = "INSERT INTO " + table;

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
    const nameName = vals.toString();

    let queryString = "SELECT ";

    queryString += cols[0].toString() + ",";
    queryString += cols[1].toString() + ",";
    queryString += cols[2].toString() + ",";
    queryString += cols[3].toString();

    queryString += " FROM ";
    queryString += cols[4].toString();
    queryString += " WHERE Roster_name = ";

    queryString += printQuestionMarks(vals.length);

    console.log(queryString);

    connection.query(queryString, nameName, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      console.log(result);
    });
  },

  delete: function (vals, cb) {
    const whichRow = vals.toString();

    let queryString = "DELETE FROM teams WHERE Roster_name = ";
 
    queryString += "?";
    // printQuestionMarks(vals.length);

    console.log(queryString);

    connection.query(queryString, whichRow, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      console.log(result);
    });
  },

  update: function(table, cols, vals, cb) {
    const updateRow = vals[3].toString();

    let queryString = "UPDATE " + table + " SET ";
    queryString += cols[0].toString() + " = " + "?" + ", ";
    queryString += cols[1].toString() + " = " + "?"+ ", ";
    queryString += cols[2].toString() + " = " + "?" + " ";
    
    queryString += "WHERE " + "Roster_name = " + "?";
    // queryString += "?";

    console.log(queryString);

    connection.query(queryString, [vals[0].toString(), vals[1].toString(), vals[2].toString(), updateRow], function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });

  }


};

// Export the orm object for the model (futbol.js).
module.exports = orm;
