'use strict';
/*
  const attackRoom = creep.memory.attackRoom;
  if (!creep.memory.restPosition) {
    creep.notifyWhenAttacked(false);
    const room = Game.rooms[restRoom];
    const attackDirection = room.findExitTo(attackRoom);
   
    const attackExits = room.find(attackDirection);
        
    }
 
  creep.selfHeal();
;
*/

var selfRenew = require('action.selfRenew');

                   
module.exports = {

      run: function (creep) {
        
        creep.notifyWhenAttacked(false);       

        if (!creep.memory.rally1) {
            creep.travelTo(Game.flags['rally1']);

            if (creep.pos.isNearTo(Game.flags['rally1'])) {
                creep.memory.rally1 = true;
            }
            return;
        }        
          
          if (creep.hits > 0.95*creep.hitsMax) { // if full health
              creep.travelTo(Game.flags['attack1']);
          }
          else

          if (creep.hits < 0.6*creep.hitsMax) { // if full health
              creep.travelTo(Game.flags['rally1']);
          }

          if (!creep.memory.healingAbility) {
              creep.memory.healingAbility = healingability(creep);
          }
          creep.heal(creep);
          
          for (var count =1; ; count++)
          {

        if (!creep.memory.recycled) {
            if (creep.ticksToLive < 300) {
                selfRenew.run(creep);

            }
            creep.memory.recycled = true;
            creep.memory.rally1 = false;
        }
                  
          if (count === 3) {
            return;
          }
        }
            
            
       /* if (!creep.memory.rally1 && creep.memory.recycled) {
            creep.travelTo(Game.flags['rally1']);
            if (creep.pos.isNearTo(Game.flags['rally1'])) {
                creep.memory.rally1 = true;
                creep.memory.recycled = false;
            }
            return;
        }*/
    }
}
