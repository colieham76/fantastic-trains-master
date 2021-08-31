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
            var containers = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => {
                    return (s.structureType == STRUCTURE_LINK) 
                }
            });
            var source = creep.pos.findClosestByPath(containers);
            if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source,  {reusePath: 400});
            }
            if(creep.room.storage
                && creep.room.storage.store.getUsedCapacity() < creep.room.storage.store.getCapacity()) {
                var storage = creep.room.storage;
                for (const resourceType in creep.store) {
                    if (creep.transfer(storage, resourceType) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage, {reusePath: 500});   
                    }
                }                             
            }                      
        }
        else {            
            if (creep.room.name == 'W7S6') {
                creep.moveTo(29, 30);           
            }
            if (creep.room.name == 'W9S6') {
                creep.moveTo(30, 32);           
            }            
            let energy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                filter: (e) => (e.resourceType == RESOURCE_ENERGY) && e.energy > 1499
            });
            if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
                creep.moveTo(energy, {reusePath: 500});
            }
            else {              
                var factory = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => structure.structureType == STRUCTURE_FACTORY
                });              
               // for (const resourceType in creep.store) {
                    if (creep.withdraw(storage) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage, {reusePath: 500});   
                    }
                    else {
                        if (creep.transfer(factory) === ERR_NOT_IN_RANGE) {
                            creep.moveTo(factory, {reusePath: 500});
                        }
                    }     
                    creep.getEnergy(false, false);
                //}
            }
        }
    }
}
