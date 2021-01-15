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

function printQuestionMarks2(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("(?)");
  }

  return arr.toString();
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

  create2: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES () ";
    queryString += "(";
    queryString += printQuestionMarks2(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
  //   var queryString = "SELECT ?? FROM ?? AS tOne";
  //   queryString += " LEFT JOIN ?? AS tTwo";
  //   queryString += " ON tOne.?? = tTwo.??";

  //   console.log(queryString);

  //   connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
  //     err,
  //     result
  //   ) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // }
};

// Export the orm object for the model (futbol.js).
module.exports = orm;
