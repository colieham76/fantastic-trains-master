
'use strict';
var selfRenew = require('action.selfRenew');                   
module.exports = {

    run: function (creep) {
        
         var rallypos = new RoomPosition(16,48,'E1S16');
/*
        if (creep.ticksToLive < 500) {// double back
            creep.memory.recycled = false;
            creep.memory.attaaaacck = false;
            creep.travelTo(Game.flags['waypoint1']);
            if (creep.pos.isNearTo(Game.flags['waypoint1'])) {
                creep.memory.waypoint1 = true;
            }            
            creep.say('need renew');
                selfRenew.run(creep);
        }        
       else if (creep.pos.x !== rallypos.x && creep.pos.y !== rallypos.y) {
            if (creep.ticksToLive < 1450) {
            selfRenew.run(creep);
        }
        else if (creep.ticksToLive > 1400) {
            creep.memory.recycled = true;
            creep.memory.waypoint1 = false;
        }
        if (!creep.memory.waypoint1 && (creep.memory.recycled = true) && (creep.memory.attaaaacck = true)) {//enroute
            creep.travelTo(Game.flags['waypoint1']);
            if (creep.pos.isNearTo(Game.flags['waypoint1'])) {
                creep.memory.waypoint1 = true;
                }
               return;
            }
            
       }
        if (creep.memory.recycled &&  (creep.memory.attaaaacck = true)) {
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
        
        */

        //W10S8 dismantler route flag
        if (!creep.memory.w5s7f4) {
            creep.travelTo(Game.flags['w5s7f4']);
            if (creep.pos.isNearTo(Game.flags['w5s7f4'])) {
                creep.memory.w5s7f4 = true;
            }
            return;
        }
//W10S5 dismantler route flag
        if (!creep.memory.w5s7f5) {
            creep.travelTo(Game.flags['w5s7f5']);
            if (creep.pos.isNearTo(Game.flags['w5s7f5'])) {
                creep.memory.w5s7f5 = true;
            }
            return;
        }
//W9S5 dismantler route flag
        if (!creep.memory.w9s6f1) {
            creep.travelTo(Game.flags['w9s6f1']);
            if (creep.pos.isNearTo(Game.flags['w9s6f1'])) {
                creep.memory.w9s6f1 = true;
            }
            return;
        }
        /*
        //W9S6 dismantler route flag
                if (!creep.memory. w9s6f2) {
                    creep.travelTo(Game.flags['w9s6f2']);
                    if (creep.pos.isNearTo(Game.flags['w9s6f2'])) {
                        creep.memory. w9s6f2 = true;
                    }
                    return;
                }
        */

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

