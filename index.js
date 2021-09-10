const express = require ('express')
const app = express()
const request = require ('request')

app.use(express.static('public'))
app.set('view engine','ejs');




app.get('/', (req, res)=> {
    res.render('index')
});

app.get('/data', function(req, res, next) {
    request({
      uri: 'https://api.bls.gov/publicAPI/v1/timeseries/data/LAUMT131226000000003',
      qs: {
        api_key: '',
        query: 'Population'
      }
    }).pipe(res);
  });











app.listen(3000);