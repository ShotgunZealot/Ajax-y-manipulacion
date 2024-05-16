document.addEventListener('DOMContentLoaded', function () {
    const counterSpan = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');

    incrementButton.addEventListener('click', function () {
        console.log('waiting');
        fetch('https://my-json-server.typicode.com/typicode/demo/posts/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ counter: parseInt(counterSpan.textContent) + 1 })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al incrementar el contador.');
            }
            return response.json();
        })
        .then(data => {
        console.log('ok');
            counterSpan.textContent = data.counter;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});