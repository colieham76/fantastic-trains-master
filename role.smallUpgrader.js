module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {



        // if creep is bringing energy to the controller but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }



        if (creep.room.name == 'W71N69') {
            creep.moveTo(5, 24, {visualizePathStyle: {stroke: '#ffaa00'}});
            if (creep.pos == 5, 24) {
                if (creep.memory.working == true) {
                    //UPGRADER LINK IN ROOM W71N69
                    const upgradeContainer = Game.getObjectById('5ce1cb25e632af2dff382150');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }

                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
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


        // if creep is supposed to transfer energy to the controller
        if (creep.memory.working == true) {
            // instead of upgraderController we could also use:
            if (creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // try to upgrade the controller

                // if not in range, move towards the controller
                creep.travelTo(creep.room.controller);
            }
            else if(creep.room.controller && creep.room.controller.my) {
                if (creep.signController(creep.room.controller, "There are none more hopelessly enslaved than those who falsely believe they are free!") == ERR_NOT_IN_RANGE)
                    // if not in range, move towards the controller
                    creep.travelTo(creep.room.controller);
            }
        }
        // if creep is supposed to get energy
        else {
            creep.getEnergy(true, true);
        }
    }
};
