document.addEventListener("DOMContentLoaded", function() {

    var h1 = document.getElementsByClassName("h1")[0];
    let message = "Hello";
    let i = 0;

    function typeEffect() {
        if (i < message.length) {
            h1.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});