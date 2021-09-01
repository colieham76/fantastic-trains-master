function factories(factory) {

    if (factory) {

        if (factory.store.getUsedCapacity() != factory.store.getCapacity() && factory.cooldown == 0) {

            if (factory.store[RESOURCE_ENERGY] > 0) {

                factory.produce(RESOURCE_BATTERY)
            }
        }
    }
}

module.exports = factories
