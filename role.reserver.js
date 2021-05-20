var actionRunAway = require('action.flee');

module.exports = {
    run: function(creep) {
        if (creep.room.name != creep.memory.target) {


         // go to target room
                if (Game.flags['Reserve']) {
                    var destination = Game.flags['Reserve'].pos;
                    creep.travelTo(destination);
                    //creep.travelTo(Game.rooms[creep.memory.target])
                }
                       
            //var exit = creep.room.findExitTo(creep.memory.target);
            //creep.moveTo(creep.pos.findClosestByRange(exit));
            //creep.moveTo(Game.flags[creep.memory.target].pos);
           // creep.travelTo(new RoomPosition(25, 25, creep.memory.target));
        }
        else {
            if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {// changed reserve controller to atttackCont
                creep.travelTo(creep.room.controller, {
                    maxRooms: 1 
                });
            }
            actionRunAway.run(creep)
        }
    }
};
