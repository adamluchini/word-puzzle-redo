 var puzzleOutput = function(inputString) {
   for (var index=0; index < inputString.length; index++) {
     if(/[aeiouAEIOU]/g.test(inputString[index])) {
       inputString = inputString.slice(0, index) + "-" +
       inputString.slice(index+1);
   }
 }
 return inputString;
}

$(document).ready(function() {
  $("#sentence").submit(function(event) {

    $("#answer").text(puzzleOutput($("#response").val()));
    event.preventDefault();
  });
});
