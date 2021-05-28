
module.exports = {

    run: function (creep) {

if(!creep.memory.rally3) {
            creep.travelTo(Game.flags['rally3']);

            if (creep.pos.isNearTo(Game.flags['rally3'])) {
                creep.memory.rally3 = true;
            }
            return;
        }
    }
}
