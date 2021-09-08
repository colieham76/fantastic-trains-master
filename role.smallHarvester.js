module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
	    /*
	     var factory = Game.rooms['W9S6'].find(FIND_STRUCTURES, {
				    filter: (structure) => structure.structureType == STRUCTURE_FACTORY
			    })[0];
	    if (factory.store.getUsedCapacity() < 40000) {
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
			    if (factory.store.getUsedCapacity() < 40000) {
				    var targett = factory				 
				    }
			    if (creep.transfer(targett,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				    creep.moveTo(targett);
			    }
		    }	
	    }
	    
	    var factory2 = Game.rooms['W3S8'].find(FIND_STRUCTURES, {
				    filter: (structure) => structure.structureType == STRUCTURE_FACTORY
			    })[0];
	    if (factory2.store.getUsedCapacity() < 40000) {
		    var factory2 = creep.pos.findClosestByRange(FIND_STRUCTURES, {
			    filter: (structure) => structure.structureType == STRUCTURE_FACTORY
		    });
		    if (creep.store.getFreeCapacity() > 0) {
			    var storage2 = creep.room.storage;
			    if (creep.withdraw(storage2,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				    creep.travelTo(storage2);
			    }
		    }	
		    else {		  
			    if (factory2.store.getUsedCapacity() < 40000) {
				    var targett2 = factory2
				    }
			    if (creep.transfer(targett2,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				    creep.moveTo(targett2);
			    }
		    }	
	    }
	    */
	    if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
		    creep.memory.working = false;
		    creep.say('🔄 harvest');
	    }
	    if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
		    creep.memory.working = true;
		    creep.say('offload');
	    }        
	    if (creep.memory.working === true) {       	    
		    if(creep.room.storage
		       && creep.room.storage.store.getUsedCapacity() < creep.room.storage.store.getCapacity()* 0.001) {
			    var storage = creep.room.storage;
			    for (const resourceType in creep.store) {
				    if (creep.transfer(storage, resourceType) === ERR_NOT_IN_RANGE) {
					    creep.moveTo(storage);   
				    }
			    }                             
		    }
	    }      
	    else {           
		 /*   let tombstones = creep.room.find(FIND_TOMBSTONES, {
			    filter: c => _.sum(c.store) > 0
		    });
		    if (tombstones.length > 0) {
			    creep.getEnergy(false, false);
			    let tombstone = tombstones[0];
			    for (let mineralType in tombstone.store) {
				    if (creep.withdraw(tombstone, mineralType) == ERR_NOT_IN_RANGE) {
					    creep.travelTo(tombstone, {
						    maxRooms: 1
					    });
					    creep.say('RIP ');
				    }
			    }
		    }	*/   
		     // if there is no storage (which could be possible after destroyed), try picking up some energy
		    let energy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
			    filter: (e) => (e.resourceType == RESOURCE_ENERGY) && e.energy > 1499
		    });
		    if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
			    creep.moveTo(energy);
		    }
		    creep.getEnergy(false, false);
	    }       
    }
}
