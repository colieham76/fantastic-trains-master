module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        // upgrader route flag

        if (!creep.memory.w10s8f1) {
            creep.travelTo(Game.flags['w10s8f1']);
            if (creep.pos.isNearTo(Game.flags['w10s8f1'])) {
                creep.memory.w10s8f1 = true;
            }
            return;
        }
        if (!creep.memory.w10s5f1) {
            creep.travelTo(Game.flags['w10s5f1']);
            if (creep.pos.isNearTo(Game.flags['w10s5f1'])) {
                creep.memory.w10s5f1 = true;
            }
            return;
        }

         if (!creep.memory.W9S5) {
            creep.travelTo(Game.flags['W9S5']);
            if (creep.pos.isNearTo(Game.flags['W9S5'])) {
                creep.memory.W9S5 = true;
            }
            return;
        }

         if (!creep.memory.w9s6f1) {
            creep.travelTo(Game.flags['w9s6f1']);
            if (creep.pos.isNearTo(Game.flags['W9S6f1'])) {
                creep.memory.w9s6f1 = true;
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
