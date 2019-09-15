const div = document.querySelector("div");

document.body.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    div.textContent = x + ", " + y;
    document.body.style.backgroundColor = `rgb(${x/3}, ${y/2}, ${x/3})`;
});