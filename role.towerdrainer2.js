
module.exports = {

    run: function (creep) {

if(!creep.memory.rally2) {
            creep.travelTo(Game.flags['rally2']);

            if (creep.pos.isNearTo(Game.flags['rally2'])) {
                creep.memory.rally2 = true;
            }
            return;
        }
    }
}
        
