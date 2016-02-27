var gator = 'http://i.imgur.com/Rg6G77m.png?1';
var amountOfGators = 0;
var sumOfPrince = 0;

function randomNumberOfGators() {
  $('.cage').empty();
  sumOfPrince = 0;
  var randomNumber = Math.floor((Math.random() * 9) + 1);
  amountOfGators = randomNumber;

  for(var i = 0; i < randomNumber; i++){
    sumOfPrince = randomNumber;
    $gators = $('.cage').append('<img id="picture" src="' + gator + '" width="100" height="100">');
  }
}

function restart(){
  $('.cage').empty();
}

function newSum(){
  $('.cage').empty();
  var randomNumber = Math.floor((Math.random() * 9) + 1);
  amountOfGators = randomNumber;
  console.log(amountOfGators);
  for(var i = 0; i < randomNumber; i++){
    $gators = $('.cage').append('<img id="picture" src="' + gator + '" width="100" height="100">');
  }
}

function select(){
  var $this = $(this);
  $this.toggleClass('selected');

  // console.log(amountOfGators);
  // console.log(sumOfPrince);

  if($this.hasClass('selected')){
    console.log('has class of selected');
    //sumOfPrince += parseInt($this.attr('id'), 0);
  } else {
    //sumOfPrince -= parseInt($this.attr('id'), 0);
    console.log('does Not have class');
  }

  parseInt($this.attr('id'));
}

function check() {
  if(sumOfPrince - amountOfGators === 0){
    console.log('you win');
  } else {
    console.log('you lost');
  }

  //console.log('the sum:',sumOfPrince - amountOfGators);
  sumOfPrince = 0;

  //console.log(sumOfPrince);

}

$(function() {
  $('#new-game').click(randomNumberOfGators);
  $('#restart-game').click(restart);
  $('#new-sum').click(newSum);
  $('.prince').click(select);
  $('#check').click(check);

});
