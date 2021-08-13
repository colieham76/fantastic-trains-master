
//var rolePickuper = require('role.pickuper');
var linkEnergyTransferAtHome = require('action.linkEnergyTransferAtHome');
var actionRunAway = require('action.flee');

var actionRepair = require('action.repair');

module.exports = {
    run: function(creep) {

 if (creep.ticksToLive < 50) {
            Game.spawns.Spawn6.memory.minLongDistanceLorrys = {W9S7: 2};
        }
        
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
                    if (creep.room.name == creep.memory.target) {                        
                        let energy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                            filter: {
                                resourceType: RESOURCE_ENERGY
                            }
                        });
                        if (creep.pickup(energy) == ERR_NOT_IN_RANGE) {
                            creep.travelTo(energy, {maxRooms: 1});
                        }
                        /*
                        const containerW9S5c1 = Game.getObjectById('61126c627d7cc169e5d98848')
                        if(containerW9S5c1.hits<0.9*containerW9S5c1.hitsMax){
                            creep.repair(containerW9S5c1)
                        }
                        actionRepair.run(creep);
                        
                         */
                    }
                    else {
                        // find exit to target room
                        var exit = creep.room.findExitTo(creep.memory.target);
                        // move to exit
                        creep.travelTo(creep.pos.findClosestByRange(exit));

                    }
                }
