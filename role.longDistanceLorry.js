var rolePickuper = require('role.pickuper');
var linkEnergyTransferAtHome = require('action.linkEnergyTransferAtHome');
var actionRunAway = require('action.flee');
var actionRepair = require('action.repair');

module.exports = {
    run: function(creep) {
        let invaderCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (creep.room.name === 'W9S7' && Game.time % 50 === 0) {
            if (invaderCreep) {
                Game.spawns.Spawn6.memory.minattackers = {W9S7: 1};
            }
            else {
                Game.spawns.Spawn6.memory.minattackers = {W9S7: 0}; 
            }
        }
        if (creep.room.name === 'W7S7' && Game.time % 50 === 0) {
            if (invaderCreep) {
                Game.spawns.Spawn7.memory.minattackers = {W7S7: 1};
            }
            else {
                Game.spawns.Spawn7.memory.minattackers = {W7S7: 0}; 
            }
        }
        
        // repair when walking
        let thingUnderFeet = creep.room.lookForAt(LOOK_STRUCTURES, creep)[0];
        if (thingUnderFeet && thingUnderFeet.structureType == STRUCTURE_ROAD) {
            creep.repair(thingUnderFeet);
        }
        else {
            let thingUnderFeet = creep.room.lookForAt(LOOK_CONSTRUCTION_SITES, creep)[0];
            if (thingUnderFeet) {
                creep.build(thingUnderFeet);
            }
        }
        if ((creep.pos.findInRange(FIND_HOSTILE_CREEPS, 5).length > 0)) {
            actionRunAway.run(creep);
        }
        else {
            creep.say('take away');
            if (creep.memory.working == true && creep.carry.energy == 0) {
                creep.memory.energyTransferCount = 0;
                creep.memory.toCentre = false;
                creep.memory.working = false;
                creep.memory.searchForLink = true;
            }
            else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
                creep.memory.working = true;
                creep.memory.energyTransferCount = 0;
            }
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
                    else {
                        if (creep.room.name == creep.memory.target) {
                            if (creep.memory.working == false) {
                        // if there is no storage (which could be possible after destroyed), try picking up some energy
                        let energy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                            filter: {
                                resourceType: RESOURCE_ENERGY
                            }
                        });
                        if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(energy);
                        }
                        creep.getEnergy(true, true);
                    }
                }
                else {
                    var exit = creep.room.findExitTo(creep.memory.target);
                    creep.travelTo(creep.pos.findClosestByRange(exit));
                }
            }
        }
    }
};
