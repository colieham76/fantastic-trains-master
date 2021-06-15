var selfRenew = require('action.selfRenew');
module.exports = {
    run: function(creep) {
      //  creep.say('💕', true);
        var rallypos = new RoomPosition(1,17,'W1S8');       
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
        if (creep.ticksToLive < 300) {// double back
            creep.memory.recycled = false;
            creep.memory.attaaaacck = false;
            creep.travelTo(Game.flags['waypoint1']);
            if (creep.pos.isNearTo(Game.flags['waypoint1'])) {
                creep.memory.waypoint1 = true;
            }
            creep.say('need 2 renew');
            let storage = creep.room.storage;
            if (_.sum(creep.store) > 600) {
                selfRenew.run(creep);
            }
        }
        else if (creep.pos.x !== rallypos.x && creep.pos.y !== rallypos.y) {
            if (creep.ticksToLive < 1450) {
                selfRenew.run(creep);
            } else if (creep.ticksToLive > 1400) {
                creep.memory.recycled = true;
                creep.memory.waypoint1 = false;
            }
            if (!creep.memory.waypoint1 && (creep.memory.recycled = true)
                && (creep.memory.attaaaacck = true)) {
                creep.travelTo(Game.flags['waypoint1']);
                if (creep.pos.isNearTo(Game.flags['waypoint1'])) {
                    creep.memory.waypoint1 = true;
                }
                return;
            }
        }
       /* 
        var rallypos = new RoomPosition(1,17,'W1S8');
            if(creep.pos.x != rallypos.x && creep.pos.y != rallypos.y) {
                creep.moveTo(rallypos);                
            } 
       */
       if (creep.memory.recycled 
                && (creep.memory.attaaaacck = true)) {//full health
           creep.travelTo(new RoomPosition(1, 17, creep.memory.target));

           creep.memory.attaaaacck = true;

           let toHeal = lowestHealthInRoom(creep);
           try {
               if (toHeal.hits != toHeal.hitsMax
                   && creep.heal(toHeal) == 0) {

               }
           } catch (e) {
               if(Game.time % 25 === 0) {
                   console.log('no towerdrainer spawned ffs!')
               }
           }
       }
       else {
                        creep.heal(toHeal);
                    }
    }
}
