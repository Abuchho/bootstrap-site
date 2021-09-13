const { json, response } = require('express');
const express = require ('express')
const app = express()
const got = require ('got')

app.use(express.static('public'))
app.set('view engine','ejs');




app.get('/data', (req, res)=> {

    (async () => {
        try {
            const response = await got('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            console.log(response.body);
            res.send(response.body)
        } catch (error) {
            console.log(error.response.body);
            
        }
    })();


});



app.listen(3000);