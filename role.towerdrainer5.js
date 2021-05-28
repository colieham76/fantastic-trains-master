
module.exports = {

    run: function (creep) {

if(!creep.memory.rally5) {
            creep.travelTo(Game.flags['rally5']);

            if (creep.pos.isNearTo(Game.flags['rally5'])) {
                creep.memory.rally5 = true;
            }
            return;
        }
    }
}
