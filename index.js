
window.addEventListener("load", function() {
    var loaderOverlay = document.getElementById("loader-overlay");
    loaderOverlay.style.display = "none";
});

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

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    var goToTopBtn = document.getElementById("gototop");

    // Show the button when scrolling down
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    }

    // Scroll to the top when the button is clicked
    goToTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
});
