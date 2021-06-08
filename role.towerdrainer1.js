'use strict';
var selfRenew = require('action.selfRenew');                   
module.exports = {

    run: function (creep) {

        if (creep.ticksToLive < 300) {
            creep.say('need renew');
            creep.memory.recycled = true;
        } else if (creep.ticksToLive > 1400) {
            creep.memory.recycled = false;
        }

        if (creep.memory.recycled) {
            selfRenew.run(creep);
        }
        creep.notifyWhenAttacked(false);

        if (!creep.memory.rally1) {
            creep.travelTo(Game.flags['waypoint1']);
            if (creep.pos.isNearTo(Game.flags['waypoint1'])) {
                creep.memory.waypoint1 = true;
            }
            return;
        }

        if (!creep.memory.rally1) {
            creep.travelTo(Game.flags['rally1']);

            if (creep.pos.isNearTo(Game.flags['rally1'])) {
                creep.memory.rally1 = true;
            }
            return;
        }

        if (creep.hits > 0.95 * creep.hitsMax) { // if full health
            creep.travelTo(Game.flags['attack1']);
        } else if (creep.hits < 0.6 * creep.hitsMax) { // if full health
            creep.travelTo(Game.flags['rally1']);
        }

        if (!creep.memory.healingAbility) {
            creep.memory.healingAbility = healingability(creep);
        }
        creep.heal(creep);
    }
}
