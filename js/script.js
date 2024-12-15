document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            dropdownMenu.classList.remove('show');
        }
    });
});
