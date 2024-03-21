$(document).ready(function() {
    // Carousel Functionality
    let slideIndex = 0;

    function showSlides() {
        let slides = $(".item");
        slides.hide(); // Hide all slides
        slideIndex = (slideIndex < 0) ? slides.length - 1 : slideIndex % slides.length;
        slides.eq(slideIndex).show(); // Show the current slide
    }

    $(".next").click(function() {
        slideIndex++;
        showSlides();
    });

    $(".prev").click(function() {
        slideIndex--;
        showSlides();
    });

    showSlides(); // slide apparante 

    // fonction de la galerie
    $('#galerie img').click(function() {
        ouvrirEnGrand(this.src, this.alt); //  click ouverture grande image lors du clique sur la photo
    });

    // Assuming you dynamically add the close button along with the enlarged image
    // Therefore, use event delegation for dynamically added elements
    $('body').on('click', '.close-button', function() {
        $('#imageSelectionnee').hide(); // Hide the enlarged image container
    });

    // Function to display an image in a larger view
    function ouvrirEnGrand(src, alt) {
        // Display the image in the 'imageSelectionnee' container
        var enlargedHTML = `<div class="close-button" style="cursor:pointer; position:absolute; top:10px; right:10px; font-size:24px; color:white; background-color:black; border-radius:50%;">×</div><img src="${src}" alt="${alt}" style="width:100%; height:auto;">`;
        document.getElementById('imageSelectionnee').innerHTML = enlargedHTML;
        $('#imageSelectionnee').css({'display': 'flex', 'justify-content': 'center', 'align-items': 'center'}); // Adjust CSS for centering
    }
});
document.addEventListener('DOMContentLoaded', function() {
    //toggle  barre de nav 
    const toggleButton = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    // Ajouter un écouteur d'événement pour gérer le clic sur le bouton
    toggleButton.addEventListener('click', function() {
        // Basculer la classe 'active' sur les liens de la navbar
        navbarLinks.classList.toggle('active');
    });
});


//scroll
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

function scrollToBottom() {
    document.body.scrollTop = document.body.scrollHeight; 
    document.documentElement.scrollTop = document.documentElement.scrollHeight; 
}
