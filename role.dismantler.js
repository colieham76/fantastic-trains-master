module.exports = {
    run: function(creep) {
        creep.say('presious...');
/*
        if (!creep.memory.w3s8f1) {
            creep.travelTo(Game.flags['w3s8f1']);
            if (creep.pos.isNearTo(Game.flags['w3s8f1'])) {
                creep.memory.w3s8f1 = true;
            }
            return;
        }
        if (creep.room.name !== creep.memory.target && !creep.memory.w3s8f2) {
            creep.travelTo(Game.flags['w3s8f2']);
            if (creep.pos.isNearTo(Game.flags['w3s8f2'])) {
                creep.memory.w3s8f2 = true;
            }
            return;
        }
        if (!creep.memory.w3s8f3) {
            creep.travelTo(Game.flags['w3s8f3']);
            if (creep.pos.isNearTo(Game.flags['w3s8f3'])) {
                creep.memory.w3s8f3 = true;
            }
            return;
        }
        
*/
        /*
        if (!creep.memory.w3s8f3) {
            creep.travelTo(Game.flags['w3s8f3']);
            if (creep.pos.isNearTo(Game.flags['w3s8f3'])) {
                creep.memory.w3s8f3 = true;
            }
            return;
        }
        if (creep.room.name !== creep.memory.target && !creep.memory.w5s7f1) {
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

//w7s6 dismantle

        if (!creep.memory.w7s6f1) {
            creep.travelTo(Game.flags['w7s6f1']);
            if (creep.pos.isNearTo(Game.flags['w7s6f1'])) {
                creep.memory.w7s6f1 = true;
            }
            return;
        }

        if (!creep.memory.w7s6f2) {
            creep.travelTo(Game.flags['w7s6f2']);
            if (creep.pos.isNearTo(Game.flags['w7s6f2'])) {
                creep.memory.w7s6f2 = true;
            }
            return;
        }

        if (!creep.memory.w7s6f3) {
            creep.travelTo(Game.flags['w7s6f3']);
            if (creep.pos.isNearTo(Game.flags['w7s6f3'])) {
                creep.memory.w7s6f3 = true;
            }
            return;
        }
        // W8S6 route flag
        if (!creep.memory.w8s6f1) {
            creep.travelTo(Game.flags['w8s6f1']);
            if (creep.pos.isNearTo(Game.flags['w8s6f1'])) {
                creep.memory.w8s6f1 = true;
            }
            return;
        } 
        // W8S5 route flag
        if (!creep.memory.w8s5f1) {
            creep.travelTo(Game.flags['w8s5f1']);
            if (creep.pos.isNearTo(Game.flags['w8s5f1'])) {
                creep.memory.w8s5f1 = true;
            }
            return;
        } 
        
        // W8S4 route flag
        if (!creep.memory.w8s4f1) {
            creep.travelTo(Game.flags['w8s4f1']);
            if (creep.pos.isNearTo(Game.flags['w8s4f1'])) {
                creep.memory.w8s4f1 = true;
            }
            return;
        } 
     */   
/*
   //w7s5 dismantle     
        if (!creep.memory.w7s6f4) {
            creep.travelTo(Game.flags['w7s6f4']);
            if (creep.pos.isNearTo(Game.flags['w7s6f4'])) {
                creep.memory.w7s6f4 = true;
            }
            return;
        }
        */

        
        //W10S8 dismantle route flag
        if (!creep.memory.w10s8f1) {
            creep.travelTo(Game.flags['w10s8f1']);
            if (creep.pos.isNearTo(Game.flags['w10s8f1'])) {
                creep.memory.w10s8f1 = true;
            }
            return;
        }
//W10S5 dismantler route flag
        if (!creep.memory.w10s5f1) {
            creep.travelTo(Game.flags['w10s5f1']);
            if (creep.pos.isNearTo(Game.flags['w10s5f1'])) {
                creep.memory.w10s5f1 = true;
            }
            return;
        }
//W9S5 dismantler route flag
if (!creep.memory.w9s5f1) {
            creep.travelTo(Game.flags['w9s5f1']);
            if (creep.pos.isNearTo(Game.flags['w9s5f1'])) {
                creep.memory.w9s5f1 = true;
            }
            return;
        }
//W9S6 dismantler route flag
        if (!creep.memory.w9s6f1) {
            creep.travelTo(Game.flags['w9s6f1']);
            if (creep.pos.isNearTo(Game.flags['w9s6f1'])) {
                creep.memory.w9s6f1 = true;
            }
            return;
        } 

//W9S7 dismantler route flag

if (!creep.memory.w9s7f1) {
            creep.travelTo(Game.flags['w9s7f1']);
            if (creep.pos.isNearTo(Game.flags['w9s7f1'])) {
                creep.memory.w9s7f1 = true;
            }
            return;
        } 

       
        
//W9S4 dismantler route flag
        /*
  if (!creep.memory.w5s7f6) {
            creep.travelTo(Game.flags['w5s7f6']);
            if (creep.pos.isNearTo(Game.flags['w5s7f6'])) {
                creep.memory.w5s7f6 = true;
            }
            return;
        }      
      */ 
        
        if (Game.flags['Dismantle'] != undefined) {
            let presious = getTargetByFlag('Dismantle','structure');
            if (presious != undefined) { // if there is storage
                if (creep.dismantle(presious) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(presious);
                }
            }
            else {
                var target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
                if (creep.dismantle(target) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(target)
                }
            }
            if (creep.pos.isEqualTo(Game.flags['Dismantle'])) {
                Game.flags['Dismantle'].remove();
            }
        }
        else {
            let core = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                filter:c => c.structureType==STRUCTURE_EXTENSION});
            if (core==undefined) {
                core = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                    filter:c => c.structureType==STRUCTURE_TOWER});


                if (core ==undefined) {
                    core = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                        filter:c => c.structureType==STRUCTURE_SPAWN
                            ||c.structureType==STRUCTURE_LINK
                            ||c.structureType==STRUCTURE_LAB});
                }
            }
            if (core) {
                creep.travelTo(core);
                creep.dismantle(core);
            }
        }
    }       
}
