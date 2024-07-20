// search.js
function searchTemplates() {
    const searchBar = document.getElementById('search-bar').value;
    const categoryFilter = document.getElementById('category-filter').value;
    const formatFilter = document.getElementById('format-filter').value;

    fetch(`/api/templates?search=${encodeURIComponent(searchBar)}&category=${encodeURIComponent(categoryFilter)}&format=${encodeURIComponent(formatFilter)}`)
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('template-gallery');
            gallery.innerHTML = ''; // Clear existing content
            data.forEach(template => {
                const templateItem = document.createElement('div');
                templateItem.classList.add('template-item');
                templateItem.innerHTML = `
                    <h3>${template.title}</h3>
                    <p>${template.description}</p>
                    <a href="${template.filePath}" download>Download</a>
                `;
                gallery.appendChild(templateItem);
            });
        })
        .catch(error => console.error('Error searching templates:', error));
}
