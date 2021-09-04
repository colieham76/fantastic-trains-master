module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        
        
        // upgrader route flag

        if (!creep.memory.w3s8f3) {
            creep.travelTo(Game.flags['w3s8f3']);
            if (creep.pos.isNearTo(Game.flags['w3s8f3'])) {
                creep.memory.w3s8f3 = true;
            }
            return;
        }
        if (!creep.memory.w5s7f1) {
            creep.travelTo(Game.flags['w5s7f1']);
            if (creep.pos.isNearTo(Game.flags['w5s7f1'])) {
                creep.memory.w5s7f1 = true;
            }
            return;
        }
        if (!creep.memory.W5S6) {
            creep.travelTo(Game.flags['W5S6']);
            if (creep.pos.isNearTo(Game.flags['W5S6'])) {
                creep.memory.W5S6 = true;
            }
            return;
        }

         if (!creep.memory.W6S6) {
            creep.travelTo(Game.flags['W6S6']);
            if (creep.pos.isNearTo(Game.flags['W6S6'])) {
                creep.memory.W6S6 = true;
            }
            return;
        }

         if (!creep.memory.W7S6) {
            creep.travelTo(Game.flags['W7S6']);
            if (creep.pos.isNearTo(Game.flags['W7S6'])) {
                creep.memory.W7S6 = true;
            }
            return;
        }

        if (creep.memory.working && creep.store.energy == 0) {
            creep.memory.working = false;
        } else if (!creep.memory.working && creep.store.energy == creep.store.getCapacity()) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            if (creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.travelTo(creep.room.controller);
            } else if (creep.room.controller && creep.room.controller.my) {
                if (creep.signController(creep.room.controller, "There are none more hopelessly " +
                                         "enslaved than those who falsely believe they are free!") == ERR_NOT_IN_RANGE)
                    creep.travelTo(creep.room.controller);
            }   
        } else {
            creep.getEnergy(true, true);
        }
    }
}
