function cardcreate() {
  popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <i class="fa-regular fa-xmark" id="croix" ></i>
    <h3></h3>
    <p> ce niveau permet de plonger jusque 20m accompagné d'un moniteur ou 15m accompagné d'un plongeur 3*
    `;
}

if (window.matchMedia("(max-width: 700px)").matches) {
  // Viewport is less or equal to 700 pixels wide
  async function affichage() {
    await cardcreate();
    console.log(popup);
    info = document.querySelectorAll(".fa-circle-info");
    info.forEach((list) => {
      list.addEventListener("click", () => {
        list.append(popup);
        croix = document.getElementById("croix");
        croix.addEventListener("click", () => {
          console.log(croix);

          setTimeout(() => {
            popup.remove();
          }, 2);
        });
      });
    });
  }
  affichage();
} else {
  // Viewport is greater than 700 pixels wide
  document.querySelectorAll(".fa-circle-info").forEach((niveau) => {
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
}

// function cardcreate() {
//   card = document.createElement("div");
//   card.className = "card";
// }
// let card;
// function affichage() {
//   document.querySelectorAll(".fa-circle-info").forEach((list) => {
//     popup.innerHTML = `
//       <i class="fa-regular fa-xmark" ></i>
//       <h3></h3>
//       <p> ce niveau permet de plonger jusque 20m accompagné d'un moniteur ou 15m accompagné d'un plongeur 3*
//       `;

//     document.querySelector(".fa-xmark").addEventListener("click", () => {
//       console.log("ok");
//       popup.remove();
//       document.body.createElement("div");
//     });
//   });
// }

// affichage();

// document.querySelectorAll(".fa-xmark").forEach((fermer) => {
//   fermer.addEventListener("click", () => {
//     console.log(card);
//     card.remove();
//   });
// });
// function cardcreate() {
//   popup = document.createElement("div");
//   popup.className = "popup";
//   popup.innerHTML = `
//   <i class="fa-regular fa-xmark" id="croix" ></i>
//   <h3></h3>
//   <p> ce niveau permet de plonger jusque 20m accompagné d'un moniteur ou 15m accompagné d'un plongeur 3*
//   `;
// }

// async function affichage() {
//   await cardcreate();
//   console.log(popup);
//   info = document.querySelectorAll(".fa-circle-info");
//   info.forEach((list) => {
//     list.addEventListener("click", () => {
//       list.append(popup);
//       croix = document.getElementById("croix");
//       croix.addEventListener("click", () => {
//         console.log(croix);

//         setTimeout(() => {
//           popup.remove();
//         }, 2);
//       });
//     });
//   });
// }
// affichage();
