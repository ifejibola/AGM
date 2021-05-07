'use strict';
const {
  Model
} = require('sequelize');
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // getbasicuserinfo() {
    //   return [this.name, this.email].join(' ');
    // }

    // allusers() {
    //   return this.findAll({ limit: 10 }).then((user) => {
    //     console.log(JSON.stringify(user));
    //   })
    // }

    // static associate(models) {
    //   // define association here

    // }
  };
  User.init({
    // Model Attributes 
    email: { type: Sequelize.STRING, allowNull: true },
    password: { type: Sequelize.STRING, allowNull: true },
    name: { type: Sequelize.STRING, allowNull: true },
    registered: { type: Sequelize.DATE, allowNull: true },
    is_admin: { type: Sequelize.BOOLEAN, allowNull: true }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'user',
    freezeTableName: true // Model tableName will be the same as the model name 

  })
  return User;
};