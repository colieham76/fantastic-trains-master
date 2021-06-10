'use strict';
var selfRenew = require('action.selfRenew');
module.exports = {

    run: function (creep) {

        if (creep.ticksToLive < 300) {// double back
            creep.memory.recycled = false;
            creep.memory.attaaaacck = false;
            creep.travelTo(Game.flags['waypoint4']);
            if (creep.pos.isNearTo(Game.flags['waypoint4'])) {
                creep.memory.waypoint4 = true;
            }
            creep.say('need renew');
            selfRenew.run(creep);
        }
        else if(creep.ticksToLive < 1450){
            selfRenew.run(creep);
        }
        else if (creep.ticksToLive > 1400) {
            creep.memory.recycled = true;
            creep.memory.waypoint4 = false;
        }
        if (!creep.memory.waypoint4 && (creep.memory.recycled = true) && (creep.memory.attaaaacck = true)) {//enroute
            creep.travelTo(Game.flags['waypoint4']);
            if (creep.pos.isNearTo(Game.flags['waypoint4'])) {
                creep.memory.waypoint4 = true;
            }
            return;
        }
        else
        if (!creep.memory.rally4 && (creep.memory.waypoint4 = true) && (creep.memory.recycled = true)) {// enroute
            creep.travelTo(Game.flags['rally4']);

            if (creep.pos.isNearTo(Game.flags['rally4'])) {
                creep.memory.rally4 = true;
                creep.memory.attaaaacck = true;
            }
            return;
        }
        if (creep.memory.recycled &&  (creep.memory.attaaaacck = true)) {
            creep.notifyWhenAttacked(false);

            if (creep.hits > 0.95 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['attack4']);
                creep.memory.attaaaacck = true;

            } else if (creep.hits < 0.95 * creep.hitsMax) { // if not full health
                creep.travelTo(Game.flags['rally4']);
                creep.memory.attaaaacck = false;

                if (creep.pos.isNearTo(Game.flags['rally4'])) {
                    creep.memory.rally4 = true;
                }
            }
            if (!creep.memory.healingAbility) {
                creep.memory.healingAbility = healingability(creep);
            }
            creep.heal(creep);
        }
    }
}
