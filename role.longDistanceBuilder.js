var roleBuilder = require('role.builder');
var actionRepair = require('action.repair');
module.exports = {
    run: function(creep) {
        if (creep.room.name === 'W9S6'|| creep.room.name === 'W9S7') {
            if (!creep.memory.W9S7) {
                creep.travelTo(Game.flags['W9S7']);
                if (creep.pos.isNearTo(Game.flags['W9S7'])) {
                    creep.memory.W9S7 = true;
                }
                return;
            }
        }
        if (creep.room.name === 'W7S6'|| creep.room.name === 'W7S7') {
            if (!creep.memory.W7S7) {
                creep.travelTo(Game.flags['W7S7']);
                if (creep.pos.isNearTo(Game.flags['W7S7'])) {
                    creep.memory.W7S7 = true;
                }
                return;
            }
        }
        
        
        if (creep.room.name == creep.memory.target) {
            creep.say('building');
          //  actionRepair.run(creep);
            roleBuilder.run(creep);
            let thingUnderFeet = creep.room.lookForAt(LOOK_STRUCTURES, creep)[0];
            if (thingUnderFeet && thingUnderFeet.structureType == STRUCTURE_ROAD) {
                creep.repair(thingUnderFeet);
            }      
        }
        else { // go to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            creep.travelTo(creep.pos.findClosestByRange(exit));
        }
    }
};
