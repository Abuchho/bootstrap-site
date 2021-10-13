
let stateNames = {
    "Alabama"    :  {
        fips     : "01" ,
        rateOfNew: .25,
        survival : 77.22,
        creation : 4.14,
        counties : {
            "Autauga"	: "001",  
            "Baldwin"	: "003",
            "Barbour"	: "005",
            "Bibb"	: "007",
            "Blount"	: "009",
            "Bullock"	: "011",
            "Butler"	: "013",
            "Calhoun"	: "015",
            "Chambers" : "017",
            "Cherokee"	: "019",
            "Chilton"	: "021",
            "Choctaw"	: "023",
            "Clarke"	: "025",
            "Clay"	: "027",
            "Cleburne"	: "029",
            "Coffee"	: "031",
            "Colbert"	: "033",
            "Conecuh"	: "035",
            "Coosa"	: "037",
            "Covington"	: "039",
            "Crenshaw"	: "041",
            "Cullman"	: "043",
            "Dale"	: "045",
            "Dallas"	: "047",
            "De Kalb"	: "049",
            "Elmore"	: "051",
            "Escambia"	: "053",
            "Etowah"	: "055",
            "Fayette"	: "057",
            "Franklin"	: "059",
            "Geneva"	: "061",
            "Greene"	: "063",
            "Hale"	: "065",
            "Henry"	: "067",
            "Houston"	: "069",
            "Jackson"	: "071",
            "Jefferson"	: "073",
            "Lamar"	: "075",
            "Lauderdale"	: "077",
            "Lawrence" : "079",
            "Lee"	: "081",
            "Limestone"	: "083",
            "Lowndes"	: "085",
            "Macon"	: "087",
            "Madison"	: "089",
            "Marengo"	: "091",
            "Marion"	: "093",
            "Marshall"	: "095",
            "Mobile"	: "097",
            "Monroe"	: "099",
            "Montgomery"	: "101",
            "Morgan"	: "103",
            "Perry"	: "105",
            "Pickens"	: "107",
            "Pike"	: "109",
            "Randolph"	: "111",
            "Russell"	: "113",
            "St Clair"	: "115",
            "Shelby"	: "117",
            "Sumter"	: "119",
            "Talladega"	: "121",
            "Tallapoosa"	: "123",
            "Tuscaloosa"	: "125",
            "Walker"	: "127",
            "Washington"	: "129",
            "Wilcox"	: "131",
            "Winston"	: "133"
        }
    },
    "Alaska"     :  {
        fips     : "02",
        rateOfNew: .48,
        survival : 79.09,
        creation : 3.74,
        counties : {
            "Aleutians East": "013",
	        "Aleutians West" : "016",
	        "Anchorage" : "020",
	        "Bethel" : "050",
	        "Bristol Bay" : "060",
	        "Denali" : "068",
	        "Dillingham" : "070",
	        "Fairbanks North Star" : "090",
	        "Haines" : "100",
	        "Juneau" : "110",
	        "Kenai Peninsula" : "122",
	        "Ketchikan Gateway" : "130",
	        "Kodiak Island" : "150",
	        "Lake and Peninsula" : "164",
	        "Matanuska-Susitna" : "170",
	        "Nome" : "180",
	        "North Slope" : "185",
	        "Northwest Arctic" : "188",
	        "Prince of Wales-Outer Ketchikan" : "201",
	        "Sitka" : "220",
	        "Skagway-Hoonah-Angoon" : "232",
	        "Southeast Fairbanks" : "240",
	        "Valdez-Cordova" : "261",
	        "Wade Hampton" : "270",
	        "Wrangell-Petersburg" : "280",
	        "Yakutat" : "282",
	        "Yukon-Koyukuk" : "290"
        }
    },
    "Arizona"    :  {
        fips     : "04",
        rateOfNew: .38,
        survival : 77.91,
        creation : 4.75,
        counties : {
            "Apache   "     : "001",            
	        "Cochise": "003",
	        "Coconino"	: "005",
	        "Gila	": "007",
	        "Graham	": "009",
	        "Greenlee"	: "011",
	        "La Paz	": "012",
	        "Maricopa"	: "013",
	        "Mohave	": "015",
	        "Navajo	": "017",
	        "Pima	": "019",
	        "Pinal	": "021",
	        "Santa Cruz"	: "023",
	        "Yavapai": "025",
	        "Yuma": "027" 
        }
    },
    "Arkansas"               :  {
        fips     : "05",
        rateOfNew: .33,
        survival : 77.45,
        creation : 4.15,
        counties : {
            "Arkansas	": "001",
	        "Ashley	": "003",
	        "Baxter	": "005",
	        "Benton	": "007",
	        "Boone	": "009",
	        "Bradley	": "011",
	        "Calhoun	": "013",
	        "Carroll	": "015",
	        "Chicot	": "017",
	        "Clark	": "019",
	        "Clay	": "021",
	        "Cleburne	": "023",
	        "Cleveland	": "025",
	        "Columbia	": "027",
	        "Conway	": "029",
	        "Craighead	": "031",
	        "Crawford	": "033",
	        "Crittenden	": "035",
	        "Cross	": "037",
	        "Dallas	": "039",
	        "Desha	": "041",
	        "Drew	": "043",
	        "Faulkner	": "045",
	        "Franklin	": "047",
	        "Fulton	": "049",
	        "Garland	": "051",
	        "Grant	": "053",
	        "Greene	": "055",
	        "Hempstead	": "057",
	        "Hot Spring	": "059",
	        "Howard	": "061",
	        "Independence	": "063",
	        "Izard	": "065",
	        "Jackson	": "067",
	        "Jefferson	": "069",
	        "Johnson	": "071",
	        "Lafayette	": "073",
	        "Lawrence	": "075",
	        "Lee	": "077",
	        "Lincoln	": "079",
	        "Little River	": "081",
	        "Logan	": "083",
	        "Lonoke	": "085",
	        "Madison	": "087",
	        "Marion	": "089",
	        "Miller	": "091",
	        "Mississippi	": "093",
	        "Monroe	": "095",
	        "Montgomery	": "097",
	        "Nevada	": "099",
	        "Newton	": "101",
	        "Ouachita	": "103",
	        "Perry	": "105",
	        "Phillips	": "107",
	        "Pike	": "109",
	        "Poinsett	": "111",
	        "Polk	": "113",
	        "Pope	": "115",
	        "Prairie	": "117",
	        "Pulaski	": "119",
	        "Randolph	": "121",
	        "St Francis	": "123",
	        "Saline	": "125",
	        "Scott	": "127",
	        "Searcy	": "129",
	        "Sebastian	": "131",
	        "Sevier	": "133",
	        "Sharp	": "135",
	        "Stone	": "137",
	        "Union	": "139",
	        "Van Buren	": "141",
	        "Washington	": "143",
	        "White	": "145",
	        "Woodruff	": "147",
	        "Yell	": "149"
        }
    },
    "California"             :{
        fips     : "06" ,
        rateOfNew: .43,
        survival : 81.83,
        creation : 6.43,
        counties : {
            "Alameda	": "001",
	        "Alpine	": "003",
	        "Amador	": "005",
	        "Butte	": "007",
	        "Calaveras	": "009",
	        "Colusa	": "011",
	        "Contra Costa	": "013",
	        "Del Norte	": "015",
	        "El Dorado	": "017",
	        "Fresno	": "019",
	        "Glenn	": "021",
	        "Humboldt	": "023",
	        "Imperial	": "025",
	        "Inyo	": "027",
	        "Kern	": "029",
	        "Kings	": "031",
	        "Lake	": "033",
	        "Lassen	": "035",
	        "Los Angeles	": "037",
	        "Madera	": "039",
	        "Marin	": "041",
	        "Mariposa	": "043",
	        "Mendocino	": "045",
	        "Merced	": "047",
	        "Modoc	": "049",
	        "Mono	": "051",
	        "Monterey	": "053",
	        "Napa	": "055",
	        "Nevada	": "057",
	        "Orange	": "059",
	        "Placer	": "061",
	        "Plumas	": "063",
	        "Riverside	": "065",
	        "Sacramento	": "067",
	        "San Benito	": "069",
	        "San Bernardino	": "071",
	        "San Diego	": "073",
	        "San Francisco	": "075",
	        "San Joaquin	": "077",
	        "San Luis Obispo	": "079",
	        "San Mateo	": "081",
	        "Santa Barbara	": "083",
	        "Santa Clara	": "085",
	        "Santa Cruz	": "087",
	        "Shasta	": "089",
	        "Sierra	": "091",
	        "Siskiyou	": "093",
	        "Solano	": "095",
	        "Sonoma	": "097",
	        "Stanislaus	": "099",
	        "Sutter	": "101",
	        "Tehama	": "103",
	        "Trinity	": "105",
	        "Tulare	": "107",
	        "Tuolumne	": "109",
	        "Ventura	": "111",
	        "Yolo	": "113",
	        "Yuba	": "115"
        }
    }, 
    "Colorado"               :  {
        fips     : "08",
        rateOfNew: .35,
        survival : 76.86,
        creation : 6.54,
        counties : {
            "Adams	": "001",
            "Alamosa	": "003",
            "Arapahoe	": "005",
            "Archuleta	": "007",
            "Baca	": "009",
            "Bent	": "011",
            "Boulder	": "013",
            "Chaffee	": "015",
            "Cheyenne	": "017",
            "Clear Creek	": "019",
            "Conejos	": "021",
            "Costilla	": "023",
            "Crowley	": "025",
            "Custer	": "027",
            "Delta	": "029",
            "Denver	": "031",
            "Dolores	": "033",
            "Douglas	": "035",
            "Eagle	": "037",
            "Elbert	": "039",
            "El Paso	": "041",
            "Fremont	": "043",
            "Garfield	": "045",
            "Gilpin	": "047",
            "Grand	": "049",
            "Gunnison	": "051",
            "Hinsdale	": "053",
            "Huerfano	": "055",
            "Jackson	": "057",
            "Jefferson	": "059",
            "Kiowa	": "061",
            "Kit Carson	": "063",
            "Lake	": "065",
            "La Plata	": "067",
            "Larimer	": "069",
            "Las Animas	": "071",
            "Lincoln	": "073",
            "Logan	": "075",
            "Mesa	": "077",
            "Mineral	": "079",
            "Moffat	": "081",
            "Montezuma	": "083",
            "Montrose	": "085",
            "Morgan	": "087",
            "Otero	": "089",
            "Ouray	": "091",
            "Park	": "093",
            "Phillips	": "095",
            "Pitkin	": "097",
            "Prowers	": "099",
            "Pueblo	": "101",
            "Rio Blanco	": "103",
            "Rio Grande	": "105",
            "Routt	": "107",
            "Saguache	": "109",
            "San Juan	": "111",
            "San Miguel	": "113",
            "Sedgwick	": "115",
            "Summit	": "117",
            "Teller	": "119",
            "Washington	": "121",
            "Weld	": "123",
            "Yuma": "125"
        }
    },
    "Connecticut"            :  {
        fips     : "09",
        rateOfNew: .28,
        survival : 77.67,
        creation : 3.62,
        counties : {
            "Fairfield	": "001",
            "Hartford	": "003",
            "Litchfield	": "005",
            "Middlesex	": "007",
            "New Haven	": "009",
            "New London	": "011",
            "Tolland	": "013",
            "Windham	": "015"
        }
    },
    "Delaware"               :  {
        fips     : "10",
        rateOfNew: .27,
        survival : 76.21,
        creation : 6.28,
        counties : {
            "Kent	": "001",
            "New Castle	": "003",
            "Sussex	": "005"
        }
    },
    "District of Columbia"   :  {
        fips     : "11",
        rateOfNew: 0,
        survival : 0,
        creation : 0,
        counties : {
            "Washington": "001"
        }
    },
    "Florida"                :  {
        fips     : "12",
        rateOfNew: .53,
        survival : 75.78,
        creation : 6.17,
        counties : {
            "Alachua"	: "001",
            "Baker"	: "003",
            "Bay"	: "005",
            "Bradford"	: "007",
            "Brevard"	: "009",
            "Broward"	: "011",
            "Calhoun"	: "013",
            "Charlotte"	: "015",
            "Citrus"	: "017",
            "Clay"	: "019",
            "Collier"	: "021",
            "Columbia"	: "023",
            "De Soto": "027",
            "Dixie"	: "029",
            "Duval"	: "031",
            "Escambia"	: "033",
            "Flagler"	: "035",
            "Franklin"	: "037",
            "Gadsden"	: "039",
            "Gilchrist"	: "041",
            "Glades"	: "043",
            "Gulf"	: "045",
            "Hamilton"	: "047",
            "Hardee"	: "049",
            "Hendry"	: "051",
            "Hernando"	: "053",
            "Highlands"	: "055",
            "Hillsborough"	: "057",
            "Holmes"	: "059",
            "Indian River"	: "061",
            "Jackson"	: "063",
            "Jefferson"	: "065",
            "Lafayette"	: "067",
            "Lake"	: "069",
            "Lee"	: "071",
            "Leon"	: "073",
            "Levy"	: "075",
            "Liberty"	: "077",
            "Madison"	: "079",
            "Manatee"	: "081",
            "Marion"	: "083",
            "Martin"	: "085",
            "Miami-Dade"	: "086",
            "Monroe"	: "087",
            "Nassau"	: "089",
            "Okaloosa"	: "091",
            "Okeechobee"	: "093",
            "Orange"	: "095",
            "Osceola"	: "097",
            "Palm Beach"	: "099",
            "Pasco"	: "101",
            "Pinellas"	: "103",
            "Polk"	: "105",
            "Putnam"	: "107",
            "St Johns"	: "109",
            "St Lucie"	: "111",
            "Santa Rosa"	: "113",
            "Sarasota"	: "115",
            "Seminole"	: "117",
            "Sumter"	: "119",
            "Suwannee"	: "121",
            "Taylor"	: "123",
            "Union"	: "125",
            "Volusia"	: "127",
            "Wakulla"	: "129",
            "Walton"	: "131",
            "Washington": "133"
        }
    },
    "Georgia"                :  {
        fips     : "13",
        rateOfNew: .36,
        survival : 76.49,
        creation : 5.38,
        counties : {
            "Appling	": "001",
            "Atkinson	": "003",
            "Bacon	": "005",
            "Baker	": "007",
            "Baldwin	": "009",
            "Banks	": "011",
            "Barrow	": "013",
            "Bartow	": "015",
            "Ben Hill	": "017",
            "Berrien	": "019",
            "Bibb	": "021",
            "Bleckley	": "023",
            "Brantley	": "025",
            "Brooks	": "027",
            "Bryan	": "029",
            "Bulloch	": "031",
            "Burke	": "033",
            "Butts	": "035",
            "Calhoun	": "037",
            "Camden	": "039",
            "Candler	": "043",
            "Carroll	": "045",
            "Catoosa	": "047",
            "Charlton	": "049",
            "Chatham	": "051",
            "Chattahoochee	": "053",
            "Chattooga	": "055",
            "Cherokee	": "057",
            "Clarke	": "059",
            "Clay	": "061",
            "Clayton	": "063",
            "Clinch	": "065",
            "Cobb	": "067",
            "Coffee	": "069",
            "Colquitt	": "071",
            "Columbia	": "073",
            "Cook	": "075",
            "Coweta	": "077",
            "Crawford	": "079",
            "Crisp	": "081",
            "Dade	": "083",
            "Dawson	": "085",
            "Decatur	": "087",
            "De Kalb	": "089",
            "Dodge	": "091",
            "Dooly	": "093",
            "Dougherty	": "095",
            "Douglas	": "097",
            "Early	": "099",
            "Echols	": "101",
            "Effingham	": "103",
            "Elbert	": "105",
            "Emanuel	": "107",
            "Evans	": "109",
            "Fannin	": "111",
            "Fayette	": "113",
            "Floyd	": "115",
            "Forsyth	": "117",
            "Franklin	": "119",
            "Fulton	": "121",
            "Gilmer	": "123",
            "Glascock	": "125",
            "Glynn	": "127",
            "Gordon	": "129",
            "Grady	": "131",
            "Greene	": "133",
            "Gwinnett	": "135",
            "Habersham	": "137",
            "Hall	": "139",
            "Hancock	": "141",
            "Haralson	": "143",
            "Harris	": "145",
            "Hart	": "147",
            "Heard	": "149",
            "Henry	": "151",
            "Houston	": "153",
            "Irwin	": "155",
            "Jackson	": "157",
            "Jasper	": "159",
            "Jeff Davis	": "161",
            "Jefferson	": "163",
            "Jenkins	": "165",
            "Johnson	": "167",
            "Jones	": "169",
            "Lamar	": "171",
            "Lanier	": "173",
            "Laurens	": "175",
            "Lee	": "177",
            "Liberty	": "179",
            "Lincoln	": "181",
            "Long	": "183",
            "Lowndes	": "185",
            "Lumpkin	": "187",
            "McDuffie	": "189",
            "McIntosh	": "191",
            "Macon	": "193",
            "Madison	": "195",
            "Marion	": "197",
            "Meriwether	": "199",
            "Miller	": "201",
            "Mitchell	": "205",
            "Monroe	": "207",
            "Montgomery	": "209",
            "Morgan	": "211",
            "Murray	": "213",
            "Muscogee	": "215",
            "Newton	": "217",
            "Oconee	": "219",
            "Oglethorpe	": "221",
            "Paulding	": "223",
            "Peach	": "225",
            "Pickens	": "227",
            "Pierce	": "229",
            "Pike	": "231",
            "Polk	": "233",
            "Pulaski	": "235",
            "Putnam	": "237",
            "Quitman	": "239",
            "Rabun	": "241",
            "Randolph	": "243",
            "Richmond	": "245",
            "Rockdale	": "247",
            "Schley	": "249",
            "Screven	": "251",
            "Seminole	": "253",
            "Spalding	": "255",
            "Stephens	": "257",
            "Stewart	": "259",
            "Sumter	": "261",
            "Talbot	": "263",
            "Taliaferro	": "265",
            "Tattnall	": "267",
            "Taylor	": "269",
            "Telfair	": "271",
            "Terrell	": "273",
            "Thomas	": "275",
            "Tift	": "277",
            "Toombs	": "279",
            "Towns	": "281",
            "Treutlen	": "283",
            "Troup	": "285",
            "Turner	": "287",
            "Twiggs	": "289",
            "Union	": "291",
            "Upson	": "293",
            "Walker	": "295",
            "Walton	": "297",
            "Ware	": "299",
            "Warren	": "301",
            "Washington	": "303",
            "Wayne	": "305",
            "Webster	": "307",
            "Wheeler	": "309",
            "White	": "311",
            "Whitfield	": "313",
            "Wilcox	": "315",
            "Wilkes	": "317",
            "Wilkinson	": "319",
            "Worth	": "321"
        }
    },
    "Hawaii"                 :  {
        fips     : "15",
        rateOfNew: .41,
        survival : 75.09,
        creation : 3.24,
        counties : {
            "Hawaii	":"001",
            "Honolulu	":"003",
            "Kauai	":"007",
            "Maui	":"009"
        }
    },
    "Idaho"                  :  {
        fips     : "16" ,
        rateOfNew: .38,
        survival : 80.38,
        creation : 6.43,
        counties : {
            "Ada	": "001",
            "Adams	": "003",
            "Bannock	": "005",
            "Bear Lake	": "007",
            "Benewah	": "009",
            "Bingham	": "011",
            "Blaine	": "013",
            "Boise	": "015",
            "Bonner	": "017",
            "Bonneville	": "019",
            "Boundary	": "021",
            "Butte	": "023",
            "Camas	": "025",
            "Canyon	": "027",
            "Caribou	": "029",
            "Cassia	": "031",
            "Clark	": "033",
            "Clearwater	": "035",
            "Custer	": "037",
            "Elmore	": "039",
            "Franklin	": "041",
            "Fremont	": "043",
            "Gem	": "045",
            "Gooding	": "047",
            "Idaho	": "049",
            "Jefferson	": "051",
            "Jerome	": "053",
            "Kootenai	": "055",
            "Latah	": "057",
            "Lemhi	": "059",
            "Lewis	": "061",
            "Lincoln	": "063",
            "Madison	": "065",
            "Minidoka	": "067",
            "Nez Perce	": "069",
            "Oneida	": "071",
            "Owyhee	": "073",
            "Payette	": "075",
            "Power	": "077",
            "Shoshone	": "079",
            "Teton	": "081",
            "Twin Falls	": "083",
            "Valley	": "085",
            "Washington	": "087"
        }
    },
    "Illinois"               : {
        fips     : "17",
        rateOfNew: .27,
        survival : 78.78,
        creation : 4.23,
        counties : {
            "Adams	": "001",
            "Alexander	": "003",
            "Bond	": "005",
            "Boone	": "007",
            "Brown	": "009",
            "Bureau	": "011",
            "Calhoun	": "013",
            "Carroll	": "015",
            "Cass	": "017",
            "Champaign	": "019",
            "Christian	": "021",
            "Clark	": "023",
            "Clay	": "025",
            "Clinton	": "027",
            "Coles	": "029",
            "Cook	": "031",
            "Crawford	": "033",
            "Cumberland	": "035",
            "De Kalb	": "037",
            "De Witt	": "039",
            "Douglas	": "041",
            "Du Page	": "043",
            "Edgar	": "045",
            "Edwards	": "047",
            "Effingham	": "049",
            "Fayette	": "051",
            "Ford	": "053",
            "Franklin	": "055",
            "Fulton	": "057",
            "Gallatin	": "059",
            "Greene	": "061",
            "Grundy	": "063",
            "Hamilton	": "065",
            "Hancock	": "067",
            "Hardin	": "069",
            "Henderson	": "071",
            "Henry	": "073",
            "Iroquois	": "075",
            "Jackson	": "077",
            "Jasper	": "079",
            "Jefferson	": "081",
            "Jersey	": "083",
            "Jo Daviess	": "085",
            "Johnson	": "087",
            "Kane	": "089",
            "Kankakee	": "091",
            "Kendall	": "093",
            "Knox	": "095",
            "Lake	": "097",
            "La Salle	": "099",
            "Lawrence	": "101",
            "Lee	": "103",
            "Livingston	": "105",
            "Logan	": "107",
            "McDonough	": "109",
            "McHenry	": "111",
            "McLean	": "113",
            "Macon	": "115",
            "Macoupin	": "117",
            "Madison	": "119",
            "Marion	": "121",
            "Marshall	": "123",
            "Mason	": "125",
            "Massac	": "127",
            "Menard	": "129",
            "Mercer	": "131",
            "Monroe	": "133",
            "Montgomery	": "135",
            "Morgan	": "137",
            "Moultrie	": "139",
            "Ogle	": "141",
            "Peoria	": "143",
            "Perry	": "145",
            "Piatt	": "147",
            "Pike	": "149",
            "Pope	": "151",
            "Pulaski	": "153",
            "Putnam	": "155",
            "Randolph	": "157",
            "Richland	": "159",
            "Rock Island	": "161",
            "St Clair	": "163",
            "Saline	": "165",
            "Sangamon	": "167",
            "Schuyler	": "169",
            "Scott	": "171",
            "Shelby	": "173",
            "Stark	": "175",
            "Stephenson	": "177",
            "Tazewell	": "179",
            "Union	": "181",
            "Vermilion	": "183",
            "Wabash	": "185",
            "Warren	": "187",
            "Washington	": "189",
            "Wayne	": "191",
            "White	": "193",
            "Whiteside	": "195",
            "Will	": "197",
            "Williamson	": "199",
            "Winnebago	": "201",
            "Woodford": "203"
        }
    },
    "Indiana"                :  {
        fips     : "18" ,
        rateOfNew: .25,
        survival : 77.95,
        creation : 3.50,
        counties : {
            "Adams	": "001",
            "Allen	": "003",
            "Bartholomew	": "005",
            "Benton": "007",
            "Blackford": "009",
            "Boone": "011",
            "Brown": "013",
            "Carroll": "015",
            "Cass": "017",
            "Clark": "019",
            "Clay": "021",
            "Clinton": "023",
            "Crawford": "025",
            "Daviess": "027",
            "Dearborn": "029",
            "Decatur": "031",
            "De Kalb": "033",
            "Delaware": "035",
            "Dubois": "037",
            "Elkhart": "039",
            "Fayette": "041",
            "Floyd": "043",
            "Fountain": "045",
            "Franklin": "047",
            "Fulton": "049",
            "Gibson": "051",
            "Grant": "053",
            "Greene": "055",
            "Hamilton": "057",
            "Hancock": "059",
            "Harrison": "061",
            "Hendricks": "063",
            "Henry": "065",
            "Howard": "067",
            "Huntington": "069",
            "Jackson": "071",
            "Jasper": "073",
            "Jay": "075",
            "Jefferson": "077",
            "Jennings": "079",
            "Johnson": "081",
            "Knox": "083",
            "Kosciusko": "085",
            "La Grange": "087",
            "Lake": "089",
            "La Porte": "091",
            "Lawrence": "093",
            "Madison": "095",
            "Marion": "097",
            "Marshall": "099",
            "Martin": "101",
            "Miami": "103",
            "Monroe": "105",
            "Montgomery": "107",
            "Morgan": "109",
            "Newton": "111",
            "Noble": "113",
            "Ohio": "115",
            "Orange": "117",
            "Owen": "119",
            "Parke": "121",
            "Perry": "123",
            "Pike": "125",
            "Porter": "127",
            "Posey": "129",
            "Pulaski": "131",
            "Putnam": "133",
            "Randolph": "135",
            "Ripley": "137",
            "Rush": "139",
            "St Joseph": "141",
            "Scott": "143",
            "Shelby": "145",
            "Spencer": "147",
            "Starke": "149",
            "Steuben": "151",
            "Sullivan": "153",
            "Switzerland": "155",
            "Tippecanoe": "157",
            "Tipton": "159",
            "Union": "161",
            "Vanderburgh": "163",
            "Vermillion": "165",
            "Vigo": "167",
            "Wabash": "169",
            "Warren": "171",
            "Warrick": "173",
            "Washington": "175",
            "Wayne": "177",
            "Wells": "179",
            "White": "181",
            "Whitley": "183"
        }
    },
    "Iowa"                   :  {
        fips     : "19",
        rateOfNew: .31,
        survival : 79.82,
        creation : 3.45,
        counties : {
            "Adair": "001",
            "Adams	": "003",
            "Allamakee	": "005",
            "Appanoose	": "007",
            "Audubon	": "009",
            "Benton	": "011",
            "Black Hawk	": "013",
            "Boone	": "015",
            "Bremer	": "017",
            "Buchanan	": "019",
            "Buena Vista	": "021",
            "Butler	": "023",
            "Calhoun	": "025",
            "Carroll	": "027",
            "Cass	": "029",
            "Cedar	": "031",
            "Cerro Gordo	": "033",
            "Cherokee	": "035",
            "Chickasaw	": "037",
            "Clarke	": "039",
            "Clay	": "041",
            "Clayton	": "043",
            "Clinton	": "045",
            "Crawford	": "047",
            "Dallas	": "049",
            "Davis	": "051",
            "Decatur	": "053",
            "Delaware	": "055",
            "Des Moines	": "057",
            "Dickinson	": "059",
            "Dubuque	": "061",
            "Emmet	": "063",
            "Fayette	": "065",
            "Floyd	": "067",
            "Franklin	": "069",
            "Fremont	": "071",
            "Greene	": "073",
            "Grundy	": "075",
            "Guthrie	": "077",
            "Hamilton	": "079",
            "Hancock	": "081",
            "Hardin	": "083",
            "Harrison	": "085",
            "Henry	": "087",
            "Howard	": "089",
            "Humboldt	": "091",
            "Ida	": "093",
            "Iowa	": "095",
            "Jackson	": "097",
            "Jasper	": "099",
            "Jefferson	": "101",
            "Johnson	": "103",
            "Jones	": "105",
            "Keokuk	": "107",
            "Kossuth	": "109",
            "Lee	": "111",
            "Linn	": "113",
            "Louisa	": "115",
            "Lucas	": "117",
            "Lyon	": "119",
            "Madison	": "121",
            "Mahaska	": "123",
            "Marion	": "125",
            "Marshall	": "127",
            "Mills	": "129",
            "Mitchell	": "131",
            "Monona	": "133",
            "Monroe	": "135",
            "Montgomery	": "137",
            "Muscatine	": "139",
            "O Brien	": "141",
            "Osceola	": "143",
            "Page	": "145",
            "Palo Alto	": "147",
            "Plymouth	": "149",
            "Pocahontas	": "151",
            "Polk	": "153",
            "Pottawattamie	": "155",
            "Poweshiek	": "157",
            "Ringgold	": "159",
            "Sac	": "161",
            "Scott	": "163",
            "Shelby	": "165",
            "Sioux	": "167",
            "Story	": "169",
            "Tama	": "171",
            "Taylor	": "173",
            "Union	": "175",
            "Van Buren	": "177",
            "Wapello	": "179",
            "Warren	": "181",
            "Washington	": "183",
            "Wayne	": "185",
            "Webster	": "187",
            "Winnebago	": "189",
            "Winneshiek	": "191",
            "Woodbury	": "193",
            "Worth	": "195",
            "Wright	": "197"
        }
    },
    "Kansas"                 :  {
        fips     : "20",
        rateOfNew: .30,
        survival : 74.84,
        creation : 3.99,
        counties : {
            "Allen	": "001",
            "Anderson	": "003",
            "Atchison	": "005",
            "Barber	": "007",
            "Barton	": "009",
            "Bourbon	": "011",
            "Brown	": "013",
            "Butler	": "015",
            "Chase	": "017",
            "Chautauqua	": "019",
            "Cherokee	": "021",
            "Cheyenne	": "023",
            "Clark	": "025",
            "Clay	": "027",
            "Cloud	": "029",
            "Coffey	": "031",
            "Comanche	": "033",
            "Cowley	": "035",
            "Crawford	": "037",
            "Decatur	": "039",
            "Dickinson	": "041",
            "Doniphan	": "043",
            "Douglas	": "045",
            "Edwards	": "047",
            "Elk	": "049",
            "Ellis	": "051",
            "Ellsworth	": "053",
            "Finney	": "055",
            "Ford	": "057",
            "Franklin	": "059",
            "Geary	": "061",
            "Gove	": "063",
            "Graham	": "065",
            "Grant	": "067",
            "Gray	": "069",
            "Greeley	": "071",
            "Greenwood	": "073",
            "Hamilton	": "075",
            "Harper	": "077",
            "Harvey	": "079",
            "Haskell	": "081",
            "Hodgeman	": "083",
            "Jackson	": "085",
            "Jefferson	": "087",
            "Jewell	": "089",
            "Johnson	": "091",
            "Kearny	": "093",
            "Kingman	": "095",
            "Kiowa	": "097",
            "Labette	": "099",
            "Lane	": "101",
            "Leavenworth	": "103",
            "Lincoln	": "105",
            "Linn	": "107",
            "Logan	": "109",
            "Lyon	": "111",
            "McPherson	": "113",
            "Marion	": "115",
            "Marshall	": "117",
            "Meade	": "119",
            "Miami	": "121",
            "Mitchell	": "123",
            "Montgomery	": "125",
            "Morris	": "127",
            "Morton	": "129",
            "Nemaha	": "131",
            "Neosho	": "133",
            "Ness	": "135",
            "Norton	": "137",
            "Osage	": "139",
            "Osborne	": "141",
            "Ottawa	": "143",
            "Pawnee	": "145",
            "Phillips	": "147",
            "Pottawatomie	": "149",
            "Pratt	": "151",
            "Rawlins	": "153",
            "Reno	": "155",
            "Republic	": "157",
            "Rice	": "159",
            "Riley	": "161",
            "Rooks	": "163",
            "Rush	": "165",
            "Russell	": "167",
            "Saline	": "169",
            "Scott	": "171",
            "Sedgwick	": "173",
            "Seward	": "175",
            "Shawnee	": "177",
            "Sheridan	": "179",
            "Sherman	": "181",
            "Smith	": "183",
            "Stafford	": "185",
            "Stanton	": "187",
            "Stevens	": "189",
            "Sumner	": "191",
            "Thomas	": "193",
            "Trego	": "195",
            "Wabaunsee	": "197",
            "Wallace	": "199",
            "Washington	": "201",
            "Wichita	": "203",
            "Wilson	": "205",
            "Woodson	": "207",
            "Wyandotte	": "209"
        }
    },
    "Kentucky"               :  {
        fips     : "21",
        rateOfNew: .27,
        survival : 79.09,
        creation : 3.71,
        counties : {
            "Adair	": "001",
            "Allen	": "003",
            "Anderson	": "005",
            "Ballard	": "007",
            "Barren	": "009",
            "Bath	": "011",
            "Bell	": "013",
            "Boone	": "015",
            "Bourbon	": "017",
            "Boyd	": "019",
            "Boyle	": "021",
            "Bracken	": "023",
            "Breathitt	": "025",
            "Breckinridge	": "027",
            "Bullitt	": "029",
            "Butler	": "031",
            "Caldwell	": "033",
            "Calloway	": "035",
            "Campbell	": "037",
            "Carlisle	": "039",
            "Carroll	": "041",
            "Carter	": "043",
            "Casey	": "045",
            "Christian	": "047",
            "Clark	": "049",
            "Clay	": "051",
            "Clinton	": "053",
            "Crittenden	": "055",
            "Cumberland	": "057",
            "Daviess	": "059",
            "Edmonson	": "061",
            "Elliott	": "063",
            "Estill	": "065",
            "Fayette	": "067",
            "Fleming	": "069",
            "Floyd	": "071",
            "Franklin	": "073",
            "Fulton	": "075",
            "Gallatin	": "077",
            "Garrard	": "079",
            "Grant	": "081",
            "Graves	": "083",
            "Grayson	": "085",
            "Green	": "087",
            "Greenup	": "089",
            "Hancock	": "091",
            "Hardin	": "093",
            "Harlan	": "095",
            "Harrison	": "097",
            "Hart	": "099",
            "Henderson	": "101",
            "Henry	": "103",
            "Hickman	": "105",
            "Hopkins	": "107",
            "Jackson	": "109",
            "Jefferson	": "111",
            "Jessamine	": "113",
            "Johnson	": "115",
            "Kenton	": "117",
            "Knott	": "119",
            "Knox	": "121",
            "Larue	": "123",
            "Laurel	": "125",
            "Lawrence	": "127",
            "Lee	": "129",
            "Leslie	": "131",
            "Letcher	": "133",
            "Lewis	": "135",
            "Lincoln	": "137",
            "Livingston	": "139",
            "Logan	": "141",
            "Lyon	": "143",
            "McCracken	": "145",
            "McCreary	": "147",
            "McLean	": "149",
            "Madison	": "151",
            "Magoffin	": "153",
            "Marion	": "155",
            "Marshall	": "157",
            "Martin	": "159",
            "Mason	": "161",
            "Meade	": "163",
            "Menifee	": "165",
            "Mercer	": "167",
            "Metcalfe	": "169",
            "Monroe	": "171",
            "Montgomery	": "173",
            "Morgan	": "175",
            "Muhlenberg	": "177",
            "Nelson	": "179",
            "Nicholas	": "181",
            "Ohio	": "183",
            "Oldham	": "185",
            "Owen	": "187",
            "Owsley	": "189",
            "Pendleton	": "191",
            "Perry	": "193",
            "Pike	": "195",
            "Powell	": "197",
            "Pulaski	": "199",
            "Robertson	": "201",
            "Rockcastle	": "203",
            "Rowan	": "205",
            "Russell	": "207",
            "Scott	": "209",
            "Shelby	": "211",
            "Simpson	": "213",
            "Spencer	": "215",
            "Taylor	": "217",
            "Todd	": "219",
            "Trigg	": "221",
            "Trimble	": "223",
            "Union	": "225",
            "Warren	": "227",
            "Washington	": "229",
            "Wayne	": "231",
            "Webster	": "233",
            "Whitley	": "235",
            "Wolfe	": "237",
            "Woodford": "239"
        }
    },
    "Louisiana"              : {
        fips     : "22",
        rateOfNew: .37,
        survival : 81.08,
        creation : 4.26,
        counties : {
            "Acadia	": "001",
            "Allen	": "003",
            "Ascension	": "005",
            "Assumption	": "007",
            "Avoyelles	": "009",
            "Beauregard	": "011",
            "Bienville	": "013",
            "Bossier	": "015",
            "Caddo	": "017",
            "Calcasieu	": "019",
            "Caldwell	": "021",
            "Cameron	": "023",
            "Catahoula	": "025",
            "Claiborne	": "027",
            "Concordia	": "029",
            "De Soto	": "031",
            "East Baton Rouge	": "033",
            "East Carroll	": "035",
            "East Feliciana	": "037",
            "Evangeline	": "039",
            "Franklin	": "041",
            "Grant	": "043",
            "Iberia	": "045",
            "Iberville	": "047",
            "Jackson	": "049",
            "Jefferson	": "051",
            "Jefferson Davis	": "053",
            "Lafayette	": "055",
            "Lafourche	": "057",
            "La Salle	": "059",
            "Lincoln	": "061",
            "Livingston	": "063",
            "Madison	": "065",
            "Morehouse	": "067",
            "Natchitoches	": "069",
            "Orleans	": "071",
            "Ouachita	": "073",
            "Plaquemines	": "075",
            "Pointe Coupee	": "077",
            "Rapides	": "079",
            "Red River	": "081",
            "Richland	": "083",
            "Sabine	": "085",
            "St Bernard	": "087",
            "St Charles	": "089",
            "St Helena	": "091",
            "St James	": "093",
            "St John the Baptist	": "095",
            "St Landry	": "097",
            "St Martin	": "099",
            "St Mary	": "101",
            "St Tammany	": "103",
            "Tangipahoa	": "105",
            "Tensas	": "107",
            "Terrebonne	": "109",
            "Union	": "111",
            "Vermilion	": "113",
            "Vernon	": "115",
            "Washington	": "117",
            "Webster	": "119",
            "West Baton Rouge	": "121",
            "West Carroll	": "123",
            "West Feliciana	": "125",
            "Winn": "127"
        }
    },
    "Maine"                  : {
        fips     : "23",
        rateOfNew: .40,
        survival : 78.82,
        creation : 4.58,
        counties : {
            "Androscoggin	": "001",
            "Aroostook	": "003",
            "Cumberland	": "005",
            "Franklin	": "007",
            "Hancock	": "009",
            "Kennebec	": "011",
            "Knox	": "013",
            "Lincoln	": "015",
            "Oxford	": "017",
            "Penobscot	": "019",
            "Piscataquis	": "021",
            "Sagadahoc	": "023",
            "Somerset	": "025",
            "Waldo	": "027",
            "Washington	": "029",
            "York": "031"
        }
    },
    "Maryland"               :  {
        fips     : "24",
        rateOfNew: .26,
        survival : 76.65,
        creation : 4.01,
        counties : {
            "Allegany	": "001",
            "Anne Arundel	": "003",
            "Baltimore	": "005",
            "Calvert	": "009",
            "Caroline	": "011",
            "Carroll	": "013",
            "Cecil	": "015",
            "Charles	": "017",
            "Dorchester	": "019",
            "Frederick	": "021",
            "Garrett	": "023",
            "Harford	": "025",
            "Howard	": "027",
            "Kent	": "029",
            "Montgomery	": "031",
            "Prince Georges	": "033",
            "Queen Annes	": "035",
            "St Marys	": "037",
            "Somerset	": "039",
            "Talbot	": "041",
            "Washington	": "043",
            "Wicomico	": "045",
            "Worcester	": "047",
            "Baltimore City": "510"
        }
    },
    "Massachusetts"          : {
        fips     : "25",
        rateOfNew: .27,
        survival : 80.53,
        creation : 5.13,
        counties : {
            "Barnstable	": "001",
            "Berkshire	": "003",
            "Bristol	": "005",
            "Dukes	": "007",
            "Essex	": "009",
            "Franklin	": "011",
            "Hampden	": "013",
            "Hampshire	": "015",
            "Middlesex	": "017",
            "Nantucket	": "019",
            "Norfolk	": "021",
            "Plymouth	": "023",
            "Suffolk	": "025",
            "Worcester": "027"
        }
    },
    "Michigan"               : {
        fips     : "26",
        rateOfNew: .29,
        survival : 71.79,
        creation : 4.16,
        counties : {
            
        }
    },
    "Minnesota"              : {
        fips     : "27",
        rateOfNew: .18,
        survival : 80.13,
        creation : 3.60,
        counties : {
            
        }
    },
    "Mississippi"            :  {
        fips     : "28" ,
        rateOfNew: .32,
        survival : 79.88,
        creation : 3.90,
        counties : {
            
        }
    },
    "Missouri"               : {
        fips     : "29",
        rateOfNew: .37,
        survival : 76.01,
        creation : 5.06,
        counties : {
            
        }
    },
    "Montana"                : {
        fips     : "30",
        rateOfNew: .35,
        survival : 80.96,
        creation : 5.57,
        counties : {
            
        }
    },
    "Nebraska"               : {
        fips     : "31",
        rateOfNew: .27,
        survival : 79.60,
        creation : 4.96,
        counties : {
            
        }
    },
    "Nevada"                 : {
        fips     : "32",
        rateOfNew: .32,
        survival : 77.79,
        creation : 5.48,
        counties : {
            
        }
    },
    "New Hampshire"          : {
        fips     : "33",
        rateOfNew: .31,
        survival : 76.82,
        creation : 3.70,
        counties : {
            
        }
    },
    "New Jersey"             :  {
        fips     : "34",
        rateOfNew: .36,
        survival : 79.58,
        creation : 6.69,
        counties : {
            
        }
    },
    "New Mexico"             : {
        fips     : "35",
        rateOfNew: .51,
        survival : 80.09,
        creation : 4.17,
        counties : {
            
        }
    },
    "New York"               : {
        fips     : "36",
        rateOfNew: .39,
        survival : 77.03,
        creation : 5.30,
        counties : {
            
        }
    },
    "North Carolina"         : {
        fips     : "37",
        rateOfNew: .31,
        survival : 78.18,
        creation : 4.89,
        counties : {
            
        }
    },
    "North Dakota"           : {
        fips     : "38",
        rateOfNew: .32,
        survival : 78.69,
        creation : 4.53,
        counties : {
            
        }
    },
    "Ohio"                   :  {
        fips     : "39",
        rateOfNew: .25,
        survival : 79.05,
        creation : 3.80,
        counties : {
            
        }
    },
    "Oklahoma"               :  {
        fips     : "40",
        rateOfNew: .44,
        survival : 78.93,
        creation : 5.63,
        counties : {
            
        }
    },
    "Oregon"                 : {
        fips     : "41",
        rateOfNew: .29,
        survival : 77.57,
        creation : 4.85,
        counties : {
            
        }
    },
    "Pennsylvania"           : {
        fips     : "42",
        rateOfNew: .18,
        survival : 79.05,
        creation : 3.71,
        counties : {
            
        }
    },
    "Rhode Island"           : {
        fips     : "44",
        rateOfNew: .16,
        survival : 75.75,
        creation : 3.74,
        counties : {
            
        }
    },
    "South Carolina"         : {
        fips     : "45",
        rateOfNew: .26,
        survival : 76.02,
        creation : 5.32,
        counties : {
            
        }
    },
    "South Dakota"           : {
        fips     : "46",
        rateOfNew: .29,
        survival : 77.28,
        creation : 4.23,
        counties : {
            
        }
    },
    "Tennessee"              : {
        fips     : "47",
        rateOfNew: .35,
        survival : 79.52,
        creation : 4.49,
        counties : {
            
        }
    },
    "Texas"                  :  {
        fips     : "48",
        rateOfNew: .38,
        survival : 79.63,
        creation : 5.60,
        counties : {
            
        }
    },
    "Utah"                   :  {
        fips     : "49",
        rateOfNew: .24,
        survival : 76.76,
        creation : 5.38,
        counties : {
            
        }
    },
    "Vermont"                : {
        fips     : "50",
        rateOfNew: .41,
        survival : 78.47,
        creation : 3.06,
        counties : {
            
        }
    },
    "Virginia"               : {
        fips     : "51",
        rateOfNew: .23,
        survival : 76.19,
        creation : 5.24,
        counties : {
            
        }
    },
    "Washington"             :  {
        fips     : "53",
        rateOfNew: .27,
        survival : 63.43,
        creation : 4.66,
        counties : {
            
        }
    },
    "West Virginia"          : {
        fips     : "54",
        rateOfNew: .16,
        survival : 77.37,
        creation : 2.93,
        counties : {
            
        }
    },
    "Wisconsin"              : {
        fips     : "55",
        rateOfNew: .22,
        survival : 78.89,
        creation : 3.57,
        counties : {
            
        }
    },
    "Wyoming"                : {
        fips     : "56 ",
        rateOfNew: .41,
        survival : 77.07,
        creation : 5.62,
        counties : {
            
        }
    },
};

var main = document.getElementById('stateDropDown');
var sub = document.getElementById('countyDropDown');

//Default option for dropdown 
main.length = 0;
let defaultOption = document.createElement('option');
defaultOption.text = 'Choose State';
main.add(defaultOption);
main.selectedIndex = 0;
sub.length = 0;
let defaultOption2 = document.createElement('option');
defaultOption2.text = 'Choose County';
sub.add(defaultOption2);
sub.selectedIndex = 0;

//Radio button toggle display
const stateRadioBtn = document.getElementById('stateRadio');
const countyRadioBtn = document.getElementById('countyRadio');
function toggler(){
    if(stateRadioBtn.checked) {
        document.getElementById('countyDiv').style.display='none';
    }
};
function toggler2(){
    if(countyRadioBtn.checked) {
        document.getElementById('countyDiv').style.display='block'
    }
}; 

var selectedOption
var inputOption
window.onload = function() {
    let option 
    const stateKeys = Object.keys(stateNames);
    for (let i = 0; i < stateKeys.length; i++) {
        option = document.createElement('option');
        option.text = stateKeys[i];
        option.value = stateKeys[i];
        main.add(option);
    }

    stateRadioBtn.addEventListener('click', toggler);
    countyRadioBtn.addEventListener('click', toggler2);

    main.addEventListener('change', function(event){
        selectedOption = event.target.value;
        inputOption = stateNames[selectedOption].fips;
        console.log(inputOption)
        console.log(statePop)

        let countyKeys = Object.keys(stateNames[selectedOption].counties)
        sub.addEventListener('click', function(e){
            for (let i = 0; i < countyKeys.length; i++) {
                option = document.createElement('option');
                option.text = countyKeys[i];
                option.value = countyKeys[i];
                sub.add(option);
                console.log(countyKeys)
            }
        })
    });

    document.getElementById('submitBtn').addEventListener('click', fetchData)
};

    //State Population
let statePop = `http://api.census.gov/data/2019/pep/population?get=NAME,POP&for=state:01`
    //County Population
let countyPop = 'https://api.census.gov/data/2019/pep/population?get=NAME,POP&for=county:033&in=state:01'
    //State Poverty
let statePov = 'https://api.census.gov/data/timeseries/poverty/saipe?get=SAEPOVRTALL_PT,NAME&for=state:01&time=2019'
    //County Poverty
let countyPov = 'https://api.census.gov/data/timeseries/poverty/saipe?get=SAEPOVALL_PT,GEOID,NAME&for=county:033&in=state:01&time=2019'
    //State Unemployment
let stateUnemp = 'https://api.bls.gov/publicAPI/v1/timeseries/data/LAUST010000000000003'
    //County Unemployment
let countyUnemp = 'https://api.bls.gov/publicAPI/v2/timeseries/data/LAUST010000000000003'

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
        const resultsCountyPop = response[1].data;
        const resultsStatePov = response[2].data;
        const resultsCountyPov = response[3].data;
        showOutput(resultsStatePop, resultsCountyPop, resultsStatePov, resultsCountyPov)
    })
};

 // Function to show the output
function showOutput(res1, res2, res3, res4) { 
    let population = (res1[1][1]);
    let rateNew = stateNames.Alabama.rateOfNew;
    let poverty = parseFloat(res3[1][0]);
    let unemployment =  3.1
    let popNew = population * rateNew;
    let povUn = poverty + unemployment;
    let disad = popNew*povUn*.001;
    
    document.getElementById('results').innerHTML =
        
    `<p>${disad}</p>`
        console.log(disad);
        console.log(population);
        console.log(poverty);
        console.log(popNew)
        console.log(povUn)
    }
	


















26001	Alcona	
26003	Alger	
26005	Allegan	
26007	Alpena	
26009	Antrim	
26011	Arenac	
26013	Baraga	
26015	Barry	
26017	Bay	
26019	Benzie	
26021	Berrien	
26023	Branch	
26025	Calhoun	
26027	Cass	
26029	Charlevoix	
26031	Cheboygan	
26033	Chippewa	
26035	Clare	
26037	Clinton	
26039	Crawford	
26041	Delta	
26043	Dickinson	
26045	Eaton	
26047	Emmet	
26049	Genesee	
26051	Gladwin	
26053	Gogebic	
26055	Grand Traverse	
26057	Gratiot	
26059	Hillsdale	
26061	Houghton	
26063	Huron	
26065	Ingham	
26067	Ionia	
26069	Iosco	
26071	Iron	
26073	Isabella	
26075	Jackson	
26077	Kalamazoo	
26079	Kalkaska	
26081	Kent	
26083	Keweenaw	
26085	Lake	
26087	Lapeer	
26089	Leelanau	
26091	Lenawee	
26093	Livingston	
26095	Luce	
26097	Mackinac	
26099	Macomb	
26101	Manistee	
26103	Marquette	
26105	Mason	
26107	Mecosta	
26109	Menominee	
26111	Midland	
26113	Missaukee	
26115	Monroe	
26117	Montcalm	
26119	Montmorency	
26121	Muskegon	
26123	Newaygo	
26125	Oakland	
26127	Oceana	
26129	Ogemaw	
26131	Ontonagon	
26133	Osceola	
26135	Oscoda	
26137	Otsego	
26139	Ottawa	
26141	Presque Isle	
26143	Roscommon	
26145	Saginaw	
26147	St Clair	
26149	St Joseph	
26151	Sanilac	
26153	Schoolcraft	
26155	Shiawassee	
26157	Tuscola	
26159	Van Buren	
26161	Washtenaw	
26163	Wayne	
26165	Wexford	
27001	Aitkin	
27003	Anoka	
27005	Becker	
27007	Beltrami	
27009	Benton	
27011	Big Stone	
27013	Blue Earth	
27015	Brown	
27017	Carlton	
27019	Carver	
27021	Cass	
27023	Chippewa	
27025	Chisago	
27027	Clay	
27029	Clearwater	
27031	Cook	
27033	Cottonwood	
27035	Crow Wing	
27037	Dakota	
27039	Dodge	
27041	Douglas	
27043	Faribault	
27045	Fillmore	
27047	Freeborn	
27049	Goodhue	
27051	Grant	
27053	Hennepin	
27055	Houston	
27057	Hubbard	
27059	Isanti	
27061	Itasca	
27063	Jackson	
27065	Kanabec	
27067	Kandiyohi	
27069	Kittson	
27071	Koochiching	
27073	Lac qui Parle	
27075	Lake	
27077	Lake of the Woods	
27079	Le Sueur	
27081	Lincoln	
27083	Lyon	
27085	McLeod	
27087	Mahnomen	
27089	Marshall	
27091	Martin	
27093	Meeker	
27095	Mille Lacs	
27097	Morrison	
27099	Mower	
27101	Murray	
27103	Nicollet	
27105	Nobles	
27107	Norman	
27109	Olmsted	
27111	Otter Tail	
27113	Pennington	
27115	Pine	
27117	Pipestone	
27119	Polk	
27121	Pope	
27123	Ramsey	
27125	Red Lake	
27127	Redwood	
27129	Renville	
27131	Rice	
27133	Rock	
27135	Roseau	
27137	St Louis	
27139	Scott	
27141	Sherburne	
27143	Sibley	
27145	Stearns	
27147	Steele	
27149	Stevens	
27151	Swift	
27153	Todd	
27155	Traverse	
27157	Wabasha	
27159	Wadena	
27161	Waseca	
27163	Washington	
27165	Watonwan	
27167	Wilkin	
27169	Winona	
27171	Wright	
27173	Yellow Medicine	
28001	Adams	
28003	Alcorn	
28005	Amite	
28007	Attala	
28009	Benton	
28011	Bolivar	
28013	Calhoun	
28015	Carroll	
28017	Chickasaw	
28019	Choctaw	
28021	Claiborne	
28023	Clarke	
28025	Clay	
28027	Coahoma	
28029	Copiah	
28031	Covington	
28033	De Soto	
28035	Forrest	
28037	Franklin	
28039	George	
28041	Greene	
28043	Grenada	
28045	Hancock	
28047	Harrison	
28049	Hinds	
28051	Holmes	
28053	Humphreys	
28055	Issaquena	
28057	Itawamba	
28059	Jackson	
28061	Jasper	
28063	Jefferson	
28065	Jefferson Davis	
28067	Jones	
28069	Kemper	
28071	Lafayette	
28073	Lamar	
28075	Lauderdale	
28077	Lawrence	
28079	Leake	
28081	Lee	
28083	Leflore	
28085	Lincoln	
28087	Lowndes	
28089	Madison	
28091	Marion	
28093	Marshall	
28095	Monroe	
28097	Montgomery	
28099	Neshoba	
28101	Newton	
28103	Noxubee	
28105	Oktibbeha	
28107	Panola	
28109	Pearl River	
28111	Perry	
28113	Pike	
28115	Pontotoc	
28117	Prentiss	
28119	Quitman	
28121	Rankin	
28123	Scott	
28125	Sharkey	
28127	Simpson	
28129	Smith	
28131	Stone	
28133	Sunflower	
28135	Tallahatchie	
28137	Tate	
28139	Tippah	
28141	Tishomingo	
28143	Tunica	
28145	Union	
28147	Walthall	
28149	Warren	
28151	Washington	
28153	Wayne	
28155	Webster	
28157	Wilkinson	
28159	Winston	
28161	Yalobusha	
28163	Yazoo	
29001	Adair	
29003	Andrew	
29005	Atchison	
29007	Audrain	
29009	Barry	
29011	Barton	
29013	Bates	
29015	Benton	
29017	Bollinger	
29019	Boone	
29021	Buchanan	
29023	Butler	
29025	Caldwell	
29027	Callaway	
29029	Camden	
29031	Cape Girardeau	
29033	Carroll	
29035	Carter	
29037	Cass	
29039	Cedar	
29041	Chariton	
29043	Christian	
29045	Clark	
29047	Clay	
29049	Clinton	
29051	Cole	
29053	Cooper	
29055	Crawford	
29057	Dade	
29059	Dallas	
29061	Daviess	
29063	De Kalb	
29065	Dent	
29067	Douglas	
29069	Dunklin	
29071	Franklin	
29073	Gasconade	
29075	Gentry	
29077	Greene	
29079	Grundy	
29081	Harrison	
29083	Henry	
29085	Hickory	
29087	Holt	
29089	Howard	
29091	Howell	
29093	Iron	
29095	Jackson	
29097	Jasper	
29099	Jefferson	
29101	Johnson	
29103	Knox	
29105	Laclede	
29107	Lafayette	
29109	Lawrence	
29111	Lewis	
29113	Lincoln	
29115	Linn	
29117	Livingston	
29119	McDonald	
29121	Macon	
29123	Madison	
29125	Maries	
29127	Marion	
29129	Mercer	
29131	Miller	
29133	Mississippi	
29135	Moniteau	
29137	Monroe	
29139	Montgomery	
29141	Morgan	
29143	New Madrid	
29145	Newton	
29147	Nodaway	
29149	Oregon	
29151	Osage	
29153	Ozark	
29155	Pemiscot	
29157	Perry	
29159	Pettis	
29161	Phelps	
29163	Pike	
29165	Platte	
29167	Polk	
29169	Pulaski	
29171	Putnam	
29173	Ralls	
29175	Randolph	
29177	Ray	
29179	Reynolds	
29181	Ripley	
29183	St Charles	
29185	St Clair	
29186	Ste. Genevieve	
29187	St Francois	
29189	St Louis	
29195	Saline	
29197	Schuyler	
29199	Scotland	
29201	Scott	
29203	Shannon	
29205	Shelby	
29207	Stoddard	
29209	Stone	
29211	Sullivan	
29213	Taney	
29215	Texas	
29217	Vernon	
29219	Warren	
29221	Washington	
29223	Wayne	
29225	Webster	
29227	Worth	
29229	Wright	
29510	St Louis City	
30001	Beaverhead	
30003	Big Horn	
30005	Blaine	
30007	Broadwater	
30009	Carbon	
30011	Carter	
30013	Cascade	
30015	Chouteau	
30017	Custer	
30019	Daniels	
30021	Dawson	
30023	Deer Lodge	
30025	Fallon	
30027	Fergus	
30029	Flathead	
30031	Gallatin	
30033	Garfield	
30035	Glacier	
30037	Golden Valley	
30039	Granite	
30041	Hill	
30043	Jefferson	
30045	Judith Basin	
30047	Lake	
30049	Lewis and Clark	
30051	Liberty	
30053	Lincoln	
30055	McCone	
30057	Madison	
30059	Meagher	
30061	Mineral	
30063	Missoula	
30065	Musselshell	
30067	Park	
30069	Petroleum	
30071	Phillips	
30073	Pondera	
30075	Powder River	
30077	Powell	
30079	Prairie	
30081	Ravalli	
30083	Richland	
30085	Roosevelt	
30087	Rosebud	
30089	Sanders	
30091	Sheridan	
30093	Silver Bow	
30095	Stillwater	
30097	Sweet Grass	
30099	Teton	
30101	Toole	
30103	Treasure	
30105	Valley	
30107	Wheatland	
30109	Wibaux	
30111	Yellowstone	
30113	Yellowstone Nat ParMT
31001	Adams	
31003	Antelope	
31005	Arthur	
31007	Banner	
31009	Blaine	
31011	Boone	
31013	Box Butte	
31015	Boyd	
31017	Brown	
31019	Buffalo	
31021	Burt	
31023	Butler	
31025	Cass	
31027	Cedar	
31029	Chase	
31031	Cherry	
31033	Cheyenne	
31035	Clay	
31037	Colfax	
31039	Cuming	
31041	Custer	
31043	Dakota	
31045	Dawes	
31047	Dawson	
31049	Deuel	
31051	Dixon	
31053	Dodge	
31055	Douglas	
31057	Dundy	
31059	Fillmore	
31061	Franklin	
31063	Frontier	
31065	Furnas	
31067	Gage	
31069	Garden	
31071	Garfield	
31073	Gosper	
31075	Grant	
31077	Greeley	
31079	Hall	
31081	Hamilton	
31083	Harlan	
31085	Hayes	
31087	Hitchcock	
31089	Holt	
31091	Hooker	
31093	Howard	
31095	Jefferson	
31097	Johnson	
31099	Kearney	
31101	Keith	
31103	Keya Paha	
31105	Kimball	
31107	Knox	
31109	Lancaster	
31111	Lincoln	
31113	Logan	
31115	Loup	
31117	McPherson	
31119	Madison	
31121	Merrick	
31123	Morrill	
31125	Nance	
31127	Nemaha	
31129	Nuckolls	
31131	Otoe	
31133	Pawnee	
31135	Perkins	
31137	Phelps	
31139	Pierce	
31141	Platte	
31143	Polk	
31145	Red Willow	
31147	Richardson	
31149	Rock	
31151	Saline	
31153	Sarpy	
31155	Saunders	
31157	Scotts Bluff	
31159	Seward	
31161	Sheridan	
31163	Sherman	
31165	Sioux	
31167	Stanton	
31169	Thayer	
31171	Thomas	
31173	Thurston	
31175	Valley	
31177	Washington	
31179	Wayne	
31181	Webster	
31183	Wheeler	
31185	York	
32001	Churchill	
32003	Clark	
32005	Douglas	
32007	Elko	
32009	Esmeralda	
32011	Eureka	
32013	Humboldt	
32015	Lander	
32017	Lincoln	
32019	Lyon	
32021	Mineral	
32023	Nye	
32027	Pershing	
32029	Storey	
32031	Washoe	
32033	White Pine	
32510	Carson City	
33001	Belknap	
33003	Carroll	
33005	Cheshire	
33007	Coos	
33009	Grafton	
33011	Hillsborough	
33013	Merrimack	
33015	Rockingham	
33017	Strafford	
33019	Sullivan	
34001	Atlantic	
34003	Bergen	
34005	Burlington	
34007	Camden	
34009	Cape May	
34011	Cumberland	
34013	Essex	
34015	Gloucester	
34017	Hudson	
34019	Hunterdon	
34021	Mercer	
34023	Middlesex	
34025	Monmouth	
34027	Morris	
34029	Ocean	
34031	Passaic	
34033	Salem	
34035	Somerset	
34037	Sussex	
34039	Union	
34041	Warren	
35001	Bernalillo	
35003	Catron	
35005	Chaves	
35006	Cibola	
35007	Colfax	
35009	Curry	
35011	De Baca	
35013	Dona Ana	
35015	Eddy	
35017	Grant	
35019	Guadalupe	
35021	Harding	
35023	Hidalgo	
35025	Lea	
35027	Lincoln	
35028	Los Alamos	
35029	Luna	
35031	McKinley	
35033	Mora	
35035	Otero	
35037	Quay	
35039	Rio Arriba	
35041	Roosevelt	
35043	Sandoval	
35045	San Juan	
35047	San Miguel	
35049	Santa Fe	
35051	Sierra	
35053	Socorro	
35055	Taos	
35057	Torrance	
35059	Union	
35061	Valencia	
36001	Albany	
36003	Allegany	
36005	Bronx	
36007	Broome	
36009	Cattaraugus	
36011	Cayuga	
36013	Chautauqua	
36015	Chemung	
36017	Chenango	
36019	Clinton	
36021	Columbia	
36023	Cortland	
36025	Delaware	
36027	Dutchess	
36029	Erie	
36031	Essex	
36033	Franklin	
36035	Fulton	
36037	Genesee	
36039	Greene	
36041	Hamilton	
36043	Herkimer	
36045	Jefferson	
36047	Kings	
36049	Lewis	
36051	Livingston	
36053	Madison	
36055	Monroe	
36057	Montgomery	
36059	Nassau	
36061	New York	
36063	Niagara	
36065	Oneida	
36067	Onondaga	
36069	Ontario	
36071	Orange	
36073	Orleans	
36075	Oswego	
36077	Otsego	
36079	Putnam	
36081	Queens	
36083	Rensselaer	
36085	Richmond	
36087	Rockland	
36089	St Lawrence	
36091	Saratoga	
36093	Schenectady	
36095	Schoharie	
36097	Schuyler	
36099	Seneca	
36101	Steuben	
36103	Suffolk	
36105	Sullivan	
36107	Tioga	
36109	Tompkins	
36111	Ulster	
36113	Warren	
36115	Washington	
36117	Wayne	
36119	Westchester	
36121	Wyoming	
36123	Yates	
37001	Alamance	
37003	Alexander	
37005	Alleghany	
37007	Anson	
37009	Ashe	
37011	Avery	
37013	Beaufort	
37015	Bertie	
37017	Bladen	
37019	Brunswick	
37021	Buncombe	
37023	Burke	
37025	Cabarrus	
37027	Caldwell	
37029	Camden	
37031	Carteret	
37033	Caswell	
37035	Catawba	
37037	Chatham	
37039	Cherokee	
37041	Chowan	
37043	Clay	
37045	Cleveland	
37047	Columbus	
37049	Craven	
37051	Cumberland	
37053	Currituck	
37055	Dare	
37057	Davidson	
37059	Davie	
37061	Duplin	
37063	Durham	
37065	Edgecombe	
37067	Forsyth	
37069	Franklin	
37071	Gaston	
37073	Gates	
37075	Graham	
37077	Granville	
37079	Greene	
37081	Guilford	
37083	Halifax	
37085	Harnett	
37087	Haywood	
37089	Henderson	
37091	Hertford	
37093	Hoke	
37095	Hyde	
37097	Iredell	
37099	Jackson	
37101	Johnston	
37103	Jones	
37105	Lee	
37107	Lenoir	
37109	Lincoln	
37111	McDowell	
37113	Macon	
37115	Madison	
37117	Martin	
37119	Mecklenburg	
37121	Mitchell	
37123	Montgomery	
37125	Moore	
37127	Nash	
37129	New Hanover	
37131	Northampton	
37133	Onslow	
37135	Orange	
37137	Pamlico	
37139	Pasquotank	
37141	Pender	
37143	Perquimans	
37145	Person	
37147	Pitt	
37149	Polk	
37151	Randolph	
37153	Richmond	
37155	Robeson	
37157	Rockingham	
37159	Rowan	
37161	Rutherford	
37163	Sampson	
37165	Scotland	
37167	Stanly	
37169	Stokes	
37171	Surry	
37173	Swain	
37175	Transylvania	
37177	Tyrrell	
37179	Union	
37181	Vance	
37183	Wake	
37185	Warren	
37187	Washington	
37189	Watauga	
37191	Wayne	
37193	Wilkes	
37195	Wilson	
37197	Yadkin	
37199	Yancey	
38001	Adams	
38003	Barnes	
38005	Benson	
38007	Billings	
38009	Bottineau	
38011	Bowman	
38013	Burke	
38015	Burleigh	
38017	Cass	
38019	Cavalier	
38021	Dickey	
38023	Divide	
38025	Dunn	
38027	Eddy	
38029	Emmons	
38031	Foster	
38033	Golden Valley	
38035	Grand Forks	
38037	Grant	
38039	Griggs	
38041	Hettinger	
38043	Kidder	
38045	La Moure	
38047	Logan	
38049	McHenry	
38051	McIntosh	
38053	McKenzie	
38055	McLean	
38057	Mercer	
38059	Morton	
38061	Mountrail	
38063	Nelson	
38065	Oliver	
38067	Pembina	
38069	Pierce	
38071	Ramsey	
38073	Ransom	
38075	Renville	
38077	Richland	
38079	Rolette	
38081	Sargent	
38083	Sheridan	
38085	Sioux	
38087	Slope	
38089	Stark	
38091	Steele	
38093	Stutsman	
38095	Towner	
38097	Traill	
38099	Walsh	
38101	Ward	
38103	Wells	
38105	Williams	
39001	Adams	
39003	Allen	
39005	Ashland	
39007	Ashtabula	
39009	Athens	
39011	Auglaize	
39013	Belmont	
39015	Brown	
39017	Butler	
39019	Carroll	
39021	Champaign	
39023	Clark	
39025	Clermont	
39027	Clinton	
39029	Columbiana	
39031	Coshocton	
39033	Crawford	
39035	Cuyahoga	
39037	Darke	
39039	Defiance	
39041	Delaware	
39043	Erie	
39045	Fairfield	
39047	Fayette	
39049	Franklin	
39051	Fulton	
39053	Gallia	
39055	Geauga	
39057	Greene	
39059	Guernsey	
39061	Hamilton	
39063	Hancock	
39065	Hardin	
39067	Harrison	
39069	Henry	
39071	Highland	
39073	Hocking	
39075	Holmes	
39077	Huron	
39079	Jackson	
39081	Jefferson	
39083	Knox	
39085	Lake	
39087	Lawrence	
39089	Licking	
39091	Logan	
39093	Lorain	
39095	Lucas	
39097	Madison	
39099	Mahoning	
39101	Marion	
39103	Medina	
39105	Meigs	
39107	Mercer	
39109	Miami	
39111	Monroe	
39113	Montgomery	
39115	Morgan	
39117	Morrow	
39119	Muskingum	
39121	Noble	
39123	Ottawa	
39125	Paulding	
39127	Perry	
39129	Pickaway	
39131	Pike	
39133	Portage	
39135	Preble	
39137	Putnam	
39139	Richland	
39141	Ross	
39143	Sandusky	
39145	Scioto	
39147	Seneca	
39149	Shelby	
39151	Stark	
39153	Summit	
39155	Trumbull	
39157	Tuscarawas	
39159	Union	
39161	Van Wert	
39163	Vinton	
39165	Warren	
39167	Washington	
39169	Wayne	
39171	Williams	
39173	Wood	
39175	Wyandot	
40001	Adair	
40003	Alfalfa	
40005	Atoka	
40007	Beaver	
40009	Beckham	
40011	Blaine	
40013	Bryan	
40015	Caddo	
40017	Canadian	
40019	Carter	
40021	Cherokee	
40023	Choctaw	
40025	Cimarron	
40027	Cleveland	
40029	Coal	
40031	Comanche	
40033	Cotton	
40035	Craig	
40037	Creek	
40039	Custer	
40041	Delaware	
40043	Dewey	
40045	Ellis	
40047	Garfield	
40049	Garvin	
40051	Grady	
40053	Grant	
40055	Greer	
40057	Harmon	
40059	Harper	
40061	Haskell	
40063	Hughes	
40065	Jackson	
40067	Jefferson	
40069	Johnston	
40071	Kay	
40073	Kingfisher	
40075	Kiowa	
40077	Latimer	
40079	Le Flore	
40081	Lincoln	
40083	Logan	
40085	Love	
40087	McClain	
40089	McCurtain	
40091	McIntosh	
40093	Major	
40095	Marshall	
40097	Mayes	
40099	Murray	
40101	Muskogee	
40103	Noble	
40105	Nowata	
40107	Okfuskee	
40109	Oklahoma	
40111	Okmulgee	
40113	Osage	
40115	Ottawa	
40117	Pawnee	
40119	Payne	
40121	Pittsburg	
40123	Pontotoc	
40125	Pottawatomie	
40127	Pushmataha	
40129	Roger Mills	
40131	Rogers	
40133	Seminole	
40135	Sequoyah	
40137	Stephens	
40139	Texas	
40141	Tillman	
40143	Tulsa	
40145	Wagoner	
40147	Washington	
40149	Washita	
40151	Woods	
40153	Woodward	
41001	Baker	OR
41003	Benton	OR
41005	Clackamas	OR
41007	Clatsop	OR
41009	Columbia	OR
41011	Coos	OR
41013	Crook	OR
41015	Curry	OR
41017	Deschutes	OR
41019	Douglas	OR
41021	Gilliam	OR
41023	Grant	OR
41025	Harney	OR
41027	Hood River	OR
41029	Jackson	OR
41031	Jefferson	OR
41033	Josephine	OR
41035	Klamath	OR
41037	Lake	OR
41039	Lane	OR
41041	Lincoln	OR
41043	Linn	OR
41045	Malheur	OR
41047	Marion	OR
41049	Morrow	OR
41051	Multnomah	OR
41053	Polk	OR
41055	Sherman	OR
41057	Tillamook	OR
41059	Umatilla	OR
41061	Union	OR
41063	Wallowa	OR
41065	Wasco	OR
41067	Washington	OR
41069	Wheeler	OR
41071	Yamhill	OR
42001	Adams	PA
42003	Allegheny	PA
42005	Armstrong	PA
42007	Beaver	PA
42009	Bedford	PA
42011	Berks	PA
42013	Blair	PA
42015	Bradford	PA
42017	Bucks	PA
42019	Butler	PA
42021	Cambria	PA
42023	Cameron	PA
42025	Carbon	PA
42027	Centre	PA
42029	Chester	PA
42031	Clarion	PA
42033	Clearfield	PA
42035	Clinton	PA
42037	Columbia	PA
42039	Crawford	PA
42041	Cumberland	PA
42043	Dauphin	PA
42045	Delaware	PA
42047	Elk	PA
42049	Erie	PA
42051	Fayette	PA
42053	Forest	PA
42055	Franklin	PA
42057	Fulton	PA
42059	Greene	PA
42061	Huntingdon	PA
42063	Indiana	PA
42065	Jefferson	PA
42067	Juniata	PA
42069	Lackawanna	PA
42071	Lancaster	PA
42073	Lawrence	PA
42075	Lebanon	PA
42077	Lehigh	PA
42079	Luzerne	PA
42081	Lycoming	PA
42083	McKean	PA
42085	Mercer	PA
42087	Mifflin	PA
42089	Monroe	PA
42091	Montgomery	PA
42093	Montour	PA
42095	Northampton	PA
42097	Northumberland	PA
42099	Perry	PA
42101	Philadelphia	PA
42103	Pike	PA
42105	Potter	PA
42107	Schuylkill	PA
42109	Snyder	PA
42111	Somerset	PA
42113	Sullivan	PA
42115	Susquehanna	PA
42117	Tioga	PA
42119	Union	PA
42121	Venango	PA
42123	Warren	PA
42125	Washington	PA
42127	Wayne	PA
42129	Westmoreland	PA
42131	Wyoming	PA
42133	York	PA
44001	Bristol	RI
44003	Kent	RI
44005	Newport	RI
44007	Providence	RI
44009	Washington	RI
45001	Abbeville	SC
45003	Aiken	SC
45005	Allendale	SC
45007	Anderson	SC
45009	Bamberg	SC
45011	Barnwell	SC
45013	Beaufort	SC
45015	Berkeley	SC
45017	Calhoun	SC
45019	Charleston	SC
45021	Cherokee	SC
45023	Chester	SC
45025	Chesterfield	SC
45027	Clarendon	SC
45029	Colleton	SC
45031	Darlington	SC
45033	Dillon	SC
45035	Dorchester	SC
45037	Edgefield	SC
45039	Fairfield	SC
45041	Florence	SC
45043	Georgetown	SC
45045	Greenville	SC
45047	Greenwood	SC
45049	Hampton	SC
45051	Horry	SC
45053	Jasper	SC
45055	Kershaw	SC
45057	Lancaster	SC
45059	Laurens	SC
45061	Lee	SC
45063	Lexington	SC
45065	McCormick	SC
45067	Marion	SC
45069	Marlboro	SC
45071	Newberry	SC
45073	Oconee	SC
45075	Orangeburg	SC
45077	Pickens	SC
45079	Richland	SC
45081	Saluda	SC
45083	Spartanburg	SC
45085	Sumter	SC
45087	Union	SC
45089	Williamsburg	SC
45091	York	SC
46003	Aurora	SD
46005	Beadle	SD
46007	Bennett	SD
46009	Bon Homme	SD
46011	Brookings	SD
46013	Brown	SD
46015	Brule	SD
46017	Buffalo	SD
46019	Butte	SD
46021	Campbell	SD
46023	Charles Mix	SD
46025	Clark	SD
46027	Clay	SD
46029	Codington	SD
46031	Corson	SD
46033	Custer	SD
46035	Davison	SD
46037	Day	SD
46039	Deuel	SD
46041	Dewey	SD
46043	Douglas	SD
46045	Edmunds	SD
46047	Fall River	SD
46049	Faulk	SD
46051	Grant	SD
46053	Gregory	SD
46055	Haakon	SD
46057	Hamlin	SD
46059	Hand	SD
46061	Hanson	SD
46063	Harding	SD
46065	Hughes	SD
46067	Hutchinson	SD
46069	Hyde	SD
46071	Jackson	SD
46073	Jerauld	SD
46075	Jones	SD
46077	Kingsbury	SD
46079	Lake	SD
46081	Lawrence	SD
46083	Lincoln	SD
46085	Lyman	SD
46087	McCook	SD
46089	McPherson	SD
46091	Marshall	SD
46093	Meade	SD
46095	Mellette	SD
46097	Miner	SD
46099	Minnehaha	SD
46101	Moody	SD
46103	Pennington	SD
46105	Perkins	SD
46107	Potter	SD
46109	Roberts	SD
46111	Sanborn	SD
46113	Shannon	SD
46115	Spink	SD
46117	Stanley	SD
46119	Sully	SD
46121	Todd	SD
46123	Tripp	SD
46125	Turner	SD
46127	Union	SD
46129	Walworth	SD
46135	Yankton	SD
46137	Ziebach	SD
47001	Anderson	TN
47003	Bedford	TN
47005	Benton	TN
47007	Bledsoe	TN
47009	Blount	TN
47011	Bradley	TN
47013	Campbell	TN
47015	Cannon	TN
47017	Carroll	TN
47019	Carter	TN
47021	Cheatham	TN
47023	Chester	TN
47025	Claiborne	TN
47027	Clay	TN
47029	Cocke	TN
47031	Coffee	TN
47033	Crockett	TN
47035	Cumberland	TN
47037	Davidson	TN
47039	Decatur	TN
47041	De Kalb	TN
47043	Dickson	TN
47045	Dyer	TN
47047	Fayette	TN
47049	Fentress	TN
47051	Franklin	TN
47053	Gibson	TN
47055	Giles	TN
47057	Grainger	TN
47059	Greene	TN
47061	Grundy	TN
47063	Hamblen	TN
47065	Hamilton	TN
47067	Hancock	TN
47069	Hardeman	TN
47071	Hardin	TN
47073	Hawkins	TN
47075	Haywood	TN
47077	Henderson	TN
47079	Henry	TN
47081	Hickman	TN
47083	Houston	TN
47085	Humphreys	TN
47087	Jackson	TN
47089	Jefferson	TN
47091	Johnson	TN
47093	Knox	TN
47095	Lake	TN
47097	Lauderdale	TN
47099	Lawrence	TN
47101	Lewis	TN
47103	Lincoln	TN
47105	Loudon	TN
47107	McMinn	TN
47109	McNairy	TN
47111	Macon	TN
47113	Madison	TN
47115	Marion	TN
47117	Marshall	TN
47119	Maury	TN
47121	Meigs	TN
47123	Monroe	TN
47125	Montgomery	TN
47127	Moore	TN
47129	Morgan	TN
47131	Obion	TN
47133	Overton	TN
47135	Perry	TN
47137	Pickett	TN
47139	Polk	TN
47141	Putnam	TN
47143	Rhea	TN
47145	Roane	TN
47147	Robertson	TN
47149	Rutherford	TN
47151	Scott	TN
47153	Sequatchie	TN
47155	Sevier	TN
47157	Shelby	TN
47159	Smith	TN
47161	Stewart	TN
47163	Sullivan	TN
47165	Sumner	TN
47167	Tipton	TN
47169	Trousdale	TN
47171	Unicoi	TN
47173	Union	TN
47175	Van Buren	TN
47177	Warren	TN
47179	Washington	TN
47181	Wayne	TN
47183	Weakley	TN
47185	White	TN
47187	Williamson	TN
47189	Wilson	TN
48001	Anderson	TX
48003	Andrews	TX
48005	Angelina	TX
48007	Aransas	TX
48009	Archer	TX
48011	Armstrong	TX
48013	Atascosa	TX
48015	Austin	TX
48017	Bailey	TX
48019	Bandera	TX
48021	Bastrop	TX
48023	Baylor	TX
48025	Bee	TX
48027	Bell	TX
48029	Bexar	TX
48031	Blanco	TX
48033	Borden	TX
48035	Bosque	TX
48037	Bowie	TX
48039	Brazoria	TX
48041	Brazos	TX
48043	Brewster	TX
48045	Briscoe	TX
48047	Brooks	TX
48049	Brown	TX
48051	Burleson	TX
48053	Burnet	TX
48055	Caldwell	TX
48057	Calhoun	TX
48059	Callahan	TX
48061	Cameron	TX
48063	Camp	TX
48065	Carson	TX
48067	Cass	TX
48069	Castro	TX
48071	Chambers	TX
48073	Cherokee	TX
48075	Childress	TX
48077	Clay	TX
48079	Cochran	TX
48081	Coke	TX
48083	Coleman	TX
48085	Collin	TX
48087	Collingsworth	TX
48089	Colorado	TX
48091	Comal	TX
48093	Comanche	TX
48095	Concho	TX
48097	Cooke	TX
48099	Coryell	TX
48101	Cottle	TX
48103	Crane	TX
48105	Crockett	TX
48107	Crosby	TX
48109	Culberson	TX
48111	Dallam	TX
48113	Dallas	TX
48115	Dawson	TX
48117	Deaf Smith	TX
48119	Delta	TX
48121	Denton	TX
48123	De Witt	TX
48125	Dickens	TX
48127	Dimmit	TX
48129	Donley	TX
48131	Duval	TX
48133	Eastland	TX
48135	Ector	TX
48137	Edwards	TX
48139	Ellis	TX
48141	El Paso	TX
48143	Erath	TX
48145	Falls	TX
48147	Fannin	TX
48149	Fayette	TX
48151	Fisher	TX
48153	Floyd	TX
48155	Foard	TX
48157	Fort Bend	TX
48159	Franklin	TX
48161	Freestone	TX
48163	Frio	TX
48165	Gaines	TX
48167	Galveston	TX
48169	Garza	TX
48171	Gillespie	TX
48173	Glasscock	TX
48175	Goliad	TX
48177	Gonzales	TX
48179	Gray	TX
48181	Grayson	TX
48183	Gregg	TX
48185	Grimes	TX
48187	Guadalupe	TX
48189	Hale	TX
48191	Hall	TX
48193	Hamilton	TX
48195	Hansford	TX
48197	Hardeman	TX
48199	Hardin	TX
48201	Harris	TX
48203	Harrison	TX
48205	Hartley	TX
48207	Haskell	TX
48209	Hays	TX
48211	Hemphill	TX
48213	Henderson	TX
48215	Hidalgo	TX
48217	Hill	TX
48219	Hockley	TX
48221	Hood	TX
48223	Hopkins	TX
48225	Houston	TX
48227	Howard	TX
48229	Hudspeth	TX
48231	Hunt	TX
48233	Hutchinson	TX
48235	Irion	TX
48237	Jack	TX
48239	Jackson	TX
48241	Jasper	TX
48243	Jeff Davis	TX
48245	Jefferson	TX
48247	Jim Hogg	TX
48249	Jim Wells	TX
48251	Johnson	TX
48253	Jones	TX
48255	Karnes	TX
48257	Kaufman	TX
48259	Kendall	TX
48261	Kenedy	TX
48263	Kent	TX
48265	Kerr	TX
48267	Kimble	TX
48269	King	TX
48271	Kinney	TX
48273	Kleberg	TX
48275	Knox	TX
48277	Lamar	TX
48279	Lamb	TX
48281	Lampasas	TX
48283	La Salle	TX
48285	Lavaca	TX
48287	Lee	TX
48289	Leon	TX
48291	Liberty	TX
48293	Limestone	TX
48295	Lipscomb	TX
48297	Live Oak	TX
48299	Llano	TX
48301	Loving	TX
48303	Lubbock	TX
48305	Lynn	TX
48307	McCulloch	TX
48309	McLennan	TX
48311	McMullen	TX
48313	Madison	TX
48315	Marion	TX
48317	Martin	TX
48319	Mason	TX
48321	Matagorda	TX
48323	Maverick	TX
48325	Medina	TX
48327	Menard	TX
48329	Midland	TX
48331	Milam	TX
48333	Mills	TX
48335	Mitchell	TX
48337	Montague	TX
48339	Montgomery	TX
48341	Moore	TX
48343	Morris	TX
48345	Motley	TX
48347	Nacogdoches	TX
48349	Navarro	TX
48351	Newton	TX
48353	Nolan	TX
48355	Nueces	TX
48357	Ochiltree	TX
48359	Oldham	TX
48361	Orange	TX
48363	Palo Pinto	TX
48365	Panola	TX
48367	Parker	TX
48369	Parmer	TX
48371	Pecos	TX
48373	Polk	TX
48375	Potter	TX
48377	Presidio	TX
48379	Rains	TX
48381	Randall	TX
48383	Reagan	TX
48385	Real	TX
48387	Red River	TX
48389	Reeves	TX
48391	Refugio	TX
48393	Roberts	TX
48395	Robertson	TX
48397	Rockwall	TX
48399	Runnels	TX
48401	Rusk	TX
48403	Sabine	TX
48405	San Augustine	TX
48407	San Jacinto	TX
48409	San Patricio	TX
48411	San Saba	TX
48413	Schleicher	TX
48415	Scurry	TX
48417	Shackelford	TX
48419	Shelby	TX
48421	Sherman	TX
48423	Smith	TX
48425	Somervell	TX
48427	Starr	TX
48429	Stephens	TX
48431	Sterling	TX
48433	Stonewall	TX
48435	Sutton	TX
48437	Swisher	TX
48439	Tarrant	TX
48441	Taylor	TX
48443	Terrell	TX
48445	Terry	TX
48447	Throckmorton	TX
48449	Titus	TX
48451	Tom Green	TX
48453	Travis	TX
48455	Trinity	TX
48457	Tyler	TX
48459	Upshur	TX
48461	Upton	TX
48463	Uvalde	TX
48465	Val Verde	TX
48467	Van Zandt	TX
48469	Victoria	TX
48471	Walker	TX
48473	Waller	TX
48475	Ward	TX
48477	Washington	TX
48479	Webb	TX
48481	Wharton	TX
48483	Wheeler	TX
48485	Wichita	TX
48487	Wilbarger	TX
48489	Willacy	TX
48491	Williamson	TX
48493	Wilson	TX
48495	Winkler	TX
48497	Wise	TX
48499	Wood	TX
48501	Yoakum	TX
48503	Young	TX
48505	Zapata	TX
48507	Zavala	TX
49001	Beaver	UT
49003	Box Elder	UT
49005	Cache	UT
49007	Carbon	UT
49009	Daggett	UT
49011	Davis	UT
49013	Duchesne	UT
49015	Emery	UT
49017	Garfield	UT
49019	Grand	UT
49021	Iron	UT
49023	Juab	UT
49025	Kane	UT
49027	Millard	UT
49029	Morgan	UT
49031	Piute	UT
49033	Rich	UT
49035	Salt Lake	UT
49037	San Juan	UT
49039	Sanpete	UT
49041	Sevier	UT
49043	Summit	UT
49045	Tooele	UT
49047	Uintah	UT
49049	Utah	UT
49051	Wasatch	UT
49053	Washington	UT
49055	Wayne	UT
49057	Weber	UT
50001	Addison	VT
50003	Bennington	VT
50005	Caledonia	VT
50007	Chittenden	VT
50009	Essex	VT
50011	Franklin	VT
50013	Grand Isle	VT
50015	Lamoille	VT
50017	Orange	VT
50019	Orleans	VT
50021	Rutland	VT
50023	Washington	VT
50025	Windham	VT
50027	Windsor	VT
51001	Accomack	VA
51003	Albemarle	VA
51005	Alleghany	VA
51007	Amelia	VA
51009	Amherst	VA
51011	Appomattox	VA
51013	Arlington	VA
51015	Augusta	VA
51017	Bath	VA
51019	Bedford	VA
51021	Bland	VA
51023	Botetourt	VA
51025	Brunswick	VA
51027	Buchanan	VA
51029	Buckingham	VA
51031	Campbell	VA
51033	Caroline	VA
51035	Carroll	VA
51036	Charles City	VA
51037	Charlotte	VA
51041	Chesterfield	VA
51043	Clarke	VA
51045	Craig	VA
51047	Culpeper	VA
51049	Cumberland	VA
51051	Dickenson	VA
51053	Dinwiddie	VA
51057	Essex	VA
51059	Fairfax	VA
51061	Fauquier	VA
51063	Floyd	VA
51065	Fluvanna	VA
51067	Franklin	VA
51069	Frederick	VA
51071	Giles	VA
51073	Gloucester	VA
51075	Goochland	VA
51077	Grayson	VA
51079	Greene	VA
51081	Greensville	VA
51083	Halifax	VA
51085	Hanover	VA
51087	Henrico	VA
51089	Henry	VA
51091	Highland	VA
51093	Isle of Wight	VA
51095	James City	VA
51097	King and Queen	VA
51099	King George	VA
51101	King William	VA
51103	Lancaster	VA
51105	Lee	VA
51107	Loudoun	VA
51109	Louisa	VA
51111	Lunenburg	VA
51113	Madison	VA
51115	Mathews	VA
51117	Mecklenburg	VA
51119	Middlesex	VA
51121	Montgomery	VA
51125	Nelson	VA
51127	New Kent	VA
51131	Northampton	VA
51133	Northumberland	VA
51135	Nottoway	VA
51137	Orange	VA
51139	Page	VA
51141	Patrick	VA
51143	Pittsylvania	VA
51145	Powhatan	VA
51147	Prince Edward	VA
51149	Prince George	VA
51153	Prince William	VA
51155	Pulaski	VA
51157	Rappahannock	VA
51159	Richmond	VA
51161	Roanoke	VA
51163	Rockbridge	VA
51165	Rockingham	VA
51167	Russell	VA
51169	Scott	VA
51171	Shenandoah	VA
51173	Smyth	VA
51175	Southampton	VA
51177	Spotsylvania	VA
51179	Stafford	VA
51181	Surry	VA
51183	Sussex	VA
51185	Tazewell	VA
51187	Warren	VA
51191	Washington	VA
51193	Westmoreland	VA
51195	Wise	VA
51197	Wythe	VA
51199	York	VA
51510	Alexandria City	VA
51515	Bedford City	VA
51520	Bristol City	VA
51530	Buena Vista City	VA
51540	Charlottesville City	VA
51550	Chesapeake City	VA
51560	Clifton Forge City	VA
51570	Colonial Heights Cit	VA
51580	Covington City	VA
51590	Danville City	VA
51595	Emporia City	VA
51600	Fairfax City	VA
51610	Falls Church City	VA
51620	Franklin City	VA
51630	Fredericksburg City	VA
51640	Galax City	VA
51650	Hampton City	VA
51660	Harrisonburg City	VA
51670	Hopewell City	VA
51678	Lexington City	VA
51680	Lynchburg City	VA
51683	Manassas City	VA
51685	Manassas Park City	VA
51690	Martinsville City	VA
51700	Newport News City	VA
51710	Norfolk City	VA
51720	Norton City	VA
51730	Petersburg City	VA
51735	Poquoson City	VA
51740	Portsmouth City	VA
51750	Radford City	VA
51760	Richmond City	VA
51770	Roanoke City	VA
51775	Salem City	VA
51780	South Boston City	VA
51790	Staunton City	VA
51800	Suffolk City	VA
51810	Virginia Beach City	VA
51820	Waynesboro City	VA
51830	Williamsburg City	VA
51840	Winchester City	VA
53001	Adams	WA
53003	Asotin	WA
53005	Benton	WA
53007	Chelan	WA
53009	Clallam	WA
53011	Clark	WA
53013	Columbia	WA
53015	Cowlitz	WA
53017	Douglas	WA
53019	Ferry	WA
53021	Franklin	WA
53023	Garfield	WA
53025	Grant	WA
53027	Grays Harbor	WA
53029	Island	WA
53031	Jefferson	WA
53033	King	WA
53035	Kitsap	WA
53037	Kittitas	WA
53039	Klickitat	WA
53041	Lewis	WA
53043	Lincoln	WA
53045	Mason	WA
53047	Okanogan	WA
53049	Pacific	WA
53051	Pend Oreille	WA
53053	Pierce	WA
53055	San Juan	WA
53057	Skagit	WA
53059	Skamania	WA
53061	Snohomish	WA
53063	Spokane	WA
53065	Stevens	WA
53067	Thurston	WA
53069	Wahkiakum	WA
53071	Walla Walla	WA
53073	Whatcom	WA
53075	Whitman	WA
53077	Yakima	WA
54001	Barbour	WV
54003	Berkeley	WV
54005	Boone	WV
54007	Braxton	WV
54009	Brooke	WV
54011	Cabell	WV
54013	Calhoun	WV
54015	Clay	WV
54017	Doddridge	WV
54019	Fayette	WV
54021	Gilmer	WV
54023	Grant	WV
54025	Greenbrier	WV
54027	Hampshire	WV
54029	Hancock	WV
54031	Hardy	WV
54033	Harrison	WV
54035	Jackson	WV
54037	Jefferson	WV
54039	Kanawha	WV
54041	Lewis	WV
54043	Lincoln	WV
54045	Logan	WV
54047	McDowell	WV
54049	Marion	WV
54051	Marshall	WV
54053	Mason	WV
54055	Mercer	WV
54057	Mineral	WV
54059	Mingo	WV
54061	Monongalia	WV
54063	Monroe	WV
54065	Morgan	WV
54067	Nicholas	WV
54069	Ohio	WV
54071	Pendleton	WV
54073	Pleasants	WV
54075	Pocahontas	WV
54077	Preston	WV
54079	Putnam	WV
54081	Raleigh	WV
54083	Randolph	WV
54085	Ritchie	WV
54087	Roane	WV
54089	Summers	WV
54091	Taylor	WV
54093	Tucker	WV
54095	Tyler	WV
54097	Upshur	WV
54099	Wayne	WV
54101	Webster	WV
54103	Wetzel	WV
54105	Wirt	WV
54107	Wood	WV
54109	Wyoming	WV
55001	Adams	WI
55003	Ashland	WI
55005	Barron	WI
55007	Bayfield	WI
55009	Brown	WI
55011	Buffalo	WI
55013	Burnett	WI
55015	Calumet	WI
55017	Chippewa	WI
55019	Clark	WI
55021	Columbia	WI
55023	Crawford	WI
55025	Dane	WI
55027	Dodge	WI
55029	Door	WI
55031	Douglas	WI
55033	Dunn	WI
55035	Eau Claire	WI
55037	Florence	WI
55039	Fond du Lac	WI
55041	Forest	WI
55043	Grant	WI
55045	Green	WI
55047	Green Lake	WI
55049	Iowa	WI
55051	Iron	WI
55053	Jackson	WI
55055	Jefferson	WI
55057	Juneau	WI
55059	Kenosha	WI
55061	Kewaunee	WI
55063	La Crosse	WI
55065	Lafayette	WI
55067	Langlade	WI
55069	Lincoln	WI
55071	Manitowoc	WI
55073	Marathon	WI
55075	Marinette	WI
55077	Marquette	WI
55078	Menominee	WI
55079	Milwaukee	WI
55081	Monroe	WI
55083	Oconto	WI
55085	Oneida	WI
55087	Outagamie	WI
55089	Ozaukee	WI
55091	Pepin	WI
55093	Pierce	WI
55095	Polk	WI
55097	Portage	WI
55099	Price	WI
55101	Racine	WI
55103	Richland	WI
55105	Rock	WI
55107	Rusk	WI
55109	St Croix	WI
55111	Sauk	WI
55113	Sawyer	WI
55115	Shawano	WI
55117	Sheboygan	WI
55119	Taylor	WI
55121	Trempealeau	WI
55123	Vernon	WI
55125	Vilas	WI
55127	Walworth	WI
55129	Washburn	WI
55131	Washington	WI
55133	Waukesha	WI
55135	Waupaca	WI
55137	Waushara	WI
55139	Winnebago	WI
55141	Wood	WI
56001	Albany	WY
56003	Big Horn	WY
56005	Campbell	WY
56007	Carbon	WY
56009	Converse	WY
56011	Crook	WY
56013	Fremont	WY
56015	Goshen	WY
56017	Hot Springs	WY
56019	Johnson	WY
56021	Laramie	WY
56023	Lincoln	WY
56025	Natrona	WY
56027	Niobrara	WY
56029	Park	WY
56031	Platte	WY
56033	Sheridan	WY
56035	Sublette	WY
56037	Sweetwater	WY
56039	Teton	WY
56041	Uinta	WY
56043	Washakie	WY
56045	Weston	WY