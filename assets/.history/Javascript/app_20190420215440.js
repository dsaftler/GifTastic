var topics = ["Daenerys Targaryen", "Jon Snow", "Sansa Stark", "Catelyn Stark", "Arya Stark", "Cersei Lannister", "Jaime Lannister"];
// var topics = ["Jon Snow",  "Arya", "Daenerys"];
var favorites = [];
var topic, newBtn, i, btnId;
var thisImg;
var myTopic;
var nextBatchPt = 0
var newTopic
var getNewTopic
    // isAdd=false;
    //$("button").on("click", getGif());
    // $(".getTopic").hide();
$("#getMore").hide();
$(function() {
    createButtons();


});

function createButtons() {
    $(".btnsDiv").empty()
    for (let i = 0; i < topics.length; i++) {
        topic = topics[i]
            // btnId ='topicbtn_' + i
        var newBtn = $('<button>' + topic + '</button>')
            .addClass('imgBtn')
            .attr("id", 'topicbtn_' + i)
            .attr('onclick', 'getGif(this.textContent,0);')
        $(".btnsDiv").append(newBtn);
    };
    newTopic = $("<input/>").attr({ type: "text", id: "newTopic", placeholder: "New Character?" });

    getNewTopic = $('<button>Add</button>')
        .addClass('txtBtn')
        .attr('onclick', 'addTopic($("#newTopic").val().trim());')

    $(".btnsDiv").append(newTopic);
    $(".btnsDiv").append(getNewTopic);
}

function addTopic(newTopic) {
    topics.push(newTopic);
    console.log(topics)
    createButtons();
}

function getGif(thisTopic, batchsize) {
    $("#getMore").hide();
    myTopic = thisTopic
    if (batchsize > 0) {
        nextBatchPt = nextBatchPt + 10
    }
    //alert("clicked "+myTopic );
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        myTopic + "&offset=" + nextBatchPt +
        "&api_key=cQ6v8TyEzI3FgHn04lpj1mdBt9i4u5n8&limit=10";
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
            console.log(results);
            showGifs(results, batchsize > 0)
        });
};

function showGifs(imgSet, isAdd) {

    //console.log(imgSet);
    if (!isAdd === true) {
        $(".showGifs").empty();
    } else {
        $("#getMore").remove();
    };

    for (var i = 0; i < imgSet.length; i++) {

        var imgId = 'image_' + [i]
        
        var newGif = $('<img />', {
            src: imgSet[i].images.fixed_height_still.url,
            "data-still": imgSet[i].images.fixed_height_still.url,
            "data-animate": imgSet[i].images.fixed_height.url,
            "data-state": "still",
            "data-url": imgSet[i].images.url,
            id: imgId,
            alt: imgSet[i].title,
            title: "Title: " + imgSet[i].title + "  Rating: " + imgSet[i].rating,
            class: 'gif txtBtn',                      
        });
        // $(".newGif").wrap("<figure class='fig' width=newGif.width+20></figure>");
    //   console.log(newGif)
            // var newGif=$('<figure />',{
            //     width:newGif.width + 20 ,
            //     figcaption:newGif.title});
            //#endregion
        // $('.gif').click(changeState());
        var newGif = $('<img />', {
            src: url("../images/2019_04_20_21_37_15_ezgif.com_gif_maker.webp_339_150_.png"),
            id: "getMore",
            class: "txtBtn"
        });
        $("newGif").attr('onclick', 'getGif(myTopic,10);')


        // var getMoreBtn = $('<div>Get 10 More ?</div>')
        //     .attr("height", 180)
        //     .attr("width", 50)
        //     .attr("id", "getMore")
        //     .addClass("txtBtn")
        //     .attr('onclick', 'getGif(myTopic,10);')

        $(".showGifs").append(newGif);
        //  $(".showGifs").append(infoText);
    }
    var newGif = $('<img />', {
        src: url("../images/2019_04_20_21_37_15_ezgif.com_gif_maker.webp_339_150_.png"),
        id: "getMore",
        class: "txtBtn"
    });
    // $("newGif").attr('onclick', 'getGif(myTopic,10);')
    // // $('.gif').click(changeState());
    // var getMoreBtn = $('<div>Get 10 More ?</div>')
    //     .attr("height",180)
    //     .attr("width",50)
    //     .attr("id", "getMore")
    //     .addClass("txtBtn")
    //     .attr('onclick', 'getGif(myTopic,10);')
    $(".showGifs").append(newGif);
};

// var imgTag = document.getElementsByClass("gif");
// imgTag.addEventListener("click", function () {
// function changeState() {
$(".showGifs").on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

function changeState(myImg) {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
};

$(".showGifs").dblclick(function() {
    console.log(thisImg)
    favorites.push(thisImg);
});
//https://media3.giphy.com/media/U3CfsSrd9CbCP95h4d/200_s.gif

//TODO add the form for input and add button