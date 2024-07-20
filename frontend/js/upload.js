// upload.js
document.getElementById('template-upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/api/templates/upload', {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT token is stored in localStorage
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert('Template uploaded successfully!');
        } else {
            alert('Error uploading template: ' + data.error);
        }
    })
    .catch(error => console.error('Error uploading template:', error));
});
