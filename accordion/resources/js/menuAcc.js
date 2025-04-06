const liTags = document.querySelectorAll("li");

document.addEventListener("click", (e) => {
  const aTag = e.target.closest("a");

  if (!aTag) return;

  if (aTag.querySelector("span")) {
    const li = aTag.closest("li");
    if (li.querySelector(".depth2")) {
      liTags.forEach((item) => {
        const isActive = item.classList.contains("active");

        item.classList.remove("active");
        if (item === li) {
          item.classList.toggle("active", !isActive);
        }
      });
    }
  }
});
