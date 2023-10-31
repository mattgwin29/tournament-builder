//https://codepen.io/meriawep/pen/ExaqNvd

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
          <p><button class="w3-button w3-black" onclick="render_gracket(10)">Create Event</button></p>
        </form>
      </div>
      <button onclick="createInputForNames($('#tourney_people_count').val());">Test the bracket designer</button>
      <button onclick="loadBracket()">Show Test Bracket</button>
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
          $("#Name_" + j).val("Test" + j);
    
          $("#Seed_" + j).val(j+1);
        }
      }
  function loadBracket(){
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


    $(function() {
        $('#matches .demo').bracket({
          init: matchData,
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


  function onclick(data) {
    $('#matchCallback').text("onclick(data: '" + data + "')")
  }
   
  function onhover(data, hover) {
    $('#matchCallback').text("onhover(data: '" + data + "', hover: " + hover + ")")
  }
   
  