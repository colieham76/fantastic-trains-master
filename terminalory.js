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
        
if (Game.time % 250 === 0) {
        let energyAmountInTerminal = myTerminal.store[RESOURCE_ENERGY] === undefined ? 0 :
            myTerminal.store[RESOURCE_ENERGY];
       
    switch (creep.room.name) {
        case 'W65N63':
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
        case 'W71N69' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
        case 'W62N69' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
        case 'W63N66' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
        case 'W63N64' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
        case 'W62N61' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
        case 'W77N69' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
      //  case 'W79N63' :
        //    if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
        case 'W61N68' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
                           
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

                                if (creep.memory.working && creep.carryCapacity == _.sum(creep.carry)) {
                                    creep.memory.working = false;
                                }
                                if (!creep.memory.working && 0 == _.sum(creep.carry)) {
                                    creep.memory.working = true;
                                }

                                if (creep.memory.working) {
                                    // fetch mineral from lab when not working creep is empty
                                    let fulStore = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                                        filter: s => s.structureType == STRUCTURE_STORAGE
                                       
                                            && (s.id =='5d82f7c6e775fc109f338eba' ||
                                                s.id == '5d190e8dc3832221db628302'/*W77N69*/ || s.id == '5ccd75bdacfe5c75d7e8e3a5'//W62N69
                                                || s.id == '5cc074052ed00b51d517522e' || s.id == '5cccfaa6acfe5c75d7e8a918' //W61N68
                                                || s.id == '5cd8d2ad8078de3919d4ee78'/*W71N69*/ || s.id == '5cbf4674792676418a687406'/*W63N64*/)
                                    });
                                    // if we found right lab
                                    if (fulStore != undefined) {

                                        if (creep.withdraw(fulStore, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            // move towards it
                                            creep.moveTo(fulStore, {visualizePathStyle: visualPath});
                                        }
                                    }
                                }
                                // else put in terminal or storage
                                else {
                                    if (_.sum(creep.carry) > 0) {
                                        if (creep.transfer(terminalVar, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(terminalVar);
                                        }
                                    }
                                }                               
                            }
}
