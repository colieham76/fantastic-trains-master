module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        let myTerminal = creep.room.find(FIND_MY_STRUCTURES, {
            filter: t => t.structureType == STRUCTURE_TERMINAL
        })[0];
        
        
        /*
        var terminalWithoutGhodium = creep.pos.findClosestByPath(FIND_MY_STRUCTURES,
    		    {
    		        filter: function(object)
    		        {
    		            return object.structureType == STRUCTURE_TERMINAL 
                        && (!object.store[RESOURCE_GHODIUM] 
                        || object.store[RESOURCE_GHODIUM] < 5000);
    		        }
    		    });
        */
        
if (Game.time % 500 === 0) {
        let energyAmountInTerminal = myTerminal.store[RESOURCE_ENERGY] === undefined ? 0 :
            myTerminal.store[RESOURCE_ENERGY];
       
    switch (creep.room.name) {
        case 'W9S6':
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W3S8');
        case 'W7S8' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W3S8');
        case 'W1S8' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W3S8');
        case 'W7S6' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W3S8');
    }
}
                                const visualPath = {
                                    fill: 'transparent',
                                    stroke: '#25ff11',
                                    lineStyle: 'continuous',
                                    strokeWidth: .1,
                                    opacity: .3
                                };
                                var terminalVar = creep.room.terminal;
                                var storageVar = creep.room.storage;
                                var resourceTypes = [

                                    /*            RESOURCE_CATALYZED_UTRIUM_ACID, // ATTACK
                                                RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, // HEAL
                                                RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE, // MOVE
                                                RESOURCE_CATALYZED_GHODIUM_ALKALIDE, // TOUGH
                                                RESOURCE_CATALYZED_KEANIUM_ALKALIDE, // RANGED ATTACK
                                                RESOURCE_CATALYZED_ZYNTHIUM_ACID, */// DISMANTLE
                                    RESOURCE_ENERGY
                                    //RESOURCE_OXYGEN,
                                    //RESOURCE_ZYNTHIUM_KEANITE
                                    //RESOURCE_HYDROGEN
                                ];

        if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.working = false;
            creep.say('🔄 collect');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
            creep.memory.working = true;
            creep.say('offload');
        }
        if (creep.room.name == 'W9S6') {
            creep.moveTo(26, 36, {
                visualizePathStyle: {
                    stroke: '#08ff00'
                }
            });
            if (creep.pos == 26, 36) {
                if (creep.memory.working == false) {
                    const storageContainer = Game.getObjectById('60eed64daf39bb31dcac2cea');
                    if (creep.withdraw(storageContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storageContainer, {visualizePathStyle: visualPath});
                    }
                }
                if (Game.time % 2 == 0) {
                    if (creep.transfer(terminalVar, RESOURCE_ENERGY)  == ERR_NOT_IN_RANGE) {
                        creep.moveTo(terminalVar);
                    }
                }
            }
        }
    }
}
