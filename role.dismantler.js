module.exports = {
    run: function(creep) {
      creep.say('presious...');

        if (creep.memory.target==undefined) { // if in target (giver) room, go withdraw from storage:
            if (creep.hits < 0.75*creep.hitsMax) { // if full health
                let closestHealer = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter:s=>s.getActiveBodyparts(HEAL)>10&&s.name!=creep.name});
                  if (closestHealer&&creep.pos.getRangeTo(closestHealer)>2) {
                      creep.moveTo(closestHealer);
                  }
                  else {
                      if (Game.flags['Dismantle'] != undefined) {
                          let presious = getTargetByFlag('Dismantle','structure');
                          if (presious != undefined) { // if there is storage
                              if (creep.dismantle(presious) == ERR_NOT_IN_RANGE) {
                                  creep.travelTo(presious);
                              }
                          }
                          else {
                            var target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
                            if (creep.dismantle(target) == ERR_NOT_IN_RANGE) {
                                creep.travelTo(target)
                            }
                          }
                          if (creep.pos.isEqualTo(Game.flags['Dismantle'])) {
                              Game.flags['Dismantle'].remove();
                          }
                      }            
           
        }
        else { // if not in target room, move to target room
            if (Game.flags.Dismantle) {
                creep.moveTo(Game.flags.Dismantle);
            }          
        }
    }
};
