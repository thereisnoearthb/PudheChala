document.getElementById('volunteer-form').addEventListener('submit', (event) => {
    const ageInput = document.getElementById('age');
    if (ageInput.value < 18) {
        alert('You must be at least 18 years old to volunteer.');
        event.preventDefault();
    }
});

// Get the form, submit button, and message container elements
const form = document.getElementById('volunteer-form');
const submitButton = document.getElementById('submit-button');
const messageContainer = document.getElementById('message-container');
const guidelinesCheckbox = document.getElementById('community-guidelines');

// Disable the submit button by default
submitButton.disabled = true;
