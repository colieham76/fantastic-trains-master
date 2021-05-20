var linkController = {
       

    run: function(link) {

        const upgradeLink = Game.getObjectById('5ce1cb25e632af2dff382150'); //remote mining link in W71N69
        const upgradeLink2 = Game.getObjectById('5ce056a7074ed46fed3a9deb'); //remote mining link in W62N61
        const upgradeLink3 = Game.getObjectById('5cd80e21c7f85a307d113390'); //remote mining link in W65N63
        const upgradeLink4 = Game.getObjectById('5cf9681768cf3e6212e434db'); //remote mining link in W62N69
        const upgradeLink5 = Game.getObjectById('5cd6e9f0a4ceff307ee438f1'); //remote mining link in W61N68
        const upgradeLink6 = Game.getObjectById('5cfbbcba68cf3e6212e56554'); //remote mining link in W63N64
        const upgradeLink7 = Game.getObjectById('5cda1c38c872463cd4b7b913'); //remote mining link in W63N66
        const upgradeLink8 = Game.getObjectById('5ce9246d2404c534892f5a50'); //remote mining link in W77N69
        const upgradeLink9 = Game.getObjectById('5d9306ede68a1c0001c62fc1'); //remote mining link in W79N64
        const upgradeLink10 = Game.getObjectById('5d5b8b51a76b2143e1a5df3e'); //remote mining link in W79N63
      //  const upgradeLink11 = Game.getObjectById('5dc1fd99a067857af80c30fa'); //remote mining link in W62N69
       // const upgradeLink12 = Game.getObjectById('5cf95e43a970836226cd1dc2'); //remote mining link in W62N69
           
           
        const upgradeLinkEnergyNeeded = upgradeLink.energyCapacity - upgradeLink.energy;
        const upgradeLinkEnergyNeeded2 = upgradeLink2.energyCapacity - upgradeLink2.energy;
        const upgradeLinkEnergyNeeded3 = upgradeLink3.energyCapacity - upgradeLink3.energy;
        const upgradeLinkEnergyNeeded4 = upgradeLink4.energyCapacity - upgradeLink4.energy;
        const upgradeLinkEnergyNeeded5 = upgradeLink5.energyCapacity - upgradeLink5.energy;
        const upgradeLinkEnergyNeeded6 = upgradeLink6.energyCapacity - upgradeLink6.energy;
        const upgradeLinkEnergyNeeded7 = upgradeLink7.energyCapacity - upgradeLink7.energy;
        const upgradeLinkEnergyNeeded8 = upgradeLink8.energyCapacity - upgradeLink8.energy;
        const upgradeLinkEnergyNeeded9 = upgradeLink9.energyCapacity - upgradeLink9.energy;
        const upgradeLinkEnergyNeeded10 = upgradeLink10.energyCapacity - upgradeLink10.energy;
    //    const upgradeLinkEnergyNeeded11 = upgradeLink11.energyCapacity - upgradeLink11.energy;
    //    const upgradeLinkEnergyNeeded12 = upgradeLink12.energyCapacity - upgradeLink12.energy;
        

    if (Game.time % 50 == 0) {    
        if (link.energy >= upgradeLinkEnergyNeeded) {
            link.transferEnergy(upgradeLink, upgradeLinkEnergyNeeded)
        }
           
        if (link.energy >= upgradeLinkEnergyNeeded2) {
            link.transferEnergy(upgradeLink2, upgradeLinkEnergyNeeded2)
        }

        if (link.energy >= upgradeLinkEnergyNeeded3) {
            link.transferEnergy(upgradeLink3, upgradeLinkEnergyNeeded3)
        }
        if (link.energy >= upgradeLinkEnergyNeeded4) {
            link.transferEnergy(upgradeLink4, upgradeLinkEnergyNeeded4)
        }
           
        if (link.energy >= upgradeLinkEnergyNeeded5) {
            link.transferEnergy(upgradeLink5, upgradeLinkEnergyNeeded5)
        }

        if (link.energy >= upgradeLinkEnergyNeeded6) {
            link.transferEnergy(upgradeLink6, upgradeLinkEnergyNeeded6)
        }
        if (link.energy >= upgradeLinkEnergyNeeded7) {
            link.transferEnergy(upgradeLink7, upgradeLinkEnergyNeeded7)
        }
           
        if (link.energy >= upgradeLinkEnergyNeeded8) {
            link.transferEnergy(upgradeLink8, upgradeLinkEnergyNeeded8)
        }

        if (link.energy >= upgradeLinkEnergyNeeded9 ) {
            link.transferEnergy(upgradeLink9, upgradeLinkEnergyNeeded9)
        }
        if (link.energy >= upgradeLinkEnergyNeeded10) {
            link.transferEnergy(upgradeLink10, upgradeLinkEnergyNeeded10)
        }   
    /*    if (link.energy >= upgradeLinkEnergyNeeded11) {
            link.transferEnergy(upgradeLink11, upgradeLinkEnergyNeeded11)
        }  
        if (link.energy >= upgradeLinkEnergyNeeded12) {
            link.transferEnergy(upgradeLink12, upgradeLinkEnergyNeeded12)
        }*/

    }
    }
};

module.exports = linkController;
