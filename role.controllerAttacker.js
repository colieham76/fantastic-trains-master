module.exports = {
    run: function(creep) {
        creep.say('OMG!😂', true);
        
        Game.spawns.Spawn3.memory.mincontrollerattackers = {W7S7: 1} 
        
        /** @type {Object.<string, number>} */
        let numberOfcontrollerAttackers = {};
        if (name == undefined) {
        // count the number of controller Attackers globally
        for (let roomName in this.memory.mincontrollerattackers) {
            numberOfcontrollerAttackers[roomName] = _.sum(Game.creeps,
                                                          (c) => c.memory.role == 'controllerAttacker'
                                                          && c.memory.target == roomName
                                                         );
            if (numberOfcontrollerAttackers[roomName] > 0) {
                    if (creep.ticksToLive < 50) {
                        Game.spawns.Spawn3.memory.mincontrollerattackers = {W7S7: 2} 
                    }
                }
            }
        }
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
        
         //w7s7 dismantle attack
        if (!creep.memory.w7s7f1) {
            creep.travelTo(Game.flags['w7s7f1']);
            if (creep.pos.isNearTo(Game.flags['w7s7f1'])) {
                creep.memory.w7s7f1 = true;
            }
            return;
        }    
        
        
        if (creep.room.name == creep.memory.target) { // if in target room
            if (creep.room.controller && !creep.room.controller.my) {
                if (creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
        else { // go to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            creep.travelTo(creep.pos.findClosestByRange(exit));
        }
    }
};
