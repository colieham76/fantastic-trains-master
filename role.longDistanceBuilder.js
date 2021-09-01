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
        
        let invaderStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
                if(creep.room.name == 'W9S7') {
                    if (invaderStructure) {
                        if (Game.time % 100 === 0) {
                            Game.spawns.Spawn6.memory.minattackers = {W9S7: 1};
                        }
                    }
                }
                if(creep.room.name == 'W8S6') {
                    if (invaderStructure) {
                        if (Game.time % 100 === 0) {
                            Game.spawns.Spawn7.memory.minattackers = {W7S7: 0, W8S6: 1};
                        }
                    }
                }
        if(creep.room.name == 'W7S7') {
                    if (invaderStructure) {
                        if (Game.time % 100 === 0) {
                            Game.spawns.Spawn7.memory.minattackers = {W7S7: 1, W8S6: 0};
                        }
                    }
                }
        if (creep.room.name == creep.memory.target) {
          //  if (Game.time % 5 === 0) {       
            actionRepair.run(creep);
            creep.say('repair');
//}
            roleBuilder.run(creep);             
        }
        else { // go to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            creep.travelTo(creep.pos.findClosestByRange(exit));
        }                  
    }
};
