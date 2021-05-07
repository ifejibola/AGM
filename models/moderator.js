'use strict';
var crypto = require('crypto')
var bcrypt = require('bcrypt')
const {
  Model, Sequelize
} = require('sequelize');
const User = require('./user')
module.exports = (sequelize, DataTypes) => {
  class Moderator extends Sequelize.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */



  };
  Moderator.init({
    // Model Attributes 
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false, },
    company: { type: Sequelize.STRING, allowNull: true },
    name: { type: Sequelize.STRING, allowNull: true },
    registered: { type: Sequelize.DATE, allowNull: true },
    is_admin: { type: Sequelize.BOOLEAN, allowNull: true }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'moderator',
    freezeTableName: true // Model tableName will be the same as the model name 

  });


  // Validate password
  Moderator.prototype.validPassword = function (password) {
    return bcrypt.compare(password, this.password)
    // return password;
  };

  /*
    Method that gets JSON representation of the user that will be passed from the front-end
    during authentication.
  */

  Moderator.prototype.toAuthJSON = function () {
    return {
      name: this.name,
      email: this.email,
      company: this.company,
      isAdmin: this.is_admin,
    }
  }

  // Moderator.beforeCreate(setPassword)
  // Moderator.beforeUpdate(setPassword)
  return Moderator;
};