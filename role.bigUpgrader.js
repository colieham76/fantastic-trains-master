module.exports = {
                    // a function to run the logic for this role
                    /** @param {Creep} creep */
    run: function(creep) {
      if(creep.memory.working && creep.store.energy == 0) {
    		creep.memory.working = false;
    	}
    	else if(!creep.memory.working && creep.store.energy == creep.store.getCapacity()){
    		creep.memory.working = true;
    	}

                        if (creep.room.name == 'W65N63') {
                            creep.moveTo(45, 43, {visualizePathStyle: {stroke: '#ffaa00'}});
                            if (creep.pos == 45, 43) {
                                if (creep.memory.working == true) {
                                    //UPGRADER LINK IN ROOM W71N69
                                    const upgradeContainer = Game.getObjectById('5cd80e21c7f85a307d113390');
                                    if (upgradeContainer.energy > 0) {
                                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.moveTo(upgradeContainer);
                                        }
                                    }

                                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                                    }

                                    var droppedEnergy = creep.pos.findInRange(FIND_DROPPED_RESOURCES, 1, {
                                        filter: function (obj) {
                                            return (obj.resourceType == RESOURCE_ENERGY)
                                        }
                                    });
                                    if (droppedEnergy.length != 0) {
                                        creep.pickup(droppedEnergy[0])
                                    }
                                }


                                // if creep is supposed to get energy
                                else {
                                    creep.getEnergy(true, false);
                                }
                            }

                            if (creep.carry.energy == 0 && creep.memory.working == false) {
                                if (creep.ticksToLive < 200) {
                                    creep.suicide();
                                }
                            }
                        }


                        if (creep.room.name == 'W79N63') {

/*
                            if (!creep.memory.claimW79N64) {
                                creep.travelTo(Game.flags['claimW79N64']);
                                if (creep.pos.isNearTo(Game.flags['claimW79N64'])) {
                                    creep.memory.claimW79N64 = true;
                                }
                                return;
                            }
*/
                            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                creep.travelTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                            }
                            // if creep is supposed to get energy
                            else {
                                creep.getEnergy(true, true);
                            }


                        }

                        if (creep.memory.working == true) {
                            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});

                            }
                        }
                         
                                else {
                                    creep.getEnergy(true, true);
                                }


                                if (creep.carry.energy == 0 && creep.memory.working == false) {
                                    if (creep.ticksToLive < 200) {
                                        creep.suicide();
                                    }
                                }
                            },
};
