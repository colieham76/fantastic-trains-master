module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
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
                        creep.moveTo(energy);
                    }
                } else { // energy is from container, storage or link
                    if (creep.withdraw(energy, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(energy);
                    }
                }
            }



        }

        else {
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
/*
        var terminal = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: s => s.structureType == STRUCTURE_TERMINAL && s.store[RESOURCE_ENERGY] <= 150000
        });

        if (creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(terminal);
        } 
        */
    }
};        
