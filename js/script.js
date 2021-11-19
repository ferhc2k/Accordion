let item = Array.from(document.querySelectorAll(".item"));
let allContent = Array.from(document.querySelectorAll(".content"));
item.forEach((item) => {
    item.addEventListener("click", () => {
        let content = item.querySelector(".content");
        let icon = item.querySelector(".icon");
        if (content.matches(".view-content")) {
            content.classList.remove("view-content");
            icon.style.transform = "rotate(0deg)";
        } else {
            for (let index of allContent) {
                if (index.matches(".view-content")) {
                    index.classList.remove("view-content");
                    index.parentElement.querySelector(".icon").style.transform = "rotate(0deg)";
                }
            }
            content.classList.add("view-content");
            icon.style.transform = "rotate(45deg)";
        }
    });
});
