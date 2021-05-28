
var listOfRoles = ['harvester', 'lorry', 'towerlorry','claimer', 'rampartrepairer', 'towerdrainer1',
		  'firstMate', 'captain', 'crew', 'mugger', 'rangedattacker', 'towerdrainer2', 'towerdrainer3',
                   'towerdrainer4', 'towerdrainer5', 'upgrader', 'repairer', 'builder', 'wallRepairer', 'dismantler'];

require('myFunctions');
	




//c = longDistanceHarvester
//c2701 = builder
//c2702 = miner

//2704 = lorry
//2705 = towerlorry
//dism = dismantler

 //  Kill all Creeps
/*
for(var name in Game.creeps) { 
          Game.creeps[name].suicide(); 
         } 
*/

//Game.spawns.Spawn2.memory.captainRoom = ['captain', 'W2S8']



Game.spawns.Spawn1.memory.minCreeps = {repairer: 0, builder: 0, lorry: 1, towerlorry: 1, upgrader: 1};
Game.spawns.Spawn1.memory.minLongDistanceHarvesters = {W7S9: 1};
Game.spawns.W7S8.memory.minCreeps = {harvester: 0, lorry: 1};
Game.spawns.W7S8.memory.minLongDistanceHarvesters = {W8S8: 1};

Game.spawns.Spawn2.memory.minCreeps = {repairer: 0, builder: 0, lorry: 0, towerlorry: 2, upgrader: 0, harvester: 1,
                                        wallRepairer: 0, rampartrepairer: 0, harvester: 0};
Game.spawns.Spawn5.memory.minCreeps = {lorry: 1, upgrader: 0};
Game.spawns.Spawn2.memory.minLongDistanceHarvesters = {W1S9: 1};
Game.spawns.Spawn5.memory.minLongDistanceHarvesters = {W1S7: 1}


Game.spawns.Spawn3.memory.minCreeps = {harvester: 0, repairer: 0, builder: 0, lorry: 1, wallRepairer: 0,
                                       towerlorry: 1, upgrader: 1, rampartrepairer: 0};
Game.spawns.Spawn3.memory.minLongDistanceHarvesters = {W3S7: 1};




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
            numberOfCreeps[role] = _.sum(creepsInRoom, (c) => c.memory.role === role);
        }
        let maxEnergy = room.energyCapacityAvailable;
        let name = undefined;

        // if no harvesters are left AND either no miners or no lorries are left
        //  create a backup creep
        if (numberOfCreeps['harvester'] == 0 && numberOfCreeps['lorry'] == 0) {
            // if there are still miners or enough energy in Storage left
            if (numberOfCreeps['miner'] > 0
 		|| (room.storage != undefined && room.storage.store[RESOURCE_ENERGY] >= 150/* + 550*/)) {
             {
                // create a lorry
                name = this.createLorry(150);
            }
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
                       // if (numberOfCreeps['miner'] < 3 )

                        // spawn a miner
                        name = this.createMiner(source.id);
                        break;
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
                    // try to spawn a claimer
                    name = this.createDismantler(this.memory.dismantleRoom);
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
                    name = this.createrangedattacker(room.name, roomName)}
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
	
	    // if none of the above caused a spawn command check for towerdrainers
        /** @type {Object.<string, number>} */
        let numberOftowerdrainers = {};
        if (name == undefined) {
            // count the number of towerdrainers
            for (let rallyRoom in this.memory.mintowerdrainers) {
                numberOftowerdrainers[rallyRoom] = _.sum(Game.creeps, (c) => c.memory.rally1 == true
							|| c.memory.rally2 == true
							|| c.memory.rally3 == true
							|| c.memory.rally4 == true
							|| c.memory.rally5 == true
							);

                if (numberOftowerdrainers[rallyRoom] < this.memory.mintowerdrainers[rallyRoom]) {
                    name = this.createtowerdrainer1(rallyRoom);
                }
                if (numberOftowerdrainers[rallyRoom] < this.memory.mintowerdrainers[rallyRoom]) {
                    name = this.createtowerdrainer2(rallyRoom);
                }
                if (numberOftowerdrainers[rallyRoom] < this.memory.mintowerdrainers[rallyRoom]) {
                    name = this.createtowerdrainer3(rallyRoom);
                }
                if (numberOftowerdrainers[rallyRoom] < this.memory.mintowerdrainers[rallyRoom]) {
                    name = this.createtowerdrainer4(rallyRoom);
                }
                if (numberOftowerdrainers[rallyRoom] < this.memory.mintowerdrainers[rallyRoom]) {
                    name = this.createtowerdrainer5(rallyRoom);
                }
            }
        }






	
    // if none of the above caused a spawn command check for reservers
        /** @type {Object.<string, number>} */
        let numberOfreservers = {};
        if (name == undefined) {
            // count the number of long distance harvesters globally
            for (let reserveRoom in this.memory.minNumberOfreservers) {
                numberOfreservers[reserveRoom] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'reserver' && c.memory.target == reserveRoom);

                if (numberOfreservers[reserveRoom] < this.memory.minNumberOfreservers[reserveRoom]) {
                    name = this.createReserver(room.name, reserveRoom);
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
};

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
      
// create a new function for StructureSpawn
StructureSpawn.prototype.createMiner =
    function (sourceId) {
        return this.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE],
		Spawn.prototype.getCreepName('c2702'), {
                    role: 'miner',
                    serial: Spawn.prototype.getSerial('c2702'),
		    sourceId: sourceId
                });
    };

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

StructureSpawn.prototype.createReserver =
    function (target) {
        return this.createCreep([CLAIM, CLAIM, MOVE], undefined, {
        role: 'reserver', target: target 
        });
    };


StructureSpawn.prototype.createCaptain = function (groupName) {
    var body = [];

    for (let i = 0; i < 2; i++) {
        //for (let i = 0; i < 10; i++) {
        body.push(TOUGH);
    }

    for (let i = 0; i < 8; i++) {
   //     for (let i = 0; i < 21; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 6; i++) {
     //   for (let i = 0; i < 10; i++) {
        body.push(WORK);
    }

    for (let i = 0; i < 1; i++) {
     //   for (let i = 0; i < 1; i++) {
        body.push(ATTACK);
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

    for (let i = 0; i < 2; i++) {
     //   for (let i = 0; i < 12; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 3; i++) {
      //  for (let i = 0; i < 10; i++) {
        body.push(MOVE);
    }
   for (let i = 0; i < 1; i++) {
      //  for (let i = 0; i < 6; i++) {
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
    for (let i = 0; i < 2; i++) {
    //for (let i = 0; i < 12; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 3; i++) {
    //for (let i = 0; i < 10; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 1; i++) {
    //for (let i = 0; i < 6; i++) {
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


StructureSpawn.prototype.createtowerdrainer1 = function(target) {
    var body = [];
    for (let i = 0; i < 4; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 6; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 2; i++) {
        body.push(HEAL);
    }
    return this.createCreep(body,
        undefined,
        {
           role: 'towerdrainer1',
            rally1: false ,
            recycled: false,
        });
}

StructureSpawn.prototype.createtowerdrainer2 = function(target) {
    var body = [];
    for (let i = 0; i < 4; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 6; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 2; i++) {
        body.push(HEAL);
    }
    return this.createCreep(body,
        undefined,
        {
            role: 'towerdrainer2',
            rally2: false ,
            recycled: false,
        });
}

StructureSpawn.prototype.createtowerdrainer3 = function(target) {
    var body = [];
    for (let i = 0; i < 4; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 6; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 2; i++) {
        body.push(HEAL);
    }
    return this.createCreep(body,
        undefined,
        {
            role: 'towerdrainer3',
            rally3: false ,
            recycled: false,
        });
}

StructureSpawn.prototype.createtowerdrainer4 = function(target) {
    var body = [];
    for (let i = 0; i < 4; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 6; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 2; i++) {
        body.push(HEAL);
    }
    return this.createCreep(body,
        undefined,
        {
            role: 'towerdrainer4',
            rally4: false ,
            recycled: false,
        });
}

StructureSpawn.prototype.createtowerdrainer5 = function(target) {
    var body = [];
    for (let i = 0; i < 4; i++) {
        body.push(TOUGH);
    }
    for (let i = 0; i < 6; i++) {
        body.push(MOVE);
    }
    for (let i = 0; i < 2; i++) {
        body.push(HEAL);
    }
    return this.createCreep(body,
        undefined,
        {
            role: 'towerdrainer5',
            rally5: false ,
            recycled: false,
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
ATTACK, ATTACK, ATTACK, ATTACK,
MOVE, MOVE, MOVE, MOVE, MOVE,
], undefined, { role: 'rangedattacker',
	      homeRm: homeRm,
	      target: target, 
	  getBoostkh: false
	      });
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
