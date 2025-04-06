// 메뉴 클릭 시 해당 패널이 열리고 닫힘 (패널이 중복으로 열림)

document.addEventListener("click", (e) => {
  const aTag = e.target.closest("a");

  if (!aTag) return;

  if (aTag.querySelector("span")) {
    const li = aTag.closest("li");
    if (li.querySelector(".depth2")) {
      // classList.add / remove 사용법
      //   if (li.classList.contains("active")) {
      //     li.classList.remove("active");
      //   } else {
      //     li.classList.add("active");
      //   }
      // }

      // classList.toggle 사용법
      li.classList.toggle("active", !li.classList.contains("active"));
    }
  }
});
