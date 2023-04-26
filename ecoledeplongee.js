const main = document.querySelector("main");
let card;
document.querySelectorAll("li").forEach((niveau) => {
  niveau.addEventListener("mouseover", () => {
    card = document.createElement("div");
    card.className = "card";
    card.innerHTML = "heelo";

    niveau.append(card);
    // console.log(card);
    niveau.addEventListener("mousemove", (e) => {
      console.log(e.pageY);
      card.style.left = e.pageX - 4 + "px";
      card.style.top = e.pageY - 3 + "px";
    });
  });
  niveau.addEventListener("mouseout", () => {
    card.remove();
  });
});
