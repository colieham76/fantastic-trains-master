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
        if (creep.memory.working === true) {
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType === STRUCTURE_SPAWN
                    || s.structureType === STRUCTURE_EXTENSION
                    || s.structureType === STRUCTURE_NUKER)
                    && s.energy < s.energyCapacity
            });
            if (structure !== undefined) {
                if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.travelTo(structure);
                }
            }
        }
        // if creep is supposed to get energy
        else {
            let energy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                filter: {
                    resourceType: RESOURCE_ENERGY
                }
            });
            if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
                creep.travelTo(energy);
            }
            creep.getEnergy(true, false);
        }
    }
};
