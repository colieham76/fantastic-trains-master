require('myFunctions');


'use strict';

/**
 * Towerdrainer is used to drain energy from hostile towers
 *
 * Moves to the border between routing targetRoom and attackRoom,
 * step for one tick into attackRoom, then step out and heals
 *
 * You need 13 towerdrainers to drain at maximum speed
 *
 * Towerdrainers doesn't called now from anywhere. Call them manually:
 * @example
 * Game.rooms.E17N1.memory.queue.push({role: 'towerdrainer', routing: {targetRoom: 'E16N0'}, attackRoom: 'E16N1'})
 */
/*
roles.towerdrainer = {};

roles.towerdrainer.settings = {
  layoutString: 'TMH',
  amount: [3, 5, 2], // attack RCL 5
  // amount: [2, 3, 1], // attack RCL 3
  maxLayoutAmount: 1,
};*/

//roles.towerdrainer.getRestPosition = function(creep) {// remove this?
  
  if (!creep.memory.healRoom1) {
            creep.travelTo(Game.flags['healRoom1']);
            if (creep.pos.isNearTo(Game.flags['healRoom1'])) {
                creep.memory.healRoom1 = true;
            }
            return;
        }
console.log('towerdrainer arrived at healRoom1...')
  
   if (!creep.memory.healRoom2) {
            creep.travelTo(Game.flags['healRoom2']);
            if (creep.pos.isNearTo(Game.flags['healRoom2'])) {
                creep.memory.healRoom2 = true;
            }
            return;
        }
console.log('towerdrainer arrived at healRoom2...')
  
   if (!creep.memory.healRoom3) {
            creep.travelTo(Game.flags['healRoom3']);
            if (creep.pos.isNearTo(Game.flags['healRoom3'])) {
                creep.memory.healRoom3 = true;
            }
            return;
        }
console.log('towerdrainer arrived at healRoom3...')
  
  if (!creep.memory.healRoom4) {
            creep.travelTo(Game.flags['healRoom4']);
            if (creep.pos.isNearTo(Game.flags['healRoom4'])) {
                creep.memory.healRoom4 = true;
            }
            return;
        }
console.log('towerdrainer arrived at healRoom4...')
  
   if (!creep.memory.healRoom5) {
            creep.travelTo(Game.flags['healRoom5']);
            if (creep.pos.isNearTo(Game.flags['healRoom5'])) {
                creep.memory.healRoom5 = true;
            }
            return;
        }
console.log('towerdrainer arrived at healRoom5...')
  
  const restRoom1 = creep.memory.healRoom1;  
  const restRoom2 = creep.memory.healRoom2;
  const restRoom3 = creep.memory.healRoom3;
  const restRoom4 = creep.memory.healRoom4;
  const restRoom5 = creep.memory.healRoom5;
  const attackRoom = creep.memory.attackRoom;
  if (!creep.memory.restPosition) {
    creep.notifyWhenAttacked(false);
    const room1 = Game.rooms[restRoom1];
     const room2 = Game.rooms[restRoom2];
     const room3 = Game.rooms[restRoom3];
     const room4 = Game.rooms[restRoom4];
     const room5 = Game.rooms[restRoom5];
    const attackDirection1 = room1.findExitTo(attackRoom);
    const attackDirection2 = room1.findExitTo(attackRoom);
    const attackDirection3 = room1.findExitTo(attackRoom);
    const attackDirection4 = room1.findExitTo(attackRoom);
    const attackDirection5 = room1.findExitTo(attackRoom);    
    
    const restDirection = RoomPosition.oppositeDirection(attackDirection);// remove/rewrite this?
    const occupiedPositions = {};
    _.filter(Game.creeps, (c) => c.memory.role === 'towerdrainer' && c.memory.restPosition).forEach((c) => {
      occupiedPositions[c.memory.restPosition.x + c.memory.restPosition.y] = c.id;
    });
    const attackExits = room.find(attackDirection);
    for (const exit of attackExits) {
      const pos = exit.getAdjacentPosition(restDirection);
      if (!pos.checkForWall() && !pos.checkForObstacleStructure() && !occupiedPositions[pos.x + pos.y]) {
        creep.memory.restPosition = pos;
        creep.memory.attackDirrection = attackDirection;// remove/rewrite this?
        creep.memory.restDirrection = restDirection;// remove/rewrite this?
        break;
      }
    }
  }
  return creep.memory.restPosition;
};

roles.towerdrainer.action = function(creep) {// remove/rewrite this?
  const attackRoom = creep.memory.attackRoom;
  const restPos = roles.towerdrainer.getRestPosition(creep);// remove/rewrite this?
  if (!restPos) {
    creep.log('no position');
    creep.moveRandom();
    return false;
  }
  creep.selfHeal();

  if (creep.pos.roomName === attackRoom || creep.pos.isBorder(-1) && creep.pos.isNearTo(restPos.x, restPos.y)) {
    creep.move(creep.memory.restDirrection);
  } else if (creep.pos.isEqualTo(restPos.x, restPos.y)) {
    creep.move(creep.memory.attackDirrection);
  } else {
    creep.moveTo(restPos.x, restPos.y);
  }

  return true;
};
