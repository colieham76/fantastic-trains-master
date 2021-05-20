module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {


        var terminalVar = creep.room.terminal;
        var storageVar = creep.room.storage

        if (creep.memory.working && creep.store.energy == 0) {
            creep.memory.working = false;
        } else if (!creep.memory.working && creep.store.energy == creep.store.getCapacity()) {
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to the controller
        if (creep.memory.working == true) {
            // instead of upgraderController we could also use:
            if (creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

                // try to upgrade the controller
                //if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // if not in range, move towards the controller
                creep.travelTo(creep.room.controller);
            } else if (creep.room.controller && creep.room.controller.my) {
                if (creep.signController(creep.room.controller, "There are none more hopelessly " +
                    "enslaved than those who falsely believe they are free!") == ERR_NOT_IN_RANGE)
                    // if not in range, move towards the controller
                    creep.travelTo(creep.room.controller);
            }
        } else {
            //withdraw energy from terminal first
                creep.getEnergy(true, true);
        }
    }
}

