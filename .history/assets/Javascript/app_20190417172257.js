var topics=["Jon Snow","Sansa","Cersei","Arya","Daenerys","Jaime","Catelyn"];
var topic,i;
$(function () {
  createButtons;
  

});

function createButtons() {
  for (let i=0; i<topics.length; i++) {
    var $newBtn=$('<button/>', {
      text: i,
      id: 'topicbtn_'+i,
      class:'btn',
      click: function () {alert("clicked "+i);}
    });
    $(".btnsDiv").append($newBtn);
  } 
 };

//https://media2.giphy.com/media/12IFpeqmUk20KI/100.webp?cid=790b76115cb78738397357302e1866d7
// client.search('gifs', { "q": "cats" })  or client.trending('gifs', { "q": "cats" })
//   .then((response) => {
//     response.data.forEach((gifObject) => {
//       console.log(gifObject)
//     })
//   })
//   .catch((err) => {

//   })