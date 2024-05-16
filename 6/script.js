function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            var userList = document.getElementById('user-list');
            userList.innerHTML = '';
            users.forEach(user => {
                var li = document.createElement('li');
                li.textContent = user.name + ' - ' + user.email;
                userList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

getUsers();