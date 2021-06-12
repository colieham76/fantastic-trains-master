var roles = {
    
  reserver: require('role.reserver'),
    
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder'),
    repairer: require('role.repairer'),
    dismantler: require('role.dismantler'),
    wallRepairer: require('role.wallRepairer'),
   rampartrepairer: require('role.rampartrepairer'),
    longDistanceHarvester: require('role.longDistanceHarvester'),
    smallUpgrader: require('role.smallUpgrader'),
   rangedattacker: require('role.rangedattacker'),
    claimer: require('role.claimer'),
     towerdrainer1: require('role.towerdrainer1'),
    towerdrainer2: require('role.towerdrainer2'),
    towerdrainer3: require('role.towerdrainer3'),
    towerdrainer4: require('role.towerdrainer4'),
    towerdrainer5: require('role.towerdrainer5'),  
    miner: require('role.miner'),
    lorry: require('role.lorry'),
    towerlorry: require('role.towerlorry'),
    extractor: require('role.extractor'),
    captain: require('role.captain'),
    firstMate: require('role.firstMate'),
    crew: require('role.crew'),
    //nothinger: require('role.nothinger'),
    //ultimateWorrior: require('role.ultimateWorrior'),
    healer: require('role.healer'),
    healer2: require('role.healer2'),
    healer3: require('role.healer3')
};

Creep.prototype.runRole =
    function () {
        roles[this.memory.role].run(this)
    };

Creep.prototype.smartHeal = function (anotherCreep) {
    let ditance = this.pos.getRangeTo(anotherCreep);
    if (distance <= 1) {
        this.heal(anotherCreep);
    }
    else {
        this.rangedHeal(anotherCreep);
    }
}


/** @function 
    @param {bool} useContainer
    @param {bool} useSource */
Creep.prototype.getEnergy =
    function (useContainer, useSource) {
        /** @type {StructureContainer} */
        let container;
        // if the Creep should look for containers
        if (useContainer) {
            // find closest container
            container = this.pos.findClosestByPath(FIND_STRUCTURES, {
               filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE
                             || s.structureType == STRUCTURE_TERMINAL) &&
                             s.store[RESOURCE_ENERGY] > 450
            });
            // if one was found
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (this.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    this.moveTo(container);
                }
            }
        }

           
        // if no container was found and the Creep should look for Sources
        if (container == undefined && useSource) {
            // find closest source
            var source = this.pos.findClosestByPath(FIND_SOURCES_ACTIVE);

            // try to harvest energy, if the source is not in range
            if (this.harvest(source) == ERR_NOT_IN_RANGE) {
                // move towards it
                this.moveTo(source);
            }
        }
    };

////////////////////////////////////////////////////////////////////////////////////
/*
var roles = {
    attacker : require('role.attacker'),
    healer : require('role.healer'),
    harvester : require('role.harvester'),
    miner : require('role.miner'),
    lorry : require('role.lorry'),
    upgrader : require('role.upgrader'),
    builder : require('role.builder'),
    repairer : require('role.repairer'),
    wallRepairer : require('role.wallRepairer'),
    longDistanceHarvester : require('role.longDistanceHarvester'),
    longDistanceLorry : require('role.longDistanceLorry'),
    longDistanceBuilder : require('role.longDistanceBuilder'),
    reserver : require('role.reserver'),
    claimer : require('role.claimer'),
    pickuper : require('role.pickuper'),
    scouter : require('role.scouter'),
    teezer : require('role.teezer'),
    rampartRepairer : require('role.rampartRepairer'),
    begger : require('role.begger'),
    longDistanceUpgrader : require('role.longDistanceUpgrader'),
    controllerAttacker : require('role.controllerAttacker'),
    dismantler: require('role.dismantler'),
    linkKeeper: require('role.linkKeeper'),
    traveller: require('role.traveller'),
    transporter: require('role.transporter'),
    antiTransporter: require('role.antiTransporter'),
    pioneer: require('role.pioneer'),
    melee: require('role.melee'),
    stealer: require('role.stealer'),
    ranger: require('role.ranger'),
    powerSourceAttacker: require('role.powerSourceAttacker'),
    powerSourceHealer: require('role.powerSourceHealer'),
    powerSourceLorry: require('role.powerSourceLorry'),
    powerSourceRanger: require('role.powerSourceRanger'),
    labber: require('role.labber'),
    superUpgrader: require('role.superUpgrader'),
    keeperLairMeleeKeeper: require('role.keeperLairMeleeKeeper'),
    keeperLairInvaderAttacker: require('role.keeperLairInvaderAttacker'),
    keeperLairInvaderHealer: require('role.keeperLairInvaderHealer'),
    keeperLairLorry: require('role.keeperLairLorry'),
    captain: require('role.captain'),
    firstMate: require('role.firstMate'),
    crew: require('role.crew'),
    nothinger: require('role.nothinger'),
    ultimateWorrior: require('role.ultimateWorrior'),
    ultimateUpgrader: require('role.ultimateUpgrader'),
    oneWayInterSharder: require('role.oneWayInterSharder'),
    wanderer: require('role.wanderer'),
    portalTransporter: require('role.portalTransporter'),
    twoWayInterSharder: require('role.twoWayInterSharder'),
    scientist: require('role.scientist'),
    wanker: require('role.wanker'),
    shooter: require('role.shooter'),
    onlyMineralDefender: require('role.onlyMineralDefender'),
    onlyMineralMiner: require('role.onlyMineralMiner'),
    onlyMineralHauler: require('role.onlyMineralHauler'),
};

Creep.prototype.runRole = function () {
    //roles[this.memory.role].run(this);
    try {
        roles[this.memory.role].run(this);
    }
    catch(err) {
        //unpackCreepMemory(this.name);
        console.log('error: role name fault: '+this.memory.role+this.pos);
    }
};

Creep.prototype.smartHeal = function (anotherCreep) {
    let ditance = this.pos.getRangeTo(anotherCreep);
    if (distance <= 1) {
        this.heal(anotherCreep);
    }
    else {
        this.rangedHeal(anotherCreep);
    }
}

*/
