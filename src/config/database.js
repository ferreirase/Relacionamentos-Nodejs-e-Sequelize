module.exports = { 
  dialect: 'postgres', 
  host: 'localhost', 
  username: 'postgres', 
  password: 'docker',
  database: 'sqlnode', 
  define: {
    //aqui estou definindo q todo registro do DB terá um campo created_at e updated_at
    timestamps: true, 
    //permitindo o armazenamento de palavras compostar separadas por underline(_). chama Snake Case
    underscored: true
  }

}