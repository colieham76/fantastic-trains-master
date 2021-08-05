var selfRenew = require('action.selfRenew');
module.exports = {
    run: function(creep) {
        creep.say('💕', true);

      if (creep.ticksToLive < 50) {
          Game.spawns.Spawn1.memory.minhealers = {W9S3: 2};
      }  
        
    
       /* 
        
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

        
        //code for distant room
        if (!creep.memory.recycled){
          creep.travelTo(new RoomPosition(7, 1, 'W9S3'));   
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
