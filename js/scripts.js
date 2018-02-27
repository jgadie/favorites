$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var foodInput = $("input#food").val();
    var drinkInput = $("input#drink").val();
    var animalInput= $("input#animal").val();
    var colorInput = $("input#color").val();
    var favoritethings = ["input#food", "input#drink", "input#animal", "input#color"]

    $(".food").text(foodInput);
    $(".drink").text(drinkInput);
    $(".animal").text(animalInput);
    $(".color").text(colorInput);


    $("#story").show();

    event.preventDefault();
  });
});
