module.exports = {
    
        /** @param {Creep} creep **/
        run: function (creep) {
            
     /*   if(creep.memory.extracting && creep.store.energy == 0) {
        creep.memory.extracting = false;
    	}
    	else if(!creep.memory.extracting && 0 == creep.store.getCapacity()){
    		creep.memory.extracting = true;*/
    	
        

            if (creep.memory.extracting && creep.carryCapacity == _.sum(creep.carry)) {
                creep.memory.extracting = false;
            }
            if (!creep.memory.extracting && 0 == _.sum(creep.carry)) {
                creep.memory.extracting = true;
            
                if (creep.ticksToLive < 200) {
                    creep.suicide();
                }
            }

            if (creep.memory.extracting) {
                var target;

                if (creep.memory.depositId) {
                    target = Game.getObjectById(creep.memory.depositId);
                } else {
                    var targets = creep.room.find(FIND_MINERALS);
                    target = targets[0];
                    creep.memory.depositId = target.id;
                    creep.memory.mineralType = target.mineralType;
                }
                if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(target);
                }
            } else {
            if (creep.room.terminal) {
                if (creep.transfer(creep.room.terminal, creep.memory.mineralType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(creep.room.terminal);
                }
            } else 
                if (creep.room.storage) {
                    if (creep.transfer(creep.room.storage, creep.memory.mineralType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(creep.room.storage);
                    }
                }
            }
        }
};

// Terminal trade execution
//if (spawn.room.terminal && (Game.time % 10 == 0)) {
//
//if (spawn.room.terminal.store[RESOURCE_ENERGY] >= 2000 && spawn.room.terminal.store[RESOURCE_HYDROGEN] >= 2000) { 

//var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
//				 order.type == ORDER_BUY &&
//				 Game.market.calcTransactionCost(200, spawn.room.name, order.roomName) < 400);
//
//	console.log('Hydrogen buy orders found: ' + orders.length);
//
//	orders.sort(function(a,b){return b.price - a.price;});
//
//	console.log('Best price: ' + orders[0].price);//	
//	if (orders[0].price > 0.7) {
//		var result = Game.market.deal(orders[0].id, 200, spawn.room.name);
//		if (result == 0) {
//			console.log('Order completed successfully');
//					}
//				}
//		}
//}
