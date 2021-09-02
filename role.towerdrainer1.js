'use strict';
var selfRenew = require('action.selfRenew');                   
module.exports = {
    run: function (creep) {        
        if (!creep.memory.w3s8f3) {
            creep.travelTo(Game.flags['w3s8f3']);
            if (creep.pos.isNearTo(Game.flags['w3s8f3'])) {
                creep.memory.w3s8f3 = true;
            }
            return;
        }
        if (!creep.memory.w5a7f1) {
            creep.travelTo(Game.flags['w5a7f1']);
            if (creep.pos.isNearTo(Game.flags['w5a7f1'])) {
                creep.memory.w5a7f1 = true;
            }
            return;
        }
        if (!creep.memory.w5a7f2) {
            creep.travelTo(Game.flags['w5a7f2']);
            if (creep.pos.isNearTo(Game.flags['w5a7f2'])) {
                creep.memory.w5a7f2 = true;
            }
            return;
        }
        if (!creep.memory.recycled) {
            creep.notifyWhenAttacked(false);
            if (creep.hits > 0.95 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['attack1']);
                creep.memory.attaaaacck = true;               
            } else if (creep.hits < 0.95 * creep.hitsMax) { // if not full health
                creep.travelTo(Game.flags['rally1']);
                creep.memory.attaaaacck = false;               
                if (creep.pos.isNearTo(Game.flags['rally1'])) {
                    creep.memory.rally1 = true;
                }
            }
            if (!creep.memory.healingAbility) {
                creep.memory.healingAbility = healingability(creep);
            }
            creep.heal(creep);
        }
    }
}
/*
 if (creep.ticksToLive < 1500) {
creep.suicide();
}
*/
        /*
Game.spawns.Spawn1.memory.mintowerdrainers1 = {W9S3: 2}
  */
