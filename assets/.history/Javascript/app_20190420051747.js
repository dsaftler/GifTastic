var topics = ["Daenerys Targaryen", "Jon Snow", "Sansa Stark", "Catelyn Stark","Arya Stark", "Cersei Lannister", "Jaime Lannister"];
// var topics = ["Jon Snow",  "Arya", "Daenerys"];
var topic, newBtn, i, btnId;
var thisImg;
var myTopic;
var nextBatchSize;
// isAdd=false;
//$("button").on("click", getGif());
$(".getTopic").hide();
$("#getMore").hide();
$(function () {
  createButtons();


});

function createButtons() {
  for (let i=0; i<topics.length; i++) {
    topic=topics[i]
    // btnId ='topicbtn_' + i
    var newBtn = $('<button>' + topic + '</button>')
        .addClass('imgBtn')
        .attr("id",'topicbtn_' + i)
        .attr('onclick', 'getGif(this.textContent,0);')
       $(".btnsDiv").append(newBtn);
    };
   // $('.getTopic').show();
 
  } 

function getGif(thisTopic,batchsize){
 $("#getMore").hide();
 myTopic=thisTopic
  //alert("clicked "+myTopic );
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    myTopic + "&offset="+nextBatchSize+
    "&api_key=cQ6v8TyEzI3FgHn04lpj1mdBt9i4u5n8&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      // Storing an array of results in the results variable
      var results = response.data;
    console.log(results);
      showGifs(results,batchsize>0)
  });
};
function showGifs(imgSet,isAdd){

  //console.log(imgSet);
  if (!isAdd===true){
     $(".showGifs").empty();
  };
  for (var i = 0; i < imgSet.length; i++) {
   
    var imgId = 'image_' + [i]
    var  newGif= $('<img />',{
        src:imgSet[i].images.fixed_height_still.url,
        "data-still": imgSet[i].images.fixed_height_still.url,
        "data-animate": imgSet[i].images.fixed_height.url,
        "data-state":"still",
        "data-url": imgSet[i].images.url,
        id:imgId,
        title: "Title: " + imgSet[i].title + "  Rating: " + imgSet[i].rating , 
        class: 'gif'});
        //#region   --- infoText
    //  newGif.attr('onclick', 'changeState();');
    // //console.log(newGif);
    //    var infoWidth=imgSet[i].images.fixed_height_still.width + 20;
    //    var infoText = $('<p class="infoText" width=infoWidth></p>');
    //    $(".infoText").text("Title: " + imgSet[i].title + '</br>'
    //     +"Rating: " + imgSet[i].rating + '</br>'
    //     + "Height:" + imgSet[i].images.fixed_height_still.height + '</br>'
    //     + "Width:" + imgSet[i].images.fixed_height_still.width+'</br>')
    // $(".info").text(infoText);
    // Setting the src attribute of the image to a property pulled off the result item
    //  console.log(infoText);
      // !the rating should be UNDER the gif
    //$(".gif").wrap("<div class='imgContainer' width=imgSet[i].images.fixed_height_still.width+20></div>")
    //$(".imgContainer").append($(".infoText"))
    //#endregion

    // Appending the paragraph and image tag to the animalDiv
   // $(".showGifs").append($(".imgContainer"));
     $(".showGifs").append(newGif);
    //  $(".showGifs").append(infoText);
    }
  // $('.gif').click(changeState());
    var getMoreBtn = $('<button>Get 10 More ?</button>')
       .attr("id", "getMore")
      .attr('onclick', 'getGif(myTopic,10);')
    $(".showGifs").append(getMoreBtn);
  };

  $(".gif").click(function() {
// function changeState() {

  var state = $(this).attr("data-state");

    if (state === "still") {
     $(this).attr("src", $(this).attr("data-animate"));
     $(this).attr("data-state", "animate");
    } else {
     $(this).attr("src", $(this).attr("data-still"));
     $(this).attr("data-state", "still");
   }
  // };
  });
//https://media3.giphy.com/media/U3CfsSrd9CbCP95h4d/200_s.gif

  //TODO add the form for input and add button


