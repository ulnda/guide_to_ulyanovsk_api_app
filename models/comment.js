'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    commentable: DataTypes.STRING,
    commentable_id: DataTypes.INTEGER
  });
};