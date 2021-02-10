const orm = require("../config/orm");

const futbol = {

    recieveData: function(cols, vals, cb)
    
    {
        orm.recieveData(cols, vals, function(res){
            cb(res);
        });
    },

    create: function(cols, vals, cb){
        orm.create("teams", cols, vals, function(res){
            cb(res);
        });
    }

    // create2: function(cols, vals, cb){
    //     orm.create2("rosters", cols, vals, function(res){
    //         cb(res);
    //     });
    // }

};

// Export the database functions for the controller (futbolController.js).
module.exports =  futbol