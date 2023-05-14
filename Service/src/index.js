//importa o express.
const express = require ('express');
//importa o mysql
const mysql = require('mysql2');

//cria o express.application
const app = express();

// cria uma conexão com o BD
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bb',
    password: '250904'
  });

  connection.query(
    'SELECT * FROM test',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      console.error(err);
    }
  );

//método para ouvir as requisições e a porta onde o server vai rodar
app.listen(3000, () => console.log("Server roda na porta 3000") );
//o callback dentro dos parenteses, utilizando uma função anônima (), foi passado para dar feedback.


//rodar esse arquivo no terminal Powershell, dentro do caminho, usando Node - rodando fica node e se der Ctrl+C ele volta para o powershell.
//No Json precisa startar a aplicação assim "start": "node src/index.js"