module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        var storageVar = creep.room.storage;
        if(creep.memory.working && creep.store.energy < 600) {
            creep.memory.working = false;
        }
        else if(!creep.memory.working && creep.store.energy == creep.store.getCapacity()){
            creep.memory.working = true;
        }
        if (creep.room.name == 'W7S6') {
            creep.moveTo(31, 31, {visualizePathStyle: {stroke: '#ffaa00'}});
            if (creep.pos == 31, 31) {
                if (creep.memory.working == false) {
                    //LINK IN ROOM W7S6
                    const upgradeContainer = Game.getObjectById('60f7d1093bd3cc14ace13cfa');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
                 if (Game.time % 20 == 0) {
                    if (creep.transfer(storageVar, RESOURCE_ENERGY)  == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storageVar);
                    }
                }
            }
        }
        if (creep.room.name == 'W9S6') {
            creep.moveTo(25, 35, {visualizePathStyle: {stroke: '#ffaa00'}});
            if (creep.pos == 25, 35) {
                if (creep.memory.working == false) {
                    //LINK IN ROOM W9S6
                    const upgradeContainer = Game.getObjectById('60f28c866ad7ca62d17c9522');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
                 if (Game.time % 22 == 0) {
                    if (creep.transfer(storageVar, RESOURCE_ENERGY)  == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storageVar);
                    }
                }
            }
        }
        if (creep.room.name == 'W3S8') {
            creep.moveTo(18, 27, {visualizePathStyle: {stroke: '#ffaa00'}});
            if (creep.pos == 18, 27) {
                if (creep.memory.working == false) {
                    //LINK IN ROOM W3S8
                    const upgradeContainer = Game.getObjectById('6133bb7de4eb6b1fcb87777a');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
                if (Game.time % 24 == 0) {
                    if (creep.transfer(storageVar, RESOURCE_ENERGY)  == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storageVar);
                    }
                }
            }
        }
    }
}
