
//  user logic

var aResult = function(number) {
  var result = [];
  for (i = 0; i <= number; i++){
    var iString = i.toString();
    var name = $("#text").val();
    if (iString.includes("3")) {
      result.push("I'm sorry " + name + ", I'm afraid I can't do that!");
    } else if (iString.includes("2")) {
      result.push("Boop!");
    } else if (iString.includes("1")) {
      result.push("Beep!");
    } else {
      result.push(" " + i);
    }
  }
  return result;
}

// business logic

$(document).ready(function() {
    $("form#BeepBoop").submit(function(event) {
        event.preventDefault();

        var number = $("#number").val();
        var result = aResult(number);
        $("#text").val(" ");
        $("#number").val(" ");
        $("#output").text(result);
        $("#result").show();

    });
});
