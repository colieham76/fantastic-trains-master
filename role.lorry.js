module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */

    run: function(creep) {
/*
var numberOflorries = _.sum(Game.creeps, (c) => c.memory.role == 'role_Towerdrainer')
     if (numberOflorries < 35){
        creep.suicide() 
       }
*/
	    /*	    
        //terminal distribution - not part of the lorry role
        let myTerminal = creep.room.find(FIND_MY_STRUCTURES, {
            filter: t => t.structureType == STRUCTURE_TERMINAL
        })[0];
	
	 if (Game.time % 50 === 0) {
            let energyAmountInTerminal = myTerminal.store[RESOURCE_ENERGY] == undefined ? 0 :
                myTerminal.store[RESOURCE_ENERGY];

            switch (creep.room.name) {
                case 'W77N69' ://moved to top of list
                    if (energyAmountInTerminal >= 5000) myTerminal.send(RESOURCE_ENERGY, 50000, 'W79N63');
                case 'W65N63':
                    if (energyAmountInTerminal >= 5000) myTerminal.send(RESOURCE_ENERGY, 6000, 'W79N63');
                case 'W71N69' :
                    if (energyAmountInTerminal >= 5000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
                case 'W62N69' :
                    if (energyAmountInTerminal >= 5000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
                case 'W63N66' :
                    if (energyAmountInTerminal >= 5000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
                case 'W63N64' :
                    if (energyAmountInTerminal >= 5000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
                case 'W62N61' :
                    if (energyAmountInTerminal >= 5000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
                 
                //  case 'W79N63' :
                //    if (energyAmountInTerminal >= 5000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');
                case 'W61N68' :
                    if (energyAmountInTerminal >= 5000) myTerminal.send(RESOURCE_ENERGY, 3000, 'W79N63');

            }
        }
             
        */      
        var terminalVar = creep.room.terminal;
        //var storageVar = creep.room.storage;


        if (
            creep.memory.working === true &&
            creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0
        ) {
            creep.memory.working = false;
        } else if (
            creep.memory.working === false &&
            creep.store.getFreeCapacity() === 0
        ) {
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working === true) {
            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {

                filter: (s) => (s.structureType === STRUCTURE_POWER_SPAWN
                        || s.structureType === STRUCTURE_SPAWN
                        || s.structureType === STRUCTURE_EXTENSION
                   // || s.structureType == STRUCTURE_TOWER
                    )
                    && s.energy < s.energyCapacity
            });

            if (structure === undefined) {
             if (_.sum(creep.store) > 0) {
              if (creep.transfer(terminalVar, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                                            creep.travelTo(terminalVar);
                                        }
                                    }
                                }
            // if we found one
            if (structure !== undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(structure);
                }
            }
        }
        // if creep is supposed to get energy
        else {
            // find closest container
            let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => ( s.structureType === STRUCTURE_TERMINAL
                    || s.structureType === STRUCTURE_CONTAINER) && s.store[RESOURCE_ENERGY] > 0
            });
            if (container === undefined) {
                container = creep.room.storage;
            }
            // if one was found
            if (container !== undefined) {
                // try to withdraw energy, if the container is not in range
                if (creep.withdraw(container, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.travelTo(container);
                }
            }
        }
    }
};

