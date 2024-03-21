document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.togglebtn');
    const toggleBtnIcon = document.querySelector('.togglebtn i');
    const dropDownMenu = document.querySelector('.dropdown-menu');

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    };
});