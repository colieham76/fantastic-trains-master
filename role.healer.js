var selfRenew = require('action.selfRenew');
module.exports = {
    run: function(creep) {
     //   creep.say('💕', true);
        var rallypos = new RoomPosition(17,48,'E1S16');


//if (creep.ticksToLive < 1500) {
//                    creep.suicide();
//            }

        /*
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

        //code for distant room
        if (!creep.memory.recycled){
          creep.travelTo(new RoomPosition(17, 48, creep.memory.target));   
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
