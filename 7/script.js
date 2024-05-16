function addCommentToList(comment) {
    console.log(comment)
    var commentList = document.getElementById('comment-list');
    var li = document.createElement('li');
    li.className = 'comment';
    li.textContent = comment.attributes.author + ': ' + comment.attributes.body;
    commentList.appendChild(li);
}

document.addEventListener('DOMContentLoaded', function () {
    const URL = 'http://192.168.1.91:1337/api/';
    const commentForm = document.getElementById('comment-form');

    function loadComments() {
        fetch(URL + 'comments', {
            headers: { "Content-Type": "application/json" },
            method: 'GET',
        })

            .then(response => {

                if (!response.ok) {
                    throw new Error('Error al obtener los comentarios.');
                }
                
                return response.json();
            })
            .then(data => {
                const comments = data.data;
                comments.forEach(comment => {
                
                    addCommentToList(comment);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    loadComments();

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let aut = document.getElementById('name');
        let com = document.getElementById('comment');
        const comment =
        {
            data: {
                author: aut.value,
                body: com.value

            }
        }


        fetch(URL + 'comments', {
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify(comment)

        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al enviar el comentario.');
                }
                return response.json();
            })
            .then(data => {
                addCommentToList(data.data);
                commentForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
