var linkController = {
    run: function (link) {
        const upgradeLink = Game.getObjectById('60f7cd829709c9966154d996'); //W7S8
        const upgradeLink2 = Game.getObjectById('60f7d1093bd3cc14ace13cfa'); //W7S8
        const upgradeLink3 = Game.getObjectById('6102b6bd0351a81429f0d43f'); //W7S8
        
        const upgradeLinkEnergyNeeded = upgradeLink.energyCapacity - upgradeLink.energy;
        const upgradeLinkEnergyNeeded2 = upgradeLink2.energyCapacity - upgradeLink2.energy;
        const upgradeLinkEnergyNeeded3 = upgradeLink3.energyCapacity - upgradeLink3.energy;

        if (Game.time % 100 == 0) {
            if (link.energy >= upgradeLinkEnergyNeeded) {
                link.transferEnergy(upgradeLink, upgradeLinkEnergyNeeded)
            }

            if (link.energy >= upgradeLinkEnergyNeeded2) {
                link.transferEnergy(upgradeLink2, upgradeLinkEnergyNeeded2)
            }  
            
            if (link.energy >= upgradeLinkEnergyNeeded3) {
                link.transferEnergy(upgradeLink3, upgradeLinkEnergyNeeded3)
            } 
        }
    }
}
module.exports = linkController;
