const orm = require("../config/orm");

const futbol = {
  recieveData: function (cols, vals, cb) {
    orm.recieveData(cols, vals, function (result) {
      cb(result);
    });
  },

  create: function (cols, vals, cb) {
    orm.create("teams", cols, vals, function (res) {
      cb(res);
    });
  },

  delete: function (vals, cb) {
    orm.delete(vals, cb, function (res) {
      cb(res);
    });
  },

  update: function(cols, vals, update, cb){

    orm.update("teams", cols, vals, update, cb, function(res){

        cb(res);

    });

  
}
};

// Export the database functions for the controller (futbolController.js).
module.exports = futbol;
