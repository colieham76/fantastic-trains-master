var selfRenew = require('action.selfRenew');
module.exports = {
    run: function(creep) {
        creep.say('💕', true);
//if (creep.ticksToLive < 1500) {
//                    creep.suicide();
//                }

   if (creep.ticksToLive < 25) {
   Game.spawns.Spawn4.memory.minhealers2 = {W4S6: 2};
    }
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
        
        if (!creep.memory.w3s8f3) {
            creep.travelTo(Game.flags['w3s8f3']);
            if (creep.pos.isNearTo(Game.flags['w3s8f3'])) {
                creep.memory.w3s8f3 = true;
            }
            return;
        }
        if (!creep.memory.w5s7f1) {
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
        
        //code for distant room
        if (!creep.memory.recycled){
          creep.travelTo(new RoomPosition(13, 47, 'W4S6'));   
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
