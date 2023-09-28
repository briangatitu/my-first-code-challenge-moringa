function calculateGrade() {
    const score = parseInt(document.getElementById("score").value);

    let grade;

    if (score > 100 || score < 0){
        console.log("Not Applicable!");
    }
   
    
    else if (score > 79) {
        grade = "A";
    } 

    else if (score >= 60 && score <= 79) {
        grade = "B";
    }

     else if (score >= 50 && score <= 59) {
        grade = "C";
    } 

    else if (score >= 40 && score <= 49) {
        grade = "D";
    } 

    else if(score >= 0 && score < 40){
        grade = "E";
    }
     
    else 
    console.log("Not Applicable!")
    
    document.getElementById("result").innerHTML = `Student grade is: ${grade}`;
}
 
function getNetSalary(){
     
    let paye;

    personalRelief = 3000;

    grossSalary = ("Enter your salary: ")

    MhasibuSacco= ("Enter you sacco contribution: ")

    privatepensionDeductions = ("Enter your private pension Deduction: ")

    NHIFDeductions = ("Enter your NHIFDeduction: ")  

    // deductions

    totalDeductions = (NHIFDeductions + MhasibuSacco + personalRelief + privatepensionDeductions);
    taxableIncome = grossSalary - totalDeductions;

    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)

    //PAYE 

    switch(true){
        case (taxableIncome <= 30000):
            paye = taxableIncome * 0.18;
            break;

        case (taxableIncome >= 30001 && taxableIncome <= 38333):
            paye = taxableIncome * 0.30;
            break;

        case (taxableIncome > 38333):
            paye = taxableIncome * 0.20;
            break;  

    }
    
    netSalary = (parseInt (taxableIncome - paye));
    console.log(`netSalary is..: ${netSalary}`)
    
}

  // Function to check car speed
  document.getElementById("check-speed-btn").addEventListener("click", function () {
    var speedInput = parseFloat(document.getElementById("speed-input").value);
    var output = document.getElementById("output");

    if (!isNaN(speedInput)) {
        if (speedInput <= 60) {
            output.innerHTML = "You are driving within the speed limit.";
        } else if (speedInput <= 80) {
            output.innerHTML = "Points: 2";
        } else {
            output.innerHTML = "License suspended";
        }
    } else {
        output.innerHTML = "Please enter a valid speed.";
    }
});
;