// noinspection SpellCheckingInspection

var listOfRoles = ['harvester', 'lorry', 'towerlorry','claimer', 'antiTransporter', 'extractor', 'attacker',
		   'rampartrepairer', 'towerdrainer1', 'healer', 'healer3', 'healer2', 'healer4', 'remoteMiner',
		  'firstMate', 'captain', 'crew', 'mugger', 'rangedattacker', 'longDistanceBuilder', 'towerdrainer2',
		   'towerdrainer3', 
                   'towerdrainer4', 'towerdrainer5', 'upgrader', 'repairer', 'builder', 'wallRepairer', 'dismantler', 'dismantler2'];

require('myFunctions');
//c = longDistanceHarvester
//c2701 = builder
//c2702 = miner
//2704 = lorry
//2705 = towerlorry
//2706 = smallUpgrader
//2707 = longDistancelorry
//dism = dismantler

 //  Kill all Creeps
/*
for(var name in Game.creeps) { 
          Game.creeps[name].suicide(); 
         } 

*/
Game.spawns.W7S8.memory.mincapns = {'W9S3':0}
Game.spawns.Spawn1.memory.mincapns = {'W9S3': 0}
Game.spawns.W7S8.memory.minfirstMates = {'W9S3': 0}
Game.spawns.Spawn1.memory.mincrew = {'W9S3': 0}



Game.spawns.Spawn1.memory.minCreeps = {repairer: 0, harvester: 1,
				       builder: 0, lorry: 1, towerlorry: 1,
				       dismantler: 0, upgrader: 0, extractor: 0};
Game.spawns.Spawn1.memory.minLongDistanceHarvesters = {W7S9: 1};
Game.spawns.Spawn1.memory.minNumberOfreservers = {W7S9: 0};
Game.spawns.W7S8.memory.minCreeps = {harvester: 0, rampartrepairer: 0};
Game.spawns.W7S8.memory.minsmallUpgraders = {W7S8: 1};
Game.spawns.W7S8.memory.minLongDistanceHarvesters = {W8S8: 1};
Game.spawns.W7S8.memory.minNumberOfreservers = {W8S8: 0}

Game.spawns.Spawn2.memory.minLongDistanceHarvesters = {W2S8: 1};
Game.spawns.Spawn2.memory.minLongDistanceHarvesters = {W1S9: 0};
Game.spawns.Spawn2.memory.minNumberOfreservers = {W1S9: 0};
Game.spawns.Spawn2.memory.minsmallUpgraders = {W1S8: 1};
Game.spawns.Spawn2.memory.minCreeps = {repairer: 0, builder: 0, lorry: 0, towerlorry: 1,
                                         rampartrepairer: 0};


Game.spawns.Spawn3.memory.minNumberOfreservers = {W2S8: 1};
Game.spawns.Spawn3.memory.mincontrollerattackers = {W7S7: 0};
Game.spawns.Spawn3.memory.minCreeps = {harvester: 0, repairer: 0, builder: 0, lorry: 1, wallRepairer: 0,
                                       towerlorry: 1, upgrader: 0, rampartrepairer: 0, extractor: 0, dismantler: 0};
Game.spawns.Spawn3.memory.minLongDistanceHarvesters = {W3S7: 1};

Game.spawns.Spawn4.memory.minCreeps = {harvester: 0, builder: 0, repairer: 0, upgrader: 0, dismantler: 0};
Game.spawns.Spawn4.memory.minLongDistanceHarvesters = {W2S8: 1};
Game.spawns.Spawn4.memory.minsmallUpgraders = {W3S8: 1};
Game.spawns.Spawn4.memory.minLongDistanceHarvesters = {W3S7: 1};


Game.spawns.Spawn5.memory.minCreeps = {harvester: 1, upgrader: 0, wallRepairer: 0, lorry: 2,
dismantler: 0, antiTransporter: 0};
Game.spawns.Spawn5.memory.minattackers = {W4S2: 0};
Game.spawns.Spawn5.memory.minLongDistanceHarvesters = {W1S7: 1};
Game.spawns.Spawn5.memory.minNumberOfreservers = {W1S7: 1};

Game.spawns.Spawn6.memory.mincontrollerattackers = {W9S5: 0};
Game.spawns.Spawn6.memory.minCreeps = {harvester: 1, upgrader: 2, repairer: 0, dismantler: 0,
wallRepairer: 0, extractor: 0, builder: 0, rampartrepairer: 0, lorry: 1, towerlorry: 1 };

Game.spawns.Spawn6.memory.minLongDistanceBuilders = {W9S7: 1};
Game.spawns.Spawn6.memory.minLongDistanceHarvesters = {W9S7: 1};
Game.spawns.Spawn6.memory.minLongDistanceHarvesters = {W9S5: 1};
Game.spawns.Spawn6.memory.minNumberOfreservers = {W9S5: 1};

Game.spawns.Spawn6.memory.minNumberOfreservers = {W9S7: 1};

//Game.spawns.Spawn6.memory.minLongDistanceHarvesters = {W9S5: 0};
Game.spawns.Spawn6.memory.minLongDistanceLorrys = {W9S7: 1}

Game.spawns.W7S8.memory.minhealers = {W8S5: 0};
Game.spawns.Spawn6.memory.minhealers2 = {W8S5: 0};
Game.spawns.Spawn6.memory.minhealers3 = {W8S5: 0};
Game.spawns.Spawn6.memory.minhealers4 = {W8S5: 0};

Game.spawns.W7S8.memory.mintowerdrainers1 = {W9S3: 0};
Game.spawns.W7S8.memory.mintowerdrainers2 = {W9S3: 0};
Game.spawns.Spawn1.memory.mintowerdrainers3 = {W9S3: 0};
Game.spawns.Spawn6.memory.mintowerdrainers4 = {W9S5: 0};
Game.spawns.Spawn6.memory.mintowerdrainers5 = {W9S5: 0};

Game.spawns.Spawn7.memory.minCreeps = {harvester: 1, towerlorry: 1, upgrader: 1, wallRepairer: 1,
				       rampartrepairer: 0, lorry: 2, builder: 0, extractor: 0, dismantler: 0};
Game.spawns.Spawn7.memory.minLongDistanceHarvesters = {W7S7: 1};
Game.spawns.Spawn7.memory.minLongDistanceHarvesters = {W8S6: 1}
Game.spawns.Spawn7.memory.minNumberOfreservers = {W8S5: 0};
Game.spawns.Spawn7.memory.minrangedattackers = {'W8S5': 0};

//Game.creeps['Isabelle'].memory.target = 'W79N64'
//Game.market.outgoingTransactionsarray

// Function to create creeps with names
Spawn.prototype.getCreepName = function(role){
            var creepName = role + '_0';
            for (i = 0; i < 9999 ; i++) {
                creepName = role + '_' + i;
                if (Game.creeps[creepName] === undefined
                  || Game.creeps[creepName] === null)
                  break;
            }
            return creepName;
        }

 // Function to get serial number
 Spawn.prototype.getSerial = function(role) {
            var creepName = role + '_0';
            for (i = 0; i < 9999 ; i++) {
                creepName = role + '_' + i;
                if (Game.creeps[creepName] === undefined
                  || Game.creeps[creepName] === null)
                  break;
            }
            return i;
        }

// create a new function for StructureSpawn
StructureSpawn.prototype.spawnCreepsIfNecessary =

function () {

            /** @type {Room} */
        let room = this.room;
        // find all creeps in room
        /** @type {Array.<Creep>} */
        let creepsInRoom = room.find(FIND_MY_CREEPS);
        
        // count the number of creeps alive for each role in this room
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a specific role
        /** @type {Object.<string, number>} */
        let numberOfCreeps = {};
        for (let role of listOfRoles) {
            numberOfCreeps[role] = _.sum(creepsInRoom, (c) => c.memory.role == role);
        }
        let maxEnergy = room.energyCapacityAvailable;
        let name = undefined;

        // if no harvesters are left AND either no miners or no lorries are left
        //  create a backup creep
        if (numberOfCreeps['harvester'] == 0 && numberOfCreeps['lorry'] == 0) {
            // if there are still miners or enough energy in Storage left
            if (numberOfCreeps['miner'] > 0 ){
//|| (room.storage != undefined && room.storage.store[RESOURCE_ENERGY] >= 150 + 550)) {
                // create a lorry
                name = this.createLorry(150);
            }
            // if there is no miner and not enough energy in Storage left
		
            else {
                // create a harvester because it can work on its own
                name = this.createCustomCreep(room.energyAvailable, 'harvester');
            }
	    
        }
        // if no backup creep is required
        else {
            // check if all sources have miners
            let sources = room.find(FIND_SOURCES);
            // iterate over all sources
            for (let source of sources) {
                // if the source has no miner
                if (!_.some(creepsInRoom, c => c.memory.role == 'miner' && c.memory.sourceId == source.id)) {
                    // check whether or not the source has a container
                    /** @type {Array.StructureContainer} */
                    let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
                        filter: s => s.structureType == STRUCTURE_CONTAINER
                    });
                    // if there is a container next to the source
                    if (containers.length > 0) {
                        // spawn a miner
                        name = this.createMiner(source.id);
                        break;
                    }
                }
            }
        }
	
        for (let roomName in Game.rooms) {
            if (Game.rooms[roomName].controller != undefined && Game.rooms[roomName].controller.my != true) {
		   // if (Game.rooms[roomName].controller.my != true) {
                let sources = Game.rooms[roomName].find(FIND_SOURCES);
                for (let source of sources) {
                    let creepsAtTarget = _.filter(Game.creeps,
                        (c) => c.memory.target == Game.rooms[roomName].name);
                    if (!_.some(creepsAtTarget,
                        (c) => c.memory.role == 'remoteMiner' && c.memory.sourceId == source.id)) {
                        let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
                            filter: (s) => s.structureType == STRUCTURE_CONTAINER,
                        });
                        if (containers.length > 0) {
                            name = this.createRemoteMiner(Game.rooms[roomName].name, source.id);
                            break;
                        }
                    }
                }
            }
        }	
	
        // if none of the above caused a spawn command check for other roles

        if (name === undefined) {
            for (let role of listOfRoles) {
                // check for claim order
                if (role == 'claimer' && this.memory.claimRoom != undefined) {
                    // try to spawn a claimer
                    name = this.createClaimer(this.memory.claimRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the claim order
                        delete this.memory.claimRoom;
                    }
                } else if (role == 'dismantler' && this.memory.dismantleRoom != undefined) {
                    // try to spawn a dismantler
                    if (Game.time % 4000 === 0) {
                        name = this.createDismantler(this.memory.dismantleRoom);
                    }
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete dismantle order
                        delete this.memory.dismantleRoom;
                    }
                }

          else if (role == 'captain' && this.memory.captainRoom != undefined) {
                // try to spawn a captain
                name = this.createCaptain(this.memory.captainRoom);
                // if that worked
                if (name != undefined && _.isString(name)) {
                    // delete captain order
                    delete this.memory.captainRoom;
                }
            }
          else if (role == 'firstMate' && this.memory.firstMateRoom != undefined) {
                // try to spawn a firstMate
                name = this.createFirstMate(this.memory.firstMateRoom);
                // if that worked
                if (name != undefined && _.isString(name)) {
                    // delete firstMate order
                    delete this.memory.firstMateRoom;
                }
            }
            else if (role == 'crew' && this.memory.crewRoom != undefined) {
                // try to spawn a crew
                name = this.createCrew(this.memory.crewRoom);
                // if that worked
                if (name != undefined && _.isString(name)) {
                    // delete crew order
                    delete this.memory.crewRoom;
                }
            }
		    
             /*
             if (role == 'ultimateWarrior' && this.memory.ultimateWarriorRoom != undefined) {
                // try to spawn a ultimateWarrior
                name = this.createUltimateWarrior(this.memory.ultimateWarriorRoom);
                // if that worked
                if (name != undefined && _.isString(name)) {
                    // delete ultimateWarrior order
                    delete this.memory.ultimateWarriorRoom;
                }
            }
            */
// check for mug order
                if (role == 'mugger' && this.memory.mugRoom != undefined) {
                    // try to spawn a mugger
                    name = this.createMugger(this.memory.mugRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the claim order
                        delete this.memory.mugRoom;
                    }
                }
		    // check for rangedattacker order
               if (role == 'rangedattacker' && this.memory.rangedattackerRoom != undefined) {
                    // try to spawn a rangedattacker
                    name = this.createrangedattacker(this.memory.rangedattackerRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the rangedattacker order
                        delete this.memory.rangedattackerRoom;
                    }
                }
		    
		   
		    
		        // check for controller attacker order
               if (role == 'controllerAttacker' && this.memory.controllerAttackerRoom != undefined) {
                    // try to spawn a rangedattacker
                    name = this.createcontrollerAttacker(this.memory.controllerAttackerRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the rangedattacker order
                        delete this.memory.controllerAttackerRoom;
                    }
                }
		    
		 // check for long distance builder order
               if (role == 'longDistanceBuilder' && this.memory.longDistanceBuilderRoom != undefined) {
                    // try to spawn a rangedattacker
                    name = this.createlongDistanceBuilder(this.memory.longDistanceBuilderRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the rangedattacker order
                        delete this.memory.longDistanceBuilderRoom;
                    }
                }  
                   	

    
		 // check forstance lorry order
               if (role == 'longDistanceLorry' && this.memory.longDistanceLorryRoom != undefined) {
                    // try to spawn a rangedattacker
                    name = this.createlongDistanceLorry(this.memory.longDistanceLorryRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the rangedattacker order
                        delete this.memory.longDistanceLorryRoom;
                    }
                }  

                // if no claim or dismantle order was found, check other roles
                else if (numberOfCreeps[role] < this.memory.minCreeps[role]) {
                    if (role == 'lorry') {
                        name = this.createLorry(150);
                    } else {
                        name = this.createCustomCreep(maxEnergy, role);
                    }
                    if (role == 'towerlorry') {
                        name = this.createtowerLorry(250);
                    }
			if (role == 'extractor') {
                        name = this.createextractor(150);
                    }
			if (role == 'antiTransporter') {
                        name = this.createAntiTransporter(energy);
                    }

                    break;
                }
            }
        }
	// if none of the above caused a spawn command check for rangedattackers
        /** @type {Object.<string, number>} */
        let numberOfRangedAttackers = {};
        if (name == undefined) {
            // count the number of long distance harvesters globally
            for (let roomName in this.memory.minrangedattackers) {
                numberOfRangedAttackers[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'rangedattacker' && c.memory.target == roomName);

                if (numberOfRangedAttackers[roomName] < this.memory.minrangedattackers[roomName]) {
           		//	 if (Game.time % 300 === 0) {       
  				name = this.createrangedattacker(room.name, roomName)}
				//}
            }
        }
	
	// if none of the above caused a spawn command check for captains
        /** @type {Object.<string, number>} */
        let numberOfcapns = {};
        if (name == undefined) {
            // count the number of long distance harvesters globally
            for (let roomName in this.memory.mincapns) {
                numberOfcapns[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'captain' && c.memory.target == roomName);

                if (numberOfcapns[roomName] < this.memory.mincapns[roomName]) {
           		//	 if (Game.time % 300 === 0) {       
 			 name = this.createCaptain(room.name, roomName)}
			//}
            }
        }
	
	// if none of the above caused a spawn command check for captains
        /** @type {Object.<string, number>} */
        let numberOffirstMates = {};
        if (name == undefined) {
            // count the number of long distance harvesters globally
            for (let roomName in this.memory.minfirstMates) {
                numberOffirstMates[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'firstMate' && c.memory.target == roomName);

                if (numberOffirstMates[roomName] < this.memory.minfirstMates[roomName]) {
           		//	 if (Game.time % 300 === 0) {       
 			 name = this.createFirstMate(room.name, roomName)}
			//}
            }
        }
	
	// if none of the above caused a spawn command check for captains
        /** @type {Object.<string, number>} */
        let numberOfcrew = {};
        if (name == undefined) {
            // count the number of crew globally
            for (let roomName in this.memory.mincrew) {
                numberOfcrew[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'crew' && c.memory.target == roomName);

                if (numberOfcrew[roomName] < this.memory.mincrew[roomName]) {
           		//	 if (Game.time % 300 === 0) {       
 			 name = this.createCrew(room.name, roomName)}
			//}
            }
        }
	
	// if none of the above caused a spawn command check for rangedattackers
        /** @type {Object.<string, number>} */
        let numberOfcontrollerAttackers = {};
        if (name == undefined) {
            // count the number of controller Attackers globally
            for (let roomName in this.memory.mincontrollerattackers) {
                numberOfcontrollerAttackers[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'controllerAttacker' && c.memory.target == roomName);

                if (numberOfcontrollerAttackers[roomName] < this.memory.mincontrollerattackers[roomName]) {
			// if (Game.time % 1300 === 0) {
                    name = this.createcontrollerAttacker(room.name, roomName)}
		//}
            }
        }
	
	// if none of the above caused a spawn command check for rangedattackers
        /** @type {Object.<string, number>} */
        let numberOfAttackers = {};
        if (name == undefined) {
            // count the number of Attackers globally
            for (let roomName in this.memory.minattackers) {
                numberOfAttackers[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'attacker' && c.memory.target == roomName);

                if (numberOfAttackers[roomName] < this.memory.minattackers[roomName]) {
			// if (Game.time % 1900 === 0) {
                    name = this.createattacker(room.name, roomName)}
		//}
            }
        }

        // if none of the above caused a spawn command check for LongDistanceHarvesters
        /** @type {Object.<string, number>} */
        let numberOfLongDistanceHarvesters = {};
        if (name == undefined) {
            // count the number of long distance harvesters globally
            for (let roomName in this.memory.minLongDistanceHarvesters) {
                numberOfLongDistanceHarvesters[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'longDistanceHarvester' && c.memory.target == roomName);

                if (numberOfLongDistanceHarvesters[roomName] < this.memory.minLongDistanceHarvesters[roomName]) {
                    name = this.createLongDistanceHarvester(maxEnergy, 3, room.name, roomName, 0);
                }
            }
        }
	
	
	 // if none of the above caused a spawn command check for LongDistanceLorries
        /** @type {Object.<string, number>} */
        let numberOfLongDistanceLorrys = {};
        if (name == undefined) {
            // count the number of long distance harvesters globally
            for (let roomName in this.memory.minLongDistanceLorrys) {
                numberOfLongDistanceLorrys[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'longDistanceLorry' && c.memory.target == roomName);

                if (numberOfLongDistanceLorrys[roomName] < this.memory.minLongDistanceLorrys[roomName]) {
                    name = this.createLongDistanceLorry(maxEnergy, room.name, roomName);
                }
            }
        }
	
	
	// if none of the above caused a spawn command check for LongDistanceBuilders
        /** @type {Object.<string, number>} */
        let numberOfLongDistanceBuilders = {};
        if (name == undefined) {
            // count the number of long distance harvesters globally
            for (let roomName in this.memory.minLongDistanceBuilders) {
                numberOfLongDistanceBuilders[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'longDistanceBuilder' && c.memory.target == roomName);

                if (numberOfLongDistanceBuilders[roomName] < this.memory.minLongDistanceBuilders[roomName]) {
                    name = this.createLongDistanceBuilder(room.name, roomName);
                }
            }
        }
	
	
	
	// if none of the above caused a spawn command check for smallUpgraders
        /** @type {Object.<string, number>} */
        let numberOfsmallUpgraders = {};
        if (name == undefined) {
            // count the number of small Upgraders globally
          
        for (let roomName in this.memory.minsmallUpgraders) {
              numberOfsmallUpgraders[roomName] = _.sum(Game.creeps, (c) =>
                  c.memory.role == 'smallUpgrader' && c.memory.target == roomName);
            
          if (numberOfsmallUpgraders[roomName] < this.memory.minsmallUpgraders[roomName]) {
		   if (Game.time % 20000 === 0) {
                    name = this.createsmallUpgrader(maxEnergy, 2, room.name, roomName, 0); 
		   }
                }
            }
        }
	
	
	
	    // if none of the above caused a spawn command check for towerdrainers
        /** @type {Object.<string, number>} */
        let numberOftowerdrainers1 = {};
        if (name == undefined) {
            // count the number of towerdrainers
            for (let rallyRoom in this.memory.mintowerdrainers1) {
                numberOftowerdrainers1[rallyRoom] = _.sum(Game.creeps, (c) => c.memory.role == 'towerdrainer1'
                    && c.memory.target == rallyRoom
                );

                if (numberOftowerdrainers1[rallyRoom] < this.memory.mintowerdrainers1[rallyRoom]) {
		//	 if (Game.time % 1750 === 0) { 
                    name = this.createtowerdrainer1(room.name, rallyRoom);
		//	 }
                }                
            }
        }

// if none of the above caused a spawn command check for towerdrainers
    /** @type {Object.<string, number>} */
    let numberOftowerdrainers2 = {};
    if (name == undefined) {
        // count the number of towerdrainers
        for (let rallyRoom in this.memory.mintowerdrainers2) {
            numberOftowerdrainers2[rallyRoom] = _.sum(Game.creeps, (c) => c.memory.role == 'towerdrainer2'
						     && c.memory.target == rallyRoom
						     );

            if (numberOftowerdrainers2[rallyRoom] < this.memory.mintowerdrainers2[rallyRoom]) {
		//     if (Game.time % 1750 === 0) { 
                name = this.createtowerdrainer2(room.name, rallyRoom);
		//     }
            }
        }
    }


    // if none of the above caused a spawn command check for towerdrainers
    /** @type {Object.<string, number>} */
    let numberOftowerdrainers3 = {};
    if (name == undefined) {
        // count the number of towerdrainers
        for (let rallyRoom in this.memory.mintowerdrainers3) {
            numberOftowerdrainers3[rallyRoom] = _.sum(Game.creeps, (c) => c.memory.role == 'towerdrainer3'
						     && c.memory.target == rallyRoom
						     );

            if (numberOftowerdrainers3[rallyRoom] < this.memory.mintowerdrainers3[rallyRoom]) {
                name = this.createtowerdrainer3(room.name, rallyRoom);
            }
        }
    }
    // if none of the above caused a spawn command check for towerdrainers
    /** @type {Object.<string, number>} */
    let numberOftowerdrainers4 = {};
    if (name == undefined) {
        // count the number of towerdrainers
        for (let rallyRoom in this.memory.mintowerdrainers4) {
            numberOftowerdrainers4[rallyRoom] = _.sum(Game.creeps, (c) => c.memory.role == 'towerdrainer4'
						     && c.memory.target == rallyRoom);

            if (numberOftowerdrainers4[rallyRoom] < this.memory.mintowerdrainers4[rallyRoom]) {
                name = this.createtowerdrainer4(room.name, rallyRoom);
            }
        }
    }
    // if none of the above caused a spawn command check for towerdrainers
    /** @type {Object.<string, number>} */
    let numberOftowerdrainers5 = {};
    if (name == undefined) {
        // count the number of towerdrainers
        for (let rallyRoom in this.memory.mintowerdrainers5) {
            numberOftowerdrainers5[rallyRoom] = _.sum(Game.creeps, (c) => c.memory.role == 'towerdrainer5'
						     && c.memory.target == rallyRoom);

            if (numberOftowerdrainers5[rallyRoom] < this.memory.mintowerdrainers5[rallyRoom]) {
                name = this.createtowerdrainer5(room.name, rallyRoom);
            }
        }
    }	
 
    // if none of the above caused a spawn command check for healers
    /** @type {Object.<string, number>} */
    let numberOfhealers = {};
    if (name == undefined) {
    // count the number of healers
        for (let roomName in this.memory.minhealers) {
            numberOfhealers[roomName] = _.sum(Game.creeps, (c) => c.memory.role == 'healer'
                && c.memory.target == roomName);

            if (numberOfhealers[roomName] < this.memory.minhealers[roomName]) {
		    
		//  if (Game.time % 1750 === 0) { 
                name = this.createhealer(room.name, roomName);
		 //  }
            }
        }
    }

	// if none of the above caused a spawn command check for healers
    /** @type {Object.<string, number>} */
    let numberOfhealers2 = {};
    if (name == undefined) {
    // count the number of healers
        for (let roomName in this.memory.minhealers2) {
            numberOfhealers2[roomName] = _.sum(Game.creeps, (c) => c.memory.role == 'healer2');

            if (numberOfhealers2[roomName] < this.memory.minhealers2[roomName]) {
                name = this.createhealer2(roomName);
            }
        }
    }
	
	    // if none of the above caused a spawn command check for healers
    /** @type {Object.<string, number>} */
    let numberOfhealers3 = {};
    if (name == undefined) {
    // count the number of healers
        for (let roomName in this.memory.minhealers3) {
            numberOfhealers3[roomName] = _.sum(Game.creeps, (c) => c.memory.role == 'healer3');

            if (numberOfhealers3[roomName] < this.memory.minhealers3[roomName]) {
                name = this.createhealer3(roomName);
            }
        }
    }
	

	    // if none of the above caused a spawn command check for healers
    /** @type {Object.<string, number>} */
    let numberOfhealers4 = {};
    if (name == undefined) {
    // count the number of healers
        for (let roomName in this.memory.minhealers4) {
            numberOfhealers4[roomName] = _.sum(Game.creeps, (c) => c.memory.role == 'healer4');

            if (numberOfhealers4[roomName] < this.memory.minhealers4[roomName]) {
                name = this.createhealer4(roomName);
            }
        }
    }	
	
   // if none of the above caused a spawn command check for reservers
        /** @type {Object.<string, number>} */
        let numberOfreservers = {};
        if (name == undefined) {
            for (let reserveRoom in this.memory.minNumberOfreservers) {
                numberOfreservers[reserveRoom] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'reserver' && c.memory.target == reserveRoom);
                if (numberOfreservers[reserveRoom] < this.memory.minNumberOfreservers[reserveRoom]){
                    if (Game.time % 750 === 0) {
                        name = this.createReserver(room.name, reserveRoom);
                    }
                }            
            }
        }
	
	
			
	
	
  // print name to console if spawning was a success
        if (name != undefined && _.isString(name)) {
            console.log(this.name + " spawned new creep: " + name + " (" + Game.creeps[name].memory.role + ")");
            for (let role of listOfRoles) {
                console.log(role + ": " + numberOfCreeps[role]);
            }
            /*
            for (let roomName in numberOfextractors) {
                console.log("extractor" + roomName + ": " + numberOfextractors[roomName]);
            }*/
        }	
}

// create a new function for StructureSpawn
StructureSpawn.prototype.createCustomCreep =
    function (energy, roleName) {
    
        // create a balanced body as big as possible with the given energy
        var numberOfParts = Math.floor(energy / 200);
        // make sure the creep is not too big (more than 50 parts)
        numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
        var body = [];
        for (let i = 0; i < numberOfParts; i++) {
            body.push(WORK);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(MOVE);
        }
        
        return this.createCreep(body, Spawn.prototype.getCreepName('a'), {
            role: roleName,
            serial: Spawn.prototype.getSerial('a'),
            working: false
        });
    };

// create a new function for StructureSpawn
StructureSpawn.prototype.createLongDistanceHarvester =
    function (energy, numberOfWorkParts, home, target, sourceIndex) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        for (let i = 0; i < numberOfWorkParts; i++) {
            body.push(WORK);
        }
        // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        energy -= 150 * numberOfWorkParts;

        var numberOfParts = Math.floor(energy / 100);
        
        // make sure the creep is not too big (more than 50 parts)
        numberOfParts = Math.min(numberOfParts, Math.floor((40 - numberOfWorkParts * 2) / 2));
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            body.push(MOVE);
        }
       // for (let i = 0; i < 3; i++) {
        //    body.push(RANGED_ATTACK);
       // }
     
        // create creep with the created body
  
         return this.createCreep(body, Spawn.prototype.getCreepName('c'), {
                    role: 'longDistanceHarvester',
		    home: home,
                    serial: Spawn.prototype.getSerial('c'),
		    target: target,
		    sourceIndex: sourceIndex,
                    working: false
                });
    };

// 
// create a new function for StructureSpawn
StructureSpawn.prototype.createClaimer =
    function (target) {
        return this.createCreep([MOVE, MOVE, CLAIM], undefined, { 
             role: 'claimer',
             target: target 
             });
    };


// create a new function for StructureSpawn
StructureSpawn.prototype.createcontrollerAttacker =
    function (target) {
        return this.createCreep([MOVE, MOVE, MOVE, MOVE, MOVE,
				 CLAIM, CLAIM, CLAIM, CLAIM, CLAIM], 
				undefined, 
				{
		role: 'controllerAttacker',
		target: 'W9S5' 
	});
    };

/* th_Pion

StructureSpawn.prototype.createClaimer =
    function (target) {
        return this.createCreep([CLAIM, MOVE], undefined, { role: 'claimer', target: target });
    };
*/



  // Function for spawning a Builder
        StructureSpawn.prototype.spawnBuilder = function(energy, operation) {
            var body = [];
            var maxSegments = 10;
            var numberOfSegments = Math.min(maxSegments, Math.floor(energy / 200));
            for (i = 0; i < numberOfSegments; i++) {
                body.push(WORK);
                body.push(CARRY);
                body.push(MOVE);
            }
            return this.createCreep(
                body, Spawn.prototype.getCreepName('c2701'), {
                    role: 'builder',
                    serial: Spawn.prototype.getSerial('c2701'),
                    origin: this.room.name,
                    operation: operation,
                    task: '',
                    target: ''
                }
            )
        }

// create a new function for StructureSpawn
StructureSpawn.prototype.createLorry =
    function (energy) {
        // create a body with twice as many CARRY as MOVE parts
        var numberOfParts = Math.floor(energy / 100);
        // make sure the creep is not too big (more than 50 parts)
        numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
        var body = [];
        for (let i = 0; i < numberOfParts * 4; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(MOVE);
        }

        // create creep with the created body and the role 'lorry'
        return this.createCreep(body, Spawn.prototype.getCreepName('2704'), {
                    role: 'lorry',
                    serial: Spawn.prototype.getSerial('2704'),
		    working: false
                });
};

// create a new function for StructureSpawn
StructureSpawn.prototype.createtowerLorry =
    function (energy) {
        // create a body with twice as many CARRY as MOVE parts
        var numberOfParts = Math.floor(energy / 100);
        // make sure the creep is not too big (more than 50 parts)
        numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
        var body = [];
        for (let i = 0; i < numberOfParts * 2; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(MOVE);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(WORK);
        }

        // create creep with the created body and the role 'lorry'
        return this.createCreep(body, Spawn.prototype.getCreepName('2705'), {
                    role: 'towerlorry',
                    serial: Spawn.prototype.getSerial('2705'),
		    working: false
                });
};				
      
StructureSpawn.prototype.createMiner =
    function (sourceId, target, RCL, home) {        
            return this.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE],
                Spawn.prototype.getCreepName('c2702'), {
                    role: 'miner',
                    serial: Spawn.prototype.getSerial('c2702'),
                    sourceId: sourceId
                });

            if (RCL == 0) {
                return this.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE], undefined, {
                        role: 'miner',
                        sourceId: sourceId,
                        target: target,
                        home: home
                    });
            }
}
StructureSpawn.prototype.createDismantler = function(target) {
    var body = [];
    for (let i = 0; i < 25; i++) {
        body.push(WORK);
    }
    for (let i = 0; i < 25; i++) {
        body.push(MOVE);
    }
    return this.spawnCreep(body, Spawn.prototype.getCreepName('dism'), { 
        memory: {
        role: 'dismantler',
            target: target,
            boosted: false,
            serial: Spawn.prototype.getSerial('dism'),
            spawnTime: 3*body.length
        }
    });
}

StructureSpawn.prototype.createDismantler2 = function(target) {
    var body = [];
    for (let i = 0; i < 25; i++) {
        body.push(WORK);
    }
    for (let i = 0; i < 25; i++) {
        body.push(MOVE);
    }
    return this.spawnCreep(body, Spawn.prototype.getCreepName('dis2'), { 
        memory: {
        role: 'dismantler2',
            target: target,
            boosted: false,
            serial: Spawn.prototype.getSerial('dis2'),
            spawnTime: 3*body.length
        }
    });
}

StructureSpawn.prototype.createReserver =
    function (target) {
        return this.createCreep([CLAIM, CLAIM, MOVE], undefined, {
        role: 'reserver', target: target 
        });
    };


StructureSpawn.prototype.createCaptain = function (groupName) {
    var body = [];

    //for (let i = 0; i < 2; i++) {
    //   for (let i = 0; i < 10; i++) {
    //    body.push(TOUGH);
    //}

   // for (let i = 0; i < 8; i++) {
        for (let i = 0; i < 25; i++) {
        body.push(MOVE);
    }
    //for (let i = 0; i < 6; i++) {
     //   for (let i = 0; i < 10; i++) {
    //    body.push(WORK);
   // }

    for (let i = 0; i < 25; i++) {
     //   for (let i = 0; i < 1; i++) {
        body.push(RANGED_ATTACK);
    }

    return this.createCreep(body,
        undefined,
        {
                role: 'captain',
	        groupName: groupName,
                followed: false,
                ungrouped: true,
                spawnTime: 3*body.length,
                
            });
}

StructureSpawn.prototype.createFirstMate = function(groupName, boostMat) {
    var body = [];

    //for (let i = 0; i < 2; i++) {
       for (let i = 0; i < 12; i++) {
        body.push(TOUGH);
    }
    //for (let i = 0; i < 3; i++) {
       for (let i = 0; i < 10; i++) {
        body.push(MOVE);
    }
   //for (let i = 0; i < 1; i++) {
        for (let i = 0; i < 6; i++) {
        body.push(HEAL);
    }
    return this.createCreep(body,
	 undefined,
	{ 
	   role: 'firstMate',
	    groupName: groupName,
	    followed: false, 
	    ungrouped: true,
	    boosted: false,
	    boostMat: boostMat,
	    spawnTime: 3*body.length,
	    
    });
}

StructureSpawn.prototype.createCrew = function(groupName, boostMat) {
    var body = [];
    //for (let i = 0; i < 2; i++) {
    for (let i = 0; i < 12; i++) {
        body.push(TOUGH);
    }
   // for (let i = 0; i < 3; i++) {
   for (let i = 0; i < 10; i++) {
        body.push(MOVE);
    }
    //for (let i = 0; i < 1; i++) {
    for (let i = 0; i < 6; i++) {
        body.push(HEAL);
    }
    return this.createCreep(body,
        undefined,
        {
            role: 'crew',
            groupName: groupName,
            followed: false,
            ungrouped: true,
            boosted: false,
            boostMat: boostMat,
            spawnTime: 3 * body.length,

        });
}


StructureSpawn.prototype.createtowerdrainer1 = function(home, target) {
    var body = [];
    for (let i = 0; i < 10; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 11; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 2; i++) {
        body.push(HEAL);
    }
//	for (let i = 0; i < 4; i++) {
//        body.push(ATTACK);
//    }
    return this.createCreep(body,
        undefined,
        {
           role: 'towerdrainer1',
            rally1: false ,
            recycled: false,
	    attaaaacck: true,
	    home: home,
	    target: target
        });
}

StructureSpawn.prototype.createtowerdrainer2 = function(home, target) {
    var body = [];
    for (let i = 0; i < 10; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 11; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 3; i++) {
        body.push(HEAL);
    }
//	for (let i = 0; i < 4; i++) {
//        body.push(ATTACK);
//    }
    return this.createCreep(body,
        undefined,
        {
            role: 'towerdrainer2',
            rally2: false ,
            recycled: false,
	    attaaaacck: true,
	    home: home,
	    target: target
        });
}

StructureSpawn.prototype.createtowerdrainer3 = function(home, target) {
    var body = [];
    for (let i = 0; i < 4; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 11; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 3; i++) {
        body.push(HEAL);
    }
//	for (let i = 0; i < 4; i++) {
//        body.push(ATTACK);
//    }
    return this.createCreep(body,
        undefined,
        {
            role: 'towerdrainer3',
            rally3: false ,
            recycled: false,
	    attaaaacck: true,
	    home: home,
	    target: target
        });
}

StructureSpawn.prototype.createtowerdrainer4 = function(home, target) {
    var body = [];
    for (let i = 0; i < 4; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 7; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 3; i++) {
        body.push(HEAL);
    }
	for (let i = 0; i < 4; i++) {
        body.push(ATTACK);
    }
    return this.createCreep(body,
        undefined,
        {
            role: 'towerdrainer4',
            rally4: false ,
            recycled: false,
	    attaaaacck: true,
	    home: home,
	    target: target
        });
}

StructureSpawn.prototype.createtowerdrainer5 = function(home, target) {
    var body = [];
    for (let i = 0; i < 4; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 7; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 3; i++) {
        body.push(HEAL);
    }
	for (let i = 0; i < 2; i++) {
        body.push(ATTACK);
    }
    return this.createCreep(body,
        undefined,
        {
            role: 'towerdrainer5',
            rally5: false ,
            recycled: false,
	    attaaaacck: true,
	    home: home,
	    target: target
        });
}


	// create a new function for StructureSpawn
/*StructureSpawn.prototype.createMugger =
    function (target, target2) {
        return this.createCreep([MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK  ], undefined, {
		role: 'mugger', target: target, target2: target2 });
    };*/

// create a new function for StructureSpawn
StructureSpawn.prototype.createrangedattacker =
    function (home, target, getBoostkh) {

        let homeRm = this.room.name;

        return this.createCreep([
		RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, 
		RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, 
		RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,  
		RANGED_ATTACK, RANGED_ATTACK, 
	//	ATTACK, ATTACK, ATTACK, ATTACK,
		MOVE, MOVE, MOVE, MOVE, MOVE,
		MOVE, MOVE, MOVE, MOVE, MOVE,
		MOVE, MOVE, MOVE,
	], undefined, { role: 'rangedattacker',
	      homeRm: homeRm,
	      target: target, 
	  getBoostkh: false
	      });
    };


StructureSpawn.prototype.createattacker =
    function (home, target, getBoostkh) {

        let homeRm = this.room.name;

        return this.createCreep([
		ATTACK, ATTACK, ATTACK, ATTACK,
		ATTACK, ATTACK, ATTACK, ATTACK,
		ATTACK, ATTACK, ATTACK, ATTACK,
		ATTACK, ATTACK, ATTACK, ATTACK,
		ATTACK, ATTACK, ATTACK, ATTACK,  
		ATTACK,
		MOVE, MOVE, MOVE, MOVE, MOVE,
		MOVE, MOVE, MOVE, MOVE, MOVE,
		MOVE, MOVE, MOVE, MOVE, MOVE,
		MOVE, MOVE, MOVE, MOVE, MOVE,
		MOVE, MOVE, MOVE, MOVE, MOVE,		
		HEAL, HEAL, HEAL
		
	], undefined, { role: 'attacker',
	      homeRm: homeRm,
	      target: target, 
	  getBoostkh: false
	      });
    };

//create a new function fo smallupgrader
StructureSpawn.prototype.createsmallUpgrader =
  function (energy, numberOfsmallWorkParts, home, target, sourceIndex) {
  // create a body
    var smallbody = [];
    for (let i = 0; i < numberOfsmallWorkParts; i++) {
    smallbody.push(WORK);
    }
  
  // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
    energy -= 150 * numberOfsmallWorkParts;
    var numberOfsmallBodyParts = Math.floor(energy / 100);
    
  // creep not big
    numberOfsmallBodyParts = Math.min(numberOfsmallBodyParts, Math.floor((40 - numberOfsmallWorkParts) / 2));
    
    for (let i = 0; i < numberOfsmallBodyParts; i++) {
    smallbody.push(CARRY);
    }  
    for (let i = 0; i < 2; i++) {
    smallbody.push(MOVE);
}
   
  // create smallUpgrader
  return this.createCreep(smallbody, Spawn.prototype.getCreepName('2706'), {
          role: 'smallUpgrader',
	  home: home,
          serial: Spawn.prototype.getSerial('2706'),
          target: target,
	  sourceIndex: sourceIndex,
	  working: false
          });
};


StructureSpawn.prototype.createhealer = function(home, target) {
      var body = [];
      for (let i = 0; i < 8; i++) {
          body.push(MOVE);
      }
      for (let i = 0; i < 8; i++) {
          body.push(HEAL);
      }

      return this.createCreep(body, undefined, {
	      role: 'healer',
	      recycled: false,
	    attaaaacck: true,
	      home: home,
	      target: target
      });
}

StructureSpawn.prototype.createhealer2 = function(home, target) {
      var body = [];
      for (let i = 0; i < 13; i++) {
          body.push(MOVE);
      }
      for (let i = 0; i < 13; i++) {
          body.push(HEAL);
      }

      return this.createCreep(body, undefined, {
	      role: 'healer2',
	      recycled: false,
	    attaaaacck: true,
	      home: home,
	      target: target
      });
}	

StructureSpawn.prototype.createhealer3 = function(home, target) {
      var body = [];
      for (let i = 0; i < 13; i++) {
          body.push(MOVE);
      }
      for (let i = 0; i < 13; i++) {
          body.push(HEAL);
      }

      return this.createCreep(body, undefined, {
	      role: 'healer3',
	      recycled: false,
	    attaaaacck: true,
	      home: home,
	      target: target
      });
}	

StructureSpawn.prototype.createhealer4 = function(home, target) {
      var body = [];
      for (let i = 0; i < 15; i++) {
          body.push(MOVE);
      }
      for (let i = 0; i < 15; i++) {
          body.push(HEAL);
      }

      return this.createCreep(body, undefined, {
	      role: 'healer4',
	      recycled: false,
	    attaaaacck: true,
	      home: home,
	      target: target
      });
}	
StructureSpawn.prototype.createAntiTransporter = function(mineralType) {
    var body = [];
    for (let i = 0; i < 10; i++) {
        body.push(MOVE);
        body.push(CARRY);
        body.push(CARRY);
    }
    return this.createCreep(body, undefined, {
	    role: 'antiTransporter', 
	    resourceType: mineralType,
	    working: false,
	    spawnTime: 3*body.length
    });
}

StructureSpawn.prototype.createLongDistanceLorry = function (energy, home, target) {
	var body = [];
	var NoCarryMoveParts = Math.floor((energy-150)/150);
	for (let i = 0; i < (NoCarryMoveParts-1); i++) {
		body.push(CARRY);
		body.push(CARRY);
		body.push(MOVE);
	}
	body.push(WORK, MOVE);
	return this.spawnCreep(body, Spawn.prototype.getCreepName('2707'),
			       {
		memory: {
			role: 'longDistanceLorry',
			home: home,
			target: target,
			working: false,
			toCentre: false,
		}
	});
}

StructureSpawn.prototype.createLongDistanceBuilder =  function (home, target) {//LV4
        return this.createCreep([MOVE, MOVE, MOVE, MOVE,
				 WORK, WORK, WORK, WORK, WORK,
				 WORK, WORK, WORK, WORK, WORK,
				 CARRY, CARRY, CARRY, CARRY, CARRY,
				 CARRY, CARRY, CARRY, CARRY, CARRY, CARRY],undefined,
				{   
		    role: 'longDistanceBuilder',
                    home: home,
                    target: target,                   
                    working: false,		    
	    });
}

StructureSpawn.prototype.createOnlyMineralMiner = function (target, home) {
    var body = [];
    for (let i = 0; i < 18; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 18; i++) {
        body.push(WORK);
    }
    for (let i = 0; i < 14; i++) {
        body.push(CARRY);
    }
    return this.spawnCreep(body, undefined, {
	    role: 'onlyMineralMiner',
	    target: target,
	    home: home,
	    spawnTime: 3 * body.length
    });
}

StructureSpawn.prototype.createRemoteMiner = function (roomName, sourceId) {
	return this.spawnCreep(
		[WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE],
		'remoteMiner_' + Game.time,
		{
			memory: {
				role: 'remoteMiner',
				target: roomName,
				sourceId: sourceId,
				home: this.room.name,
			},
		}
	);
};

/*
StructureSpawn.prototype.createUltimateWarrior = function(target) {
    var body = [];
    for (let i = 0; i < 6; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 9; i++) {
        body.push(RANGED_ATTACK);
    }
    for (let i = 0; i < 15; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 3; i++) {
        body.push(MOVE);
        body.push(HEAL);
    }
    return this.spawnCreep(body, undefined, {
        memory: {
            role: 'ultimateWarrior',
            target: target,
            boosted: false,
            spawnTime: 3*body.length
        }});
}
*/
StructureSpawn.prototype.createextractor =
  function (energy, numberOfbigWorkParts, home, target, sourceIndex) {
  // create a body
    var bigbody = [];
    for (let i = 0; i < numberOfbigWorkParts; i++) {
    bigbody.push(WORK);
    }

  // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
    energy -= 150 * numberOfbigWorkParts;
    var numberOfBigBodyParts = Math.floor(energy / 100);

  // creep not too big more than 60 parts
    numberOfBigBodyParts = Math.min(numberOfBigBodyParts, Math.floor((50 - numberOfbigWorkParts * 2) / 2));

    for (let i = 0; i < numberOfBigBodyParts; i++) {
    bigbody.push(CARRY);
    }
    for (let i = 0; numberOfbigWorkParts + numberOfbigWorkParts; i++) {
    bigbody.push(MOVE);
}

  // create extractor
	
  return this.createCreep(bigbody, undefined, {role: 'extractor',
                                              home: home,
                                              target: target,
                                              sourceIndex: sourceIndex,
                                              working: false
                                              });
}
