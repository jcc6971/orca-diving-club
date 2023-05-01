p1 =
  "Ce niveau permet de plonger jusqu’à une profondeur maximale de 20 mètres sous la supervision directe d’un plongeur 3* Lifras minimum";
p2 =
  "Ce niveau permet de plonger (en autonomie)jusqu’à maximum 20 mètres avec un plongeur 2* Lifras, à condition d’avoir 18 ans accomplis + Plonger jusqu’à maximum 30 mètres avec un plongeur 3* Lifras + Plonger jusqu’à maximum 40 mètres avec un plongeur 3* Lifras minimum, titulaire de la spécialité PPA";
p3 =
  "Ce niveau permet de plonger (en autonomie)jusqu’à maximum 40 mètres avec un plongeur 3* minimum + Encadrer des plongeurs 1* et 2* lors de plongée de nuit";
p4 =
  "Le brevet plongeur 4* valorise une expérience reconnue en situation et ne doit pas être un examen";

if (window.matchMedia("(max-width: 700px)").matches) {
  // Viewport is less or equal to 700 pixels wide
  function cardcreate() {
    popup = document.createElement("div");
    popup.className = "popup";
  }
  async function affichage() {
    await cardcreate();
    info = document.querySelectorAll(".fa-circle-info");
    info.forEach((list) => {
      list.addEventListener("click", (e) => {
        if (e.srcElement.parentNode.innerText.includes("Plongeur 1*"))
          aecrire = p1;
        else if (e.srcElement.parentNode.innerText.includes("Plongeur 2*"))
          aecrire = p2;
        if (e.srcElement.parentNode.innerText.includes("Plongeur 3*"))
          aecrire = p3;
        else if (e.srcElement.parentNode.innerText.includes("Plongeur 4*"))
          aecrire = p4;

        popup.innerHTML = `

          <i class="fa-regular fa-circle-xmark fa-lg" id="croix"></i>

          <p> ${aecrire} </p>
          `;
        list.append(popup);
        // } else console.log("non");

        croix = document.getElementById("croix");
        croix.addEventListener("click", () => {
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

  function cardcreate() {
    popup = document.createElement("div");
    popup.className = "popup";
  }

  async function affichage() {
    await cardcreate();

    info = document.querySelectorAll(".fa-circle-info");
    info.forEach((list) => {
      list.addEventListener("mouseover", (e) => {
        if (e.srcElement.parentNode.innerText.includes("Plongeur 1*"))
          aecrire = p1;
        else if (e.srcElement.parentNode.innerText.includes("Plongeur 2*"))
          aecrire = p2;
        if (e.srcElement.parentNode.innerText.includes("Plongeur 3*"))
          aecrire = p3;
        else if (e.srcElement.parentNode.innerText.includes("Plongeur 4*"))
          aecrire = p4;
        popup.innerHTML = `


          <p> ${aecrire} </p>
          `;
        list.append(popup);
        list.addEventListener("mouseout", () => {
          setTimeout(() => {
            popup.remove();
          }, 2);
        });
      });
    });
  }
  affichage();
}
