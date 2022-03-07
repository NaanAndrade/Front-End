const dark = document.getElementById("darkmodeLabel")
dark.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark")
})

document.querySelectorAll("[data-section]").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelectorAll("section[id]").forEach((section) => {
            section.classList.remove("active");
            document
                .getElementById(link.getAttribute("data-section"))
                .classList.add("active");
        });
    });
});