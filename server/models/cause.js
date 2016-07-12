'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cause = sequelize.define('Cause', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    letter_body: {
      type: DataTypes.TEXT
    },
    rep_level: {
      type: DataTypes.STRING
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fixed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fixed_address: {
      type: DataTypes.STRING,
      allowNull: true
    }

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Cause.hasMany(models.Support)

      }
    }
  });
  return Cause;
};