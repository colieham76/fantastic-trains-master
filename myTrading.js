Room.prototype.get = function(roomVar, cache) {
    let room = this

    let factory = room.find(FIND_MY_STRUCTURES, {
        filter: s => s.structureType == STRUCTURE_FACTORY
    })[0]
    if (factory) {
        let batteryQuota = 10000 // 10k
            let batterySellOffers = Game.market.getAllOrders(order => order.type == ORDER_SELL
                && order.resourceType == RESOURCE_BATTERY
                && order.price <= avgPrice(RESOURCE_BATTERY) * 1.2
                && order.amount >= (batteryQuota - terminal.store.getUsedCapacity([RESOURCE_BATTERY])))
        if (terminal.store[RESOURCE_BATTERY] < batteryQuota && batterySellOffers[0]) {
            //console.log("Found order for: "
            // + RESOURCE_BATTERY
            // + ", "
            // + terminal.room
            // + ", "
            // + batterySellOffers[0]["id"]
            // + ", "
            // + batterySellOffers[0].amount
            // + batterySellOffers[0].roomName)
            //console.log(batteryQuota - terminal.store[RESOURCE_BATTERY])

            let buyAmount = batteryQuota - terminal.store.getUsedCapacity([RESOURCE_BATTERY])
            let buyCost = Game.market.calcTransactionCost(buyAmount, room.name, batterySellOffers[0].roomName)
            console.log(buyCost + "BC")
            for (let i = batteryQuota; i > 0; i -= 1000) {
                Game.market.deal(batterySellOffers[0]["id"], i, room.name)
            }
        }
    }
}
