var linkController = {
    run: function (link) {
        const upgradeLink1 = Game.getObjectById('60f7d1093bd3cc14ace13cfa'); //W7S8 centre
        const upgradeLink2 = Game.getObjectById('60f7cd829709c9966154d996'); //W7S8
       const upgradeLink3 = Game.getObjectById('6102b6bd0351a81429f0d43f'); //W7S8
        
        const upgradeLinkEnergyNeeded1 = upgradeLink1.energyCapacity - upgradeLink1.energy*0.2;
        const upgradeLinkEnergyNeeded2 = upgradeLink2.energyCapacity - upgradeLink2.energy;
        const upgradeLinkEnergyNeeded3 = upgradeLink3.energyCapacity - upgradeLink3.energy;      
            if (link.energy >= upgradeLinkEnergyNeeded1) {
                link.transferEnergy(upgradeLink1, upgradeLinkEnergyNeeded1)
            }
        
            
            if (link.energy >= upgradeLinkEnergyNeeded2) {
                link.transferEnergy(upgradeLink1, upgradeLinkEnergyNeeded2)
            }
               
        /*
            if (link.energy >= upgradeLinkEnergyNeeded3) {
                link.transferEnergy(upgradeLink3, upgradeLinkEnergyNeeded3)
            }*/
        
    }
}
module.exports = linkController;
