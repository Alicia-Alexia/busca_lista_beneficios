const searchInput = document.getElementById('search-input');
const listItems = document.querySelectorAll('.benefit-item');
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});