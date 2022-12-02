const faker                   = require('faker');
const _                       = require('lodash');
const moment                  = require('moment');
const currencies              = require('../utils/currencies');


const flightsEndpoint = () => {
    let flights = [];

    for (let i = 0; i < _.random(50, 200); i++) {
        let date = faker.date.future(1);
        let duration = _.random(1, 18);

        flights.push({
            id: faker.random.uuid(),
            name: `${faker.random.arrayElement(['Airlines', 'Flights'])} ${faker.company.companyName()}`,
            shorDescription: faker.lorem.paragraph(),
            longDescription: faker.lorem.paragraphs(),
            image: faker.image.city(faker.random.number({ min: 300, max: 400 })),
            departure: {
                date: moment(date).format('DD-MM-YYYY'),
                time: moment(date).format('HH:mm'),
                airport: faker.random.arrayElement(['Malpensa', 'Linate', 'Orio Al Serio'])
            },
            arrival: {
                date: moment(date).add(duration, 'hour').format('DD-MM-YYYY'),
                time: moment(date).add(duration, 'hour').format('HH:mm'),
                airport: `Airport ${faker.name.firstName()} ${faker.name.lastName()}`
            },
            destination: faker.random.arrayElement([faker.address.city(), faker.address.country()]),
            price: currencies.EUR(_.random(20, 1200)).format(true),
            duration: `${duration}h`
        });
    }

    return flights;
};

module.exports = flightsEndpoint();