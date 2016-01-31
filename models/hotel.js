'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Hotel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    lng: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    }
  });
};