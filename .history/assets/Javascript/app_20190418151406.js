// var topics=["Jon Snow","Sansa","Cersei","Arya","Daenerys","Jaime","Catelyn"];
var topics = ["Jon Snow",  "Arya", "Daenerys"];
var topic, newBtn, i
//$("button").on("click", getGif());

$(function () {
  createButtons();
 //$("button").on("click", getGif());

});

function createButtons() {
  for (let i=0; i<topics.length; i++) {
    topic=topics[i]
    btnId ='topicbtn_' + i
    var newBtn=$('<button/>', {
      text: topic,
      id: btnId,
      });
    // $("#btnId").attr('onClick', 'getGif(this);');
    $("#btnId").addClass('btn');
    $(".btnsDiv").append(newBtn);
    };
 
   // $("#btnId").attr('data-person'=topic);
    // $("newBtn").removeAttr('onclick');
    // $("newBtn").attr('onClick','getGif(this);');

    // $(".btnsDiv").append(newBtn);
  } 
 
    $(".btn").on("click", {alert('Click')}) ;
  // {
  //     console.log($(this).text());
  //   });
  // $(".btn").on("click", function () {
  //   console.log($(this).text());
  // });    
  // $("button").on("click", function () {
  //   console.log($(this).text());
  // });


function getGif(){
//alert("clicked " + myTopic)
   myTopic = "test";
  // myTopic = $(this).text;

  alert("clicked "+myTopic );
  //app.jstopic='Jon Snow';
  // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  //   topic + "&api_key=dc6zaTOxFJmzC&limit=10";
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // })
  //   .then(function (response) {
  //     // Storing an array of results in the results variable
  //     var results = response.data;
  //   console.log(results);
  // });
}
