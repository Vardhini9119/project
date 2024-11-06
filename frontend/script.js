document.addEventListener('DOMContentLoaded', () => {
    fetch('http://backend:5000/api')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        })
        .catch(error => console.error('Error:', error));
});
