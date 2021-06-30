var selfRenew = require('action.selfRenew');
module.exports = {
    run: function(creep) {
     //   creep.say('💕', true);

      if (creep.ticksToLive < 350) {
Game.spawns.Spawn3.memory.minhealers = {W7S6: 2};
}  
        
     /*    if(creep.room.name == 'W3S8'){
            creep.memory.drainerspawn == true;
        }
        if(creep.memory.healerspawn){
             Game.spawns.Spawn4.memory.mintowerdrainers2 = {W7S6: 1}
            creep.memory.drainerspawn = false;
        }*/
       /* 
        var rallypos = new RoomPosition(29,48,'W7S6');


//if (creep.ticksToLive < 1500) {
//                    creep.suicide();
//            }

        
        if (!creep.memory.boosted) { // if creep is not boosted, find a lab to boost
            let labToGo;
            let labs = creep.room.find(FIND_MY_STRUCTURES, {filter: c => c.structureType == STRUCTURE_LAB});
            for (let lab of labs) {
                if (lab.mineralType == 'LHO2' && lab.mineralAmount>=30*25 && lab.energy>=20*25) {
                    labToGo = lab;
                    break;
                }
            }
            if ( creep.pos.getRangeTo(labToGo) > 1 ) {
                creep.moveTo(labToGo);
            }
            else {
                if (labToGo.boostCreep(creep) == 0) {
                    creep.memory.boosted = true;
                }
            }
        }
        else {*/
        
        /* //healer code for  adjacent room
        if (creep.ticksToLive < 500) {// double back
            creep.memory.recycled = false;
            creep.memory.attaaaacck = false;
            creep.travelTo(Game.flags['waypoint1']);
            if (creep.pos.isNearTo(Game.flags['waypoint1'])) {
                creep.memory.waypoint1 = true;
            }
            creep.say('need 2 renew');
            if(creep.room.name === 'W1S8'){
                selfRenew.run(creep);
            }
        }
        else if (creep.pos.x !== rallypos.x && creep.pos.y !== rallypos.y) {
            if (creep.ticksToLive < 1450) {
                selfRenew.run(creep);
            } else if (creep.ticksToLive > 1400) {
                creep.memory.recycled = true;
                creep.memory.waypoint1 = false;
                //creep.memory.attack = true;
            }
            if (!creep.memory.waypoint1 && (creep.memory.recycled = true)
                && (creep.memory.attaaaacck = false)) {
                creep.travelTo(Game.flags['waypoint1']);
                if (creep.pos.isNearTo(Game.flags['waypoint1'])) {
                    creep.memory.waypoint1 = true;
                }
                return;
            }
        }
        
        
        if (creep.memory.recycled 
            && (creep.memory.attaaaacck = true)) {
            creep.travelTo(new RoomPosition(17, 48, creep.memory.target));
            creep.memory.attaaaacck = true;
            let toHeal = lowestHealthInRoom(creep);
            if (toHeal.hits != toHeal.hitsMax && creep.heal(toHeal) == 0) {
                
            } else {
                creep.heal(toHeal);
                creep.rangedHeal(toHeal);
            }
        }
        */

        //W10S8 dismantle route flag
 /*       if (!creep.memory.w10s8f1) {
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
//W9S6 dismantler route flag
        if (!creep.memory.w9s6f1) {
            creep.travelTo(Game.flags['w9s6f1']);
            if (creep.pos.isNearTo(Game.flags['w9s6f1'])) {
                creep.memory.w9s6f1 = true;
            }
            return;
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
        
        //code for distant room
        if (!creep.memory.recycled){
          creep.travelTo(new RoomPosition(29, 48, 'W7S6'));   
           creep.memory.attaaaacck = true;
        let toHeal = lowestHealthInRoom(creep);
            if (toHeal.hits != toHeal.hitsMax && creep.heal(toHeal) == 0) {
                
            } else {
                creep.heal(toHeal);
                creep.rangedHeal(toHeal);
            }
        }
        
    }
}
