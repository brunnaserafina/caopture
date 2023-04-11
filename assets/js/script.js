//Menu de navegação:
const linksMenu = document.querySelectorAll("ul li a");

linksMenu.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

//Menu Hamburguer
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".navbar");
let bod = document.querySelector(".menu-mobile-screen");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  menu.classList.toggle("active");
});

const hamburgerIcon = document.querySelector(".hamburger ion-icon");

hamburgerIcon.addEventListener("click", function () {
  if (hamburgerIcon.getAttribute("name") === "menu-outline") {
    hamburgerIcon.setAttribute("name", "close-outline");
  } else {
    hamburgerIcon.setAttribute("name", "menu-outline");
  }
});

//Carrossel de imagens dos cachorros:
const containerAllDogs = document.querySelector(".container-dogs");
const moveScrollRight = document.querySelector(".arrow-right");
const moveScrollLeft = document.querySelector(".arrow-left");

moveScrollRight.addEventListener("click", function () {
  containerAllDogs.scrollBy({
    left: 600,
    behavior: "smooth",
  });
});

moveScrollLeft.addEventListener("click", function () {
  containerAllDogs.scrollBy({
    left: -600,
    behavior: "smooth",
  });
});

//Ocultar flechas do carrossel
containerAllDogs.addEventListener("scroll", function () {
  if (window.innerWidth >= 768) {
    if (containerAllDogs.scrollLeft === 0) {
      moveScrollLeft.style.display = "none";
    } else {
      moveScrollLeft.style.display = "block";
    }

    if (
      containerAllDogs.scrollLeft + containerAllDogs.offsetWidth >=
      containerAllDogs.scrollWidth
    ) {
      moveScrollRight.style.display = "none";
    } else {
      moveScrollRight.style.display = "block";
    }
  }
});

//Enviar formulário de contato
emailjs.init("ClZtahMJijyg_z-ha");

function sendEmail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }

  const params = {
    from_name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  emailjs.send("service_hlzg1k7", "template_y27nkig", params).then(
    function () {
      alert("Seu e-mail foi enviado com sucesso!");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      console.error("Ocorreu um erro ao enviar o e-mail:", error);
      alert(
        "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde."
      );
    }
  );
}

document.getElementById("contact-form").addEventListener("submit", sendEmail);

//Scrollar página para o topo
const scrollToTopBtn = document.getElementById("scroll-to-top");

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.remove("hidden");
    scrollToTopBtn.style.opacity = "1";
  } else {
    scrollToTopBtn.classList.add("hidden");
    scrollToTopBtn.style.opacity = "0";
  }
});

//Player de músicas
function play(e) {
  let myAudio = document.querySelector("audio");
  myAudio.paused ? myAudio.play() : myAudio.pause();
  e.classList.toggle("pressed");
}
