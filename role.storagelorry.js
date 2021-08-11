module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        const visualPath = {
            fill: 'transparent',
            stroke: '#fe0f0a',
            lineStyle: 'continuous',
            strokeWidth: .5,
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

            //RESOURCE_OXYGEN,
            RESOURCE_ENERGY

        ];
        if(creep.room.name == 'W62N61') {
            if (creep.memory.working && creep.carryCapacity == _.sum(creep.carry)) {
                creep.memory.working = false;
            }
            if (!creep.memory.working && 0 == _.sum(creep.carry)) {
                creep.memory.working = true;
            }

            if (creep.memory.working) {
                
                let terStorage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s => s.structureType == STRUCTURE_TERMINAL
                       // && s.mineralAmount > 1000
                        && (s.id == '5cfb0b005f90cb12d6d0b9b1')
                });
                // if we found right lab
                if (terStorage != undefined) {

                    if (creep.withdraw(terStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.moveTo(terStorage, {visualizePathStyle: visualPath});
                    }
                }
            }
            // else put in terminal or storage
            else {
                if (_.sum(creep.carry) > 0)
                {
                    if (creep.transfer(storageVar, RESOURCE_ENERGY)  == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storageVar);
                    }
                }
            }
            /*
            // Stop ZK production if Terminal Full in Room W11N83
            var terminalZKFull = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: function(object) {
                    return object.structureType == STRUCTURE_TERMINAL && (object.store[RESOURCE_ZYNTHIUM_KEANITE] > 5000);
                }
            });
            if(terminalZKFull) {

                Game.rooms['W17N88'].terminal.send(RESOURCE_ZYNTHIUM_KEANITE, 5000, 'W12N88', 'internal trade ZK')
                Game.rooms['W17N88'].terminal.send(RESOURCE_ZYNTHIUM, 5000, 'W11N83', 'internal trade')
                Game.rooms['W11N83'].terminal.send(RESOURCE_KEANIUM, 5000, 'W17N88', 'internal trade K')
                Game.rooms['W12N88'].terminal.send(RESOURCE_GHODIUM, 5000, 'W11N88', 'internal trade')
            }*/
        }

    }
}
