
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
            
        }
    },
    "Kansas"                 :  {
        fips     : "20",
        rateOfNew: .30,
        survival : 74.84,
        creation : 3.99,
        counties : {
            
        }
    },
    "Kentucky"               :  {
        fips     : "21",
        rateOfNew: .27,
        survival : 79.09,
        creation : 3.71,
        counties : {
            
        }
    },
    "Louisiana"              : {
        fips     : "22",
        rateOfNew: .37,
        survival : 81.08,
        creation : 4.26,
        counties : {
            
        }
    },
    "Maine"                  : {
        fips     : "23",
        rateOfNew: .40,
        survival : 78.82,
        creation : 4.58,
        counties : {
            
        }
    },
    "Maryland"               :  {
        fips     : "24",
        rateOfNew: .26,
        survival : 76.65,
        creation : 4.01,
        counties : {
            
        }
    },
    "Massachusetts"          : {
        fips     : "25",
        rateOfNew: .27,
        survival : 80.53,
        creation : 5.13,
        counties : {
            
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
	








"Adams	": "001",
"Allen	": "003",
"Bartholomew	": "005",
"Benton	": "007",
"Blackford	": "009",
"Boone	": "011",
"Brown	": "013",
"Carroll	": "015",
"Cass	": "017",
"Clark	": "019",
"Clay	": "021",
"Clinton	": "023",
"Crawford	": "025",
"Daviess	": "027",
"Dearborn	": "029",
"Decatur	": "031",
"De Kalb	": "033",
"Delaware	": "035",
"Dubois	": "037",
"Elkhart	": "039",
"Fayette	": "041",
"Floyd	": "043",
"Fountain	": "045",
"Franklin	": "047",
"Fulton	": "049",
"Gibson	": "051",
"Grant	": "053",
"Greene	": "055",
"Hamilton	": "057",
"Hancock	": "059",
"Harrison	": "061",
"Hendricks	": "063",
"Henry	": "065",
"Howard	": "067",
"Huntington	": "069",
"Jackson	": "071",
"Jasper	": "073",
"Jay	": "075",
"Jefferson	": "077",
"Jennings	": "079",
"Johnson	": "081",
"Knox	": "083",
"Kosciusko	": "085",
"La Grange	": "087",
"Lake	": "089",
"La Porte	": "091",
"Lawrence	": "093",
"Madison	": "095",
"Marion	": "097",
"Marshall	": "099",
"Martin	": "101",
"Miami	": "103",
"Monroe	": "105",
"Montgomery	": "107",
"Morgan	": "109",
"Newton	": "111",
"Noble	": "113",
"Ohio	": "115",
"Orange	": "117",
"Owen	": "119",
"Parke	": "121",
"Perry	": "123",
"Pike	": "125",
"Porter	": "127",
"Posey	": "129",
"Pulaski	": "131",
"Putnam	": "133",
"Randolph	": "135",
"Ripley	": "137",
"Rush	": "139",
"St Joseph	": "141",
"Scott	": "143",
"Shelby	": "145",
"Spencer	": "147",
"Starke	": "149",
"Steuben	": "151",
"Sullivan	": "153",
"Switzerland	": "155",
"Tippecanoe	": "157",
"Tipton	": "159",
"Union	": "161",
"Vanderburgh	": "163",
"Vermillion	": "165",
"Vigo	": "167",
"Wabash	": "169",
"Warren	": "171",
"Warrick	": "173",
"Washington	": "175",
"Wayne	": "177",
"Wells	": "179",
"White	": "181",
"Whitley	": "183",

19001	Adair	
19003	Adams	
19005	Allamakee	
19007	Appanoose	IA
19009	Audubon	IA
19011	Benton	IA
19013	Black Hawk	IA
19015	Boone	IA
19017	Bremer	IA
19019	Buchanan	IA
19021	Buena Vista	IA
19023	Butler	IA
19025	Calhoun	IA
19027	Carroll	IA
19029	Cass	IA
19031	Cedar	IA
19033	Cerro Gordo	IA
19035	Cherokee	IA
19037	Chickasaw	IA
19039	Clarke	IA
19041	Clay	IA
19043	Clayton	IA
19045	Clinton	IA
19047	Crawford	IA
19049	Dallas	IA
19051	Davis	IA
19053	Decatur	IA
19055	Delaware	IA
19057	Des Moines	IA
19059	Dickinson	IA
19061	Dubuque	IA
19063	Emmet	IA
19065	Fayette	IA
19067	Floyd	IA
19069	Franklin	IA
19071	Fremont	IA
19073	Greene	IA
19075	Grundy	IA
19077	Guthrie	IA
19079	Hamilton	IA
19081	Hancock	IA
19083	Hardin	IA
19085	Harrison	IA
19087	Henry	IA
19089	Howard	IA
19091	Humboldt	IA
19093	Ida	IA
19095	Iowa	IA
19097	Jackson	IA
19099	Jasper	IA
19101	Jefferson	IA
19103	Johnson	IA
19105	Jones	IA
19107	Keokuk	IA
19109	Kossuth	IA
19111	Lee	IA
19113	Linn	IA
19115	Louisa	IA
19117	Lucas	IA
19119	Lyon	IA
19121	Madison	IA
19123	Mahaska	IA
19125	Marion	IA
19127	Marshall	IA
19129	Mills	IA
19131	Mitchell	IA
19133	Monona	IA
19135	Monroe	IA
19137	Montgomery	IA
19139	Muscatine	IA
19141	O Brien	IA
19143	Osceola	IA
19145	Page	IA
19147	Palo Alto	IA
19149	Plymouth	IA
19151	Pocahontas	IA
19153	Polk	IA
19155	Pottawattamie	IA
19157	Poweshiek	IA
19159	Ringgold	IA
19161	Sac	IA
19163	Scott	IA
19165	Shelby	IA
19167	Sioux	IA
19169	Story	IA
19171	Tama	IA
19173	Taylor	IA
19175	Union	IA
19177	Van Buren	IA
19179	Wapello	IA
19181	Warren	IA
19183	Washington	IA
19185	Wayne	IA
19187	Webster	IA
19189	Winnebago	IA
19191	Winneshiek	IA
19193	Woodbury	IA
19195	Worth	IA
19197	Wright	IA
20001	Allen	KS
20003	Anderson	KS
20005	Atchison	KS
20007	Barber	KS
20009	Barton	KS
20011	Bourbon	KS
20013	Brown	KS
20015	Butler	KS
20017	Chase	KS
20019	Chautauqua	KS
20021	Cherokee	KS
20023	Cheyenne	KS
20025	Clark	KS
20027	Clay	KS
20029	Cloud	KS
20031	Coffey	KS
20033	Comanche	KS
20035	Cowley	KS
20037	Crawford	KS
20039	Decatur	KS
20041	Dickinson	KS
20043	Doniphan	KS
20045	Douglas	KS
20047	Edwards	KS
20049	Elk	KS
20051	Ellis	KS
20053	Ellsworth	KS
20055	Finney	KS
20057	Ford	KS
20059	Franklin	KS
20061	Geary	KS
20063	Gove	KS
20065	Graham	KS
20067	Grant	KS
20069	Gray	KS
20071	Greeley	KS
20073	Greenwood	KS
20075	Hamilton	KS
20077	Harper	KS
20079	Harvey	KS
20081	Haskell	KS
20083	Hodgeman	KS
20085	Jackson	KS
20087	Jefferson	KS
20089	Jewell	KS
20091	Johnson	KS
20093	Kearny	KS
20095	Kingman	KS
20097	Kiowa	KS
20099	Labette	KS
20101	Lane	KS
20103	Leavenworth	KS
20105	Lincoln	KS
20107	Linn	KS
20109	Logan	KS
20111	Lyon	KS
20113	McPherson	KS
20115	Marion	KS
20117	Marshall	KS
20119	Meade	KS
20121	Miami	KS
20123	Mitchell	KS
20125	Montgomery	KS
20127	Morris	KS
20129	Morton	KS
20131	Nemaha	KS
20133	Neosho	KS
20135	Ness	KS
20137	Norton	KS
20139	Osage	KS
20141	Osborne	KS
20143	Ottawa	KS
20145	Pawnee	KS
20147	Phillips	KS
20149	Pottawatomie	KS
20151	Pratt	KS
20153	Rawlins	KS
20155	Reno	KS
20157	Republic	KS
20159	Rice	KS
20161	Riley	KS
20163	Rooks	KS
20165	Rush	KS
20167	Russell	KS
20169	Saline	KS
20171	Scott	KS
20173	Sedgwick	KS
20175	Seward	KS
20177	Shawnee	KS
20179	Sheridan	KS
20181	Sherman	KS
20183	Smith	KS
20185	Stafford	KS
20187	Stanton	KS
20189	Stevens	KS
20191	Sumner	KS
20193	Thomas	KS
20195	Trego	KS
20197	Wabaunsee	KS
20199	Wallace	KS
20201	Washington	KS
20203	Wichita	KS
20205	Wilson	KS
20207	Woodson	KS
20209	Wyandotte	KS
21001	Adair	KY
21003	Allen	KY
21005	Anderson	KY
21007	Ballard	KY
21009	Barren	KY
21011	Bath	KY
21013	Bell	KY
21015	Boone	KY
21017	Bourbon	KY
21019	Boyd	KY
21021	Boyle	KY
21023	Bracken	KY
21025	Breathitt	KY
21027	Breckinridge	KY
21029	Bullitt	KY
21031	Butler	KY
21033	Caldwell	KY
21035	Calloway	KY
21037	Campbell	KY
21039	Carlisle	KY
21041	Carroll	KY
21043	Carter	KY
21045	Casey	KY
21047	Christian	KY
21049	Clark	KY
21051	Clay	KY
21053	Clinton	KY
21055	Crittenden	KY
21057	Cumberland	KY
21059	Daviess	KY
21061	Edmonson	KY
21063	Elliott	KY
21065	Estill	KY
21067	Fayette	KY
21069	Fleming	KY
21071	Floyd	KY
21073	Franklin	KY
21075	Fulton	KY
21077	Gallatin	KY
21079	Garrard	KY
21081	Grant	KY
21083	Graves	KY
21085	Grayson	KY
21087	Green	KY
21089	Greenup	KY
21091	Hancock	KY
21093	Hardin	KY
21095	Harlan	KY
21097	Harrison	KY
21099	Hart	KY
21101	Henderson	KY
21103	Henry	KY
21105	Hickman	KY
21107	Hopkins	KY
21109	Jackson	KY
21111	Jefferson	KY
21113	Jessamine	KY
21115	Johnson	KY
21117	Kenton	KY
21119	Knott	KY
21121	Knox	KY
21123	Larue	KY
21125	Laurel	KY
21127	Lawrence	KY
21129	Lee	KY
21131	Leslie	KY
21133	Letcher	KY
21135	Lewis	KY
21137	Lincoln	KY
21139	Livingston	KY
21141	Logan	KY
21143	Lyon	KY
21145	McCracken	KY
21147	McCreary	KY
21149	McLean	KY
21151	Madison	KY
21153	Magoffin	KY
21155	Marion	KY
21157	Marshall	KY
21159	Martin	KY
21161	Mason	KY
21163	Meade	KY
21165	Menifee	KY
21167	Mercer	KY
21169	Metcalfe	KY
21171	Monroe	KY
21173	Montgomery	KY
21175	Morgan	KY
21177	Muhlenberg	KY
21179	Nelson	KY
21181	Nicholas	KY
21183	Ohio	KY
21185	Oldham	KY
21187	Owen	KY
21189	Owsley	KY
21191	Pendleton	KY
21193	Perry	KY
21195	Pike	KY
21197	Powell	KY
21199	Pulaski	KY
21201	Robertson	KY
21203	Rockcastle	KY
21205	Rowan	KY
21207	Russell	KY
21209	Scott	KY
21211	Shelby	KY
21213	Simpson	KY
21215	Spencer	KY
21217	Taylor	KY
21219	Todd	KY
21221	Trigg	KY
21223	Trimble	KY
21225	Union	KY
21227	Warren	KY
21229	Washington	KY
21231	Wayne	KY
21233	Webster	KY
21235	Whitley	KY
21237	Wolfe	KY
21239	Woodford	KY
22001	Acadia	LA
22003	Allen	LA
22005	Ascension	LA
22007	Assumption	LA
22009	Avoyelles	LA
22011	Beauregard	LA
22013	Bienville	LA
22015	Bossier	LA
22017	Caddo	LA
22019	Calcasieu	LA
22021	Caldwell	LA
22023	Cameron	LA
22025	Catahoula	LA
22027	Claiborne	LA
22029	Concordia	LA
22031	De Soto	LA
22033	East Baton Rouge	LA
22035	East Carroll	LA
22037	East Feliciana	LA
22039	Evangeline	LA
22041	Franklin	LA
22043	Grant	LA
22045	Iberia	LA
22047	Iberville	LA
22049	Jackson	LA
22051	Jefferson	LA
22053	Jefferson Davis	LA
22055	Lafayette	LA
22057	Lafourche	LA
22059	La Salle	LA
22061	Lincoln	LA
22063	Livingston	LA
22065	Madison	LA
22067	Morehouse	LA
22069	Natchitoches	LA
22071	Orleans	LA
22073	Ouachita	LA
22075	Plaquemines	LA
22077	Pointe Coupee	LA
22079	Rapides	LA
22081	Red River	LA
22083	Richland	LA
22085	Sabine	LA
22087	St Bernard	LA
22089	St Charles	LA
22091	St Helena	LA
22093	St James	LA
22095	St John the Baptist	LA
22097	St Landry	LA
22099	St Martin	LA
22101	St Mary	LA
22103	St Tammany	LA
22105	Tangipahoa	LA
22107	Tensas	LA
22109	Terrebonne	LA
22111	Union	LA
22113	Vermilion	LA
22115	Vernon	LA
22117	Washington	LA
22119	Webster	LA
22121	West Baton Rouge	LA
22123	West Carroll	LA
22125	West Feliciana	LA
22127	Winn	LA
23001	Androscoggin	ME
23003	Aroostook	ME
23005	Cumberland	ME
23007	Franklin	ME
23009	Hancock	ME
23011	Kennebec	ME
23013	Knox	ME
23015	Lincoln	ME
23017	Oxford	ME
23019	Penobscot	ME
23021	Piscataquis	ME
23023	Sagadahoc	ME
23025	Somerset	ME
23027	Waldo	ME
23029	Washington	ME
23031	York	ME
24001	Allegany	MD
24003	Anne Arundel	MD
24005	Baltimore	MD
24009	Calvert	MD
24011	Caroline	MD
24013	Carroll	MD
24015	Cecil	MD
24017	Charles	MD
24019	Dorchester	MD
24021	Frederick	MD
24023	Garrett	MD
24025	Harford	MD
24027	Howard	MD
24029	Kent	MD
24031	Montgomery	MD
24033	Prince Georges	MD
24035	Queen Annes	MD
24037	St Marys	MD
24039	Somerset	MD
24041	Talbot	MD
24043	Washington	MD
24045	Wicomico	MD
24047	Worcester	MD
24510	Baltimore City	MD
25001	Barnstable	MA
25003	Berkshire	MA
25005	Bristol	MA
25007	Dukes	MA
25009	Essex	MA
25011	Franklin	MA
25013	Hampden	MA
25015	Hampshire	MA
25017	Middlesex	MA
25019	Nantucket	MA
25021	Norfolk	MA
25023	Plymouth	MA
25025	Suffolk	MA
25027	Worcester	MA
26001	Alcona	MI
26003	Alger	MI
26005	Allegan	MI
26007	Alpena	MI
26009	Antrim	MI
26011	Arenac	MI
26013	Baraga	MI
26015	Barry	MI
26017	Bay	MI
26019	Benzie	MI
26021	Berrien	MI
26023	Branch	MI
26025	Calhoun	MI
26027	Cass	MI
26029	Charlevoix	MI
26031	Cheboygan	MI
26033	Chippewa	MI
26035	Clare	MI
26037	Clinton	MI
26039	Crawford	MI
26041	Delta	MI
26043	Dickinson	MI
26045	Eaton	MI
26047	Emmet	MI
26049	Genesee	MI
26051	Gladwin	MI
26053	Gogebic	MI
26055	Grand Traverse	MI
26057	Gratiot	MI
26059	Hillsdale	MI
26061	Houghton	MI
26063	Huron	MI
26065	Ingham	MI
26067	Ionia	MI
26069	Iosco	MI
26071	Iron	MI
26073	Isabella	MI
26075	Jackson	MI
26077	Kalamazoo	MI
26079	Kalkaska	MI
26081	Kent	MI
26083	Keweenaw	MI
26085	Lake	MI
26087	Lapeer	MI
26089	Leelanau	MI
26091	Lenawee	MI
26093	Livingston	MI
26095	Luce	MI
26097	Mackinac	MI
26099	Macomb	MI
26101	Manistee	MI
26103	Marquette	MI
26105	Mason	MI
26107	Mecosta	MI
26109	Menominee	MI
26111	Midland	MI
26113	Missaukee	MI
26115	Monroe	MI
26117	Montcalm	MI
26119	Montmorency	MI
26121	Muskegon	MI
26123	Newaygo	MI
26125	Oakland	MI
26127	Oceana	MI
26129	Ogemaw	MI
26131	Ontonagon	MI
26133	Osceola	MI
26135	Oscoda	MI
26137	Otsego	MI
26139	Ottawa	MI
26141	Presque Isle	MI
26143	Roscommon	MI
26145	Saginaw	MI
26147	St Clair	MI
26149	St Joseph	MI
26151	Sanilac	MI
26153	Schoolcraft	MI
26155	Shiawassee	MI
26157	Tuscola	MI
26159	Van Buren	MI
26161	Washtenaw	MI
26163	Wayne	MI
26165	Wexford	MI
27001	Aitkin	MN
27003	Anoka	MN
27005	Becker	MN
27007	Beltrami	MN
27009	Benton	MN
27011	Big Stone	MN
27013	Blue Earth	MN
27015	Brown	MN
27017	Carlton	MN
27019	Carver	MN
27021	Cass	MN
27023	Chippewa	MN
27025	Chisago	MN
27027	Clay	MN
27029	Clearwater	MN
27031	Cook	MN
27033	Cottonwood	MN
27035	Crow Wing	MN
27037	Dakota	MN
27039	Dodge	MN
27041	Douglas	MN
27043	Faribault	MN
27045	Fillmore	MN
27047	Freeborn	MN
27049	Goodhue	MN
27051	Grant	MN
27053	Hennepin	MN
27055	Houston	MN
27057	Hubbard	MN
27059	Isanti	MN
27061	Itasca	MN
27063	Jackson	MN
27065	Kanabec	MN
27067	Kandiyohi	MN
27069	Kittson	MN
27071	Koochiching	MN
27073	Lac qui Parle	MN
27075	Lake	MN
27077	Lake of the Woods	MN
27079	Le Sueur	MN
27081	Lincoln	MN
27083	Lyon	MN
27085	McLeod	MN
27087	Mahnomen	MN
27089	Marshall	MN
27091	Martin	MN
27093	Meeker	MN
27095	Mille Lacs	MN
27097	Morrison	MN
27099	Mower	MN
27101	Murray	MN
27103	Nicollet	MN
27105	Nobles	MN
27107	Norman	MN
27109	Olmsted	MN
27111	Otter Tail	MN
27113	Pennington	MN
27115	Pine	MN
27117	Pipestone	MN
27119	Polk	MN
27121	Pope	MN
27123	Ramsey	MN
27125	Red Lake	MN
27127	Redwood	MN
27129	Renville	MN
27131	Rice	MN
27133	Rock	MN
27135	Roseau	MN
27137	St Louis	MN
27139	Scott	MN
27141	Sherburne	MN
27143	Sibley	MN
27145	Stearns	MN
27147	Steele	MN
27149	Stevens	MN
27151	Swift	MN
27153	Todd	MN
27155	Traverse	MN
27157	Wabasha	MN
27159	Wadena	MN
27161	Waseca	MN
27163	Washington	MN
27165	Watonwan	MN
27167	Wilkin	MN
27169	Winona	MN
27171	Wright	MN
27173	Yellow Medicine	MN
28001	Adams	MS
28003	Alcorn	MS
28005	Amite	MS
28007	Attala	MS
28009	Benton	MS
28011	Bolivar	MS
28013	Calhoun	MS
28015	Carroll	MS
28017	Chickasaw	MS
28019	Choctaw	MS
28021	Claiborne	MS
28023	Clarke	MS
28025	Clay	MS
28027	Coahoma	MS
28029	Copiah	MS
28031	Covington	MS
28033	De Soto	MS
28035	Forrest	MS
28037	Franklin	MS
28039	George	MS
28041	Greene	MS
28043	Grenada	MS
28045	Hancock	MS
28047	Harrison	MS
28049	Hinds	MS
28051	Holmes	MS
28053	Humphreys	MS
28055	Issaquena	MS
28057	Itawamba	MS
28059	Jackson	MS
28061	Jasper	MS
28063	Jefferson	MS
28065	Jefferson Davis	MS
28067	Jones	MS
28069	Kemper	MS
28071	Lafayette	MS
28073	Lamar	MS
28075	Lauderdale	MS
28077	Lawrence	MS
28079	Leake	MS
28081	Lee	MS
28083	Leflore	MS
28085	Lincoln	MS
28087	Lowndes	MS
28089	Madison	MS
28091	Marion	MS
28093	Marshall	MS
28095	Monroe	MS
28097	Montgomery	MS
28099	Neshoba	MS
28101	Newton	MS
28103	Noxubee	MS
28105	Oktibbeha	MS
28107	Panola	MS
28109	Pearl River	MS
28111	Perry	MS
28113	Pike	MS
28115	Pontotoc	MS
28117	Prentiss	MS
28119	Quitman	MS
28121	Rankin	MS
28123	Scott	MS
28125	Sharkey	MS
28127	Simpson	MS
28129	Smith	MS
28131	Stone	MS
28133	Sunflower	MS
28135	Tallahatchie	MS
28137	Tate	MS
28139	Tippah	MS
28141	Tishomingo	MS
28143	Tunica	MS
28145	Union	MS
28147	Walthall	MS
28149	Warren	MS
28151	Washington	MS
28153	Wayne	MS
28155	Webster	MS
28157	Wilkinson	MS
28159	Winston	MS
28161	Yalobusha	MS
28163	Yazoo	MS
29001	Adair	MO
29003	Andrew	MO
29005	Atchison	MO
29007	Audrain	MO
29009	Barry	MO
29011	Barton	MO
29013	Bates	MO
29015	Benton	MO
29017	Bollinger	MO
29019	Boone	MO
29021	Buchanan	MO
29023	Butler	MO
29025	Caldwell	MO
29027	Callaway	MO
29029	Camden	MO
29031	Cape Girardeau	MO
29033	Carroll	MO
29035	Carter	MO
29037	Cass	MO
29039	Cedar	MO
29041	Chariton	MO
29043	Christian	MO
29045	Clark	MO
29047	Clay	MO
29049	Clinton	MO
29051	Cole	MO
29053	Cooper	MO
29055	Crawford	MO
29057	Dade	MO
29059	Dallas	MO
29061	Daviess	MO
29063	De Kalb	MO
29065	Dent	MO
29067	Douglas	MO
29069	Dunklin	MO
29071	Franklin	MO
29073	Gasconade	MO
29075	Gentry	MO
29077	Greene	MO
29079	Grundy	MO
29081	Harrison	MO
29083	Henry	MO
29085	Hickory	MO
29087	Holt	MO
29089	Howard	MO
29091	Howell	MO
29093	Iron	MO
29095	Jackson	MO
29097	Jasper	MO
29099	Jefferson	MO
29101	Johnson	MO
29103	Knox	MO
29105	Laclede	MO
29107	Lafayette	MO
29109	Lawrence	MO
29111	Lewis	MO
29113	Lincoln	MO
29115	Linn	MO
29117	Livingston	MO
29119	McDonald	MO
29121	Macon	MO
29123	Madison	MO
29125	Maries	MO
29127	Marion	MO
29129	Mercer	MO
29131	Miller	MO
29133	Mississippi	MO
29135	Moniteau	MO
29137	Monroe	MO
29139	Montgomery	MO
29141	Morgan	MO
29143	New Madrid	MO
29145	Newton	MO
29147	Nodaway	MO
29149	Oregon	MO
29151	Osage	MO
29153	Ozark	MO
29155	Pemiscot	MO
29157	Perry	MO
29159	Pettis	MO
29161	Phelps	MO
29163	Pike	MO
29165	Platte	MO
29167	Polk	MO
29169	Pulaski	MO
29171	Putnam	MO
29173	Ralls	MO
29175	Randolph	MO
29177	Ray	MO
29179	Reynolds	MO
29181	Ripley	MO
29183	St Charles	MO
29185	St Clair	MO
29186	Ste. Genevieve	MO
29187	St Francois	MO
29189	St Louis	MO
29195	Saline	MO
29197	Schuyler	MO
29199	Scotland	MO
29201	Scott	MO
29203	Shannon	MO
29205	Shelby	MO
29207	Stoddard	MO
29209	Stone	MO
29211	Sullivan	MO
29213	Taney	MO
29215	Texas	MO
29217	Vernon	MO
29219	Warren	MO
29221	Washington	MO
29223	Wayne	MO
29225	Webster	MO
29227	Worth	MO
29229	Wright	MO
29510	St Louis City	MO
30001	Beaverhead	MT
30003	Big Horn	MT
30005	Blaine	MT
30007	Broadwater	MT
30009	Carbon	MT
30011	Carter	MT
30013	Cascade	MT
30015	Chouteau	MT
30017	Custer	MT
30019	Daniels	MT
30021	Dawson	MT
30023	Deer Lodge	MT
30025	Fallon	MT
30027	Fergus	MT
30029	Flathead	MT
30031	Gallatin	MT
30033	Garfield	MT
30035	Glacier	MT
30037	Golden Valley	MT
30039	Granite	MT
30041	Hill	MT
30043	Jefferson	MT
30045	Judith Basin	MT
30047	Lake	MT
30049	Lewis and Clark	MT
30051	Liberty	MT
30053	Lincoln	MT
30055	McCone	MT
30057	Madison	MT
30059	Meagher	MT
30061	Mineral	MT
30063	Missoula	MT
30065	Musselshell	MT
30067	Park	MT
30069	Petroleum	MT
30071	Phillips	MT
30073	Pondera	MT
30075	Powder River	MT
30077	Powell	MT
30079	Prairie	MT
30081	Ravalli	MT
30083	Richland	MT
30085	Roosevelt	MT
30087	Rosebud	MT
30089	Sanders	MT
30091	Sheridan	MT
30093	Silver Bow	MT
30095	Stillwater	MT
30097	Sweet Grass	MT
30099	Teton	MT
30101	Toole	MT
30103	Treasure	MT
30105	Valley	MT
30107	Wheatland	MT
30109	Wibaux	MT
30111	Yellowstone	MT
30113	Yellowstone Nat Park	MT
31001	Adams	NE
31003	Antelope	NE
31005	Arthur	NE
31007	Banner	NE
31009	Blaine	NE
31011	Boone	NE
31013	Box Butte	NE
31015	Boyd	NE
31017	Brown	NE
31019	Buffalo	NE
31021	Burt	NE
31023	Butler	NE
31025	Cass	NE
31027	Cedar	NE
31029	Chase	NE
31031	Cherry	NE
31033	Cheyenne	NE
31035	Clay	NE
31037	Colfax	NE
31039	Cuming	NE
31041	Custer	NE
31043	Dakota	NE
31045	Dawes	NE
31047	Dawson	NE
31049	Deuel	NE
31051	Dixon	NE
31053	Dodge	NE
31055	Douglas	NE
31057	Dundy	NE
31059	Fillmore	NE
31061	Franklin	NE
31063	Frontier	NE
31065	Furnas	NE
31067	Gage	NE
31069	Garden	NE
31071	Garfield	NE
31073	Gosper	NE
31075	Grant	NE
31077	Greeley	NE
31079	Hall	NE
31081	Hamilton	NE
31083	Harlan	NE
31085	Hayes	NE
31087	Hitchcock	NE
31089	Holt	NE
31091	Hooker	NE
31093	Howard	NE
31095	Jefferson	NE
31097	Johnson	NE
31099	Kearney	NE
31101	Keith	NE
31103	Keya Paha	NE
31105	Kimball	NE
31107	Knox	NE
31109	Lancaster	NE
31111	Lincoln	NE
31113	Logan	NE
31115	Loup	NE
31117	McPherson	NE
31119	Madison	NE
31121	Merrick	NE
31123	Morrill	NE
31125	Nance	NE
31127	Nemaha	NE
31129	Nuckolls	NE
31131	Otoe	NE
31133	Pawnee	NE
31135	Perkins	NE
31137	Phelps	NE
31139	Pierce	NE
31141	Platte	NE
31143	Polk	NE
31145	Red Willow	NE
31147	Richardson	NE
31149	Rock	NE
31151	Saline	NE
31153	Sarpy	NE
31155	Saunders	NE
31157	Scotts Bluff	NE
31159	Seward	NE
31161	Sheridan	NE
31163	Sherman	NE
31165	Sioux	NE
31167	Stanton	NE
31169	Thayer	NE
31171	Thomas	NE
31173	Thurston	NE
31175	Valley	NE
31177	Washington	NE
31179	Wayne	NE
31181	Webster	NE
31183	Wheeler	NE
31185	York	NE
32001	Churchill	NV
32003	Clark	NV
32005	Douglas	NV
32007	Elko	NV
32009	Esmeralda	NV
32011	Eureka	NV
32013	Humboldt	NV
32015	Lander	NV
32017	Lincoln	NV
32019	Lyon	NV
32021	Mineral	NV
32023	Nye	NV
32027	Pershing	NV
32029	Storey	NV
32031	Washoe	NV
32033	White Pine	NV
32510	Carson City	NV
33001	Belknap	NH
33003	Carroll	NH
33005	Cheshire	NH
33007	Coos	NH
33009	Grafton	NH
33011	Hillsborough	NH
33013	Merrimack	NH
33015	Rockingham	NH
33017	Strafford	NH
33019	Sullivan	NH
34001	Atlantic	NJ
34003	Bergen	NJ
34005	Burlington	NJ
34007	Camden	NJ
34009	Cape May	NJ
34011	Cumberland	NJ
34013	Essex	NJ
34015	Gloucester	NJ
34017	Hudson	NJ
34019	Hunterdon	NJ
34021	Mercer	NJ
34023	Middlesex	NJ
34025	Monmouth	NJ
34027	Morris	NJ
34029	Ocean	NJ
34031	Passaic	NJ
34033	Salem	NJ
34035	Somerset	NJ
34037	Sussex	NJ
34039	Union	NJ
34041	Warren	NJ
35001	Bernalillo	NM
35003	Catron	NM
35005	Chaves	NM
35006	Cibola	NM
35007	Colfax	NM
35009	Curry	NM
35011	De Baca	NM
35013	Dona Ana	NM
35015	Eddy	NM
35017	Grant	NM
35019	Guadalupe	NM
35021	Harding	NM
35023	Hidalgo	NM
35025	Lea	NM
35027	Lincoln	NM
35028	Los Alamos	NM
35029	Luna	NM
35031	McKinley	NM
35033	Mora	NM
35035	Otero	NM
35037	Quay	NM
35039	Rio Arriba	NM
35041	Roosevelt	NM
35043	Sandoval	NM
35045	San Juan	NM
35047	San Miguel	NM
35049	Santa Fe	NM
35051	Sierra	NM
35053	Socorro	NM
35055	Taos	NM
35057	Torrance	NM
35059	Union	NM
35061	Valencia	NM
36001	Albany	NY
36003	Allegany	NY
36005	Bronx	NY
36007	Broome	NY
36009	Cattaraugus	NY
36011	Cayuga	NY
36013	Chautauqua	NY
36015	Chemung	NY
36017	Chenango	NY
36019	Clinton	NY
36021	Columbia	NY
36023	Cortland	NY
36025	Delaware	NY
36027	Dutchess	NY
36029	Erie	NY
36031	Essex	NY
36033	Franklin	NY
36035	Fulton	NY
36037	Genesee	NY
36039	Greene	NY
36041	Hamilton	NY
36043	Herkimer	NY
36045	Jefferson	NY
36047	Kings	NY
36049	Lewis	NY
36051	Livingston	NY
36053	Madison	NY
36055	Monroe	NY
36057	Montgomery	NY
36059	Nassau	NY
36061	New York	NY
36063	Niagara	NY
36065	Oneida	NY
36067	Onondaga	NY
36069	Ontario	NY
36071	Orange	NY
36073	Orleans	NY
36075	Oswego	NY
36077	Otsego	NY
36079	Putnam	NY
36081	Queens	NY
36083	Rensselaer	NY
36085	Richmond	NY
36087	Rockland	NY
36089	St Lawrence	NY
36091	Saratoga	NY
36093	Schenectady	NY
36095	Schoharie	NY
36097	Schuyler	NY
36099	Seneca	NY
36101	Steuben	NY
36103	Suffolk	NY
36105	Sullivan	NY
36107	Tioga	NY
36109	Tompkins	NY
36111	Ulster	NY
36113	Warren	NY
36115	Washington	NY
36117	Wayne	NY
36119	Westchester	NY
36121	Wyoming	NY
36123	Yates	NY
37001	Alamance	NC
37003	Alexander	NC
37005	Alleghany	NC
37007	Anson	NC
37009	Ashe	NC
37011	Avery	NC
37013	Beaufort	NC
37015	Bertie	NC
37017	Bladen	NC
37019	Brunswick	NC
37021	Buncombe	NC
37023	Burke	NC
37025	Cabarrus	NC
37027	Caldwell	NC
37029	Camden	NC
37031	Carteret	NC
37033	Caswell	NC
37035	Catawba	NC
37037	Chatham	NC
37039	Cherokee	NC
37041	Chowan	NC
37043	Clay	NC
37045	Cleveland	NC
37047	Columbus	NC
37049	Craven	NC
37051	Cumberland	NC
37053	Currituck	NC
37055	Dare	NC
37057	Davidson	NC
37059	Davie	NC
37061	Duplin	NC
37063	Durham	NC
37065	Edgecombe	NC
37067	Forsyth	NC
37069	Franklin	NC
37071	Gaston	NC
37073	Gates	NC
37075	Graham	NC
37077	Granville	NC
37079	Greene	NC
37081	Guilford	NC
37083	Halifax	NC
37085	Harnett	NC
37087	Haywood	NC
37089	Henderson	NC
37091	Hertford	NC
37093	Hoke	NC
37095	Hyde	NC
37097	Iredell	NC
37099	Jackson	NC
37101	Johnston	NC
37103	Jones	NC
37105	Lee	NC
37107	Lenoir	NC
37109	Lincoln	NC
37111	McDowell	NC
37113	Macon	NC
37115	Madison	NC
37117	Martin	NC
37119	Mecklenburg	NC
37121	Mitchell	NC
37123	Montgomery	NC
37125	Moore	NC
37127	Nash	NC
37129	New Hanover	NC
37131	Northampton	NC
37133	Onslow	NC
37135	Orange	NC
37137	Pamlico	NC
37139	Pasquotank	NC
37141	Pender	NC
37143	Perquimans	NC
37145	Person	NC
37147	Pitt	NC
37149	Polk	NC
37151	Randolph	NC
37153	Richmond	NC
37155	Robeson	NC
37157	Rockingham	NC
37159	Rowan	NC
37161	Rutherford	NC
37163	Sampson	NC
37165	Scotland	NC
37167	Stanly	NC
37169	Stokes	NC
37171	Surry	NC
37173	Swain	NC
37175	Transylvania	NC
37177	Tyrrell	NC
37179	Union	NC
37181	Vance	NC
37183	Wake	NC
37185	Warren	NC
37187	Washington	NC
37189	Watauga	NC
37191	Wayne	NC
37193	Wilkes	NC
37195	Wilson	NC
37197	Yadkin	NC
37199	Yancey	NC
38001	Adams	ND
38003	Barnes	ND
38005	Benson	ND
38007	Billings	ND
38009	Bottineau	ND
38011	Bowman	ND
38013	Burke	ND
38015	Burleigh	ND
38017	Cass	ND
38019	Cavalier	ND
38021	Dickey	ND
38023	Divide	ND
38025	Dunn	ND
38027	Eddy	ND
38029	Emmons	ND
38031	Foster	ND
38033	Golden Valley	ND
38035	Grand Forks	ND
38037	Grant	ND
38039	Griggs	ND
38041	Hettinger	ND
38043	Kidder	ND
38045	La Moure	ND
38047	Logan	ND
38049	McHenry	ND
38051	McIntosh	ND
38053	McKenzie	ND
38055	McLean	ND
38057	Mercer	ND
38059	Morton	ND
38061	Mountrail	ND
38063	Nelson	ND
38065	Oliver	ND
38067	Pembina	ND
38069	Pierce	ND
38071	Ramsey	ND
38073	Ransom	ND
38075	Renville	ND
38077	Richland	ND
38079	Rolette	ND
38081	Sargent	ND
38083	Sheridan	ND
38085	Sioux	ND
38087	Slope	ND
38089	Stark	ND
38091	Steele	ND
38093	Stutsman	ND
38095	Towner	ND
38097	Traill	ND
38099	Walsh	ND
38101	Ward	ND
38103	Wells	ND
38105	Williams	ND
39001	Adams	OH
39003	Allen	OH
39005	Ashland	OH
39007	Ashtabula	OH
39009	Athens	OH
39011	Auglaize	OH
39013	Belmont	OH
39015	Brown	OH
39017	Butler	OH
39019	Carroll	OH
39021	Champaign	OH
39023	Clark	OH
39025	Clermont	OH
39027	Clinton	OH
39029	Columbiana	OH
39031	Coshocton	OH
39033	Crawford	OH
39035	Cuyahoga	OH
39037	Darke	OH
39039	Defiance	OH
39041	Delaware	OH
39043	Erie	OH
39045	Fairfield	OH
39047	Fayette	OH
39049	Franklin	OH
39051	Fulton	OH
39053	Gallia	OH
39055	Geauga	OH
39057	Greene	OH
39059	Guernsey	OH
39061	Hamilton	OH
39063	Hancock	OH
39065	Hardin	OH
39067	Harrison	OH
39069	Henry	OH
39071	Highland	OH
39073	Hocking	OH
39075	Holmes	OH
39077	Huron	OH
39079	Jackson	OH
39081	Jefferson	OH
39083	Knox	OH
39085	Lake	OH
39087	Lawrence	OH
39089	Licking	OH
39091	Logan	OH
39093	Lorain	OH
39095	Lucas	OH
39097	Madison	OH
39099	Mahoning	OH
39101	Marion	OH
39103	Medina	OH
39105	Meigs	OH
39107	Mercer	OH
39109	Miami	OH
39111	Monroe	OH
39113	Montgomery	OH
39115	Morgan	OH
39117	Morrow	OH
39119	Muskingum	OH
39121	Noble	OH
39123	Ottawa	OH
39125	Paulding	OH
39127	Perry	OH
39129	Pickaway	OH
39131	Pike	OH
39133	Portage	OH
39135	Preble	OH
39137	Putnam	OH
39139	Richland	OH
39141	Ross	OH
39143	Sandusky	OH
39145	Scioto	OH
39147	Seneca	OH
39149	Shelby	OH
39151	Stark	OH
39153	Summit	OH
39155	Trumbull	OH
39157	Tuscarawas	OH
39159	Union	OH
39161	Van Wert	OH
39163	Vinton	OH
39165	Warren	OH
39167	Washington	OH
39169	Wayne	OH
39171	Williams	OH
39173	Wood	OH
39175	Wyandot	OH
40001	Adair	OK
40003	Alfalfa	OK
40005	Atoka	OK
40007	Beaver	OK
40009	Beckham	OK
40011	Blaine	OK
40013	Bryan	OK
40015	Caddo	OK
40017	Canadian	OK
40019	Carter	OK
40021	Cherokee	OK
40023	Choctaw	OK
40025	Cimarron	OK
40027	Cleveland	OK
40029	Coal	OK
40031	Comanche	OK
40033	Cotton	OK
40035	Craig	OK
40037	Creek	OK
40039	Custer	OK
40041	Delaware	OK
40043	Dewey	OK
40045	Ellis	OK
40047	Garfield	OK
40049	Garvin	OK
40051	Grady	OK
40053	Grant	OK
40055	Greer	OK
40057	Harmon	OK
40059	Harper	OK
40061	Haskell	OK
40063	Hughes	OK
40065	Jackson	OK
40067	Jefferson	OK
40069	Johnston	OK
40071	Kay	OK
40073	Kingfisher	OK
40075	Kiowa	OK
40077	Latimer	OK
40079	Le Flore	OK
40081	Lincoln	OK
40083	Logan	OK
40085	Love	OK
40087	McClain	OK
40089	McCurtain	OK
40091	McIntosh	OK
40093	Major	OK
40095	Marshall	OK
40097	Mayes	OK
40099	Murray	OK
40101	Muskogee	OK
40103	Noble	OK
40105	Nowata	OK
40107	Okfuskee	OK
40109	Oklahoma	OK
40111	Okmulgee	OK
40113	Osage	OK
40115	Ottawa	OK
40117	Pawnee	OK
40119	Payne	OK
40121	Pittsburg	OK
40123	Pontotoc	OK
40125	Pottawatomie	OK
40127	Pushmataha	OK
40129	Roger Mills	OK
40131	Rogers	OK
40133	Seminole	OK
40135	Sequoyah	OK
40137	Stephens	OK
40139	Texas	OK
40141	Tillman	OK
40143	Tulsa	OK
40145	Wagoner	OK
40147	Washington	OK
40149	Washita	OK
40151	Woods	OK
40153	Woodward	OK
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