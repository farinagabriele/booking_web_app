const faker                   = require('faker');
const _                       = require('lodash');


const restaurantsEnpoint = () => {
    let restaurants = [];

    for (let i = 0; i < _.random(50, 200); i++) {
        let photos = [];

        for (let j = 0; j < _.random(2, 8); j++) {
            photos.push(faker.image.food());
        
        }
        
        restaurants.push({
            id: i,
            name: `${faker.random.arrayElement(['Restaurant', 'Food'])} ${faker.company.companyName()}`,
            shorDescription: faker.lorem.paragraph(),
            longDescription: faker.lorem.paragraphs(),
            image: faker.image.food(500, 600),
            photos: photos,
            address: {
                streetAddress: faker.address.streetAddress(),
                city: faker.address.city(),
                country: faker.address.country(),
                zipCode: faker.address.zipCode(),
            },
            phone: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            website: `http://www.' ${faker.internet.domainName()}`
        });
    };

    return restaurants;
}

module.exports = restaurantsEnpoint();