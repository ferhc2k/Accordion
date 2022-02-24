const item = [...document.querySelectorAll(".item")];
const allContent = [...document.querySelectorAll(".content")];

item.forEach((item) => {
    item.addEventListener("click", () => {
        const icon = item.querySelector(".icon");
        const content = item.querySelector(".content");
        const { scrollHeight } = content;
        item.style.setProperty('--max-height', `${scrollHeight}px`);
        content.classList.add(".content-visible")
        if (content.matches(".content-visible")) {
            content.classList.remove("content-visible");
            icon.style.transform = "rotate(0deg)";
        } else {
            allContent.forEach(item => {
                item.classList.remove("content-visible");
                item.parentElement.querySelector(".icon").style.transform = "rotate(0deg)";
            })
            content.classList.add("content-visible");
            icon.style.transform = "rotate(45deg)";
        }
    });
});
