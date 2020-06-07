//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados, para nossas operações
/* db.serialize(() => {
     //1 criar uma tabela
      /*db.run(`
         CREATE TABLE IF NOT EXISTS places (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             image TEXT,
             name TEXT,
             address TEXT,
             address2 TEXT,
             state TEXT,
             city TEXT,
             items TEXT
         );

      `)

    //2 Inserir dados na tabela
    const query = `
        INSERT INTO places (
            image, 
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://images.unsplash.com/photo-1542739674-b449a8938b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        "Papersider",
        "Praça São João Batista",
        "Número 150",
        "Bahia",
        "Uauá",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

  function afterInsertData(err) { //vai executar a função: depois que inserir os daods ele vai verificar se deu certo ou deu erro
    if(err) {
        return console.log(err)
    }
     console.log("Cadastrado com sucesso")
     console.log(this)
  }

      db.run(query, values, afterInsertData)


    //3 Consultar os dados da tabela
   
     db.all(`SELECT name FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        console.log("Aqui está seus registros: ")
        console.log(rows)
    }) 

     
    //4 Deletar um dado da tabela

    db.run(`DELETE FROM places WHERE id =?`, [3], function(err) {
        if(err) {
            return console.log(err)
        } console.log("Registro deletado com sucesso")
    })
    
})
 */
