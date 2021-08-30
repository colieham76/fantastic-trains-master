module.exports = {
    run: function (creep) {
        /*
                if (creep.ticksToLive < 150) {
                        creep.suicide();
                                }
                                */
        creep.say('OMG!😨', true);
/*
        if (!creep.memory.W7S7 && creep.room.name === 'W7S7'|| creep.room.name === 'W7S6') {
            creep.travelTo(Game.flags['W7S7']);
            if (creep.pos.isNearTo(Game.flags['W7S7'])) {
                creep.memory.W7S7 = true;
            }
            return;
        }
        if (!creep.memory.W9S5 && creep.room.name === 'W9S5'|| creep.room.name === 'W9S6') {
            creep.travelTo(Game.flags['W9S5']);
            if (creep.pos.isNearTo(Game.flags['W9S5'])) {
                creep.memory.W9S5 = true;
            }
            return;
        }
        if (!creep.memory.W3S7 && creep.room.name === 'W3S7'|| creep.room.name === 'W3S8') {
            creep.travelTo(Game.flags['W3S7']);
            if (creep.pos.isNearTo(Game.flags['W3S7'])) {
                creep.memory.W3S7 = true;
            }
            return;
        }
        if (!creep.memory.W1S7 && creep.room.name === 'W1S7' || creep.room.name === 'W1S8') {
            creep.moveTo(Game.flags['W1S7']);
            if (creep.pos.isNearTo(Game.flags['W1S7'])) {
                creep.memory.W1S7 = true;
            }
            return;
        }

        if (!creep.memory.W7S5 && creep.room.name === 'W7S5' || creep.room.name === 'W7S6') {
            creep.moveTo(Game.flags['w7s6f4']);
            if (creep.pos.isNearTo(Game.flags['w7s6f4'])) {
                creep.memory.W7S5 = true;
            }
            return;
        }
*/
	    if (creep.room.name === 'W9S6' || !creep.memory.W9S7 && creep.room.name === 'W9S7') {
			creep.travelTo(Game.flags['W9S7']);
			if (creep.pos.isNearTo(Game.flags['W9S7'])) {
				creep.memory.W9S7 = true;
			}
			return;
		}
	    if (creep.room.name === 'W7S6' || !creep.memory.W7S7 && creep.room.name === 'W7S7') {
			creep.travelTo(Game.flags['W7S7']);
			if (creep.pos.isNearTo(Game.flags['W7S7'])) {
				creep.memory.W7S7 = true;
			}
			return;
		} 
	    if (creep.room.name === 'W7S6' || !creep.memory.W8S6 && creep.room.name === 'W8S6') {
			creep.travelTo(Game.flags['W8S6']);
			if (creep.pos.isNearTo(Game.flags['W8S6'])) {
				creep.memory.W8S6 = true;
			}
			return;
		}  	    	        
	    if (creep.hits > 0.9 * creep.hitsMax) {
		    let hostileStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
		    if (hostileStructure) {
			    if (creep.attack(hostileStructure) === ERR_NOT_IN_RANGE) {
				    creep.travelTo(hostileStructure);
			    }
		    }
		    if (creep.room.name === 'W8S6' && Game.rooms[this.room].find(FIND_RUINS).length > 1) {
			    Game.spawns.Spawn7.memory.minattackers = {W8S6: 0, W7S7: 1}
		    }
		    
		    let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
			    filter: c => ((c.pos.getRangeTo(creep) < 48))
		    });
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
					    filter: c => c.structureType == STRUCTURE_SPAWN
				    })[0];
				    if (core) {
					    creep.travelTo(core);
					    creep.attack(core);
					    creep.rangedAttack(target);
				    }
				    else {
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
