var actionRepair = require('action.repair');


module.exports = {
	run: function (creep) {
		if (creep.room.name == creep.memory.target) {
			let source = Game.getObjectById(creep.memory.sourceId);
			let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
				filter: (s) => s.structureType == STRUCTURE_CONTAINER,
			})[0];

			if (container != undefined) {
				if (creep.pos.isEqualTo(container.pos)) {
					creep.harvest(source);
				} else {
					creep.moveTo(container);
				}
			} else {
				
				if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
				}
				actionRepair.run(creep);
			}
		} else {
			let exit = creep.room.findExitTo(creep.memory.target);
			creep.moveTo(creep.pos.findClosestByRange(exit));
		}
	},
};
