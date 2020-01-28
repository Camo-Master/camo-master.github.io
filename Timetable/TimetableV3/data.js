let timtableFormat = [
  [1, 2, 3, 4, 5],
  [6, 1, 2, 3, 4],
  [5, 7, 6, 1, 2],
  [3, 4, 5, 6, 1],
  [2, 3, 4, 5, 6],
  [5, 4, 3, 2, 1],
  [4, 3, 2, 1, 6],
  [2, 7, 1, 6, 5],
  [1, 6, 5, 4, 3],
  [6, 5, 4, 3, 2]

]

let peopleList = [
  {"name": "Ben", "id": 0},
  {"name": "Nick", "id": 1},
  {"name": "Bread", "id": 2},
  {"name": "*Marizanne", "id": 3},
  {"name": "Gretel", "id": 4},
  {"name": "Nathan", "id": 5},
  {"name": "Michaela", "id": 6},
  {"name": "Alex", "id": 7},
  {"name": "Lexie", "id": 8},
  {"name": "Bridie", "id": 9},
  {"name": "*Jessica", "id": 10},
  {"name": "*Gina", "id": 11},
  {"name": "Amie", "id": 12},
  {"name": "Briar", "id": 13},
  {"name": "Guy", "id": 14},
  {"name": "*Brandon", "id": 15},
  {"name": "*Nate", "id": 16}



];


let classes = {
  "line1Classes": [
    {
      "Name": "Physics",
      "Teacher" : "Mr Yates",
      "Class": "K8",
      "People": [0, 1],
      "Code": "L2PHY"
    },
    {
      "Name": "Chemistry",
      "Teacher" : "Mrs Caldwell ",
      "Class": "K3",
      "People": [2, 4, 7, 8, 12, 14],
      "Code": "L2CHE"
    },
    {
      "Name": "Business",
      "Teacher" : "Mrs West ",
      "Class": "A3",
      "People": [5],
      "Code": "L2BUS"
    },
    {
      "Name": "Maths",
      "Teacher" : "Mrs Light ",
      "Class": "B15",
      "People": [6, 9],
      "Code": "L2MA2"
    },
    {
      "Name": "Hospitality",
      "Teacher" : "Mrs Carse",
      "Class": "H1",
      "People": [],
      "Code": "L2HOS"
    },
    {
      "Name": "Dance",
      "Teacher" : "Mrs Woodfield",
      "Class": "S1",
      "People": [],
      "Code": "L2DAN"
    },
    {
      "Name": "Music",
      "Teacher" : "Mrs Sutherland",
      "Class": "M1",
      "People": [13],
      "Code": "L2MUS"
    }
  ],
 "line2Classes" : [
     {
      "Name": "Chemistry",
      "Teacher" : "Mrs Caldwell",
      "Class": "K3",
      "People": [0, 1],
      "Code": "L2CHE"
    },
    {
      "Name": "Drama",
      "Teacher" : "Mr Dutton",
      "Class": "DRA",
      "People": [6, 8, 12, 13, 14],
      "Code": "L2DRA"
    },
    {
      "Name": "Biology",
      "Teacher" : "Mr Walker",
      "Class": "K5",
      "People": [4, 7, 9],
      "Code": "L2BIO"
    },
    {
      "Name": "Tech",
      "Teacher" : "Mr Lenihan",
      "Class": "T1",
      "People": [2],
      "Code": "L2TEC"
    },
    {
      "Name": "Hospitality",
      "Teacher" : "Mrs Holgate",
      "Class": "H2",
      "People": [],
      "Code": "L2HOS"
    }
  ],
 "line3Classes" : [
    {
      "Name": "Biology",
      "Teacher" : "Mrs Moran",
      "Class": "K1",
      "People": [0, 5, 12],
      "Code": "L2BIO"
    },
    {
      "Name": "Design",
      "Teacher" : "Mr Pulsford",
      "Class": "D4/5",
      "People": [1, 2, 6],
      "Code": "L2DES"
    },
    {
      "Name": "Graphics",
      "Teacher" : "STE",
      "Class": "T2",
      "People": [],
      "Code": "L2DVC"
    },
    {
      "Name": "Maths",
      "Teacher" : "BUK",
      "Class": "B3",
      "People": [7, 8],
      "Code": "L2MA1"
    },
    {
      "Name": "History",
      "Teacher" : "Mrs Stimson",
      "Class": "A9",
      "People": [13],
      "Code": "L2HIS"
    },
    {
      "Name": "PE",
      "Teacher" : "MCJ",
      "Class": "E4",
      "People": [],
      "Code": "L2PE1"
    },
    {
      "Name": "English",
      "Teacher" : "Mrs Jessop",
      "Class": "E9",
      "People": [9, 14],
      "Code": "L2EN1"
    },
    {
      "Name": "Graphics",
      "Teacher" : "Mr Stewart ",
      "Class": "E9",
      "People": [4],
      "Code": "L2DVC"
    }
  ],
 "line4Classes" : [
     {
      "Name": "Maths",
      "Teacher" : "Mrs Light",
      "Class": "B15",
      "People": [1, 2, 14],
      "Code": "L2MA1"
    },
    {
      "Name": "English",
      "Teacher" : "CRO",
      "Class": "E1",
      "People": [0, 4, 5, 6, 7, 13],
      "Code": "L2EN1"
    },
     {
      "Name": "Geography",
      "Teacher" : "Mrs Gipps",
      "Class": "A5",
      "People": [8, 9],
      "Code": "L2GEO"
    },
    {
      "Name": "Maths",
      "Teacher" : "HOJ",
      "Class": "B2",
      "People": [12],
      "Code": "L2MA2"
    }
  ],
 "line5Classes" : [
     {
      "Name": "English",
      "Teacher" : "Mrs Ruland",
      "Class": "E8",
      "People": [1, 2],
      "Code": "L2EN1"
    },
    {
      "Name": "Media",
      "Teacher" : "Mr King",
      "Class": "A2",
      "People": [6, 7, 8, 12, 14],
      "Code": "L2MED"
    },
    {
      "Name": "Chemistry",
      "Teacher" : "Mrs McMillan",
      "Class": "K6",
      "People": [9, 13],
      "Code": "L2CHE"
    },
    {
      "Name": "Maths",
      "Teacher" : "NEV",
      "Class": "B1",
      "People": [0, 4, 5],
      "Code": "L2MA1"
    },
    {
      "Name": "English",
      "Teacher" : "JES",
      "Class": "E9",
      "People": [],
      "Code": "L2EN1"
    },
    {
      "Name": "Study?",
      "Teacher" : "No One?",
      "Class": "??",
      "People": [],
      "Code": "???"
    }
  ],
  "line6Classes" : [
    {
      "Name": "Digi Tech",
      "Teacher" : "Mr Schnetler",
      "Class": "B13",
      "People": [0, 1, 2],
      "Code": "L2DIT"
    },
    {
      "Name": "Maths",
      "Teacher" : "Mr Welch",
      "Class": "B6",
      "People": [13],
      "Code": "L2MA1"
    },
    {
      "Name": "Physics",
      "Teacher" : "Mrs McMillan",
      "Class": "K7",
      "People": [4, 5, 7, 14],
      "Code": "L2PHY"
    },
    {
      "Name": "Painting",
      "Teacher" : "Mrs Maday",
      "Class": "D1",
      "People": [6, 9],
      "Code": "L2PAI"
    },
    {
      "Name": "English",
      "Teacher" : "Mr Shield",
      "Class": "E2",
      "People": [8, 12],
      "Code": "L2EN1"
    },
    {
      "Name": "English",
      "Teacher" : "CRO",
      "Class": "E1",
      "People": [],
      "Code": "L2EN2"
    }
  ]
};
