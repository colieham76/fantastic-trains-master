module.exports = {
	run: function (creep) {
		if (creep.room.name == creep.memory.target) {
			let source = Game.getObjectById(creep.memory.sourceId);
			let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
				filter: (s) => s.structureType == STRUCTURE_CONTAINER,
			})[0];
			if (container != undefined) {
				if (container.hits < container.maxHits * 0.9) {
					if (creep.store.getUsedCapacity() == 0) {
						if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_ENOUGH_RESOURCES) {
							if (creep.pos.isEqualTo(container.pos)) {
								creep.harvest(source);
							}
						}
					}
					else {
						creep.moveTo(container);
					}
				}
				else {
					creep.repair(container);
				}
			}
			else {
				if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
				}
			}
		}
		else {
			let exit = creep.room.findExitTo(creep.memory.target);
			creep.moveTo(creep.pos.findClosestByRange(exit));
		}
/*
		let source = Game.getObjectById(creep.memory.target);
		if (creep.memory.inPosition) {
			if (creep.memory.ready) {
				// container is finished, check so it does not need repair and then mine and drop excess
				let storage = Game.getObjectById(creep.room.memory.remoteStorage);
				if (storage.hits < storage.maxHits / 2) {
					if (creep.store.getUsedCapacity() == 0) {
						if (creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_ENOUGH_RESOURCES) {
							creep.harvest(source);
						}
					}
					else {
						creep.repair(storage);
					}
				}
				else {
					creep.harvest(source);
				}
			}
			else {
				this.buildContainer(creep, source);
			}
		}
		else {
			let storage = Game.getObjectById(creep.room.memory.remoteStorage);
			let inPos = false;
			if (!storage) {
				storage = source;
				inPos = creep.pos.isNearTo(storage.pos);
			}
			else {
				inPos = creep.pos.isEqualTo(storage.pos);
			}
			if (inPos) {
				creep.memory.inPosition = true;
				console.log("Remote miner is in position!")
			}
			else {
				// move to position
				creep.moveTo(storage, {
					visualizePathStyle: {
						stroke: '#ffffff'
					}
				});
			}
		}


	},
		*/

	}
};
