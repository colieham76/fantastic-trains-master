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
         if (creep.memory.working === true) {
             var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                 filter: (s) => (s.structureType === STRUCTURE_TOWER
                     || s.structureType === STRUCTURE_LAB
                     || s.structureType === STRUCTURE_NUKER)
                     && s.energy < s.energyCapacity * 0.6
             })
             if (structure !== undefined) {
                 if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                     creep.travelTo(structure);
                 }
                 else{
                     if (creep.room.name == 'W7S6') {
                         creep.moveTo(25, 33, {
                             visualizePathStyle: {
                                 stroke: '#f1162f'
                             }
                         });
                     }
                     if (creep.room.name == 'W9S6') {
                         creep.moveTo(32, 25, {
                             visualizePathStyle: {
                                 stroke: '#f1162f'
                             }
                         });
                     }
                     if (creep.room.name == 'W7S8') {
                         creep.moveTo(14, 14, {
                             visualizePathStyle: {
                                 stroke: '#f1162f'
                             }
                         });
                     }
                     if (creep.room.name == 'W3S8') {
                         creep.moveTo(21, 30, {
                             visualizePathStyle: {
                                 stroke: '#f1162f'
                             }
                         });
                     }
                     if (creep.room.name == 'W1S8') {
                         creep.moveTo(44, 20, {
                             visualizePathStyle: {
                                 stroke: '#f1162f'
                             }
                         });
                     }
                 }
             }
         }
         else {
             let energy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                 filter:  c => _.sum(c.store) > 0
             });
             if (creep.pickup(energy) === ERR_NOT_IN_RANGE) {
                 creep.travelTo(energy);
             }
             else {
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
                 creep.getEnergy(true, true)
             }
         }
     }
 }
