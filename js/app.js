//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

// 1. Add spoilers
$(".spoiler span").hide();
// 2. Add button
$(".spoiler").append('<button>Reveal Spoiler!</button>');
