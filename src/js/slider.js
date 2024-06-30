const carousel = document.getElementById("range_foto"),
next = document.getElementById("rightBtn"),
prev = document.getElementById("leftBtn");

next.addEventListener("click", e => {
    carousel.scrollBy(410, 0);
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-410, 0);  
});
