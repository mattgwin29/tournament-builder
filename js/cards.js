let options = ["test1", "test2", "test3", "test4"];

function create_cards(c,  name, date, img){
    return `<div class="` + c + `">
                <div class="card_image"> <img src="` + img + `" /> </div>
                <div class="card_title title-white">
                <p>` + name+ `</p>
                </div>
            </div>`;
}


for (var i = 0; i < 29; i++){
    $(".cards-list").append(create_cards("card " + i, "deez nuts", null, null));
}