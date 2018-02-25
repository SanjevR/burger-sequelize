module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    Burger.associate = function(models) {
        Burger.hasMany(models.Customers)
    };
    return Burger;
};
