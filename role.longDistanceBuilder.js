var roleBuilder = require('role.builder');
var actionBuild = require('action.build');

module.exports = {
    run: function(creep) {
       
                         
        if (creep.room.name == creep.memory.target) { 
            creep.say('building');
            roleBuilder.run(creep);
        }
        else { // go to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            creep.travelTo(creep.pos.findClosestByRange(exit));
        }        
    }
};
