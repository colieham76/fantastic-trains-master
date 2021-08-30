module.exports = {
    run: function(creep) {
        if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.working = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
            creep.memory.working = true;
            creep.say('offload');
        }

        if (creep.memory.working !== true) {
            var [resourceID, ifDropped] = evaluateEnergyResources(creep, false, true,
                false, true); // find energy function in myFunctions
            if (resourceID !== undefined) {
                energy = Game.getObjectById(resourceID);
                /*
                if (ifDropped) { // if energy is dropped
                    if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
                        creep.travelTo(energy);
                    }
                } else { // energy is from container, storage or link
                    */
                    if (creep.withdraw(energy, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.travelTo(energy);
                        
                    }
               // }
                
            }
        } else {
            var target = Game.getObjectById(Game.rooms[creep.room.name].memory.toBuildRampart);
            if ((runEveryTicks(50) === true) || (target === undefined)) {
                Game.rooms[creep.room.name].memory.toBuildRampart = whichRampartToBuild(creep.room).id
            }
            if (target !== undefined) {
                creep.say('r');
                //console.log(creep.room.name,target);
                if (creep.repair(target) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                    creep.repair(target)
                }
            }
        }
    }
};
