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
        else if(!creep.memory.rally2) {
            creep.travelTo(Game.flags['rally2']);

            if (creep.pos.isNearTo(Game.flags['rally2'])) {
                creep.memory.rally2 = true;
            }
            return;
        }

        else if(!creep.memory.rally3) {
            creep.travelTo(Game.flags['rally3']);

            if (creep.pos.isNearTo(Game.flags['rally3'])) {
                creep.memory.rally3 = true;
            }
            return;
        }

        else if(!creep.memory.rally4) {
            creep.travelTo(Game.flags['rally4']);

            if (creep.pos.isNearTo(Game.flags['rally4'])) {
                creep.memory.rally4 = true;
            }
            return;
        }

        else if(!creep.memory.rally5) {
            creep.travelTo(Game.flags['rally5']);

            if (creep.pos.isNearTo(Game.flags['rally5'])) {
                creep.memory.rally5 = true;
            }
            return;
        }

    }
}
