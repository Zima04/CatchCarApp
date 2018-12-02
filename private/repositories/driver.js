const CRUDRepository = require('../common/crudRepository');

const CARS= [
  'AUDI A5, 2012',
  'BMW 536, 2002',
  'Mercedes CLS, 2013',
  'Renault Logan, 2014',
  'Volvo S70, 2014',
  'Porsche 911, 2016',
  'Volkswagen Passat, 2004',
  'Volkswagen Polo, 2017',
  'Subaru XLS, 2013',
  'Lexus FLA, 2018',
  'Nissan Juke,2016'
];

const createDriver = (id) => ({
    id,
    userId: id,
    car: CARS[ Math.round(Math.random() * (10))],
});

const drivers = Array.from({ length: 100 })
    .map((_, i) => createDriver(i));

module.exports = new CRUDRepository(drivers);
