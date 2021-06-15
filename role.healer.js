var selfRenew = require('action.selfRenew');
module.exports = {
    run: function(creep) {
        creep.say('💕', true);
        
 function wait(){
      let waitFlag = Game.flags["waitFlag"];
        let moveToFlag = creep.moveTo(waitFlag, {
          visualizePathStyle: {
            fill: "transparent",
            stroke: "#fff",
            lineStyle: "dashed",
            strokeWidth: 0.15,
            opacity: 0.1,
          },
        });
        return;
      
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
        if (creep.ticksToLive < 300) {// double back
            creep.memory.recycled = false;
            creep.memory.attaaaacck = false;
            creep.travelTo(Game.flags['waypoint1']);
            if (creep.pos.isNearTo(Game.flags['waypoint1'])) {
                creep.memory.waypoint1 = true;
            }
            creep.say('need 2 renew');
            selfRenew.run(creep);
        }
        else if (creep.ticksToLive < 1450) {
            selfRenew.run(creep);
        }
        else if (creep.ticksToLive > 1400) {
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
        else if (creep.hits > 0.98 * creep.hitsMax) {
            if (creep.memory.recycled 
                && (creep.memory.attaaaacck = true)) {//full health
                creep.travelTo(new RoomPosition(1, 17, creep.memory.target));
                wait()
                creep.memory.attaaaacck = true;
                if (creep.room.name == creep.memory.target) {
                    let toHeal = lowestHealthInRoom(creep);
                    if (toHeal.hits != toHeal.hitsMax 
                        && creep.heal(toHeal) == 0) {
                        
                    } else {
                        
                        creep.rangedHeal(toHeal);
                        creep.heal(toHeal);
                    }
                }
            }
        }
    }
}
