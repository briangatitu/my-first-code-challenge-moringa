document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate the student's grade
    document.getElementById("calculate-grade-btn").addEventListener("click", function () {
        var score = parseFloat(document.getElementById("score").value);

        if (!isNaN(score)) {
            var result = "";

            if (score >= 90) {
                result = "A";
            } else if (score >= 80) {
                result = "B";
            } else if (score >= 70) {
                result = "C";
            } else if (score >= 60) {
                result = "D";
            } else {
                result = "F";
            }

            document.getElementById("result").innerHTML = "Grade: " + result;
        } else {
            document.getElementById("result").innerHTML = "Please enter a valid score.";
        }
    });

    // Function to calculate net salary
    document.getElementById("calculate-net-salary-btn").addEventListener("click", function () {
        var grossSalary = parseFloat(document.getElementById("gross-salary").value);
        var mhasibuSacco = parseFloat(document.getElementById("Mhasibu-sacco").value);
        var privatePensionDeductions = parseFloat(document.getElementById("private-pension-deductions").value);
        var nhifDeductionsInput = document.getElementById("NHIF-deductions");
        var salaryResult = document.getElementById("salary");

        if (nhifDeductionsInput !== null) {
            var nhifDeductions = parseFloat(nhifDeductionsInput.value);

            if (!isNaN(grossSalary) && !isNaN(mhasibuSacco) && !isNaN(privatePensionDeductions) && !isNaN(nhifDeductions)) {
                // Placeholder calculation, replace with your own logic
                var netSalary = grossSalary - mhasibuSacco - privatePensionDeductions - nhifDeductions;

                salaryResult.innerHTML = "Net Salary: " + netSalary;
            } else {
                salaryResult.innerHTML = "Please enter valid numbers for all fields.";
            }
        } else {
            salaryResult.innerHTML = "NHIF Deductions input not found.";
        }
    });

    // Function to check car speed
    document.getElementById("check-speed-btn").addEventListener("click", function () {
        var speedInput = parseFloat(document.getElementById("speed-input").value);
        var output = document.getElementById("output");

        if (!isNaN(speedInput)) {
            if (speedInput <= 60) {
                output.innerHTML = "You are driving within the speed limit.";
            } else {
                output.innerHTML = "You are driving above the speed limit.";
            }
        } else {
            output.innerHTML = "Please enter a valid speed.";
        }
    });
});
// Function to calculate demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Demerit Points: ${demeritPoints}`);
    }
}
const carSpeed = parseFloat(prompt("Enter the car speed (in km/h):"));

if (!isNaN(carSpeed)) {
    calculateDemeritPoints(carSpeed);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
