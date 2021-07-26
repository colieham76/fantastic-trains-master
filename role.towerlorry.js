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
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {             
                filter: (s) => (s.structureType === STRUCTURE_TOWER
                                || s.structureType === STRUCTURE_LAB
                                || s.structureType === STRUCTURE_NUKER)
                && s.energy < s.energyCapacity * 0.6
            })
            
            if (structure !== undefined) {
                if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.travelTo(structure);
                }
            }
        }
        // if creep is supposed to harvest energy from source
        else {
             /////////////////////////////////////
                /*
            let lenergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                filter:  c => _.sum(c.store) > 0
            });
            if (creep.pickup(lenergy) === ERR_NOT_IN_RANGE) {
                creep.travelTo(lenergy);
            }
            else {
               
                creep.memory.lenergy = null;
                lenergy = creep.pos.findClosestByPath(STRUCTURE_LINK, {
                    filter: source => source.energy > 0
                });
                if (lenergy) {
                    if (creep.withdraw(lenergy[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(lenergy[0]);
                    } else {
                        creep.withdraw(lenergy[0], RESOURCE_ENERGY);
                    }
                }
                */
                /////////////////////////////// 
                
                var targetLink = creep.pos.findClosestByPath(FIND_MY_STRUCTURES,{
                    filter: (i) => (i.structureType == STRUCTURE_LINK) &&
                    i.store.getUsedCapacity(RESOURCE_ENERGY) > 0
                });
                if(targetLink && creep.withdraw(targetLink, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targetLink);
                }
                //////////////////////                      
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
                else {
                    creep.getEnergy(false, false);}
            }
            creep.getEnergy(false, true)
        }
    }
}
