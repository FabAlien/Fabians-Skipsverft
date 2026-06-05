console.log('Hello!');
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = "none";
        }
    });
}

document.querySelectorAll(".readMoreBtn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        var overlay = this.closest(".aircraftModelDisplay").querySelector(".imageOverlay");
        overlay.classList.toggle("revealed");
        this.textContent = overlay.classList.contains("revealed") ? "Read less" : "Read more";
    });
});