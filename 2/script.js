document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const messageContainer = document.getElementById('messageContainer');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch('https://pruebadecampo2.free.beeceptor.com', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error('Error al enviar el formulario.');
            }
            return response.text()
        })
        .then(message => {
            
            messageContainer.textContent = message;
            messageContainer.classList.remove('error');
            messageContainer.classList.add('success');
        })
        .catch(error => {

            messageContainer.textContent = error.message;
            messageContainer.classList.remove('success');
            messageContainer.classList.add('error');
        });
    });
});
