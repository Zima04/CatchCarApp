const CRUDRepository = require('../common/crudRepository');
const TIME = ['13:15', '08:10', '20:20', '14:30', '9:00', '7:40', '02:20', '15:10', '11:15', '18:30'];

const DATA = ['25.12.2018', '23.12.2018', '24.12.2018'];
const EVERYDAY = [true,false];
const createTrip = (id) => ({
  id,
  userId: id,
  date: DATA[Math.round(Math.random() * (2))],
  time: TIME[Math.round(Math.random() * (9))],
  everyday: EVERYDAY[Math.round(Math.random() * (1))],
  finished: id % 2 === 0 ? true : false,
  start: {
    lat: Number((Math.random() * (53.9000 - 53.1000) + 53.1000).toFixed(4)),
    lng: Number((Math.random() * (27.9000 - 27.1000) + 27.1000).toFixed(4))
  },
  end: {
    lat: Number((Math.random() * (53.9000 - 53.1000) + 53.1000).toFixed(4)),
    lng: Number((Math.random() * (27.9000 - 27.1000) + 27.1000).toFixed(4))
  },
});

const trips = Array.from({length: 100})
  .map((_, i) => createTrip(i));


module.exports = new CRUDRepository(trips);
