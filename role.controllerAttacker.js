module.exports = {
    run: function(creep) {
        creep.say('OMG!😂', true);
        
     /*   if (creep.ticksToLive < 50) {
           Game.spawns.Spawn6.memory.mincontrollerattackers = {W9S5: 2} 
        }  */    
        
       if (creep.ticksToLive < 1500) {
                  creep.suicide();
          }
     
        if (creep.room.name == creep.memory.target) { // if in target room
            if (creep.room.controller && !creep.room.controller.my) {
                if (creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
        else { // go to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            creep.travelTo(creep.pos.findClosestByRange(exit));
        }
    }
};
