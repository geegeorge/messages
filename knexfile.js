// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/crudious'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/crudious'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};
