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
            if (creep.withdraw(energy, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(energy);
            }
        }
        else {
            var target = Game.getObjectById(Game.rooms[creep.room.name].memory.toBuildRampart);
            if ((runEveryTicks(20) === true)
                || (target === undefined)) {
                Game.rooms[creep.room.name].memory.toBuildRampart = whichRampartToBuild(creep.room).id
            }
            if (target != undefined) {
                creep.say('r');
                //console.log(creep.room.name,target);
                if (creep.repair(target) === ERR_NOT_IN_RANGE) {                  
                    creep.moveTo(target);
                 //   creep.repair(target)
                }
            }
            creep.getEnergy(true, false);        
        }
    }
};
