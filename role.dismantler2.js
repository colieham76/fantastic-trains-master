module.exports = {
    run: function(creep) {
        creep.say('presious...');       
    
/*
 if (creep.ticksToLive < 1500) {
creep.suicide();
}
  
     */   

if (!creep.memory.w6s6f1) {
            creep.travelTo(Game.flags['w6s6f1']);
            if (creep.pos.isNearTo(Game.flags['w6s6f1'])) {
                creep.memory.w6s6f1 = true;
            }
            return;
        }
           if (!creep.memory.w6s5f1) {
            creep.travelTo(Game.flags['w6s5f1']);
            if (creep.pos.isNearTo(Game.flags['w6s5f1'])) {
                creep.memory.w6s5f1 = true;
            }
            return;
        }

            if (!creep.memory.w6s4f1) {
            creep.travelTo(Game.flags['w6s4f1']);
            if (creep.pos.isNearTo(Game.flags['w6s4f1'])) {
                creep.memory.w6s4f1 = true;
            }
            return;
        }
      if (!creep.memory.w6s3f1) {
            creep.travelTo(Game.flags['w6s3f1']);
            if (creep.pos.isNearTo(Game.flags['w6s3f1'])) {
                creep.memory.w6s3f1 = true;
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
