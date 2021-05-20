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

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working === true) {
            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType === STRUCTURE_SPAWN
                             || s.structureType === STRUCTURE_EXTENSION
                             || s.structureType === STRUCTURE_NUKER)
                             && s.energy < s.energyCapacity
            });

            if (structure !== undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(structure);
                }
            }
        }
        // if creep is supposed to harvest energy from source
        else {


            let tombstones = creep.room.find(FIND_TOMBSTONES, {
                filter: c => _.sum(c.store) > 0
            });
            if (tombstones.length > 0) {

                creep.getEnergy(false, false);

                let tombstone = tombstones[0];
                for (let mineralType in tombstone.store) {
                    if (creep.withdraw(tombstone, mineralType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(tombstone, {
                            maxRooms: 1
                        });
                        creep.say('RIP ');
                    }
                }
            }

            // if there is no storage (which could be possible after destroyed), try picking up some energy
        let energy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
            filter: {
                resourceType: RESOURCE_ENERGY
            }});
        if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
            creep.travelTo(energy);
        }                        
         creep.getEnergy(true, true);
        }        
    }
}
