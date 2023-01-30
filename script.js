// =========================== Typing animation ===========================
let typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer",
    "Web Designer",
    "Mobile App Developer",
    "Full-Stack Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 0,
  loop: true,
});

// =========================== Aside ===========================
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

const showSection = function (element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector(`#${target}`).classList.add("active");
};

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];

    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

// ================= Aside nav toggler ==================
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// ================= List of Projects ==================
const allProjects = document.querySelector(".project-list");

const projects = [
  {
    name: "A Tour Aplication",
    img: "images/Tour.png",
    // link: "https://tours-9w4s.onrender.com",
  },
  {
    name: "An E-commerce Aplication",
    img: "images/E-commerce.png",
    // link: "https://lukesecommerce.onrender.com",
  },
  {
    name: "Everyday Todo Aplication",
    img: "images/Todo.png",
    // link: "https://lukestodo.onrender.com/",
  },
];

projects.map((project) => {
  const div = document.createElement("div");
  div.classList.add("portfolio-item");
  div.classList.add("padd-15");

  div.innerHTML = `
              
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <a href=${project.link}>
                      <img src=${project.img} alt="" />
                      <h3>${project.name}</h3>
                    </a>
                  </div>
                </div>
              
`;

  allProjects.appendChild(div);
});

// ================= Contact Form ==================
// const form = document.querySelector("#contactForm");

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   let name = document.querySelector("#name").value;
//   let email = document.querySelector("#email").value;
//   let subject = document.querySelector("#subject").value;
//   let message = document.querySelector("#message").value;
//   const messageSent = document.querySelector(".message-sent");

//   try {
//     const res = await fetch(
//       "https://tours-9w4s.onrender.com/api/v1/users/contactUs",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, subject, message }),
//       }
//     );

//     console.log(res);
//     if (res.status === 201) {
//       messageSent.textContent = "Message sent successfully";
//       messageSent.style.color = "green";

//       document.querySelector("#name").value =
//         document.querySelector("#email").value =
//         document.querySelector("#subject").value =
//         document.querySelector("#message").value =
//           "";

//       window.setTimeout(() => {
//         messageSent.textContent = "";
//       }, 5000);
//     } else {
//       messageSent.textContent = "Please provide a valid email and name!";
//       messageSent.style.color = "red";

//       window.setTimeout(() => {
//         messageSent.textContent = "";
//       }, 5000);
//     }
//   } catch (err) {
//     console.error(err);
//   }
//   document.querySelector("#name").value = "";
// });
