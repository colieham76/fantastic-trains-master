module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
        var factory = creep.pos.findClosestByRange(FIND_STRUCTURES, {
			filter: (structure) => structure.structureType == STRUCTURE_FACTORY
		});

		if (creep.store.getFreeCapacity() > 0) {
			var storage = creep.room.storage;
			if (creep.withdraw(storage,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(storage);
                    }
		}
		else {
			 var factory = Game.rooms['W9S6'].find(FIND_STRUCTURES, {
				 filter: (structure) => structure.structureType == STRUCTURE_FACTORY
			 })[0];
			if (factory.store.getUsedCapacity() < 30000) {
				 var targett = factory				 
				 }
			if (creep.transfer(targett,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(targett);
			}
		}
    }
}
