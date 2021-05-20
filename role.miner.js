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
