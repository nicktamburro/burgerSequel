
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('Burger', {
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return burger;
};


