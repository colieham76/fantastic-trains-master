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
module.exports = {

    run: function (creep) {

        if (!creep.memory.rally1) {
            creep.travelTo(Game.flags['rally1']);

            if (creep.pos.isNearTo(Game.flags['rally1'])) {
                creep.memory.rally1 = true;
            }
            return;
        }
    }
}
