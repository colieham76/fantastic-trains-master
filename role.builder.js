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
        }*/
//W10S5 dismantler route flag
        if (!creep.memory.w9s5f1) {
            creep.travelTo(Game.flags['w9s5f1']);
            if (creep.pos.isNearTo(Game.flags['w9s5f1'])) {
                creep.memory. w9s5f1 = true;
            }
            return;
        }
//W9S5 dismantler route flag
        if (!creep.memory.w8s6f1) {
            creep.travelTo(Game.flags['w8s6f1']);
            if (creep.pos.isNearTo(Game.flags['w8s6f1'])) {
                creep.memory.w8s6f1 = true;
            }
            return;
        }
//W9S6 dismantler route flag
        if (!creep.memory.w7s6f3) {
            creep.travelTo(Game.flags['w7s6f3']);
            if (creep.pos.isNearTo(Game.flags['w7s6f3'])) {
                creep.memory.w7s6f3 = true;
            }
            return;
        }
      const constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);
        
        if (creep.memory.building && creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.building = false;
             creep.say('🔄 harvest');
        }
        if (!creep.memory.building && creep.store.getFreeCapacity() === 0) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }

        if (creep.memory.building) {
            if (constructionSites.length > 0) {
                if (creep.build(constructionSites[0]) === ERR_NOT_IN_RANGE) {
                    creep.travelTo(constructionSites[0]);
                }
            } else {
                
                roleUpgrader.run(creep);
            }
        } else {
            if (!creep.memory.building) {
                (creep.getEnergy(true, true));
            }
        }
    }
}
