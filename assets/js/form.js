document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactform');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const button = document.getElementById('submitBtn');
        button.disabled = true;

        form.submit();
    });
});