'use strict';
var selfRenew = require('action.selfRenew');
module.exports = {

    run: function (creep) {

if (creep.ticksToLive < 1500) {

creep.suicide();

//Game.spawns.Spawn1.memory.mintowerdrainers4 = {W9S5: 2}
}      

        
        /*

        var rallypos = new RoomPosition(1,20,'W1S8');

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

        else if (creep.pos.x !== rallypos.x && creep.pos.y !== rallypos.y) {
            if (creep.ticksToLive < 1450) {
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
            //if(Game.time % 4 === 0){
                creep.heal(creep);
           // }
        }
        */
        
                
   //W10S8 dismantle route flag
        
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
        
        
         if (!creep.memory.recycled) {
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
