const express = require ('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res)=> {
res.render('index');
});  

app.listen(3000);


// Population of every State 'http://api.census.gov/data/2019/pep/population?get=NAME,POP&for=state:*' 
// Population for counties 'https://api.census.gov/data/2019/pep/population?get=NAME,POP&for=county:*&in=state:*'

         //replace * with state FIPS code to get counties for any state

// Poverty rate per state 'https://api.census.gov/data/timeseries/poverty/saipe?get=SAEPOVRTALL_PT,NAME&for=state:*&time=2019'

// Poverty rate for all states and all counties 'https://api.census.gov/data/timeseries/poverty/saipe?get=SAEPOVALL_PT,GEOID,NAME&for=county:*&in=state:*&time=2019'

//Unemployment rates 'https://api.bls.gov/publicAPI/v2/timeseries/data/LAUST130000000000003' 

// LAU${'put state code here'}03


// State FIPS code to match with state names 