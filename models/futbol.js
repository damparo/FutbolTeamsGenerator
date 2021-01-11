const orm = require("../config/orm");

const futbol = {

    all: function(cb) {
        orm.all("futbol", function(res) {
          cb(res);
        });
      },

    create: function(cols, vals, cb){
        orm.create("futbol", cols, vals, function(res){
            cb(res);
        });
    },

};

// Export the database functions for the controller (futbolController.js).
module.exports =  futbol