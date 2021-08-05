var actionAvoid = require('action.idle');

module.exports = {
    run: function(creep) {


  if (!creep.memory.w10s8f1) {
            creep.travelTo(Game.flags['w10s8f1']);
            if (creep.pos.isNearTo(Game.flags['w10s8f1'])) {
                creep.memory.w10s8f1 = true;
            }
            return;
        }
      if (!creep.memory.w10s2f1) {
            creep.travelTo(Game.flags['w10s2f1']);
            if (creep.pos.isNearTo(Game.flags['w10s2f1'])) {
                creep.memory.w10s2f1 = true;
            }
            return;
        }
      if (!creep.memory.w9s3f1) {
            creep.travelTo(Game.flags['w9s3f1']);
            if (creep.pos.isNearTo(Game.flags['w9s3f1'])) {
                creep.memory.w9s3f1 = true;
            }
            return;
        }

      if (!creep.memory.Room) {
            creep.travelTo(Game.flags['Room']);
            if (creep.pos.isNearTo(Game.flags['Room'])) {
                creep.memory.Room = true;
            }
            return;
        }
console.log('captain arrived at target room...')

        // team name
        let teamName = creep.memory.groupName;

        if (creep.hits>0.67*creep.hitsMax) { // captain is healthy
            // check if followed
            let myFirstMate = Game.creeps[findTeamMate(teamName, 'firstMate')];
            let myCrew = Game.creeps[findTeamMate(teamName, 'crew')];

            if (creep.pos.getRangeTo(myFirstMate) < 3) {
                creep.memory.followed = true;
                console.log('captain grouping..')
            }
            else {
                creep.memory.followed = false;
            }

            // check if grouped
            if (creep.memory.followed){
             //   ||(myFirstMate.memory.followed)) { // captain is followed by first mate, firstMate is followed by crew
                creep.memory.ungrouped = false;
                console.log('captain following....')
            }

            if (creep.memory.ungrouped) {
                // check if grouped
                creep.moveTo(Game.flags[teamName+'esc']);
                //creep.moveTo(Game.flags['Room']);
            }
            else { // grouped
                myFirstMate.moveTo(creep.pos);
                myCrew.moveTo(creep.pos);
            //    let toHeal = lowestHealthAmongGroup(creep,myFirstMate,myCrew);
            //    if ( toHeal.hits > 0.618*toHeal.hitsMax ) { // if group is chained , gogo
                    if (creep.memory.followed){
                   //     &&(myFirstMate.memory.followed)) { // if everyone is following
                      console.log('captain grouped & following.')  
           if (creep.room.name == Game.flags[teamName].pos.roomName) { // if in target room

                        console.log('Captain everyone has arrived in the target room.')
             if (Game.flags[teamName+'attack'] != undefined) { // && creep.getActiveBodyparts(ATTACK)>0) {
                      creep.travelTo(Game.flags[teamName+'attack']); // gether at flag's position
                 console.log('Capn attack! Time to kick ass!.')
                               let target = Game.flags[teamName+'attack'].pos.findInRange(FIND_STRUCTURES, 0)[0];
                        target = Game.getObjectById(Game.flags['attack'].room.lookAt(20,10)[0]['structure'].id); //temp code
                         console.log(target)

                                if (creep.dismantle(target) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(target)
                                }

     //             if (creep.pos.isEqualTo(Game.flags[teamName+'attack'])) {
     //                Game.flags[teamName+'attack'].remove();
            }
       //   }
                            else {
                                let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
                                    filter: c => ((c.pos.getRangeTo(creep) < 2))});
                                if (target) {
                                    if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(target)
                                    }
                                }
                                else {
                                    let core = creep.room.find(FIND_STRUCTURES, {
                                        filter:c => c.structureType==STRUCTURE_SPAWN})[0];
                                    if (core) {
                                        creep.travelTo(core);
                                        creep.dismantle(core);
                                    }
                                    else {

                                    }
                                }
                            }
      //     }
               }
                    else {
                        // wait for everyone to follow up
                    }
                    }
            }
        }
    }
   // }
    };
