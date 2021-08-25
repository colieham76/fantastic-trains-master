var linkController = {
    run: function (link) {
        const upgradeLink1 = Game.getObjectById('60f7d1093bd3cc14ace13cfa'); //W7S8 centre
        const upgradeLink2 = Game.getObjectById('60f7cd829709c9966154d996'); //W7S8
       const upgradeLink3 = Game.getObjectById('60f28c866ad7ca62d17c9522'); //W9S6 centre
        const upgradeLink4 = Game.getObjectById('60f292a126d700a9af4fa257'); //W9S6 bottom left        
        const upgradeLink5 = Game.getObjectById('61191c61d8dc48a4cc22cd7d'); //W9S6 bottom right
        
      /*  const upgradeLinkEnergyNeeded1 = upgradeLink1.energyCapacity - upgradeLink1.energy*0.9;
        const upgradeLinkEnergyNeeded2 = upgradeLink2.energyCapacity - upgradeLink2.energy;
        const upgradeLinkEnergyNeeded3 = upgradeLink3.energyCapacity - upgradeLink3.energy;*/

        if (Game.time % 50 == 0) {
            console.log('linked2')
            if (link.store[RESOURCE_ENERGY] >= 1) {
                link.transferEnergy(upgradeLink1)
            }
            if (link.store[RESOURCE_ENERGY] >= 1) {
                link.transferEnergy(upgradeLink3)
            }

        }
    }
}
module.exports = linkController;

