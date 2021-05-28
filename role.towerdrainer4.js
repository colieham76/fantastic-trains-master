module.exports = {

    run: function (creep) {

if(!creep.memory.rally4) {
            creep.travelTo(Game.flags['rally4']);

            if (creep.pos.isNearTo(Game.flags['rally4'])) {
                creep.memory.rally4 = true;
            }
            return;
        }
    }
}
