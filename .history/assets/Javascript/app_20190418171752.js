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

  //alert("clicked "+myTopic );
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    myTopic + "&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      // Storing an array of results in the results variable
      var results = response.data;
    //console.log(results);
      showGifs(results)
  });
  function showGifs(imgSet){

    //console.log(imgSet);
    $(".showGifs").empty();
    for (var i = 0; i < imgSet.length; i++) {

      // Creating and storing a div tag
      
      // Creating a paragraph tag with the result item's rating
      var p = $("<p>").text("Rating: " + imgSet[i].rating);

      // Creating and storing an image tag
      var myImage = $("<img>");
      // Setting the src attribute of the image to a property pulled off the result item
      myImage.attr("src", imgSet[i].images.fixed_height.url);

      // Appending the paragraph and image tag to the animalDiv
      $(".showGifs").append(p);
      $(".showGifs").append(myImage);
    }
  };
}
