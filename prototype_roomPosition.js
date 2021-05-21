require('prototype_roomPosition');


'use strict';
/**
 * Get the position adjacent to this position in a specific direction
 *
 * @param {Number} direction (or 0)
 * @return {RoomPosition} adjacent position, or this position for direction==0
 */
RoomPosition.prototype.getAdjacentPosition = function(direction) { //fantastic trains
  const adjacentPos = [
    [0, 0],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
  ];
  // no clean way to handle negative directions here because 0 is a special case instead of equivalent to 8
  if (direction > 8) {
    direction = RoomPosition.fixDirection(direction);
  }
  const x = this.x + adjacentPos[direction][0];
  const y = this.y + adjacentPos[direction][1];

  try {
    return new RoomPosition(x, y, this.roomName);
  } catch (e) {
    // this.log(`RoomPosition.getAdjacentPosition Exception: ${e} for direction ${direction} x: ${x} y: ${y} roomName: ${this.roomName} stack: ${e.stack}`);
    // throw e;
    return;
  }
};

RoomPosition.prototype.getAllAdjacentPositions = function* () {
  for (let direction = 1; direction <= 8; direction++) {
    try {
      yield this.getAdjacentPosition(direction);
    } catch (e) {
      // This happens when the RoomPosition is invalid
      continue;
    }
  }
};

RoomPosition.prototype.getAllPositionsInRange = function* (range) {
  for (let x = -range; x <= range; ++x) {
    for (let y = -range; y <= range; ++y) {
      if (this.x + x >= 0 && this.y + y >= 0 && this.x + x < 50 && this.y + y < 50) {
        yield new RoomPosition(this.x + x, this.y + y, this.roomName);
      }
    }
  }
};



RoomPosition.prototype.checkForCreep = function() {
  return this.lookFor(LOOK_CREEPS).length > 0;
};

RoomPosition.prototype.checkForWall = function() {
  return this.lookFor(LOOK_TERRAIN)[0] === 'wall';
};

RoomPosition.prototype.checkForObstacleStructure = function() {
  return this.lookFor(LOOK_STRUCTURES).some((s) => OBSTACLE_OBJECT_TYPES.includes(s.structureType));
};  

RoomPosition.prototype.isBorder = function(offset) {
  offset = offset || 0;
  if (this.x <= 1 + offset || this.x >= 48 - offset || this.y <= 1 + offset || this.y >= 48 - offset) {
    return true;
  }
  return false;
};


RoomPosition.prototype.getFirstNearPosition = function(...args) {
  return this.findNearPosition(...args).next().value;
};


RoomPosition.prototype.getRoom = function() {
  const room = Game.rooms[this.roomName];
  if (!room) {
    throw new Error(`Could not access room ${this.roomName}`);
  }
  return room;
};



/**
 * Restore RoomPosition object after JSON serialisation.
 *
 * @param {object} json JSON object
 * @param {number} json.x X coordinate
 * @param {number} json.y Y coordinate
 * @param {string} json.roomName Name of the room
 * @return {RoomPosition} RoomPosition object
 */
RoomPosition.fromJSON = function(json) {
  return new RoomPosition(json.x, json.y, json.roomName);
};

/**
 * Given a direction-like number, wrap it to fit in 1-8
 *
 * @param {Number} direction
 * @return {Number} fixed direction
 */
RoomPosition.fixDirection = function(direction) {
  return (((direction - 1) % 8) + 8) % 8 + 1;
};

/**
 * Given a direction, 1-8, increment/decrement it by some value
 *
 * @param {Number} direction
 * @param {Number} change
 * @return {Number}
 */
RoomPosition.changeDirection = function(direction, change) {
  return RoomPosition.fixDirection(direction + change);
};

/**
 * Given a direction, 1-8, return the opposite direction
 *
 * @param {Number} direction
 * @return {Number}
 */
RoomPosition.oppositeDirection = function(direction) {
  return RoomPosition.fixDirection(direction + 4);
};
