$(document).ready(function() {
  let a = 0;
  //generating board
  for(let i = 1; i <= 15; i++) {
    $(".board").append('<div class="row row' + i + '"></div>');
    for (let j = 1; j <= 15; j++) {
      $('.row' + i).append('<div class=column "' + i + ' ' + j + '"></div>');
    }
  }
  $(".column").on('click', function(e) {
    if(a % 2 === 0) {
      $(this).css("background-color", "black");
      a = 1;
    } else {
      $(this).css("background-color", "green");
      a = 0;
    }
    var styles = {
      width: "30px",
      height: "30px",
      margin: "0",
    };
    $(this).css( styles );
  });
});