'use strict';

/**
 * searchPath uses PathFinder and the room costMatrix to search for a path
 *
 *
 * @param {object} target - The target to move to
 * @param {number} range - How close to get to the target
 * @return {object} - Response from PathFinder.search
 **/

Creep.prototype.moveMy = function(target) {
  if (this.pos.isEqualTo(target)) {
    return true;
  }
  const direction = this.pos.getDirectionTo(target);
  const moveResponse = this.move(direction);
  if (moveResponse !== OK && moveResponse !== ERR_NO_BODYPART) {
    this.log(`pos: ${this.pos} target ${target}`);
    throw new Error(`moveToMy(${target}) this.move(${this.pos.getDirectionTo(target)}); => ${moveResponse}`);
  }
  this.creepLog(`moveMy direction ${direction} moveResponse ${moveResponse}`);
  return moveResponse === OK;
};

/**
 * moveToMy replaces the moveTo method and tries to include the costmatrixes
 *
 * @param {object} target - The target to move to
 * @param {number} range - How close to get to the target
 * @return {boolean} - Success of the execution
 **/


Creep.prototype.moveRandom = function(onPath) { //adopted for fantastic-trains
  const startDirection = _.random(1, 8);
  let direction = 0;
  for (let i = 0; i < 8; i++) {
    direction = RoomPosition.changeDirection(startDirection, i);
    const pos = this.pos.getAdjacentPosition(direction);
    if (!pos) {
      continue;
    }
    if (pos.isBorder(-1)) {
      continue;
    }
    if (onPath && !pos.inPath()) {
      continue;
    }
    if (pos.checkForWall()) {
      continue;
    }
    if (pos.checkForObstacleStructure()) {
      continue;
    }
    break;
  }
  this.move(direction);
};

