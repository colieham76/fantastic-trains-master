module.exports.loop = function() {

//Game.rooms.W1S8.createConstructionSite(12, 28, STRUCTURE_RAMPART);
//Game.rooms['W7S8'].terminal.send('energy',60000,'W1S8')	
	
	
		// clear memory
        for (let name in Memory.creeps) {
            if (Game.creeps[name] == undefined) {
                delete Memory.creeps[name];
            }
           // else if (_.isEmpty(Game.creeps[name].memory)) {
           //     unpackCreepMemory(name);
          //  }
        }

        // for each creeps

	// run creep logic
	for (let name in Game.creeps) 

		Game.creeps[name].runRole();


	// find all towers
        var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
        // for each tower
        for (let tower of towers) {
                // run tower logic
                tower.defend();
        }

        // for each spawn
        for (let spawnName in Game.spawns) {
                // run spawn logic
                Game.spawns[spawnName].spawnCreepsIfNecessary();
        }
    /*    
	if (Game.time % 1400 === 0) {
        Game.spawns.Spawn3.memory.minNumberOfreservers = {W3S7: 1}
	
	Game.spawns.W7S8.memory.minNumberOfreservers = {W7S9: 0}
	}
	if (Game.time % 1450 === 0) {
	Game.spawns.Spawn5.memory.minNumberOfreservers = {W1S7: 1}
	Game.spawns.Spawn2.memory.minNumberOfreservers = {W1S9: 1}
	//Game.spawns.Spawn1.memory.minNumberOfreservers = {W8S8: 1}
	}
	if (Game.time % 1420 === 0) {
        Game.spawns.Spawn3.memory.minNumberOfreservers = {W3S7: 0}	
	Game.spawns.W7S8.memory.minNumberOfreservers = {W7S9: 0}
	}
	if (Game.time % 1460 === 0) {
	Game.spawns.Spawn5.memory.minNumberOfreservers = {W1S7: 0}
	Game.spawns.Spawn2.memory.minNumberOfreservers = {W1S9: 0}
	Game.spawns.Spawn1.memory.minNumberOfreservers = {W8S8: 0}
	}
	
	*/
};

// activate safe mode

var spawn = Game.spawns['Spawn1'];
var spawn2 = Game.spawns['Spawn2'];
var spawn3 = Game.spawns['Spawn3'];
var spawn4 = Game.spawns['Spawn4'];

if(spawn.room.storage && spawn.room.storage.hits < spawn.room.storage.hitsMax) {
        spawn.room.controller.activateSafeMode();
} else if (spawn.hits < spawn.hitsMax) {
        spawn.room.controller.activateSafeMode();
} else if (spawn.room.terminal && spawn.room.terminal.hits < spawn.room.terminal.hitsMax) {
        spawn.room.controller.activateSafeMode();
}
// useful console commands
//Game.spawns.Spawn3.memory.captainRoom = 'W2S8'
//Game.spawns.Spawn3.memory.firstMateRoom = 'W2S8'
//Game.spawns.Spawn3.memory.crewRoom = 'W2S8'
//Game.spawns.Spawn3.memory.crewRoom = 'W2S8'
//Game.spawns.Spawn2.memory.firstMateRoom = 'W2S8'
//Game.spawns.Spawn2.memory.crewRoom = 'W2S8'
//Game.spawns.Spawn2.memory.crewRoom = 'W2S8'
//Game.spawns.Spawn2.memory.claimRoom = 'W2S8'
//Game.spawns.Spawn2.memory.dismantleRoom = 'W3S7'
//Game.creeps['Jackson'].memory.target = 'W11N88'
//Game.spawns.Spawn2.memory.attackRoom = 'W2S8'   controller attacker
////////////////////////////////////////////////////////////////////////////////////////
//MYang2017

	require('prototype.spawn');
        require('prototype_creep_heal');
        require('functionSpawn');
	require('prototype.creep');
	require('prototype.tower');
	require('myFunctions');
	require('funcAlly');
	require('myTrading');
	require('functionWar');
	
	var Traveler = require('Traveler');
	
	//const profiler = require('screeps-profiler');
	//profiler.enable();
/*
	module.exports.loop = function () {

    	//profiler.wrap(function() {

        //assignController()

        //console.log('=== '+Game.time+' ticks === '+Game.cpu.bucket+' CPUs left ============================================================================')
        let previousCPU = 0;

        // clear memory
        for (let name in Memory.creeps) {
            if (Game.creeps[name] == undefined) {
                delete Memory.creeps[name];
            }
            else if (_.isEmpty(Game.creeps[name].memory)) {
                unpackCreepMemory(name);
            }
        }

        // let different creep do its job
        for (let name in Game.creeps) {
*/	
            /*if (Game.creeps[name].memory.spawnTime == undefined||Game.creeps[name].memory.spawnTime == null) {
                Game.creeps[name].memory.spawnTime = 3*Game.creeps[name].getActiveBodyparts();
            }*/
/*
            let thisCreep = Game.creeps[name];
            if (!thisCreep.spawning) {
                thisCreep.runRole();
            }
            //previousCPU = calculateCPUUsageOfProcesses(previousCPU, thisCreep.memory.role, true);
        }
        previousCPU = calculateCPUUsageOfProcesses(previousCPU, 'Run all roles');

        // loop through rooms over shard
        //currentShard = Game.shard.name;
        //currentShardRooms = Memory.myRoomList;

        // temp section for tower placing
*/	
        /*if (currentShard == 'shard1') {
            Game.rooms.E45N2.createConstructionSite(36,7,STRUCTURE_TOWER);
        }*/
        
        // place a site

        /*
        try {
            if (currentShard == 'shard2') {
                Game.rooms.E46S6.createConstructionSite(9, 17, STRUCTURE_CONTAINER);
                //Game.rooms.E46S6.createConstructionSite(34, 16, STRUCTURE_CONTAINER);
            }
        }
        catch (err) {
            console.log('error: E31S6 construction placement wrong.');
        }*/
/*

        var towers = _.filter( Game.structures, c => c.structureType == STRUCTURE_TOWER );
                for (let tower of towers) {
                    tower.defend();
                }

        _.forEach(Game.rooms, function (r) {
            if (r.controller.my) {
                
    
            let roomName = r.name;
                let room = r;
                if (room) {
                    // separate shooter and normal room management
                    let motherRoomName = room.memory.startMB;
                    if (!motherRoomName) { // normal room
                        //cacheLabsInAndOut(roomName); // for lab caching
                        //initiateLinksInRoom(room); // for links caching
                        //initiateCreepsSpawnInfo(roomName);
    
                        // initial mineral storage variables
                        initiateMineralKeepThresholdInRoom(room, false);
                        if (Game.time % 1 == 0) {
                            allMineralsSituation(room);
                        }
    
                        // link transfer
                        //previousCPU = calculateCPUUsageOfProcesses(previousCPU, ' link transfer cost of '+roomName);
                        try {
                            linkTransfer(room);
                        }
                        catch (err) {
                            console.log(room.name + ' link transfer error');
                        }
                        //previousCPU = calculateCPUUsageOfProcesses(previousCPU, ' link transfer cost of '+roomName,true);
    
                        if (updateSpawnQueueTimer(room)) {
                            //if (Game.time % 11 == 0) { //
                            //if (true) {
                            room.updateSpawnQueue();
                        }
                        if (room.memory.forSpawning.spawningQueue.length > 0 && ifSpawnAvailable(roomName).length > 0) { // if there is some creeps waiting to be spawned in the queue and spawn is free, then spawn
                            spawnCreepByRoomSpawnQueue(room);
                        }
    
                        if (determineIfFucked(room)[0] < 1) {
                            towerRepairInPeace(room);
                        }
    
                        // manage remote resource getting order and assign tasks to remote lorries
                        manageRemoteRoomsResourceGetting(roomName);
                            
                        try {
                            powerHarvestingAndScanningMaintainner(room);
                        }
                        catch (err) {
                            console.log('error: power harvesting code!');
                        }
                        //powerspawnProcessPower(room);
    
                        if (Game.time % 499 == 0) {
                            checkIfCreepInfoUpdateRequired(roomName);
                            superUpgraderBalancing(roomName);
                        }
    
                        if (Game.time % 1478 == 0) {
                            mainBuildSub(room, undefined);
                        }
    
                        let tradingTimeInterval = 17;
                        //let sellingFrequency = 15;
                        if (Game.time % tradingTimeInterval == 0) {
*/			
                            /*if (Game.time % (tradingTimeInterval * sellingFrequency) == 0) {
                                checkMineralAndSell(roomName)
                            }
                            else {*/
/*
                            try {
                                superEverthingManagement(room);
                            }
                            catch (err) {
                                console.log('error: super mineral management bug!');
                            }
                            //}
                        }
    
                        if (Game.time % 7676 == 0) {
                            try {
                                changeMineralProductionInRoom(roomName);
                            }
                            catch (err) {
                                console.log('error: change lab reaction bug!');
                            }
                        }
                            
                        // labbing
*/			
                        /*if (Game.time % 1439 == 0) {
                            if (startLabber(Game.rooms[roomName])) {
                                Game.rooms[roomName].memory.forSpawning.roomCreepNo.minCreeps.labber = 1;
                            }
                            else {
                                Game.rooms[roomName].memory.forSpawning.roomCreepNo.minCreeps.labber = 0;
                            }
                        }
                        if ((Game.time+7) % reactionTimeInterval(Game.rooms[roomName]) == 0) {
                            labRun(Game.rooms[roomName]);
                        }*/
    
                        // disabled due to Traveler stucking issue
                        /*if (Game.time % 2223 == 0) {
                            spawnScouterAround(roomName);
                        }*/
    /*                buildRoom(roomName);
                            
                    }
                    else {
                        // shooter room
    
                        if (Game.time % 1 == 0) {
                            allMineralsSituation(room);
                        }
    
                        if (updateSpawnQueueTimer(room)) {
                            //if (Game.time % 11 == 0) { //
                            //if (true) {
                            room.updateSpawnQueue();
                        }
                        if (room.memory.forSpawning.spawningQueue.length > 0 && ifSpawnAvailable(roomName).length > 0) { // if there is some creeps waiting to be spawned in the queue and spawn is free, then spawn
                            spawnCreepByRoomSpawnQueue(room);
                        }
    
                        if (determineIfFucked(room)[0] < 1) {
                            towerRepairInPeace(room);
                        }
    
                        if (Game.time % 499 == 0) {
                            checkIfCreepInfoUpdateRequired(roomName);
                            superUpgraderBalancing(roomName);
                        }
    
                        // link transfer
                        //previousCPU = calculateCPUUsageOfProcesses(previousCPU, ' link transfer cost of '+roomName);
                        try {
                            linkTransfer(room);
                        }
                        catch (err) {
                            console.log(room.name + ' link transfer error');
                        }
    
                        let tradingTimeInterval = 17;
                        //let sellingFrequency = 15;
                        if (Game.time % tradingTimeInterval == 0) {
*/			
                            /*if (Game.time % (tradingTimeInterval * sellingFrequency) == 0) {
                                checkMineralAndSell(roomName)
                            }
                            else {*/
/*			    
                            try {
                                superEverthingManagement(room);
                            }
                            catch (err) {
                                console.log('error: super mineral management bug!');
                            }
                            //}
                        }
    
                        // shooter room MB management
                        try {
                            manageShooterRoom(room);
                        }
                        catch (err) {
                            console.log('error: shooter room bug!');
                        }
    
                    }
                }
                else {
                    console.log(roomName + ' does not have access');
                    removeElementInArrayByElement(roomName, Memory.myRoomList[currentShard]);
                    console.log('delete main room memory of room ' + roomName + ' in shard ' + currentShard);
                }
                }
                previousCPU = calculateCPUUsageOfProcesses(previousCPU, 'Check and spawn roles');
*/

