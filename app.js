const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Bodies.')
})

app.get('/roadmaps', (req, res) => {
    console.log('Getting list from Roadmaps from MS SQL Server.')
    var sql = require("mssql");

    var config = {
        user: 'sa',
        password: 'password',
        server: 'LAPTOP-T90LNA2M\SQLEXPRESS', 
        database: 'go_code' 
    };

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT * FROM [go_code].[dbo].[Roadmap]', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });

})

app.post('/', (req, res) => {
    console.log('got post')
    res.send('Got a POST request')
  })

app.get('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})