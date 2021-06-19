module.exports = {
    run: function(creep) {
        creep.say('presious...');

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

        if (!creep.memory.w3s8f1) {
            creep.travelTo(Game.flags['w3s8f1']);
            if (creep.pos.isNearTo(Game.flags['w3s8f1'])) {
                creep.memory.w3s8f1 = true;
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

        if (!creep.memory.w5s7f3) {
            creep.travelTo(Game.flags['w5s7f3']);
            if (creep.pos.isNearTo(Game.flags['w5s7f3'])) {
                creep.memory.w5s7f3 = true;
            }
            return;
        }

        if (!creep.memory.w5s7f4) {
            creep.travelTo(Game.flags['w5s7f4']);
            if (creep.pos.isNearTo(Game.flags['w5s7f4'])) {
                creep.memory.w5s7f4 = true;
            }
            return;
        }
        
        if (Game.flags['Dismantle'] != undefined) {                     
            if (Game.flags.Dismantle) {
                creep.travelTo(Game.flags.Dismantle);
            }
            var target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
            if (creep.dismantle(target) == ERR_NOT_IN_RANGE) {
                creep.travelTo(target)
            }
            /*
            let invaderCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);            
            if (creep.room.name === 'W3S8' && Game.time % 50 === 0) {
                if (invaderCreep) {
                    Game.spawns.Spawn2.memory.rangedattackerRoom = 'W3S8';
                    Game.spawns.Spawn5.memory.rangedattackerRoom = 'W3S8'
                }
            }*/                     
        }                 
    }       
}
