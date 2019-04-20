// var topics=["Jon Snow","Sansa","Cersei","Arya","Daenerys","Jaime","Catelyn"];
var topics = ["Jon Snow",  "Arya", "Daenerys"];
var topic;
$("button").on("click", getGif());

$(function () {
  createButtons();
 //$("button").on("click", getGif());

});

function createButtons() {
  for (let i=0; i<topics.length; i++) {
    topic=topics[i]
    btnId ='topicbtn_' + i
    var $newBtn=$('<button/>', {
      text: topic,
      id: 'topicbtn_'+i,
      class:'btn'});
   // $("#btnId").attr('data-person'=topic);
    $(".btnsDiv").append($newBtn);
  } 
  // $("button").click(getGif());


 };
function getGif(){
//alert("clicked " + myTopic)
  //topic = $(this).text;
  //alert("clicked " );
  topic='Jon Snow';
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      // Storing an array of results in the results variable
      var results = response.data;
    console.log(results);
  });
}
