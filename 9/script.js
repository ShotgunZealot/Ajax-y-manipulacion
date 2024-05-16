document.addEventListener('DOMContentLoaded', function () {
    const thumbnailsContainer = document.getElementById('thumbnails');
    const fullSizeContainer = document.getElementById('full-size');

    function loadThumbnails() {
        const thumbnailUrls = [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
        ];

        thumbnailUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.addEventListener('click', function () {
                loadFullSizeImage(url);
            });
            thumbnailsContainer.appendChild(img);
        });
    }

    function loadFullSizeImage(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo cargar la imagen.');
                }
                return response.blob();
            })
            .then(blob => {
                const img = document.createElement('img');
                img.onload = function () {
                    fullSizeContainer.innerHTML = '';
                    fullSizeContainer.appendChild(img);
                };
                img.src = URL.createObjectURL(blob);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    loadThumbnails();
});
