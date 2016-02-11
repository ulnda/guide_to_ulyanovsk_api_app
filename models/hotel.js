'use strict';

module.exports = (sequelize, DataTypes) => {
  let Hotel = sequelize.define('Hotel', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(db) {
        Hotel.hasMany(db.Comment, {
          foreignKey: 'commentable_id',
          scope: {
            commentable: 'hotel'
          }
        });
      }
    }
  });

  return Hotel;
};