// var topics=["Jon Snow","Sansa","Cersei","Arya","Daenerys","Jaime","Catelyn"];
var topics = ["Jon Snow",  "Arya", "Daenerys"];
var topic;
$(function () {
  createButtons();
 $("button").on("click", getGif ());

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
}
//https://media2.giphy.com/media/12IFpeqmUk20KI/100.webp?cid=790b76115cb78738397357302e1866d7
// client.search('gifs', { "q": "cats" })  or client.trending('gifs', { "q": "cats" })
//   .then((response) => {
//     response.data.forEach((gifObject) => {
//       console.log(gifObject)
//     })
//   })
//   .catch((err) => {

//   })