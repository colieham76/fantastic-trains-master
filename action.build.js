var actionRepair = require('action.repair');

module.exports = {
    run: function (creep) {
        const constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
        if (!constructionSite) {
            constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
        }
        else {
            constructionSite = constructionSite[0]
        }
        if (constructionSite != undefined) {
            if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                creep.travelTo(constructionSite);
                creep.build(constructionSite);
            }                
        }
    }
}
