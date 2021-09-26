module.exports = (sequelize, Sequelize) => {
    const Clientes = sequelize.define('clientes', {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellidos: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fechaNacimiento: {
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    })
    return Clientes;
}