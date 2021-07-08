var roleBuilder = require('role.builder');
var actionBuild = require('action.build');

module.exports = {
    run: function(creep) {


//if (creep.ticksToLive < 1500) {
 //                  creep.suicide();
   //         }

       
              if (!creep.memory.W9S7) {
            creep.travelTo(Game.flags['W9S7']);
            if (creep.pos.isNearTo(Game.flags['W9S7'])) {
                creep.memory.W9S7 = true;
            }
            return;
        }           
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
