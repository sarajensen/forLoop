$(document).ready(function() {
  var i,
      count,
      result,
      number1,
      number2;

  $('.math').click(function() {
    $('form#input1').fadeIn(1000);
  });
  $('.word').click(function() {
    $('form#input2').fadeIn(1000);
  });

  
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
    var newSentence;
    event.preventDefault();
    var letters = $("#sentence").val().split("");
    for (i = 0; i <= letters.length; i++) {
      vowels();
    }

    function vowels() {
      if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
        letters.splice(i, 1, "-");
        newSentence = letters.join("");
      } else {
        return false;
      };
    };
      $("#sentenceOutput").append("<p>" + newSentence + "</p>");
  });

});


/*  $('form#input2').submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    for (i = 0; i < sentence.length; i++) {
      alert(sentence[4]);
    };
  });*/
