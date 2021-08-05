module.exports = {

   
 run: function(creep) {
/*
 if (creep.ticksToLive < 150) {

creep.suicide();
}*/
        creep.say('OMG!😨', true);
        if (!creep.memory.w9s5f1) {
            creep.travelTo(Game.flags['w9s5f1']);
            if (creep.pos.isNearTo(Game.flags['w9s5f1'])) {
                creep.memory.w9s5f1 = true;
            }
            return;
        }

if (!creep.memory.w8s5f1) {
            creep.travelTo(Game.flags['w8s5f1']);
            if (creep.pos.isNearTo(Game.flags['w8s5f1'])) {
                creep.memory.w8s5f1 = true;
            }
            return;
        }

        /*if (grouped && healingEnough) {
            // move forward
        }
        else {
            // move backward
        }*/

        if (creep.hits > 0.9*creep.hitsMax) {
            let myNurseName = findMyHero(creep.memory.uniqueString, 'healer');
            let myNurse = Game.creeps[myNurseName];
            //if (creep.pos.findInRange(FIND_MY_CREEPS, 1, {
            //filter: s => ((s.memory.role=='healer')
            //&&(s.memory.uniqueString==creep.memory.uniqueString))}).length>0) {
            if ((creep.pos.getRangeTo(myNurse)<40)||(creep.pos.x==0)
                ||(creep.pos.y==0)
                ||(creep.pos.x==49)
                ||(creep.pos.y==49)) {
                if (creep.room.name != creep.memory.target) {
                    creep.travelTo(Game.flags[creep.memory.target]);
                }
                else {//if in target room
                    if (creep.getActiveBodyparts(WORK)>0) {
                        creep.travelTo(Game.flags[creep.memory.target+'attack']);    // gether at flag's position
                        let target = Game.flags[creep.memory.target+'attack'].pos.findInRange(FIND_STRUCTURES, 0)[0];

                        //var target = Game.getObjectById(Game.flags['attack'].room.lookAt(2,17)[0]['structure'].id);
                        //console.log(target)

                        if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                            creep.rangedAttack(target)
                            creep.travelTo(target)
                        }
                        if (creep.pos.isEqualTo(Game.flags[creep.memory.target+'attack'])) {                           
                            Game.flags[creep.memory.target+'attack'].remove();
                        }
                    }
                    else {
                        let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
                            filter: c => ((c.pos.getRangeTo(creep) < 48))});
                        if (target) {
                            if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                                creep.rangedAttack(target);
                                creep.attack(target);
                                creep.travelTo(target);
                            }
                        }
                        else {
                            target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                            if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                                creep.travelTo(target)
                            }
                            else {
                                let core = creep.room.find(FIND_STRUCTURES, {
                                    filter:c => c.structureType==STRUCTURE_SPAWN})[0];
                                if (core) {
                                    creep.travelTo(core);
                                    creep.attack(core);
                                    creep.rangedAttackattack(target);
                                }
                                else {
                                    core = creep.room.find(FIND_STRUCTURES, {
                                        filter:c => c.structureType==STRUCTURE_CONTAINER})[0];
                                    if (core) {
                                        creep.travelTo(core);
                                        creep.attack(core);
                                        creep.rangedAttack(target);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else { // healer is not followed, go to healer, else escape point
                creep.travelTo(Game.flags[creep.memory.target+'esc']);
            }
        }
        else {
            creep.travelTo(Game.flags[creep.memory.target+'esc']);
        }
    }
};
