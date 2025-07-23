document.getElementById('volunteer-form').addEventListener('submit', (event) => {
    const ageInput = document.getElementById('age');
    if (ageInput.value < 18) {
        alert('You must be at least 18 years old to volunteer.');
        event.preventDefault();
    }
});
