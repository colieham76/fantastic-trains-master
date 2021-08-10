//var rolePickuper = require('role.pickuper');
var linkEnergyTransferAtHome = require('action.linkEnergyTransferAtHome');
var actionRunAway = require('action.flee');

var actionRepair = require('action.repair');

module.exports = {
    run: function(creep) {
        
        let invaderCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                
                   if (creep.room.name === 'W9S7' && Game.time % 10 === 0) {
                      if (invaderCreep) {
                        Game.spawns.Spawn6.memory.rangedattackerRoom = 'W9S7';
                       // Game.spawns.Spawn5.memory.rangedattackerRoom = 'W1S7'
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
            if (creep.memory.working == true) {

                var mineral = creep.room.find(FIND_MINERALS)[0]
                var container =  mineral.pos.findInRange(FIND_STRUCTURES, 1, {
                    filter: s => s.structureType == STRUCTURE_CONTAINER})[0];
                if ((mineral)&&(container)&&(container.hits<0.9*container.hitsMax)) {
                    actionRepair.run(creep);
                }
                else {

                    var mineral1 = creep.room.find(FIND_MINERALS)[1]
                    var container1 = mineral.pos.findInRange(FIND_STRUCTURES, 1, {
                        filter: s => s.structureType == STRUCTURE_CONTAINER
                    })[1];
                    if ((mineral1) && (container1) && (container1.hits < 0.9 * container1.hitsMax)) {
                        actionRepair.run(creep);
                    }
                }



                if (creep.room.name != creep.memory.home) { // if not at home base
                    //creep.travelTo(Game.flags['link' + creep.memory.home]);
                    creep.travelTo(new RoomPosition(25, 25, creep.memory.home));
                }
                else {// creep at home
                    if (creep.memory.working == true && creep.carry.energy == 0) { // < creep.carryCapacity*0.2) {
                        creep.drop(RESOURCE_ENERGY);
                        creep.memory.working = false;
                    }
                    linkEnergyTransferAtHome.run(creep)
                }
            }
            else {
                if (creep.hits< 0.8 * creep.hitsMax) {// working is false, take energy
                    creep.travelTo(new RoomPosition(25, 25, creep.memory.home));
                }
                else {
                    if (creep.room.name == creep.memory.target) {// if not in target room go to target room, if in:
                        let energy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                            filter: {
                                resourceType: RESOURCE_ENERGY
                            }
                        });
                        if (creep.pickup(energy) == ERR_NOT_IN_RANGE) {
                            creep.travelTo(energy, {maxRooms: 1});
                        } else {
                            let container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                                filter: s => s.structureType == STRUCTURE_CONTAINER
                                    && (s.store[RESOURCE_ENERGY] > 500)
                            });
                            if (container != undefined) {
                                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.travelTo(container, {maxRooms: 2});
                                }
                            }
                        }
                    }
                    else {
                        // find exit to target room
                        var exit = creep.room.findExitTo(creep.memory.target);
                        // move to exit
                        creep.travelTo(creep.pos.findClosestByRange(exit));

                    }
                }
            }
        }
    }
};
