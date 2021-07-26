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
            
           
            
            /////////////////////////
            
            // specific harvester task - take dropped energy and put into storage only
//remove comment slash from here
/*

 var containers = creep.room.find(FIND_STRUCTURES, {
                    filter: (s) => {
                        return (s.structureType == STRUCTURE_LINK) && (s.id == '60f7d1093bd3cc14ace13cfa')
                    }
                });
                var source = creep.pos.findClosestByPath(containers);
                if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }


            if(creep.room.storage
                && creep.room.storage.store.getUsedCapacity() < creep.room.storage.store.getCapacity()) {
                var storage = creep.room.storage;
                for (const resourceType in creep.store) {
                    if (creep.transfer(storage, resourceType) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage, {visualizePathStyle: {stroke: '#fcfafa'}});                    }
                }
                
                
       
*/
            // to here     
                ////////////////////////////
         // normal harvester code - find closest spawn, remove comment slashes below and insert comment slash to exclude bracket line 50
         // extension or tower which is not full
////////////////
// from here
           
         var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                              
                    filter: (s) => (s.structureType === STRUCTURE_EXTENSION
                        || s.structureType === STRUCTURE_STORAGE
                        || s.structureType === STRUCTURE_SPAWN)
                        && s.energy < s.energyCapacity
                });
            if (structure !== undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(structure);
                }
            }  ////To here - remove comment slash for bracket line 67 to switch on dropped resource utiliser
            
//slashes on next line
        //   }
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
                }
            });
            if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
                creep.travelTo(energy);
            }
            creep.getEnergy(false, true);
        }
    }
}
