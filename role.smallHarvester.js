module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
        var factory = creep.pos.findClosestByRange(FIND_STRUCTURES, {
			filter: (structure) => structure.structureType == STRUCTURE_FACTORY
		});

		if (creep.store.getFreeCapacity() > 0) {
			var storage = creep.room.storage;
			if (creep.withdraw(storage) == ERR_NOT_IN_RANGE) {
				creep.moveTo(storage, {visualizePathStyle: {stroke: '#ffaa00'}});
			}
		}
		else {
			for (var resourceType in creep.store) {
				if (factory.store.getUsedCapacity() < 10000) {
					if (creep.transfer(factory, resourceType) == ERR_NOT_IN_RANGE) {
						creep.moveTo(factory, {visualizePathStyle: {stroke: '#ffffff'}});
					}
				}
			}
		}
    }
}
