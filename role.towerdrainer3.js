'use strict';
var selfRenew = require('action.selfRenew');
module.exports = {

    run: function (creep) {
        
     //   var rallypos = new RoomPosition(1,20,'W1S8');
/*
if (creep.ticksToLive < 1500) {

creep.suicide();
}
*/
//Game.spawns.Spawn1.memory.mintowerdrainers3 = {W9S5: 2}
      
        /*

        if (creep.ticksToLive < 300) {// double back
            creep.memory.recycled = false;
            creep.memory.attaaaacck = false;
            creep.travelTo(Game.flags['waypoint3']);
            if (creep.pos.isNearTo(Game.flags['waypoint3'])) {
                creep.memory.waypoint3 = true;
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
            creep.memory.waypoint3 = false;
        }
        if (!creep.memory.waypoint3 && (creep.memory.recycled = true) && (creep.memory.attaaaacck = true)) {//enroute
            creep.travelTo(Game.flags['waypoint3']);
            if (creep.pos.isNearTo(Game.flags['waypoint3'])) {
                creep.memory.waypoint3 = true;
            }
            return;
        }
        }
       
        if (creep.memory.recycled &&  (creep.memory.attaaaacck = true)) {
            creep.notifyWhenAttacked(false);

            if (creep.hits > 0.95 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['attack3']);
                creep.memory.attaaaacck = true;

            } else if (creep.hits < 0.95 * creep.hitsMax) { // if not full health
                creep.travelTo(Game.flags['rally3']);
                creep.memory.attaaaacck = false;

                if (creep.pos.isNearTo(Game.flags['rally3'])) {
                    creep.memory.rally3 = true;
                }
            }
            if (!creep.memory.healingAbility) {
                creep.memory.healingAbility = healingability(creep);
            }
           if(Game.time % 3 === 0){
            creep.heal(creep);       
            }
        }
        
        */
  if (!creep.memory.w10s8f1) {
            creep.travelTo(Game.flags['w10s8f1']);
            if (creep.pos.isNearTo(Game.flags['w10s8f1'])) {
                creep.memory.w10s8f1 = true;
            }
            return;
        }
      if (!creep.memory.w10s2f1) {
            creep.travelTo(Game.flags['w10s2f1']);
            if (creep.pos.isNearTo(Game.flags['w10s2f1'])) {
                creep.memory.w10s2f1 = true;
            }
            return;
        }
      if (!creep.memory.w9s3f1) {
            creep.travelTo(Game.flags['w9s3f1']);
            if (creep.pos.isNearTo(Game.flags['w9s3f1'])) {
                creep.memory.w9s3f1 = true;
            }
            return;
        }

         if (!creep.memory.recycled) {
            creep.notifyWhenAttacked(false);

            if (creep.hits > 0.95 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['attack3']);
                creep.memory.attaaaacck = true;

            } else if (creep.hits < 0.95 * creep.hitsMax) { // if not full health
                creep.travelTo(Game.flags['rally3']);
                creep.memory.attaaaacck = false;

                if (creep.pos.isNearTo(Game.flags['rally3'])) {
                    creep.memory.rally3 = true;
                }
            }
            if (!creep.memory.healingAbility) {
                creep.memory.healingAbility = healingability(creep);
            }
            creep.heal(creep);
        } 
    }
}
