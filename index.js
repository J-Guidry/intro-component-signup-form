const form = document.querySelector(".signup-form");
// const fNameInput = document.querySelector("#fname");
// const lNameInput = document.querySelector("#lname");
// const emailInput = document.querySelector("#email");
// const password = document.querySelector("#password");
const inputForms = document.querySelectorAll(".errors");
const submitButton = document.querySelector("#submit");



// Suppress the default error popup bubbles
form.addEventListener( "invalid", function( event ) {
    event.preventDefault();
}, true );

form.addEventListener( "submit", function( event ) {
    if ( !this.checkValidity() ) {
        event.preventDefault();
    }
});

const invalid = (e) => {
    e.target.oninvalid = (event) => {
        //clear field before testing validity
        event.target.setCustomValidity("");

        // if input is invalid, toggle the paragraph error
        if(!event.target.validity.valid) {
            event.target.classList.toggle("error-input");
            //event.target.classList.toggle(".input-placeholder::placeholder");
            event.target.nextElementSibling.classList.toggle("error-icon-display");
            event.target.nextElementSibling.nextElementSibling.classList.toggle("error-display");
        } 
        // else 
        if(event.target.nextElementSibling.nextElementSibling.classList.contains("error-display")
        && event.target.validity.valid) {
            event.target.classList.toggle("error-input");
            //event.target.classList.toggle(".input-placeholder::placeholder");
            event.target.nextElementSibling.classList.toggle("error-icon-display");
            event.target.nextElementSibling.nextElementSibling.classList.toggle("error-display");
        }
    };
    e.target.oninput = (event) => {
        //clear field after
        event.target.setCustomValidity("");
    }
}
