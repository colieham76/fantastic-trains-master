module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        var storageVar = creep.room.storage;
        var terminal = creep.room.terminal
        var factory = creep.room.factory
        
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
                if (creep.withdraw(storageVar, RESOURCE_ENERGY)  == ERR_NOT_IN_RANGE) {
                    creep.moveTo(storageVar);
                }                                              
            }           
        }
        else {
            if (storageVar 
                && storageVar.store[RESOURCE_ENERGY] >= 80000 ){
                //   && factory && factory.store[RESOURCE_ENERGY] < 60000 
                //   && factory.store.getFreeCapacity() >= creep.store.getCapacity()) {
                creep.memory.storageToFactory = true
            }                   
            const storageToFactory = creep.memory.storageToFactory                    
            if (storageToFactory) {
                creep.say("STF")
                if (creep.memory.isFull == true) {
                    creep.transfer(factory, RESOURCE_ENERGY)
                    creep.moveTo(factory);
                    creep.memory.storageToFactory = false 
                } else {
                    creep.withdraw(storageVar, RESOURCE_ENERGY)
                    creep.moveTo(storageVar);
                }
            }             
        }
    }
}
