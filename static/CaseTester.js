//Javascript objects that define our cases
var nomCase = {
    masculine: "der",
    feminine: "die",
    neuter: "das",
    indefMasc: "ein",
    indefFem: "eine",
    indefNeut: "ein"
};

var accCase = {
    masculine: "den",
    feminine: "die",
    neuter: "das",
    indefMasc: "einen",
    indefFem: "eine",
    indefNeut: "ein"
};

var datCase = {
    masculine: "dem",
    feminine: "der",
    neuter: "dem",
    indefMasc: "einem",
    indefFem: "einer",
    indefNeut: "einem"
};

var genCase = {
    masculine: "des",
    feminine: "der",
    neuter: "des",
    indefMasc: "eines",
    indefFem: "einer",
    indefNeut: "eines"
};

function getRandomNumber(num) {
    return Math.floor((Math.random() * num) + 1);
}

function getRandomQuiz() {
    //Randomly select our case, gender, and article type
    var qcase = getRandomNumber(4);
    var gender = getRandomNumber(3);
    var indefinite = getRandomNumber(2);
    var questionText = "";
    var questionAnswer = "";

    //Build the question text
    switch (indefinite) {
        case 1:
            questionText = "Definite ";
            break;
        case 2:
            questionText = "Indefinite ";
            break;
    }

    switch (gender) {
        case 1:
            questionText += " masculine form of ";
            break;
        case 2:
            questionText += " feminine form of ";
            break;
        case 3:
            questionText += " neuter form of ";
            break;

    }

    switch (qcase) {
        case 1:
            questionText += "the Nominative case:";
            break;
        case 2:
            questionText += "the Accusative case:";
            break;
        case 3:
            questionText += "the Dative case:";
            break;
		case 4:
            questionText += "the Genitive case:";
            break;
    }

    //Display the question text and store our case, gender, and article type in the html element
    $('.questionHolder').text(questionText);
    $('.questionHolder').attr('data-case', qcase);
    $('.questionHolder').attr('data-gender', gender);
    $('.questionHolder').attr('data-indefinite', indefinite);

    //Reset input fields
    $('#txtAnswer').val('');
    $('.resultHolder').text('');
    $('.correctAnswer').text('');
}

function getAnswer(qcase, gender, indefinite) {
    if (qcase == 1 || qcase == 2) {
        if (gender == 2) {
            if (indefinite == 1) return "die";
            else return "eine";
        } else if (gender == 3) {
            if (indefinite == 1) return "das";
            else return "ein";
        }
    }

    if (qcase == 1 && gender == 1) {
        if (indefinite == 1) return "der";
        else return "ein";
    }

    if (qcase == 2 && gender == 1) {
        if (indefinite == 1) return "den";
        else return "einen";
    }

    if (qcase == 3) {
        if (gender == 1 || gender == 3) {
            if (indefinite == 1) return "dem";
            else return "einem";
        } else if (gender == 2) {
            if (indefinite == 1) return "der";
            else return "einer";
        } 
    }

	if (qcase ==4) {
		if (gender == 1 || gender == 3) {
			if (indefinite == 1) return "des";
			else return "eines";
		} else if (gender == 2) {
			if (indefinite == 1) return "der";
			else return "einer";
		}
	}
	
    return "nom";
}

function validate() {
    var qcase = $('.questionHolder').attr('data-case');
    var gender = $('.questionHolder').attr('data-gender');
    var indefinite = $('.questionHolder').attr('data-indefinite');
    var answer = getAnswer(qcase, gender, indefinite);
    var userAnswer = $('#txtAnswer').val();

    if (userAnswer === answer) {
        $("#correct").show();
    } else {
        $("#incorrect").show();
        $('.correctAnswer').text('The correct answer is ' + answer + '.');
    }
}

//This runs when the page loads
$(function () {
    getRandomQuiz();
});

$("#txtAnswer").keyup(function(event){
    if(event.keyCode == 13){
        $("#check").click();
    }
});
