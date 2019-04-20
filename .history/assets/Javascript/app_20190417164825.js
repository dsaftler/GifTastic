var topics=["Jon Snow","Sansa","Cersei","Arya","Daenerys","Jaime","Catelyn"];
var topic,i;
$(function () {
  var topics = ["Jon Snow", "Sansa", "Cersei", "Arya", "Daenerys", "Jaime", "Catelyn"]
  topics.foreach(function(topic,i) {

    $("<button id='topic'+i>");

  });

});

//https://media2.giphy.com/media/12IFpeqmUk20KI/100.webp?cid=790b76115cb78738397357302e1866d7
// client.search('gifs', { "q": "cats" })  or client.trending('gifs', { "q": "cats" })
//   .then((response) => {
//     response.data.forEach((gifObject) => {
//       console.log(gifObject)
//     })
//   })
//   .catch((err) => {

//   })