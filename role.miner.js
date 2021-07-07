module.exports = {
  
    // a function to run the logic for this role
    run: function (creep) {
        name: "miner"

        // get source
        let source = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
        })[0];

        
        if (!creep.memory.W9S6 && Game.room.name == 'W9S6' || creep.room.name === 'W9S5'){
            creep.travelTo(Game.flags['w9s7f1']);
			if (creep.pos.isNearTo(Game.flags['w9s7f1'])) {
				creep.memory.W9S6 = true;
			}
			return
		}
		/*
        var resourcecontainer = [Game.getObjectById('60e5d2059c340dc68a754ec8'),
               Game.getObjectById('60e5c5bf85a3189d72ba32d3')]
               }
               */

        // if creep is on top of the container
        if (creep.pos.isEqualTo(container.pos)) {
            // harvest source
            creep.harvest(source);
        }
        // if creep is not on top of the container
        else {
            // move towards it
            creep.travelTo(container);
        }   
      if (creep.pos.getRangeTo(container) > 0 && creep.ticksToLive < 1350) {
        creep.suicide();     
     }
    }
};
