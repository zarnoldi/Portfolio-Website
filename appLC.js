
 // Listen for Calculate
 document.getElementById('loan-form').addEventListener('submit', function(){



 

 function CalculateResults(){
    console.log('Calculate');
    
    // Input UI
    const UIamount = document.getElementById('amount');
    const UIInterest = document.getElementById('Interest');
    const UIYears = document.getElementById('Years');
    // Output UI
    const UIMonthlyPayment = document.getElementById('Monthly-payment');
    const UITotalInterest = document.getElementById('Total-Interest');
    const UITotalPayment = document.getElementById('Total Payment');
    // Input values from UI Input
    const Principal = parseFloat(UIamount.value);
    const CalculatedInterest = parseFloat(UIInterest.value)/100/12;
    const CalculatedPayment = parseFloat(UIYears.value)*12; 
    console.log(Principal);
    console.log(CalculatedPayment);
    console.log(CalculatedPayment);

    // Compute Monthly Payment
    const x = Math.pow(1 + CalculatedInterest, CalculatedPayment);
    const monthly = (Principal*x*CalculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        UIMonthlyPayment.value = monthly.toFixed(2);
        UITotalPayment.value = (monthly * CalculatedPayment).toFixed(2);
        UITotalInterest.value = ((monthly * CalculatedPayment)-Principal).toFixed(2);
        console.log('Done');
    } else{
        ShowError('Please check input values.');
    };

    // Show error message 
    function ShowError(error){

        // Create div element
        const errorDiv = document.createElement('div');

        errorDiv.className = 'alert alert-danger';

        errorDiv.appendChild(document.createTextNode(error));

        // Get parent element
        const card = document.getElementsByClassName('card card-body text-center mt-5');

        //Append error message
        card.insertBefore(errorDiv);

    }




   e.preventDefault();
  }
}