var linkController = {
    run: function (link) {
        const upgradeLink1 = Game.getObjectById('60f7d1093bd3cc14ace13cfa'); //W7S8 centre
        const upgradeLink2 = Game.getObjectById('60f7cd829709c9966154d996'); //W7S8
        const upgradeLink6 = Game.getObjectById('61265ada4687236c8e62022e'); //W7S8 left
       const upgradeLink3 = Game.getObjectById('60f28c866ad7ca62d17c9522'); //W9S6 centre
        const upgradeLink4 = Game.getObjectById('60f292a126d700a9af4fa257'); //W9S6 bottom left        
        const upgradeLink5 = Game.getObjectById('61191c61d8dc48a4cc22cd7d'); //W9S6 bottom right          
        const upgradeLink7 = Game.getObjectById('6133bb7de4eb6b1fcb87777a'); // W3S8 centre
        const upgradeLink8 = Game.getObjectById('6086741280b5ea172258939e'); // W3S8 right
        const upgradeLink9 = Game.getObjectById('60b9014573c93ab23eab5fff'); // W3S8 top right
        const upgradeLink10 = Game.getObjectById('60867ac6b926becd116e7921'); // W3S8 top left
        if (Game.time % 15 == 0) {
            console.log('linked2')
            if (upgradeLink2.store[RESOURCE_ENERGY] >= 1) {
                upgradeLink2.transferEnergy(upgradeLink1)
            }
            else if (upgradeLink6.store[RESOURCE_ENERGY] >=1) {
                upgradeLink6.transferEnergy(upgradeLink1)
            }
            if (link.store[RESOURCE_ENERGY] >= 1) {
                link.transferEnergy(upgradeLink3)
            }
            if (link.store[RESOURCE_ENERGY] >= 1) {
                link.transferEnergy(upgradeLink7)
            }
        }
    }
}
module.exports = linkController;
