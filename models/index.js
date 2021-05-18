'use strict';

const Sequelize = require('sequelize');
// const configJsonData = require('../../config/config.json');
const configJsonData = require(__dirname + '/../config/config.json');
const env = 'development';

console.log(`[sequelize] loading config file for (${env})`);

// select the appropriate one
const config = configJsonData[env];

console.log(config);

const sequelize = (config.use_env_variable) ?
  new Sequelize(process.env[config.use_env_variable], config) :
  new Sequelize(config.database, config.username, config.password, config);


const db = {
  sequelize,
  Sequelize: sequelize,
};

console.log(`[sequelize] loading model definitions file(s)`);

// NOTE: previous loader caused serious issues when webpacked

const modelDefinitions = {
  Moderator: 'moderator',
  User: 'user'
};

Object.entries(modelDefinitions).forEach(([modelName, fileName]) => {
  console.log(`[sequelize] loading model (${modelName})`);
  //const model = require(`./${name}`)(sequelize, Sequelize.DataTypes);
  db[modelName] = require(`./${fileName}`)(sequelize, Sequelize);
});


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// db.Moderator.hasMany(db.User);
// db.User.belongsTo(db.Moderator);


console.log(`[sequelize] created [db] object for export (${Object.keys(db)}).`);

module.exports = db;
