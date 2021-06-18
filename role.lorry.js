module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
        if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.working = false;
            creep.say('🔄 collect');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
            creep.memory.working = true;
            creep.say('offload');
        }
        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working !== true) {
            var [resourceID, ifDropped] = evaluateEnergyResources(creep, false, false,
                true, true); // find energy function in myFunctions
            if (resourceID !== undefined) {
                energy = Game.getObjectById(resourceID);
                if (ifDropped) { // if energy is dropped
                    if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
                        creep.travelTo(energy);
                    }
                } else { // energy is from container, storage or link
                    if (creep.withdraw(energy, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.travelTo(energy);
                    }
                }
            }
        }
        else {

            for (const resourceType in creep.getEnergy()) {
                if (resourceType == RESOURCE_ENERGY) {

                    var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                        filter: (s) => (s.structureType === STRUCTURE_SPAWN
                            || s.structureType === STRUCTURE_EXTENSION
                            || s.structureType === STRUCTURE_NUKER)
                            && s.energy < s.energyCapacity
                    });
                    if (structure == undefined) {
                        structure = creep.room.storage;
                        if (structure) {
                            if (structure.store[RESOURCE_ENERGY] > 0.8 * structure.storeCapacity) { // storage is almost full
                                structure = creep.room.terminal;
                            }
                        }
                    }

                    if (creep.transfer(structure, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(structure, {
                            maxRooms: 1
                        });
                    } else if (structure !== undefined) {
                        if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(structure);
                        }
                    }
                }
            }
        }
    }
};
