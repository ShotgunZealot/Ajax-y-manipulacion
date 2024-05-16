document.addEventListener('DOMContentLoaded', function () {
    const changeColorButton = document.getElementById('changeColorButton');

    changeColorButton.addEventListener('click', function () {
        console.log('cargando...')
        fetch('https://random-flat-colors.vercel.app/api/random?count=5')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener el color.');
                }
                return response.json();
            })
            .then(data => {
                const colors = data.colors;
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                console.log('nuevo color: '+randomColor);
                document.body.style.backgroundColor = randomColor;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
