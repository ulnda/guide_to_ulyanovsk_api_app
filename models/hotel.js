'use strict';

module.exports = (sequelize, DataTypes) => {
  let Hotel = sequelize.define('Hotel', {
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