
//se importa una referencia a la conexión.
var con = require('../lib/conexionbd');

function peliculas(req, res) {
    
    var sql = "SELECT * FROM pelicula";
    var filtros = [];

    var titulo = req.query.titulo;
    var anio = req.query.anio;
    var genero = req.query.genero;

    var columnaOrden = req.query.columna_orden;
    var tipoOrden = req.query.tipo_orden;

    if (titulo)
    {
        filtros.push("titulo LIKE '%" + titulo + "%'");
    }
    if (anio)
    {
        filtros.push('anio = ' + anio);
    }
    if (genero)
    {
        filtros.push('genero_id = ' + genero);
    }

    if (filtros.length > 0)
    {
        sql += " WHERE ";
        filtros.forEach(filtro => sql += filtro + ' AND ');        

        // Se remueve el ultimo AND concatenado
        var lastIndex = sql.lastIndexOf('AND');
        sql = sql.substring(0, lastIndex);
    }

    sql += ' ORDER BY ' + columnaOrden + ' ' + tipoOrden;

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