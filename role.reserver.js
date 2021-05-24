module.exports = {
	run: function(creep) {
		if (creep.room.name != creep.memory.target) {
			//if (!creep.memory.W3S7 && creep.room.name === 'W3S7'|| creep.room.name === 'W3S8') {
				creep.moveTo(Game.flags['ReserverW3S7']);
				if (creep.pos.isNearTo(Game.flags['ReserverW3S7'])) {
					creep.memory.W3S7 = true;
				}
				return;
		//	}
			else {
				if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
					creep.travelTo(creep.room.controller);
				}
			}
		//	if (!creep.memory.W1S7 && creep.room.name === 'W1S7'|| creep.room.name === 'W1S8') {
				creep.moveTo(Game.flags['ReserverW1S7']);
				if (creep.pos.isNearTo(Game.flags['ReserverW1S7'])) {
					creep.memory.W1S7 = true;
				}
				return;
		//	}
			else {
				if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
					creep.travelTo(creep.room.controller);
				}				
			}
			if (!creep.memory.W1S9 && creep.room.name === 'W1S9'|| creep.room.name === 'W1S8') {
				creep.moveTo(Game.flags['ReserverW1S9']);
				if (creep.pos.isNearTo(Game.flags['ReserverW1S9'])) {
					creep.memory.W1S9 = true;
				}
				return;
			}
			else {
				 if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
					 creep.travelTo(creep.room.controller);
				 }
			 }
			if (!creep.memory.W8S8 && creep.room.name === 'W8S8'|| creep.room.name === 'W7S8') {
				creep.moveTo(Game.flags['ReserverW8S8']);
				if (creep.pos.isNearTo(Game.flags['ReserverW8S8'])) {
					creep.memory.W8S8 = true;
				}
				return;
			}
			 else {
				 if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
					 creep.travelTo(creep.room.controller);
				 }
			 }
			 if (!creep.memory.W7S9 && creep.room.name === 'W7S9'|| creep.room.name === 'W7S8') {
			 	creep.moveTo(Game.flags['ReserverW7S9']);
			 	if (creep.pos.isNearTo(Game.flags['ReserverW7S9'])) {
			 		creep.memory.W7S9 = true;
			 	}
			 	return;
			 }
			 else {
			 	if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
			 		creep.travelTo(creep.room.controller);
			 	}
			 }
		}
	}
};
