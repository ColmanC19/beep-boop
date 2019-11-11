
//  user logic

var aResult = function(number, name) {
  var nameU = name.toUpperCase();
  var result = [];
  for (i = 0; i <= number; i++){
    var iString = i.toString();
    if (iString.includes("3")) {
      result.push("I'm sorry " + nameU + ", I'm afraid I can't do that!");
    } else if (iString.includes("2")) {
      result.push("Boop!");
    } else if (iString.includes("1")) {
      result.push("Beep!");
    } else if (iString>= 1) {
      result.push(" " + i);
    }
  }
  return result;
}
// business logic
$(document).ready(function() {
    $("form#BeepBoop").submit(function(event) {
        event.preventDefault();
        $("#text").val();
        var name = $("#text").val();
        if (name === "") {
          alert("Please enter a name, john Doe");
        }
        var number = $("#number").val();
        if (number === "") {
          alert("Please enter a number greater than 0")
        }
        var result = aResult(number, name);
        $("#text").val(" ");
        $("#number").val(" ");
        $("#output").text(result);
        $("#result").show();
    });
});
