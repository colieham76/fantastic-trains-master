var roleBuilder = require('role.builder');
var actionBuild = require('action.build');

module.exports = {
    run: function(creep) {
        if (creep.room.name != creep.memory.home) { // if not at home base
            creep.travelTo(Game.flags[creep.memory.target].pos);
        }
        else if (creep.room.name == creep.memory.home) {
            roleBuilder.run(creep);
        }                 
        if (creep.room.name == creep.memory.target) { 
            creep.say('build here die here');
            roleBuilder.run(creep);
        }
        else { // go to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            creep.travelTo(creep.pos.findClosestByRange(exit));
        }        
    }
};
