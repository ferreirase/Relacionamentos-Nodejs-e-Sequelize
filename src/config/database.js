module.exports = { 
  //dialeto do Banco
  dialect: 'postgres', 
  // endereço do host
  host: 'localhost', 
  //usuário do banco
  username: '******',
  //senha do usuário no banco de dados
  password: '******', 
  //nome do banco
  database: 'sqlnode', 
  define: {
    //aqui estou definindo q todo registro do DB terá um campo created_at e updated_at
    timestamps: true, 
    //permitindo o armazenamento de palavras compostar separadas por underline(_). estilo chamado Snake Case
    underscored: true
  }

}
