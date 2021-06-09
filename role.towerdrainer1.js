'use strict';
var selfRenew = require('action.selfRenew');                   
module.exports = {

    run: function (creep) {

        if (creep.ticksToLive < 300) {// double back
            creep.memory.recycled = false;
            creep.memory.attaaaacck = false;
            creep.travelTo(Game.flags['waypoint1']);
            if (creep.pos.isNearTo(Game.flags['waypoint1'])) {
                creep.memory.waypoint1 = true;
            }            
            creep.say('need renew');
                selfRenew.run(creep);
        }        
        else if(creep.ticksToLive < 1450){
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
            else 
                if (!creep.memory.rally1 && (creep.memory.waypoint1 = true) && (creep.memory.recycled = true)) {// enroute
                creep.travelTo(Game.flags['rally1']);

                if (creep.pos.isNearTo(Game.flags['rally1'])) {
                    creep.memory.rally1 = true;
                    creep.memory.attaaaacck = true;
                   // creep.memory.waypoint1 = false;
                }
                return;
            }
        if (creep.memory.recycled &&  (creep.memory.attaaaacck = true)) {
            creep.notifyWhenAttacked(false);

            if (creep.hits > 0.95 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['attack1']);

            } else if (creep.hits < 0.6 * creep.hitsMax) { // if full health
                creep.travelTo(Game.flags['rally1']);
                creep.memory.attaaaacck = false;
                //creep.memory.waypoint1 = false;
            }

            if (!creep.memory.healingAbility) {
                creep.memory.healingAbility = healingability(creep);
            }
            creep.heal(creep);
        }
    }
}
