function calculateScore() {
    let input =  document.getElementById('input').value;
    let passingScore = (input>= 20) ? "Pass!" : "Fail...time to get in shape!";

    document.getElementById('wynik').innerHTML = passingScore; 
}
    
function calculateScore2() {
    let input2 =  document.getElementById('input2').value;
    let passingScore2 = (input2>= 50) ? "Pass!" : "Fail...time to get in shape!";

    document.getElementById('wynik2').innerHTML = passingScore2; 
}

function calculateScore3() {
    let input3 =  document.getElementById('input3').value;
    let passingScore3 = (input3>= 60) ? "Pass!" : "Fail...time to get in shape!";
 
    document.getElementById('wynik3').innerHTML = passingScore3; 
}
    