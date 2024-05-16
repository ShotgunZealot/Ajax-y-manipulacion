document.addEventListener('DOMContentLoaded', function () {
    const songListDiv = document.getElementById('song-list');
    const songDetailsDiv = document.getElementById('song-details');

    fetch('songs.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar la lista de canciones.');
            }
            return response.json();
        })
        .then(data => {
            displaySongList(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    function displaySongList(songs) {
        songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');
            songDiv.textContent = `${song.title} - ${song.artist}`;
            songDiv.addEventListener('click', function () {
                displaySongDetails(song);
            });
            songListDiv.appendChild(songDiv);
        });
    }

    function displaySongDetails(song) {
        songDetailsDiv.innerHTML = `
            <h2>${song.title}</h2>
            <p><strong>Artista:</strong> ${song.artist}</p>
            <p><strong>Duración:</strong> ${song.duration}</p>
        `;
    }
});
