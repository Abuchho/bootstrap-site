

let stateNames = {
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

var main = document.getElementById('stateDropDown');
var sub = document.getElementById('countyDropDown');
var selectedOption
var inputOption
window.onload = function() {
    main.addEventListener('change', function(event){
        selectedOption = event.target.value;
        inputOption = stateNames[selectedOption];
        console.log(inputOption)
    });

    document.getElementById('submitBtn').addEventListener('click', fetchData)
};

    //State Population
let statePop = `http://api.census.gov/data/2019/pep/population?get=NAME,POP&for=state:01`
    //County Population
let countyPop = 'https://api.census.gov/data/2019/pep/population?get=NAME,POP&for=county:*&in=state:*'
    //State Poverty
let statePov = 'https://api.census.gov/data/timeseries/poverty/saipe?get=SAEPOVRTALL_PT,NAME&for=state:*&time=2019'
    //County Poverty
let countyPov = 'https://api.census.gov/data/timeseries/poverty/saipe?get=SAEPOVALL_PT,GEOID,NAME&for=county:*&in=state:*&time=2019'
    //State Unemployment
let stateUnemp = 'https://api.bls.gov/publicAPI/v2/timeseries/data/LAUST130000000000003'
    //County Unemployment
let countyUnemp = 'http://api.census.gov/data/2019/pep/population?get=NAME,POP&for=state:*'



// Calling all of the API

var getStatePopulation = axios.get(statePop);

var getCountyPopulation = axios.get(countyPop);

var getStatePoverty = axios.get(statePov);

var getCountyPoverty = axios.get(countyPov);

var getStateUnemployment = axios.get(stateUnemp);

var getCountyUnemployment = axios.get(countyUnemp);

async function fetchData() {await axios.all([getStatePopulation, getCountyPopulation, getStatePoverty, getCountyPoverty, getStateUnemployment, getCountyUnemployment])
    .then(function (response) {
        const resultsStatePop = response[0].data;
        const resultsCountyPop = response[1].data
        showOutput(resultsStatePop, resultsCountyPop)
    })
};





       



  // Function to show the output

  function showOutput(res1, res2) { 
      document.getElementById('results').innerHTML =
        `<li>${res1[1]}</li>`
        console.log(res1)
    }






