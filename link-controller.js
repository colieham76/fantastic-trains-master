var linkController = {
    run: function (link) {
        const upgradeLink1 = Game.getObjectById('60f7d1093bd3cc14ace13cfa'); //W7S8 centre
        const upgradeLink2 = Game.getObjectById('60f7cd829709c9966154d996'); //W7S8
       const upgradeLink3 = Game.getObjectById('6102b6bd0351a81429f0d43f'); //W7S8
        
        const upgradeLinkEnergyNeeded1 = upgradeLink1.energyCapacity - upgradeLink1.energy*0.9;
        const upgradeLinkEnergyNeeded2 = upgradeLink2.energyCapacity - upgradeLink2.energy;
        const upgradeLinkEnergyNeeded3 = upgradeLink3.energyCapacity - upgradeLink3.energy;

        if (Game.time % 50 == 0) {
            console.log('linked2')
            if (link.store[RESOURCE_ENERGY] >= 300) {
                link.transferEnergy(upgradeLink1)
            }

        }
    }
}
module.exports = linkController;
