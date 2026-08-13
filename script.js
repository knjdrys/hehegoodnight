// A very small touch of JavaScript:
// after the rose finishes blooming, add a gentle glow to the page.

window.addEventListener("load", () => {

    setTimeout(() => {

        document.body.classList.add("bloomed");

    }, 3500);

});
