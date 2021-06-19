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
                 
                          }
                   
}       
}
                            
     
