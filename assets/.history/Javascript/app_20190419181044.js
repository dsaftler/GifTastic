// var topics=["Jon Snow","Sansa","Cersei","Arya","Daenerys","Jaime","Catelyn"];
var topics = ["Jon Snow",  "Arya", "Daenerys"];
var topic, newBtn, i, btnId
//$("button").on("click", getGif());

$(function () {
  createButtons();
//$(".getTopic").hide();

});

function createButtons() {
  for (let i=0; i<topics.length; i++) {
    topic=topics[i]
    // btnId ='topicbtn_' + i
    var newBtn = $('<button>' + topic + '</button>')
        .addClass('btn')
        .attr("id",'topicbtn_' + i)
        .attr('onclick', 'getGif(this.textContent);')
       $(".btnsDiv").append(newBtn);
    };
 
  } 
      // .attr('onclick', 'getGif(this.textContent);')
//$('.btn').on('click', function() {
function getGif(myTopic){
  
  //alert("clicked "+myTopic );
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    myTopic + "&api_key=cQ6v8TyEzI3FgHn04lpj1mdBt9i4u5n8&limit=10";
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
};
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
      // !the rating should be UNDER the gif
   

      // Appending the paragraph and image tag to the animalDiv
      $(".showGifs").append(p);
      $(".showGifs").append(myImage);
    }
  };


  //TODO add the form for input and add button


