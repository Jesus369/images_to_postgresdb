'use strict';
module.exports = (sequelize, DataTypes) => {
  var images = sequelize.define('images', {
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return images;
};