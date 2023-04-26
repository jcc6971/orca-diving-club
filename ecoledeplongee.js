const main = document.querySelector("main");
let card;
document.querySelectorAll("li").forEach((niveau) => {
  niveau.addEventListener("mouseover", () => {
    card = document.createElement("div");
    card.className = "card";
    card.innerHTML = "hello";

    niveau.append(card);
    // console.log(card);
  });
  niveau.addEventListener("mouseout", () => {
    card.remove();
  });
});
