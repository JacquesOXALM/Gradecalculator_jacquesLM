
function calculateCurrentGrade() {
    var hwAvg = average(document.getElementById("HomeworkGrade").value);
    var quizAvg = average(document.getElementById("QuizGrade").value);
    var testAvg = average(document.getElementById("TestGrade").value);
    var midtermGrade = average(document.getElementById("MidtermGrade").value);
    var hw = hwAvg * (document.getElementById("HomeworkWeight").value/100);
    var quiz =  quizAvg * (document.getElementById("QuizWeight").value/100);
    var test = testAvg * (document.getElementById("TestWeight").value/100);
    var midterm = midtermGrade * (document.getElementById("MidtermWeight").value/100);
    var currentGrade = hw + quiz + test + midterm + "%";
    if(isNaN(hwAvg)==true || isNaN(quizAvg)==true || isNaN(testAvg)==true || isNaN(midtermGrade)==true) {
        document.getElementById("grade").innerHTML = "Pretty sure your grade average didn't include any letters, Mr. Rufus the Doofus.";
        return;
    }
    if(hwAvg>150 || quizAvg>150 || testAvg>150 || midtermGrade>150){
        document.getElementById("grade").innerHTML = "You sure you scored that high bud? If you were that smart you would do your own final's calculation.";
        return;
    }
    if (document.getElementById("HomeworkWeight").value / 100 + document.getElementById("QuizWeight").value / 100 + document.getElementById("TestWeight").value / 100 + document.getElementById("MidtermWeight").value / 100 == 1) {
        document.getElementById("grade").innerHTML = currentGrade;
    } else {
        document.getElementById("grade").innerHTML = "Weights need to add up to 100, don't be an idiot, you idiot.";
    }

    colorCode(document.getElementById("HomeworkRow"),hwAvg);
    colorCode(document.getElementById("QuizRow"),quizAvg);
    colorCode(document.getElementById("TestRow"),testAvg);
    colorCode(document.getElementById("MidtermRow"),midtermGrade);
}

function average(string) {
    var sum=0;
    var array = string.split(",");
    for (var i=0; i< array.length; i++){
        array[i] = parseInt(array[i]);
        sum += array[i];
    }
    var avrg = (sum / array.length);
    return avrg;

}

function calculateNecessaryGrade() {
    var gradeIhave = parseInt(document.getElementById("grade").innerHTML);
    var gradeIwant = parseInt(document.getElementById("desiredGrade").value);
    var weight = document.getElementById("FinalWeight").value/100;
    var necessaryscore = ((gradeIwant-(1-weight)*gradeIhave)/weight);
    document.getElementById("necessaryFinal").innerHTML = "You need a " + necessaryscore + "% on the final to get a " + gradeIwant
    + "% in the class. ";
    if(necessaryscore >= 90 && necessaryscore <= 100){
        document.getElementById("message").innerHTML = "Its do-able if you start studying RIGHT NOW";
    }else if(necessaryscore >= 70 && necessaryscore <= 89){
        document.getElementById("message").innerHTML = "You can do it!";
    }else if(necessaryscore > 0 && necessaryscore <= 69){
        document.getElementById("message").innerHTML = "Easy-Peasy!";
    }else if(necessaryscore <= 0){
        document.getElementById("message").innerHTML = "You can't fail unless you really mess up!";
    }else if(necessaryscore > 100){
        document.getElementById("message").innerHTML = "You'd better start writing your will, you're done for!";
    }
}




function colorCode(row, grade) {

    if (grade > 95) {
        row.style.background = "#fc1bff";
    }
    if (grade <= 95 && grade >= 84) {
        row.style.background = "#36ff59";
    }
    if (grade < 84 && grade >= 75) {
        row.style.background = "#d3ff2d";
    }
    if (grade < 75 && grade >= 65) {
        row.style.background = "#ffc219";
    }
    if (grade < 65) {
        row.style.background = "#ff1624";
    }

}
