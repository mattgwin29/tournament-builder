
let jsonData = [];

let myData = [
    [
      [ {"name" : "Erik Zettersten", "id" : "erik-zettersten", "seed" : 1, "displaySeed": "D1", "score" : 47 }, {"name" : "Andrew Miller", "id" : "andrew-miller", "seed" : 2} ],
      [ {"name" : "James Coutry", "id" : "james-coutry", "seed" : 3}, {"name" : "Sam Merrill", "id" : "sam-merrill", "seed" : 4}],
      [ {"name" : "Anothy Hopkins", "id" : "anthony-hopkins", "seed" : 5}, {"name" : "Everett Zettersten", "id" : "everett-zettersten", "seed" : 6} ],
      [ {"name" : "John Scott", "id" : "john-scott", "seed" : 7}, {"name" : "Teddy Koufus", "id" : "teddy-koufus", "seed" : 8}],
      [ {"name" : "Arnold Palmer", "id" : "arnold-palmer", "seed" : 9}, {"name" : "Ryan Anderson", "id" : "ryan-anderson", "seed" : 10} ],
      [ {"name" : "Jesse James", "id" : "jesse-james", "seed" : 1}, {"name" : "Scott Anderson", "id" : "scott-anderson", "seed" : 12}],
      [ {"name" : "Josh Groben", "id" : "josh-groben", "seed" : 13}, {"name" : "Sammy Zettersten", "id" : "sammy-zettersten", "seed" : 14} ],
      [ {"name" : "Jake Coutry", "id" : "jake-coutry", "seed" : 15}, {"name" : "Spencer Zettersten", "id" : "spencer-zettersten", "seed" : 16}]
    ],
    [
      [ {"name" : "Erik Zettersten", "id" : "erik-zettersten", "seed" : 1}, {"name" : "James Coutry", "id" : "james-coutry", "seed" : 3} ],
      [ {"name" : "Anothy Hopkins", "id" : "anthony-hopkins", "seed" : 5}, {"name" : "Teddy Koufus", "id" : "teddy-koufus", "seed" : 8} ],
      [ {"name" : "Ryan Anderson", "id" : "ryan-anderson", "seed" : 10}, {"name" : "Scott Anderson", "id" : "scott-anderson", "seed" : 12} ],
      [ {"name" : "Sammy Zettersten", "id" : "sammy-zettersten", "seed" : 14}, {"name" : "Jake Coutry", "id" : "jake-coutry", "seed" : 15} ]
    ],
    [
      [ {"name" : "Erik Zettersten", "id" : "erik-zettersten", "seed" : 1}, {"name" : "Anothy Hopkins", "id" : "anthony-hopkins", "seed" : 5} ],
      [ {"name" : "Ryan Anderson", "id" : "ryan-anderson", "seed" : 10}, {"name" : "Sammy Zettersten", "id" : "sammy-zettersten", "seed" : 14} ]
    ],
    [
      [ {"name" : "Erik Zettersten", "id" : "erik-zettersten", "seed" : 1}, {"name" : "Ryan Anderson", "id" : "ryan-anderson", "seed" : 10} ]
    ],
    [
      [ {"name" : "Erik Zettersten", "id" : "erik-zettersten", "seed" : 1} ]
    ]
  ];

let myData2 = [    [
  [ {"name" : "Erik Zettersten", "id" : "erik-zettersten", "seed" : 1, "displaySeed": "D1", "score" : 47 }, {"name" : "Andrew Miller", "id" : "andrew-miller", "seed" : 2} ],
  [ {"name" : "James Coutry", "id" : "james-coutry", "seed" : 3}, {"name" : "Sam Merrill", "id" : "sam-merrill", "seed" : 4}],
  [ {"name" : "Anothy Hopkins", "id" : "anthony-hopkins", "seed" : 5}, {"name" : "Everett Zettersten", "id" : "everett-zettersten", "seed" : 6} ],
  [ {"name" : "John Scott", "id" : "john-scott", "seed" : 7}, {"name" : "Teddy Koufus", "id" : "teddy-koufus", "seed" : 8}],
  [ {"name" : "Arnold Palmer", "id" : "arnold-palmer", "seed" : 9}, {"name" : "Ryan Anderson", "id" : "ryan-anderson", "seed" : 10} ],
  [ {"name" : "Jesse James", "id" : "jesse-james", "seed" : 1}, {"name" : "Scott Anderson", "id" : "scott-anderson", "seed" : 12}],
  [ {"name" : "Josh Groben", "id" : "josh-groben", "seed" : 13}, {"name" : "Sammy Zettersten", "id" : "sammy-zettersten", "seed" : 14} ],
  [ {"name" : "Jake Coutry", "id" : "jake-coutry", "seed" : 15}, {"name" : "Spencer Zettersten", "id" : "spencer-zettersten", "seed" : 16}]
]];

function showBracketForm(){
    console.log("GOT HERE");
    $("#create-tournament-button").hide();
    $("#current_events").hide();
    $("#event_creator").show();
}

function openCreateEventMenu(){
  console.log("Got in here");
  $("#event_creator").html(`
  <div class="w3-container" id="where" style="padding-bottom:32px;">
    <div class="w3-content" style="max-width:700px">
      <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Create an event</span></h5>
      <form action="/" target="_blank">
        <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></p>
        <p><input class="w3-input w3-padding-16 w3-border" id="tourney_people_count" type="number" placeholder="How many people" required name="People"></p>
        <p><input class="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" ></p>
        <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message"></p>
        <p><button class="w3-button w3-black" onclick="render_gracket(10)">Create Event</button></p>
      </form>
    </div>
    <button onclick="createInputForNames($('#tourney_people_count').val());">Test the bracket designer</button>
    <button onclick="showGracketCreator()">Show Test Bracket</button>
  </div>`);
  $("#current_events").hide()
  
  }



  function createInputForNames(amount){
    if ((amount/2) % 2 !=0) {
      alert("The amount of people must be a multiple of 2.");
      return;
    }
    console.log("Creating " + amount + " input boxes"); //<label class="inline-label">Name</label><label class="inline-label">Seed</label>
    document.getElementById('bracket_creator').innerHTML += (`<div id="names_list"></div>`);

    let htmlstring = ``;
    htmlstring+=`<h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Name and Seed </span></h5>`;
    for (var i = 0; i < amount; i++){
        htmlstring += `<div><p><input type="text" placeholder="Name" id="Name_` + i + `" ><input  type="number" placeholder="Seed"  id="Seed_` + i + `"></p>
      `;
      }
      $("#Seed_" + i).val(i);
    
    document.getElementById('names_list').innerHTML = htmlstring;

    for (var j = 0; j < amount; j++){
      $("#Seed_" + j).val(j+1);
    }
  }

  function getPeopleInTourney(){
    //var item = document.getElementById("tourney_people_count");
    var amount = $("#tourney_people_count").val();
    console.log(amount);

    for (var i=0; i<amount; i++){
      console.log($("#Name_" + i).val());
    }
  }


  /*function createInputForNames(amount){
    console.log("Creating " + amount + " input boxes"); //<label class="inline-label">Name</label><label class="inline-label">Seed</label>
    document.getElementById('bracket_creator').innerHTML += (`<div id="names_list"></div>`);

    let htmlstring = ``;
    htmlstring+=`<h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Name and Seed </span></h5>`;
    for (var i = 0; i < amount / 2; i++){
        for (var j = 0; j < 2; j++){
          htmlstring += `<div><p><input type="text" placeholder="Name" id="Name_ ` + (i+j) + `" ><input  type="number" placeholder="Seed"  id="Seed_` + (i+j) + `"></p>
          `;
        }
        htmlstring += `<div color="grey"></div>`


      }
      $("#Seed_" + i).val(i);
    
    document.getElementById('names_list').innerHTML = htmlstring;

    for (var j = 0; j < amount; j++){
      $("#Seed_" + j).val(j+1);

    }
  }*/

  function renderGracket(people){
    let slots = [];
    for (var i =0; i < people; i++){
      slots.push([]);
    }
  }

  function showGracketCreator(){
    $(".my_gracket").gracket({ 
        src: myData
      });
}