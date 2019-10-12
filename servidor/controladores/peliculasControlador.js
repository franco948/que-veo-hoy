
//se importa una referencia a la conexión.
var con = require('../lib/conexionbd');

function peliculas(req, res) {
    
    var sql = "SELECT * FROM pelicula";

    //se ejecuta la consulta
    con.query(sql, function(error, resultado, fields) {
        //si hubo un error, se informa y se envía un mensaje de error
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }

        //si no hubo error, se crea el objeto respuesta con las canciones encontradas
        var respuesta = {
            'peliculas': resultado
        };

        //se envía la respuesta
        res.send(JSON.stringify(respuesta));
    });
}

function generos(req, res) {
    
    var sql = 'SELECT * FROM genero';

    //se ejecuta la consulta
    con.query(sql, function(error, resultado, fields) {
        //si hubo un error, se informa y se envía un mensaje de error
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }

        //si no hubo error, se crea el objeto respuesta con las canciones encontradas
        var respuesta = {
            'generos': resultado
        };

        //se envía la respuesta
        res.send(JSON.stringify(respuesta));
    });
}

module.exports = {
    peliculas: peliculas,
    generos: generos
};