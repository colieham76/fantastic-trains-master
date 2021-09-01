module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
        if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.working = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
            creep.memory.working = true;
            creep.say('offload');
        }
        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working === true) {       
            
            if(creep.room.storage
                && creep.room.storage.store.getUsedCapacity() < creep.room.storage.store.getCapacity()) {
                var storage = creep.room.storage;
                for (const resourceType in creep.store) {
                    if (creep.transfer(storage, resourceType) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage, {reusePath: 500});   
                    }
                }                             
            }                      
        }
        else {   
             if (creep.room.name == 'W7S6') {
             //   creep.moveTo(29, 30);           
           // }
         var factory = creep.pos.findClosestByRange(FIND_STRUCTURES, {
			filter: (structure) => structure.structureType == STRUCTURE_FACTORY
		});

		if (creep.store.getFreeCapacity() > 0) {
			var mineral = creep.pos.findClosestByRange(FIND_MINERALS);
			if (creep.harvest(mineral) == ERR_NOT_IN_RANGE) {
				creep.moveTo(mineral, {visualizePathStyle: {stroke: '#ffaa00'}});
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
            if (creep.room.name == 'W9S6') {
                creep.moveTo(30, 32);           
            }            
            let energy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                filter: (e) => (e.resourceType == RESOURCE_ENERGY) && e.energy > 1499
            });
            if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
                creep.moveTo(energy, {reusePath: 500});
            }
            creep.getEnergy(false, false);
        }
    }
}
