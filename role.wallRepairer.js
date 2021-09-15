var roleBuilder = require('role.builder');

if (creep.ticksToLive < 1500) {
creep.suicide();
}

module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
        
     
        
        if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.working = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
            creep.memory.working = true;
            creep.say('offload');
        }
        // if creep is supposed to repair something
        if (creep.memory.working == true) {



            // find all walls in the room


            var walls = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_WALL// && s.structureType == STRUCTURE_RAMPART
            });

            var target = undefined;

            // loop with increasing percentages
            for (let percentage = 0.00001; percentage <= 1; percentage = percentage + 0.0001){
                // find a wall with less than percentage hits
                for (let wall of walls) {
                    if (wall.hits / wall.hitsMax < percentage) {
                        target = wall;
                        break;
                    }
                }
                // if there is one
                if (target != undefined) {
                    // break the loop
                    break;
                }
            }
            // if we find a wall that has to be repaired
            if (target != undefined) {
                // try to repair it, if not in range
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(target);
                }
            }           
        }
        // if creep is supposed to get energy
        else {
            creep.getEnergy(true, false);
        }
    }
};
