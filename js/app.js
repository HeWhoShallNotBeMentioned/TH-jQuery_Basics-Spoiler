//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

// 1. Add spoilers
$(".spoiler span").hide();
// 2. Add button
$(".spoiler").append('<button>Reveal Spoiler!</button>');
//Do something when button is pushed
$("button").click(function() {
  //3.1 Show Spoiler
  $(".spoiler span").show();
  //3.2 Remove button
  $(this).remove();
});
