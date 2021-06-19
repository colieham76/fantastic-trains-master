module.exports = {
    run: function(creep) {
      creep.say('presious...');              
            if (Game.flags['Dismantle'] != undefined) {
                          let presious = getTargetByFlag('Dismantle','structure');
                          if (presious != undefined) { // if there is storage

                              if (creep.dismantle(presious) == ERR_NOT_IN_RANGE) {
                                  creep.travelTo(presious);
                              }
                          }
                   }
}       
}
                            
     
