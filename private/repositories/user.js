const CRUDRepository = require('../common/crudRepository');

const createUser = (id) => ({
  id,
  enName: getName()[0],
  ruName: getName()[1],
  about: `Еду быстро и надежно, каждое утро на Уручье.Оплату принимаю печенками :)`,
  phone: PHONES[ Math.round(Math.random() * (9))],
});

const RU_NAMES = ['Мария', 'Антон', 'Петр', 'Владислав', 'Ольга', 'Наталья',
  'Максим', 'Анжела', 'Кирилл', 'Алексей', 'Татьяна', 'Каспер',
  'Владимир', 'Моника', 'Екатерина', 'София', 'Ратибор', 'Том', 'Иесус'];
const EN_NAMES = ['Maria', 'Anton', 'Petr', 'Vladislav', 'Olga', 'Natalia',
  'Maksim', 'Angela', 'Kirill', 'Alexey', 'Tatiana', 'Casper',
  'Vladimir', 'Monika', 'Ekaterina', 'Sofia', 'Ratibor', 'Tom', 'Iesus'];
const PHONES = [
  '+375 29 654 28 32',
  '+375 29 234 54 52',
  '+375 29 654 56 34',
  '+375 29 534 26 37',
  '+375 29 114 28 11',
  '+375 29 864 20 22',
  '+375 29 124 38 44',
  '+375 29 134 43 54',
  '+375 29 568 33 37',
  '+375 29 412 01 10'];
function getName(){
  let numberOfPerson = Math.round(Math.random() * (EN_NAMES.length - 1));
  return [EN_NAMES[numberOfPerson],RU_NAMES[numberOfPerson]];
}

const users = Array.from({length: 100})
  .map((_, i) => createUser(i));

module.exports = new CRUDRepository(users);
