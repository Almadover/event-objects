document.addEventListener('DOMContentLoaded', function() {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const tabContents = Array.from(document.querySelectorAll('.tab__content'));

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // Удаляем активный класс у всех вкладок
            tabs.forEach(tab => tab.classList.remove('tab_active'));
            // Устанавливаем активный класс только на текущей вкладке
            tab.classList.add('tab_active');

            // Удаляем активный класс у всех блоков содержимого
            tabContents.forEach(content => content.classList.remove('tab__content_active'));
            // Устанавливаем активный класс только на блоке содержимого, соответствующем текущей вкладке
            tabContents[index].classList.add('tab__content_active');
        });
    });
});