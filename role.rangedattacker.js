module.exports = {
// a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
/*
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
	    
	    if (!creep.memory.W7S5 && creep.room.name === 'W7S5' || creep.room.name === 'W9S6') {
			creep.moveTo(Game.flags['w7s6f4']);
			if (creep.pos.isNearTo(Game.flags['w7s6f4'])) {
				creep.memory.W7S5 = true;
			}
			return;
		} 
	*/   
	    
	/*if (creep.ticksToLive < 150) {
           Game.spawns.Spawn1.memory.mincontrollerattackers = {W9S5: 2} 
        }   */  
	    
//W10S5 dismantler route flag	    
	/*     if (!creep.memory.w10s8f1) {
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
	    */
	    //w8s5f1  route flag
	    
if (!creep.memory.w8s6f1) {
            creep.travelTo(Game.flags['w8s6f1']);
            if (creep.pos.isNearTo(Game.flags['w8s6f1'])) {
                creep.memory.w8s6f1 = true;
            }
            return;
        }
	          
		var attacked;
		var targets = [];
	        //attack within range	
		// attack creeps in range (ranged)
		if (creep.getActiveBodyparts(RANGED_ATTACK)) {
			targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 40);
			if (targets.length > 0) {
				attacked = creep.rangedAttack(targets[0]);
				if (attacked == ERR_NOT_IN_RANGE)
					creep.moveTo(targets[0]);
			}	
		}
		else if(creep.pos.isNearTo(targets) && creep.getActiveBodyParts(ATTACK) > 0) {
			creep.attack(targets);
		}
		if(creep.hits < creep.memory.lastHits) {
			Game.notify('Ranged attacker '+creep+' has been attacked at '+creep.pos+'! at tick number'+Game.time+'!', 180);
		}
		creep.memory.lastHits = creep.hits;
		if(creep.hits < 1) {
			Game.notify('Ranged attacker '+creep+' has been killed at '+creep.pos+'! at tick number'+Game.time+'!', 180);
		}       
		let hostileStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
		if (hostileStructure) {
			if (creep.attack(hostileStructure) === ERR_NOT_IN_RANGE) {
				creep.travelTo(hostileStructure);
			}		
		}
    }
};

/*	   
        if (creep.memory.getBoostkh) {
            if (creep.room.name == 'W17N88') {

                let labk = Game.getObjectById('5c5efa3b5bad700cd3a5cbd9');
                let labko = Game.getObjectById('5bb8be1b34a08f5159a3fa45');
                let boostk = labk.boostCreep(creep);
                let boostko = labko.boostCreep(creep);

                if (boostk == ERR_NOT_IN_RANGE)
                    creep.moveTo(labk);
                if (boostk == OK)
                    creep.memory.getBoostkh = false;

                if(labk.mineralAmount < 500)
                    if (boostko == ERR_NOT_IN_RANGE)
                        creep.moveTo(labko);
                if (boostko == OK)
                    creep.memory.getBoostkh = false;

                return;
            }
        }

  // if in target room
        if (creep.room.name == creep.memory.target) {
            var dismantler = creep.pos.findClosestByRange(FIND_STRUCTURES,
            
            {filter: (s) => (s.structureType ==  STRUCTURE_INVADER_CORE
			     || s.structureType == STRUCTURE_SPAWN
			         || s.structureType == STRUCTURE_CONTROLLER
                                 || s.structureType == STRUCTURE_EXTENSION
                                 || s.structureType == STRUCTURE_TOWER
                                 || s.structureType == STRUCTURE_ROAD
                                 || s.structureType == STRUCTURE_WALL
			         || s.structureType == STRUCTURE_RAMPART
                                // || s.structureType == STRUCTURE_KEEPER_LAIR
                                 || s.structureType == STRUCTURE_PORTAL
                                 || s.structureType == STRUCTURE_LINK
                                 || s.structureType == STRUCTURE_STORAGE
                                 || s.structureType == STRUCTURE_OBSERVER
                                // || s.structureType == STRUCTURE_POWER_BANK
                                 || s.structureType == STRUCTURE_POWER_SPAWN
                                 || s.structureType == STRUCTURE_EXTRACTOR
                                 || s.structureType == STRUCTURE_LAB
                                 || s.structureType == STRUCTURE_TERMINAL
                                 || s.structureType == STRUCTURE_CONTAINER
                                 || s.structureType == STRUCTURE_NUKER
                            )});
                                                   
    */
