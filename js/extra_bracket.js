//https://codepen.io/meriawep/pen/ExaqNvd

var dataTemplate = {teams: [], results: []}

var matchData = {
    teams : [
      ["Team 1", "Team 2"],
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
    ],
    results : [
      //first round - last 16
      [
        [4,3,'Match 1'], 
        [1,4,'Match 2'], 
        [1,4,'Match 3'], 
        [1,4,'Match 4'], 
      ],
      //second round - Quarter Final
       [
        [4,3,'Match 9'], 
        [1,4,'Match 10'], 
      ],
      //third round - Semi Final
       [
        [1,4,'Match 14']
      ],
      //fourth round - Final
       [
        [], //winners
        [1,4,'Match 16'] //third place
      ]
    ]
  }
  
  /*var matchBlankData = {
    teams : [
      ["Open Slot", "Open Slot"],
      ["Open Slot", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
    ],
    results : [
      //first round - last 16
      [
        [4,3,'Match 1'], 
        [1,4,'Match 2'], 
        [1,4,'Match 3'], 
        [1,4,'Match 4'], 
      ],
      //second round - Quarter Final
       [
        [4,3,'Match 9'], 
        [1,4,'Match 10'], 
      ],
      //third round - Semi Final
       [
        [1,4,'Match 14']
      ],
      //fourth round - Final
       [
        [], //winners
        [1,4,'Match 16'] //third place
      ]
    ]
  }*/


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
        </form>
      </div>
      <p><button class="w3-button w3-black" onclick="createInputForNames();">Next</button></p>
    </div>`);
    $("#current_events").hide()
    
    }

    function createInputForNames(){
        let amount = $('#tourney_people_count').val();
        if ((amount/2) % 2 !=0) {
          alert("The amount of people must be a multiple of 2.");
          return;
        }
        console.log("Creating " + amount + " input boxes"); //<label class="inline-label">Name</label><label class="inline-label">Seed</label>
        document.getElementById('bracket_creator').innerHTML += (`<div id="names_list"></div>`);
    
        let htmlstring = ``;
        htmlstring+=`<h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Name and Email</span></h5>`;
        for (var i = 0; i < amount; i++){
            htmlstring += `<div><p class="w3-center"><input type="text" placeholder="Name" id="Name_` + i + `"><input type="number" placeholder="seed"  id="Seed_` + i + `"></p>
          `;
          //htmlstring += `<div><p class="w3-center"><input type="text" placeholder="Name" id="Name_` + i + `"><input type="email" placeholder="Email"  id="Email_` + i + `"></p>
          }
          $("#Seed_" + i).val(i);
        htmlstring += `<button class="w3-button w3-black" onclick="loadBracket()">Generate Bracket</button>`;

        document.getElementById('names_list').innerHTML = htmlstring;
    
        for (var j = 0; j < amount; j++){
          $("#Name_" + j).val("Test" + (j+1));
    
          $("#Seed_" + j).val((j+1));
        }
      }

    
function loadBracket(){
    clearBracket();
    let amount = $('#tourney_people_count').val();
    console.log("Got in here?");
    $("#bracket_holder").html(`<span id="matchCallback"></span>
    <div id="matches">
      <div class="demo">
      </div>
    </div>
    <div id="matchesblank">
      <div class="demo">
      </div>
    </div>`);

    data = {...dataTemplate};
    var count = 0;
    for (var j = 0; j < amount/2; j++){
        var teamX = []
        for (var k = 0; k < 2; k++){
            if (k==0){
                teamX = [...teamX ,($("#Name_" + (count)).val())];
            }
            else { //k=1
                teamX = [...teamX ,($("#Name_" + (amount - count)).val())];
            }
            count++;
        }
        data.teams = [...data.teams, teamX];
        //$("#Name_" + j).val("Test" + j);
        
        console.log(data.teams);
        setBracketData(data);
        //$("#Email_" + j).val("test@website.com");
    }
  }

  function clearBracket(){
    setBracketData(dataTemplate);
  }

  function setBracketData(data){
    $(function() {
        $('#matches .demo').bracket({
          init: data,
          onMatchClick: onclick,
          onMatchHover: onhover
        })
        
        /*$('#matchesblank .demo').bracket({
          init: matchBlankData,
          onMatchClick: onclick,
          onMatchHover: onhover
        })*/
      })
  }

  function getPeopleInTourney(){
    var items = [];
    //var item = document.getElementById("tourney_people_count");
    var amount = $("#tourney_people_count").val();
    console.log(amount);

    var newArr =[[]];

    console.log("Running the loop until " + amount/2);
    var count = 0;
    if (amount > 50){
      alert("The maximum allowed number of people in a tournament is 50 ");
      return;
    }
    for (var i=1; i<(amount/2)+1; i++){
      for (var j = 0; j < 2; j++)
      {
        var current_name = $("#Name_" + count).val();
        console.log(current_name);
        count++;
      } 
    }
  }

  function createRounds(){
    let htmlstring = ``;
    let numRounds = $('#tourney_people_count').val();
    for (var i = 1; i <= getBaseLog(2, numRounds); i++){
        htmlstring += `<h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Round ` + i + ` </span></h5>`;
    }
    $("#round_holder").html(htmlstring);
}

  /*function createRandomBracket(){

  }*/


  function getBaseLog(base, y) {
    return Math.log(y) / Math.log(base);
  }

  function onclick(data) {
    $('#matchCallback').text("onclick(data: '" + data + "')")
  }
   
  function onhover(data, hover) {
    $('#matchCallback').text("onhover(data: '" + data + "', hover: " + hover + ")")
  }
   
  