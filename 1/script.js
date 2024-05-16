document.addEventListener('DOMContentLoaded', function () {
    const getDataButton = document.getElementById('getDataButton');
    const dataContainer = document.getElementById('dataContainer');

    getDataButton.addEventListener('click', function () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos.');
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) {
                    dataContainer.textContent = 'No hay datos disponibles.';
                    return;
                }

                const ul = document.createElement('ul');
                data.forEach(function (item) {
                    const li = document.createElement('li');
                    li.textContent = item.title;
                    ul.appendChild(li);
                });
                dataContainer.innerHTML = '';
                dataContainer.appendChild(ul);
            })
            .catch(error => {
                dataContainer.textContent = error.message;
            });
    });
});
