//hanburger toggle btn
const hanburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

navLink.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden")
  })
})

hanburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden")
})

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});


// dark and light mode
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == 'dark') {
  darkMode();
}else{
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if(localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
})

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

// tabs
let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
const all = document.querySelectorAll(".word_card");
const uiuxs = document.querySelectorAll(".uiux");
const branding = document.querySelectorAll(".branding");
const app = document.querySelectorAll(".app");


indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach(tab => {
  tab.addEventListener("click", ()=> {
    indicator.style.width = tab.getBoundingClientRect().width + "px";
    indicator.style.left =
      tab.getBoundingClientRect().left -
      tab.parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((t) => t.classList.remove("text-whiteColor"));
    tab.classList.add("text-whiteColor");

    const tavbal = tab.getAttribute("data-tabs");

    all.forEach(item => {
      item.style.display = 'none'
    })

    if (tavbal == "uiux") {
      uiuxs.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tavbal == "branding") {
      branding.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tavbal == "app") {
      app.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
    
  })
})

// change background header

const scrollHeader = () => {
  const navbar = document.getElementById("navbar");
  const aTag = document.querySelectorAll("nav ul li a");
  const themeToggle = document.getElementById("theme-toggle");
  const hamburger = document.getElementById("hamburger");
  const logo = document.getElementById("logo");

  if(this.scrollY >= 200) {
    navbar.classList.add("bg-primaryColor")
    
    aTag.forEach(item => {
      item.classList.add("text-whiteColor")
    })
    
    themeToggle.classList.add("text-whiteColor")
    
    hamburger.classList.add("text-whiteColor")
  } else {
    navbar.classList.remove("bg-primaryColor");
    
    aTag.forEach((item) => {
      item.classList.remove("text-whiteColor");
    });

    themeToggle.classList.remove("text-whiteColor");

    hamburger.classList.remove("text-whiteColor");
  }

}

window.addEventListener("scroll", scrollHeader);

// scroll up

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up")
  
  if(this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
}

window.addEventListener("scroll", scrollUp)

// scroll section active links

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = 'hero';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(item => {
    item.classList.remove("active");
    if(item.href.includes(current)) {
      item.classList.add("active")
    }
  })

}

window.addEventListener("scroll", activeLink)

// scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
})

sr.reveal(".hero__image");
sr.reveal(".hero__content", { origin: "bottom" });
sr.reveal(".hero__footer", { origin: "bottom",  delay: 1200 });

sr.reveal(".service__top", { origin: "bottom" });
sr.reveal(".service_item", { origin: "bottom" , interval: 300 });

sr.reveal(".recent_works_top", { origin: "bottom" });
sr.reveal(".recent_works_tabs", { origin: "bottom", delay: 800 });
sr.reveal(".works_card", { origin: "bottom", delay: 1200 });

sr.reveal(".exp_top", { origin: "top" });
sr.reveal(".exp_item", { origin: "left", interval: 300 });

sr.reveal(".edu_top", { origin: "top" });
sr.reveal(".edu_item", { origin: "right", interval: 300 });

sr.reveal(".skills_top", { origin: "bottom" });
sr.reveal(".skills_card", { origin: "bottom", interval: 300 });

sr.reveal(".blog_top", { origin: "top" });
sr.reveal(".blog_card", { origin: "top", interval: 300 });

sr.reveal(".contact_form", { origin: "left" });
sr.reveal(".contact_item", { origin: "right", interval: 300 });
