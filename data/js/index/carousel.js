document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const images = document.querySelectorAll(".carousel img");
    function showImage(i) {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    }
    document.getElementById("next").addEventListener("click", function() {
        index = (index + 1) % images.length;
        showImage(index);
    });
    document.getElementById("prev").addEventListener("click", function() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });
    showImage(index);
});