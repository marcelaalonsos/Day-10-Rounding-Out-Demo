const Sequelize = require('sequelize');
const db = require('./database');
const Student = require('./student');

const House = db.define('house', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  colorPrimary: Sequelize.STRING,
  colorSecondary: Sequelize.STRING,
  ghost: Sequelize.STRING
});

House.getEverything = async function (){
  const houses = await House.findAll({include: {model: Student, attributes: ['name', 'pet']}});
  return houses;
};

House.prototype.colorScheme = function () {
  //console.log("what's this? ", this);
  return `${this.name}'s colors are ${this.colorPrimary} and ${this.colorSecondary}`
};

module.exports = House;
