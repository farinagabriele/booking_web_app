function loadEnpoints() {
    return {
        "hotels": require('./endpoints/hotels'),
        "flights": require('./endpoints/flights'),
        "restaurants": require('./endpoints/restaurants'),
        "places": require('./endpoints/places')
    };
}

module.exports = loadEnpoints;