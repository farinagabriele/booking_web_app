const faker                   = require('faker');
const _                       = require('lodash');


const placesEndpoint = () => {
    let places = [];

    for (let i = 0; i < _.random(50, 200); i++) {
        let photos = [];
        
        for (let j = 0; j < _.random(4, 20); j++) {
            photos.push(faker.image.city());
        }

        places.push({
            id: faker.random.uuid(),
            name: faker.address.city(),
            shorDescription: faker.lorem.paragraph(),
            longDescription: faker.lorem.paragraphs(),
            photos: photos,
            country: faker.address.country(),
            longitude: faker.address.longitude(),
            latitude: faker.address.latitude()
        });
    }

    return places;
};

module.exports = placesEndpoint();