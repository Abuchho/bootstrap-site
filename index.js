
const express = require ('express')
const app = express()
const got = require ('got')

app.use(express.static('public'))
app.set('view engine','ejs');


let url = 'http://api.census.gov/data/2019/pep/population?get=NAME,POP&for=state:*';


app.get('/', (req, res)=> {

    (async () => {
        try {
            const response = await got(url);
            let data = JSON.parse(response.body)
            console.log(data);
            
           
            res.render('index',{
                statePop : data 
            });
        } catch (error) {
            console.log(error.response.body);
            
        }
    })();


});



app.listen(3000);


// Population of every State 'http://api.census.gov/data/2019/pep/population?get=NAME,POP&for=state:*' 

// Population for counties 'https://api.census.gov/data/2019/pep/population?get=NAME,POP&for=county:*&in=state:*'

        //replace * with state FIPS code to get counties for any state

// Poverty rate per state 'https://api.census.gov/data/timeseries/poverty/saipe?get=SAEPOVRTALL_PT,NAME&for=state:*&time=2019'

// Poverty rate for all states and all counties 'https://api.census.gov/data/timeseries/poverty/saipe?get=SAEPOVALL_PT,GEOID,NAME&for=county:*&in=state:*&time=2019'

        //replace * with state FIPS code to get counties for any state


//Unemployment rates 'https://api.bls.gov/publicAPI/v2/timeseries/data/LAUST130000000000003' 

// LAU${'put state code here'}03


// State FIPS code to match with state names 
let stateFips = {
    "Alabama"                :  "01",
    "Alaska"                 :  "02",
    "Arizona"                :  "04",
    "Arkansas"               :  "05",
    "California"             :  "06",
    "Colorado"               :  "08",
    "Connecticut"            :  "09",
    "Delaware"               :  "10",
    "District of Columbia"   :  "11",
    "Florida"                :  "12",
    "Georgia"                :  "13",
    "Hawaii"                 :  "15",
    "Idaho"                  :  "16",
    "Illinois"               :  "17",
    "Indiana"                :  "18",
    "Iowa"                   :  "19",
    "Kansas"                 :  "20",
    "Kentucky"               :  "21",
    "Louisiana"              :  "22",
    "Maine"                  :  "23",
    "Maryland"               :  "24",
    "Massachusetts"          :  "25",
    "Michigan"               :  "26",
    "Minnesota"              :  "27",
    "Mississippi"            :  "28",
    "Missouri"               :  "29",
    "Montana"                :  "30",
    "Nebraska"               :  "31",
    "Nevada"                 :  "32",
    "New Hampshire"          :  "33",
    "New Jersey"             :  "34",
    "New Mexico"             :  "35",
    "New York"               :  "36",
    "North Carolina"         :  "37",
    "North Dakota"           :  "38",
    "Ohio"                   :  "39",
    "Oklahoma"               :  "40",
    "Oregon"                 :  "41",
    "Pennsylvania"           :  "42",
    "Rhode Island"           :  "44",
    "South Carolina"         :  "45",
    "South Dakota"           :  "46",
    "Tennessee"              :  "47",
    "Texas"                  :  "48",
    "Utah"                   :  "49",
    "Vermont"                :  "50",
    "Virginia"               :  "51",
    "Washington"             :  "53",
    "West Virginia"          :  "54",
    "Wisconsin"              :  "55",
    "Wyoming"                :  "56"
 };
 
 
