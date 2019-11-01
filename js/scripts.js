
// business logic

$(document).ready(function() {
    $("form#BeepBoop").submit(function(event) {
        event.preventDefault();

        var number = $("#number").val();
        var result = getResult(number);

        $("#output").text(result);
        $("#result").show();

    });
});

//  user logic
