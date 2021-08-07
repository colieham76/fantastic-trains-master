module.exports = {


    run: function (creep) {
        /*
         if (creep.ticksToLive < 150) {

        creep.suicide();
        }*/
        creep.say('OMG!😨', true);
        if (!creep.memory.w1s7f1) {
            creep.travelTo(Game.flags['w1s7f1']);
            if (creep.pos.isNearTo(Game.flags['w1s7f1'])) {
                creep.memory.w1s7f1 = true;
            }
            return;
        }
        if (!creep.memory.w1s5f1) {
            creep.travelTo(Game.flags['w1s5f1']);
            if (creep.pos.isNearTo(Game.flags['w1s5f1'])) {
                creep.memory.w1s5f1 = true;
            }
            return;
        }
        if (!creep.memory.w2s5f1) {
            creep.travelTo(Game.flags['w2s5f1']);
            if (creep.pos.isNearTo(Game.flags['w2s5f1'])) {
                creep.memory.w2s5f1 = true;
            }
            return;
        }
        if (!creep.memory.w2s4f1) {
            creep.travelTo(Game.flags['w2s4f1']);
            if (creep.pos.isNearTo(Game.flags['w2s4f1'])) {
                creep.memory.w2s4f1 = true;
            }
            return;
        }

        if (!creep.memory.w3s4f1) {
            creep.travelTo(Game.flags['w3s4f1']);
            if (creep.pos.isNearTo(Game.flags['w3s4f1'])) {
                creep.memory.w3s4f1 = true;
            }
            return;
        }
        if (!creep.memory.w4s4f1) {
            creep.travelTo(Game.flags['w4s4f1']);
            if (creep.pos.isNearTo(Game.flags['w4s4f1'])) {
                creep.memory.w4s4f1 = true;
            }
            return;
        }

        if (!creep.memory.w4s3f1) {
            creep.travelTo(Game.flags['w4s3f1']);
            if (creep.pos.isNearTo(Game.flags['w4s3f1'])) {
                creep.memory.w4s3f1 = true;
            }
            return;
        }
        if (!creep.memory.w4s2f1) {
            creep.travelTo(Game.flags['w4s2f1']);
            if (creep.pos.isNearTo(Game.flags['w4s2f1'])) {
                creep.memory.w4s2f1 = true;
            }
            return;
        }

        if (creep.hits > 0.9 * creep.hitsMax) {
            let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
                filter: c => ((c.pos.getRangeTo(creep) < 48))
            });
            if (target) {
                if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.rangedAttack(target);
                    creep.attack(target);
                    creep.travelTo(target);
                }
            } else {
                target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(target)
                } else {
                    let core = creep.room.find(FIND_STRUCTURES, {
                        filter: c => c.structureType == STRUCTURE_SPAWN
                    })[0];
                    if (core) {
                        creep.travelTo(core);
                        creep.attack(core);
                        creep.rangedAttack(target);
                    } else {
                        core = creep.room.find(FIND_STRUCTURES, {
                            filter: c => c.structureType == STRUCTURE_CONTAINER
                        })[0];
                        if (core) {
                            creep.travelTo(core);
                            creep.attack(core);
                            creep.rangedAttack(target);
                        }
                    }
                }
            }
        }
        else {
            if (!creep.memory.healingAbility) {
                creep.memory.healingAbility = healingability(creep);
            }
            creep.heal(creep);
        }
    }
}
