let currentNav = null;

window.addEventListener("DOMContentLoaded", (evt) => {
    document.querySelectorAll("nav .item").forEach((navItem) => {
        navItem.addEventListener("click", () => {
            // Undo display for the old item
            if (currentNav !== null) {
                document.querySelector(`section[for='${currentNav.innerText}']`).classList.remove("shown");
                currentNav.removeAttribute("active");
            }

            navItem.setAttribute("active", "");
            document.querySelector(`section[for='${navItem.innerText}']`).classList.add("shown");
            currentNav = navItem;
        });
    });

    // Click the first nav item
    document.querySelector("nav .item").click();
});