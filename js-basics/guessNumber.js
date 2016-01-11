    var randomNumber = Math.floor((Math.random() * 100) + 1);

    function guessNumber(){
        var number = parseInt(prompt("Please enter a number from 1 to 100", ""));
        compareNumbers(randomNumber, number);
    }

    function compareNumbers(randomNumber, number){
        if (number > randomNumber) {
            alert("Your number is higher, try again");
            guessNumber();
        } else if (number < randomNumber) {
            alert("Your number is lower, try again");
            guessNumber();
        } else {
            alert("You are right, the number is " + randomNumber);
        }
    }

    guessNumber();