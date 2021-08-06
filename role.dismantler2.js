module.exports = {
    run: function(creep) {
        creep.say('presious...');       
    
/*
 if (creep.ticksToLive < 1500) {
creep.suicide();
}
  
     */ 
        
         if (!creep.memory.w10s8f1) {
            creep.travelTo(Game.flags['w10s8f1']);
            if (creep.pos.isNearTo(Game.flags['w10s8f1'])) {
                creep.memory.w10s8f1 = true;
            }
            return;
        }
      if (!creep.memory.w10s3f1) {
            creep.travelTo(Game.flags['w10s3f1']);
            if (creep.pos.isNearTo(Game.flags['w10s3f1'])) {
                creep.memory.w10s3f1 = true;
            }
            return;
        }
     

        if (!creep.memory.w8s4f1) {
            creep.travelTo(Game.flags['w8s4f1']);
            if (creep.pos.isNearTo(Game.flags['w8s4f1'])) {
                creep.memory.w8s4f1 = true;
            }
            return;
        }
       

if (Game.flags['Dismantle2'] != undefined) {
            let presious = getTargetByFlag('Dismantle2','structure');
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
            if (creep.pos.isEqualTo(Game.flags['Dismantle2'])) {
                Game.flags['Dismantle2'].remove();
            }
        }
        else {
            let core = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                filter:c => c.structureType==STRUCTURE_RAMPART});
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
