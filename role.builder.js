const roleUpgrader = require('role.upgrader');

module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    /** @param {Creep} creep *
     */
    run: function (creep) {
       /*
        if (!creep.memory.w10s8f1) {
            creep.travelTo(Game.flags['w10s8f1']);
            if (creep.pos.isNearTo(Game.flags['w10s8f1'])) {
                creep.memory.w10s8f1 = true;
            }
            return;
        }
//W10S5 dismantler route flag
        if (!creep.memory.w10s5f1) {
            creep.travelTo(Game.flags['w10s5f1']);
            if (creep.pos.isNearTo(Game.flags['w10s5f1'])) {
                creep.memory.w10s5f1 = true;
            }
            return;
        }
//W9S5 dismantler route flag
        if (!creep.memory.w9s5f1) {
            creep.travelTo(Game.flags['w9s5f1']);
            if (creep.pos.isNearTo(Game.flags['w9s5f1'])) {
                creep.memory.w9s5f1 = true;
            }
            return;
        }
//W9S6 dismantler route flag
        if (!creep.memory.w9s6f1) {
            creep.travelTo(Game.flags['w9s6f1']);
            if (creep.pos.isNearTo(Game.flags['w9s6f1'])) {
                creep.memory.w9s6f1 = true;
            }
            return;
        }*/
       var actionGetEnergy = require('action.getEnergy');
var actionBuild = require('action.build');

module.exports = {
    run: function(creep) {
        creep.say('building');
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            actionBuild.run(creep);
        }
        else { // finding resources
            actionGetEnergy.run(creep);
        }
    }
}
    }
};

