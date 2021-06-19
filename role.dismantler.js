module.exports = {
    run: function(creep) {
      creep.say('presious...');              
            if (Game.flags['Dismantle'] != undefined) {
                        

if (Game.flags.Dismantle) {
                creep.travelTo(Game.flags.Dismantle);
            }

  var target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
                            if (creep.dismantle(target) == ERR_NOT_IN_RANGE) {
                                creep.travelTo(target)
                            }  

  let invaderCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                
                    if (creep.room.name === 'W3S8' && Game.time % 50 === 0) {
                      if (invaderCreep) {
                        Game.spawns.Spawn2.memory.rangedattackerRoom = 'W3S8';
                        Game.spawns.Spawn5.memory.rangedattackerRoom = 'W3S8'
                      }
                    }

        
                 
                          }
                   
}       
}
                            
     
