document.querySelector(".text-see-more").addEventListener("click", function() {
    const target = document.querySelector(".text-catalog");
    target.scrollIntoView({ behavior: "smooth" });
});