//var actionUpgrade = require('action.upgradeController');

module.exports = {
    run: function(creep) {
        var mineral = creep.room.find(FIND_MINERALS)[0]
        var mineralContainer =  mineral.pos.findInRange(FIND_STRUCTURES, 1, {
               filter: s => s.structureType == STRUCTURE_CONTAINER})[1];
        if ((mineral)&&(mineralContainer)&&(mineralContainer.hits<0.95*mineralContainer.hitsMax)) { // if there is a  mineral mine (becaue there is container)
            if (creep.repair(mineralContainer) == ERR_NOT_IN_RANGE) {
                creep.moveTo(mineralContainer);
            }
        }
        else {
            var structure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
       filter: (s) => (s.structureType != STRUCTURE_ROAD
                    && s.structureType != STRUCTURE_WALL
                    && s.structureType != STRUCTURE_RAMPART)
                    && (s.hits<0.8*s.hitsMax) })
            if (structure == undefined) {
                structure = creep.pos.findClosestByRange(FIND_STRUCTURES, { 
       filter: (s) => s.hits < Math.floor(0.8*s.hitsMax) && s.structureType == STRUCTURE_ROAD})
            }
            if (structure != undefined) {
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
         /*   else {
                actionUpgrade.run(creep);
            }*/
        }
    }
};
