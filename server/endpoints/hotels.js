const faker                   = require('faker');
const _                       = require('lodash');


const hotelsEndpoint = () => {
    let hotels = [];

    for (let i = 1; i <= _.random(50, 200); i++) {
        hotels.push({
            id: faker.random.uuid(),
            name: `${faker.random.arrayElement(['hotel', 'Hotel & Spa', 'Resort'])} ${faker.company.companyName()}`,
            stars: faker.random.number({ min: 1, max: 5}),
            shorDescription: faker.lorem.paragraph(),
            longDescription: faker.lorem.paragraphs(),
            image: faker.image.city(faker.random.number({ min: 300, max: 400 })),
            address: {
                streetAddress: faker.address.streetAddress(),
                city: faker.address.city(),
                country: faker.address.country(),
                zipCode: faker.address.zipCode(),
            },
            phone: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            website: `http://www.${faker.internet.domainName()}`,
            rooms: faker.random.number({ min: 100, max: 600 })
        });
    }
    
    return hotels;
};

module.exports = hotelsEndpoint();