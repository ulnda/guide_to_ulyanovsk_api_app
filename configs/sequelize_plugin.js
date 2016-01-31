module.exports = {
  register: require('hapi-sequelize'),
  options: {
    database: 'guide_to_ulyanovsk',
    user: 'guide_to_ulyanovsk',
    pass: 'guide123',
    dialect: 'postgres',
    models: ['./models/*.js'],
    port: 5432
  }
}