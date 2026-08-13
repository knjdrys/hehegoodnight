const rose = document.querySelector(".rose");
const message = document.querySelector(".message");
const stem = document.querySelector(".stem");
const leaves = document.querySelectorAll(".leaf");


// ========================================
// ROSE BLOOM SEQUENCE
// ========================================

window.addEventListener("load", () => {

    // Let the night scene settle first
    setTimeout(() => {

        // Grow the stem
        stem.style.height = "175px";

    }, 800);


    // Reveal leaves
    setTimeout(() => {

        leaves[0].style.opacity = "1";
        leaves[0].style.transform =
            "rotate(-25deg) scale(1)";

    }, 2200);


    setTimeout(() => {

        leaves[1].style.opacity = "1";
        leaves[1].style.transform =
            "scaleX(-1) rotate(-25deg) scale(1)";

    }, 2500);


    // Bloom the flower
    setTimeout(() => {

        rose.classList.add("bloom");

    }, 2800);


    // Reveal the message after the flower blooms
    setTimeout(() => {

        message.classList.add("show-message");

    }, 4800);

});
