const roleUpgrader = require('role.upgrader');

module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    /** @param {Creep} creep *
     */
    run: function (creep) {
        /*
        if (!creep.memory.w3s8f1) {
            creep.travelTo(Game.flags['w3s8f1']);
            if (creep.pos.isNearTo(Game.flags['w3s8f1'])) {
                creep.memory.w3s8f1 = true;
            }
            return;
        }
        if (creep.room.name !== creep.memory.target && !creep.memory.w3s8f2) {
            creep.travelTo(Game.flags['w3s8f2']);
            if (creep.pos.isNearTo(Game.flags['w3s8f2'])) {
                creep.memory.w3s8f2 = true;
            }
            return;
        }

        if (!creep.memory.w3s8f3) {
            creep.travelTo(Game.flags['w3s8f3']);
            if (creep.pos.isNearTo(Game.flags['w3s8f3'])) {
                creep.memory.w3s8f3 = true;
            }
            return;
        }
        if (creep.room.name !== creep.memory.target && !creep.memory.w3s8f4) {
            creep.travelTo(Game.flags['w3s8f4']);
            if (creep.pos.isNearTo(Game.flags['w3s8f4'])) {
                creep.memory.w3s8f4 = true;
            }
            return;
        }

        if (!creep.memory.w3s8f5) {
            creep.travelTo(Game.flags['w3s8f5']);
            if (creep.pos.isNearTo(Game.flags['w3s8f5'])) {
                creep.memory.w3s8f5 = true;
            }
            return;
        }*/
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
