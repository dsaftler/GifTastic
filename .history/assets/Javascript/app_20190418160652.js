// var topics=["Jon Snow","Sansa","Cersei","Arya","Daenerys","Jaime","Catelyn"];
var topics = ["Jon Snow",  "Arya", "Daenerys"];
var topic, newBtn, i, btnId
//$("button").on("click", getGif());

$(function () {
  createButtons();
 //$("button").on("click", getGif());
  // $(".btn").on("click", getGif());

});

function createButtons() {
  for (let i=0; i<topics.length; i++) {
    topic=topics[i]
    // btnId ='topicbtn_' + i
    var newBtn = $('<button>' + topic + '</button>')
        .attr('onclick', 'getGif(this.textContent);')
        .addClass('btn')
        .attr("id",'topicbtn_' + i);
       $(".btnsDiv").append(newBtn);
    };
 
  } 
 

function getGif(myTopic){

  alert("clicked "+myTopic );
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    myTopic + "&api_key=dc6zaTOxFJmzC&limit=10";
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
