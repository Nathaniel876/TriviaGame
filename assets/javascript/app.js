function submitAnswer(){
var total = 5;
var points = 0;
var q1 = document.forms["quizForm"]["q1"].value;
var q2 = document.forms["quizForm"]["q2"].value;
var q3 = document.forms["quizForm"]["q3"].value;
var q4 = document.forms["quizForm"]["q4"].value;


for (i=1;i<=total;i++)
if(eval ("q"+1) == null || eval ("q"+1)== ""){
    alert("You missing something Fam "+i);
return false;

}

}
var answers = ["a","a","c","a"];


if (q1 == answers[0]){
    score++;
}
if (q2 == answers[1]){
    score++;
}
if (q3 == answers[2]){
    score++;
}
if (q4 == answers[3]){
    score++;
    alert("You Got " +points+" out of "+total);
}