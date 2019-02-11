'use strict';
module.exports = (sequelize, DataTypes) => {
  const Summoner = sequelize.define('Summoner', {
    name: DataTypes.STRING,
    json: {
      allowNull: false, 
      type: DataTypes.JSON
    },
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    updated: DataTypes.STRING,
    accountId: DataTypes.STRING
  }, {});
  
  return Summoner;
};