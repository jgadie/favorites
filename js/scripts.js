$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["food", "drink", "animal", "color"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
