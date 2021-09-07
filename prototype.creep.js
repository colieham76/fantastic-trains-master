var roles = {
    attacker: require('role.attacker'),
  reserver: require('role.reserver'),
    remoteMiner: require('role.remoteMiner'),
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder'),
    repairer: require('role.repairer'),
    dismantler: require('role.dismantler'),
    dismantler: require('role.dismantler2'),
    wallRepairer: require('role.wallRepairer'),
   rampartrepairer: require('role.rampartrepairer'),
    longDistanceHarvester: require('role.longDistanceHarvester'),
     longDistanceBuilder: require('role.longDistanceBuilder'),
    longDistanceLorry: require('role.longDistanceLorry'),
    smallUpgrader: require('role.smallUpgrader'),
    smallHarvester: require('role.smallHarvester'),
   rangedattacker: require('role.rangedattacker'),
    claimer: require('role.claimer'),
    controllerAttacker: require('role.controllerAttacker'),
     towerdrainer1: require('role.towerdrainer1'),
    towerdrainer2: require('role.towerdrainer2'),
    towerdrainer3: require('role.towerdrainer3'),
    towerdrainer4: require('role.towerdrainer4'),
    towerdrainer5: require('role.towerdrainer5'),
    antiTransporter: require('role.antiTransporter'),
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
    healer3: require('role.healer3'),
    healer4: require('role.healer4'),
    storagelorry: require('role.storagelorry'),
    terminalory: require('terminalory')
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
