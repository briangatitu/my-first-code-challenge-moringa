 
function getNetSalary(){
    // initialize paye    
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
    //achieving the net salary  after all dedutions
    netSalary = (parseInt (taxableIncome - paye));
    console.log(`netSalary is..: ${netSalary}`)
    
}