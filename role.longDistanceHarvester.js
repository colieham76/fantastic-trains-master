module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
        var terminalVar = creep.room.terminal;
        var storageVar = creep.room.storage;
        // if creep is bringing energy to a structure but has no energy left
        if(creep.memory.working && creep.store.energy == 0) {
            creep.memory.working = false;
        }
        else if(!creep.memory.working && creep.store.energy == creep.store.getCapacity()){
            creep.memory.working = true;
        }
        // if in home room
        if (creep.memory.working === true) {
            if (creep.room.name === creep.memory.home) {               
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {                   
                    filter: (s) => (s.structureType === STRUCTURE_SPAWN
                            || s.structureType === STRUCTURE_EXTENSION
                            || s.structureType === STRUCTURE_LINK
                            || s.structureType === STRUCTURE_STORAGE
                           // || s.structureType === STRUCTURE_TOWER
                        )
                        && s.energy < s.energyCapacity
                });
                if (_.sum(creep.carry) > 0) {
                    if (creep.transfer(storageVar, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(storageVar);
                    }
                }
                if (structure == undefined) {
                    if (_.sum(creep.carry) > 0) {
                        if (creep.transfer(terminalVar, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.travelTo(terminalVar);
                        }
                    }
                }
                // if we found one
                if (structure != undefined) {
                    // try to transfer energy, if it is not in range
                    if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.travelTo(structure);
                    }
                }
            }
            // if not in home room...
            else {
                // find exit to home room
                var exit = creep.room.findExitTo(creep.memory.home);
                // and move to exit
                creep.travelTo(creep.pos.findClosestByRange(exit));
            }
        }
        // if creep is supposed to harvest energy from source
        else {
            if (creep.room.name == creep.memory.target) {               
                var source = creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex];              
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {                
                    creep.travelTo(source);
                }
                let invaderStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
                if(creep.room.name == 'W3S7') {
                    if (invaderStructure) {
                        if (Game.time % 500 === 0) {
                            Game.spawns.Spawn3.memory.minattackers = {W3S7: 1};
                        }
                        else {
                            Game.spawns.Spawn3.memory.minattackers = {W3S7: 0};
                        }
                            
                    }
                }
                if(creep.room.name == 'W7S7') {
                    if (invaderStructure) {
                        if (Game.time % 500 === 0) {
                            Game.spawns.Spawn7.memory.minattackers = 'W7S7';
                        }
                    }
                }
                let invaderCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);               
                if (creep.room.name === 'W9S5' && Game.time % 10 === 0) {
                    if (invaderCreep) {
                        Game.spawns.Spawn6.memory.minattackers = 'W9S5';
                    }
                }                             
                if (creep.room.name === 'W1S7' && Game.time % 10 === 0) {
                    if (invaderCreep) {
                        Game.spawns.Spawn2.memory.rangedattackerRoom = 'W1S7';
                        Game.spawns.Spawn5.memory.minattackers = 'W1S7'
                    }
                }
                if (creep.room.name === 'W3S7' && Game.time % 10 === 0) {
                    if (invaderCreep) {
                        Game.spawns.Spawn3.memory.minattackers = {W3S7: 1};
                        Game.spawns.Spawn4.memory.rangedattackerRoom = {W3S7: 1};
                    }
                    else {
                        Game.spawns.Spawn3.memory.minattackers = {W3S7: 0};
                        Game.spawns.Spawn4.memory.rangedattackerRoom = {W3S7: 0};
                    }
                        
                }
                if (creep.room.name === 'W1S9' && Game.time % 10 === 0) {
                    if (invaderCreep) {
                        Game.spawns.Spawn5.memory.minattackers = 'W1S9';
                        Game.spawns.Spawn2.memory.rangedattackerRoom = 'W1S9'
                    }
                }               
            }
            // if not in target room
            else {
                // find exit to target room
                var exit = creep.room.findExitTo(creep.memory.target); 
                creep.travelTo(creep.pos.findClosestByRange(exit));
            }
        }
        if(creep.memory.working && creep.store.energy == 0) {
            var dropedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                filter: (e) => (e.resourceType == RESOURCE_ENERGY) && e.energy > 500
            });
            if (dropedEnergy) {
                if (creep.pickup(dropedEnergy) === ERR_NOT_IN_RANGE) {
                    creep.travelTo(dropedEnergy, {
                        visualizePathStyle: {
                            stroke: '#e70808'
                        }
                    });
                    creep.say('Kprs');
                }
            }
        }       
    }
};
