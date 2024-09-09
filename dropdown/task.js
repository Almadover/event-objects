document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');

        dropdownValue.addEventListener('click', function() {
            dropdownList.classList.toggle('dropdown__list_active');
        });

        const dropdownLinks = dropdown.querySelectorAll('.dropdown__link');

        dropdownLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdownValue.textContent = link.textContent;
                dropdownList.classList.add('dropdown__value')
                dropdownList.classList.remove('dropdown__list_active');
            });
        });
    });
});