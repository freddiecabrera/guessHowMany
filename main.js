var gator = 'http://i.imgur.com/Rg6G77m.png?1';
function randomNumberOfGators() {
  //var gators = $('.cage').html('<img src="' + gator + '" width="200" height="200">');
  var randomNumber = Math.floor((Math.random() * 9) + 1);
  for(var i = 0; i < randomNumber; i++){
    $('.cage').append('<img src="' + gator + '" width="200" height="200">');
    console.log(randomNumber[i]);
  }
}

$(function() {
  randomNumberOfGators();

});
