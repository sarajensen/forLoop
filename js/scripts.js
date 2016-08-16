$(document).ready(function() {
  var i,
      count,
      result,
      number1,
      number2;

  function math() {
    if (number1 < number2) {
      alert("This doesn't work");
    } else {
      for (i = 0; i <= number3; i++) {
        count = number2;
        result = count * i;
        alert(result);
      };
    };
  };

  $('form#input1').submit(function(event) {
    event.preventDefault();
    number1 = $("#number1").val();
    number2 = $("#number2").val();
    number3 = number1 / number2;
    math();
  });

  $('form#input2').submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val().replace('e,' , '-'),
        newSentence = sentence.split();
    console.log(newSentence);

  });

});
