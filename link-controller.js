var linkController = {
    run: function (link) {
        const upgradeLink = Game.getObjectById('60f7cd829709c9966154d996'); 
        const upgradeLink2 = Game.getObjectById('60f7d1093bd3cc14ace13cfa');
        const upgradeLinkEnergyNeeded = upgradeLink.energyCapacity - upgradeLink.energy;
        const upgradeLinkEnergyNeeded2 = upgradeLink2.energyCapacity - upgradeLink2.energy;

        if (Game.time % 2 == 0) {
            if (link.energy >= upgradeLinkEnergyNeeded) {
                link.transferEnergy(upgradeLink, upgradeLinkEnergyNeeded)
            }

            if (link.energy >= upgradeLinkEnergyNeeded2) {
                link.transferEnergy(upgradeLink2, upgradeLinkEnergyNeeded2)
            }          
        }
    }
}
module.exports = linkController;
