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

        if (!creep.memory.rally1) {
            creep.travelTo(Game.flags['rally1']);

            if (creep.pos.isNearTo(Game.flags['rally1'])) {
                creep.memory.rally1 = true;
            }
            return;
        }

        if (!creep.memory.recycled) {
            if (creep.ticksToLive < 300) {
                selfRenew.run(creep);

            }
            creep.memory.recycled = true;
            creep.memory.rally1 = false;
        }

        if (!creep.memory.rally1 && creep.memory.recycled == true) {
            creep.travelTo(Game.flags['rally1']);
            if (creep.pos.isNearTo(Game.flags['rally1'])) {
                creep.memory.rally1 = true;
            }
            return;
        }
    }
}
