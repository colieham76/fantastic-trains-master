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
  
    run: function(creep) {
    
        if(creep.memory.rally1) {
            var flag1 = Game.flags['rally1'];
            
            if(creep.memory.traveling) {
                if(creep.pos.getRangeTo(flag1) > 1) {
                    creep.moveTo(flag1);
                } else {
                    creep.memory.traveling = false;
                }
            }
            else {
                (creep.memory.rally1 = false)
            }
        }
        
        else if(creep.memory.rally2) {
            var flag2 = Game.flags['rally2'];

            if(creep.memory.traveling) {
                if(creep.pos.getRangeTo(flag2) > 1) {
                    creep.moveTo(flag2);
                } else {
                    creep.memory.traveling = false;
                }
            }
            else {
                (creep.memory.rally2 = false)
            }
            
        }
        else if(creep.memory.rally3) {
            var flag3 = Game.flags['rally3'];

            if(creep.memory.traveling) {
                if(creep.pos.getRangeTo(flag3) > 1) {
                    creep.moveTo(flag3);
                } else {
                    creep.memory.traveling = false;
                }
            }
            else {
                (creep.memory.rally3 = false)
            }
        }
        else if(creep.memory.rally4) {
            var flag4 = Game.flags['rally4'];

            if(creep.memory.traveling) {
                if(creep.pos.getRangeTo(flag4) > 1) {
                    creep.moveTo(flag4);
                } else {
                    creep.memory.traveling = false;
                }
            }
            else {
                (creep.memory.rally4 = false)
            }
        }
        else if(creep.memory.rally5) {
            var flag5 = Game.flags['rally5'];

            if(creep.memory.traveling) {
                if(creep.pos.getRangeTo(flag5) > 1) {
                    creep.moveTo(flag5);
                } else {
                    creep.memory.traveling = false;
                }
            }
            else {
                (creep.memory.rally5 = false)
            }
        }      
    }
};






