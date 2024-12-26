const form = document.querySelector('form');
form.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    const form = event.target;
    const name = `${form.querySelector('input[name="first-name"]').value} ${form.querySelector('input[name="last-name"]').value}`;
    const email = form.querySelector('input[name="email"]').value.trim();
    const phoneParts = Array.from(form.querySelectorAll('.phone input')).map(input => input.value);
    const phone = phoneParts.join('');
    const subject = form.querySelector('select[name="message-subject"]').value;
    let message = form.querySelector('textarea[name="message-area"]').value;
    message = message.trim().replace(/\s+/g, ' ');

    const formData = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(formData);

    form.reset();

    alert('The form has been successfully submitted!');
}