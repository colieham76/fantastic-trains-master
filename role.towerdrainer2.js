'use strict';
var selfRenew = require('action.selfRenew');
module.exports = {

    run: function (creep) {

        if (creep.ticksToLive < 300) {
            creep.memory.recycled = false;

            creep.travelTo(Game.flags['waypoint2']);
            if (creep.pos.isNearTo(Game.flags['waypoint2'])) {
                creep.memory.waypoint2 = true;
            }
            creep.say('need renew');
            selfRenew.run(creep);
        }
        else if(creep.ticksToLive < 1450){
            selfRenew.run(creep);
        }
        else if (creep.ticksToLive > 1400) {
            creep.memory.recycled = true;
            creep.memory.waypoint2 = false;
        }
        if (!creep.memory.waypoint2 && (creep.memory.recycled = true)) {
            creep.travelTo(Game.flags['waypoint2']);
            if (creep.pos.isNearTo(Game.flags['waypoint2'])) {
                creep.memory.waypoint2 = true;
            }
            return;
        }
        else
        if (!creep.memory.rally2 && (creep.memory.recycled = true)) {
            creep.travelTo(Game.flags['rally2']);

            if (creep.pos.isNearTo(Game.flags['rally2'])) {
                creep.memory.rally2 = true;
                // creep.memory.waypoint1 = false;
            }
            return;
        }
        if (creep.memory.recycled) {
            creep.notifyWhenAttacked(false);

            if (creep.hits > 0.95 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['attack2']);
            } else if (creep.hits < 0.6 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['rally2']);
            }

            if (!creep.memory.healingAbility) {
                creep.memory.healingAbility = healingability(creep);
            }
            creep.heal(creep);
        }
    }
}
