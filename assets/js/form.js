let form = document.getElementById('contactform');

// send inquiry to business email address and avoid multiple submission by disable button 

function submitForm(event) {
    event.preventDefault();
    let button = document.getElementById('submitBtn');
    button.disabled = true;

}

form.addEventListener('submit', submitForm);