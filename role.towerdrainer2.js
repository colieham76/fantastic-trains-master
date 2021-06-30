'use strict';
var selfRenew = require('action.selfRenew');
module.exports = {

    run: function (creep) {

//if (creep.ticksToLive < 350) {
//Game.spawns.Spawn4.memory.mintowerdrainers2 = {W7S6: 2}
//  } 

        /*
        var rallypos = new RoomPosition(16,48,'E1S16');

        if (creep.ticksToLive < 500) {// double back
            creep.memory.recycled = false;
            creep.memory.attaaaacck = false;
            creep.travelTo(Game.flags['waypoint2']);
            if (creep.pos.isNearTo(Game.flags['waypoint2'])) {
                creep.memory.waypoint2 = true;
            }
            creep.say('need renew');
            selfRenew.run(creep);
        }
        
         else if (creep.pos.x !== rallypos.x && creep.pos.y !== rallypos.y) {
            if (creep.ticksToLive < 1450) {
            let storage = creep.room.storage;
            if (_.sum(creep.store) > 1000) {
                selfRenew.run(creep);
            }
            else if (_.sum(creep.store) < 5500) {
                selfRenew.run(creep);
            }
        }
        
        else if (creep.ticksToLive > 1400) {
            creep.memory.recycled = true;
            creep.memory.waypoint2 = false;
        }
        if (!creep.memory.waypoint2 && (creep.memory.recycled = true) && (creep.memory.attaaaacck = true)) {//enroute
            creep.travelTo(Game.flags['waypoint2']);
            if (creep.pos.isNearTo(Game.flags['waypoint2'])) {
                creep.memory.waypoint2 = true;
            }
            return;
        }
         }
        if (creep.memory.recycled &&  (creep.memory.attaaaacck = true)) {
            creep.notifyWhenAttacked(false);

            if (creep.hits > 0.95 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['attack2']);
                creep.memory.attaaaacck = true;

            } else if (creep.hits < 0.95 * creep.hitsMax) { // if not full health
                creep.travelTo(Game.flags['rally2']);
                creep.memory.attaaaacck = false;

                if (creep.pos.isNearTo(Game.flags['rally2'])) {
                    creep.memory.rally2 = true;
                }
            }
            if (!creep.memory.healingAbility) {
                creep.memory.healingAbility = healingability(creep);
            }
           if(Game.time % 10 === 0){
            creep.heal(creep);       
            }
        }
        
        */
        
        if (!creep.memory.w3s8f3) {
            creep.travelTo(Game.flags['w3s8f3']);
            if (creep.pos.isNearTo(Game.flags['w3s8f3'])) {
                creep.memory.w3s8f3 = true;
            }
            return;
        }
        if (creep.room.name !== creep.memory.target && !creep.memory.w5s7f1) {
            creep.travelTo(Game.flags['w5s7f1']);
            if (creep.pos.isNearTo(Game.flags['w5s7f1'])) {
                creep.memory.w5s7f1 = true;
            }
            return;
        }
        
        if (!creep.memory.w5s7f2) {
            creep.travelTo(Game.flags['w5s7f2']);
            if (creep.pos.isNearTo(Game.flags['w5s7f2'])) {
                creep.memory.w5s7f2 = true;
            }
            return;
        }
//w7s6 dismantle
        if (!creep.memory.w7s6f1) {
            creep.travelTo(Game.flags['w7s6f1']);
            if (creep.pos.isNearTo(Game.flags['w7s6f1'])) {
                creep.memory.w7s6f1 = true;
            }
            return;
        }
        if (!creep.memory.w7s6f2) {
            creep.travelTo(Game.flags['w7s6f2']);
            if (creep.pos.isNearTo(Game.flags['w7s6f2'])) {
                creep.memory.w7s6f2 = true;
            }
            return;
        }
        if (!creep.memory.w7s6f3) {
            creep.travelTo(Game.flags['w7s6f3']);
            if (creep.pos.isNearTo(Game.flags['w7s6f3'])) {
                creep.memory.w7s6f3 = true;
            }
            return;
        }
        
     if (!creep.memory.recycled) {
            creep.notifyWhenAttacked(false);

            if (creep.hits > 0.95 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['attack2']);
                creep.memory.attaaaacck = true;

            } else if (creep.hits < 0.95 * creep.hitsMax) { // if not full health
                creep.travelTo(Game.flags['rally2']);
                creep.memory.attaaaacck = false;

                if (creep.pos.isNearTo(Game.flags['rally2'])) {
                    creep.memory.rally2 = true;
                }
            }
            if (!creep.memory.healingAbility) {
                creep.memory.healingAbility = healingability(creep);
            }
            creep.heal(creep);
        }    
        
    }
}
