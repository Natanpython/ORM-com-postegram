module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "123",
  database: "teste-dominando-nodejs",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true, //nomeclatura _ (não camelcase)
    underscoredAll: true,
  },
};