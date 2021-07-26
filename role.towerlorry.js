module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
    
    // var numberOfharvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester')
     //if (numberOfharvesters > 5){
      //  creep.suicide() 
       //}


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
            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType === STRUCTURE_TOWER
                             || s.structureType === STRUCTURE_LAB
                             || s.structureType === STRUCTURE_NUKER)
                             && s.energy < s.energyCapacity * 0.6
            })

            if (structure !== undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(structure);
                }
            }
        }
        // if creep is supposed to harvest energy from source
        else { 
            
           
            
            // if there is no storage (which could be possible after destroyed), try picking up some energy
        let lenergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
            filter:  c => _.sum(c.store) > 0  
        });
        if (creep.pickup(lenergy) === ERR_NOT_IN_RANGE) {
            creep.travelTo(lenergy);
        }
            
            
            else {
                
                creep.memory.lenergy = null;
             lenergy = creep.pos.findClosestByPath(STRUCTURE_LINK, {
                            filter: source => source.energy > 0
                        });
                
                if (lenergy) {
                            if (creep.withdraw(lenergy[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                                creep.moveTo(lenergy[0]);
                            } else {
                                creep.withdraw(lenergy[0], RESOURCE_ENERGY);
                            }
                        }                  
                
                
                
            let tombstones = creep.room.find(FIND_TOMBSTONES, {
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
            }
            
            else {
                creep.getEnergy(false, false);}
            }

            creep.getEnergy(false, true)
        }
    }
}
