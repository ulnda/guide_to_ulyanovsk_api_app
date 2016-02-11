module.exports = {
  register: require('hapi-sequelize'),
  options: {
    database: 'd7bdb4nkrk6nh1',
    user: 'vyrhgvwtnegxsn',
    pass: 'OSyYQYDGag4bNuHe0NN9SCzkBH',
    dialect: 'postgres',
    models: ['./models/*.js'],
    port: 5432
  }
}