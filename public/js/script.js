// -------------------------------------SCROLLER

const btn = document.querySelector("button.scrollToTop");

const divHamburger = document.querySelector("div.hamburger");
const listHamburger = [...document.querySelectorAll("div.hamburger ul li")];
const scrollTop = () => {
  window.scrollTo(0, 0);
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    btn.style.opacity = 0.8;
    btn.addEventListener("click", scrollTop);
    btn.style.cursor = "pointer";
    btn.style.zIndex = 1;
    divHamburger.classList.add("active");
  } else {
    btn.removeEventListener("click", scrollTop);
    btn.style.opacity = 0;
    btn.style.zIndex = -1;
    btn.style.cursor = "unset";
    divHamburger.classList.remove("active");
    listHamburger.forEach((item) => {
      item.classList.remove("active");
    });
  }
});
// --------------------scrollEfect-----------------------
let items = [];
if (
  document.location.pathname == "/" ||
  document.location.pathname == "/#services"
) {
  items = [
    ".col-sm-12.passion",
    ".row.gallery",
    ".client_section",
    ".contact_section",
    ".contact_section_2",
  ];
}

let ratio = 2;
if (window.innerHeight > window.innerWidth) {
  ratio = 80;
} else {
  ratio = 2;
}

$(document).on("scroll", function () {
  items.forEach((item) => {
    const height = $(item).height();
    const topDistance = $(item).offset().top;
    if (
      $(document).scrollTop() >
      topDistance + height / ratio - $(window).height()
    ) {
      $(item).addClass("active");
    }
    if ($(document).scrollTop() < 100) {
      $(item).removeClass("active");
    }
  });
});

const btnHamburger = document.querySelector(
  "div.hamburger ul li:first-of-type"
);
const listHamburger2 = document.querySelector("div.hamburger ul");
btnHamburger.addEventListener("click", () => {
  listHamburger2.classList.toggle("active");
});
// news date changer to pl format
let dates = document.querySelectorAll("h3.date span");
let datesBanner = document.querySelectorAll("h1.outstanding_text");
dates.forEach((date) => {
  let localDate = new Date(date.innerHTML).toLocaleDateString();
  if (localDate[1] == ".") localDate = 0 + localDate;
  date.innerHTML = localDate;
});
datesBanner.forEach((date, index) => {
  if (index) {
    let localDate = new Date(date.innerHTML).toLocaleDateString();
    if (localDate[1] == ".") localDate = 0 + localDate;
    date.innerHTML = localDate;
  }
});
////////////////show workshop and news
const itemsNews = document.querySelectorAll("div.news div.item");
const itemsWorkshop = document.querySelectorAll("div.workshop div.item");
const btnsactivator = [...document.querySelectorAll(".activator")];
const newsWrap = document.querySelector("div.news");
const workshopWrap = document.querySelector("div.workshop");
btnsactivator.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("active")) {
      const srollToActive = () => {
        const topDistance = $(button).offset().top;
        window.scrollTo(0, topDistance);
      };
      window.setTimeout(srollToActive, 100); // wait to items height
    }
    if (button.id === "workshop") {
      workshopWrap.classList.toggle("active");
      itemsWorkshop.forEach((itemWorkshop) => {
        itemWorkshop.classList.toggle("active");
      });
    } else {
      newsWrap.classList.toggle("active");
      itemsNews.forEach((itemNews) => {
        itemNews.classList.toggle("active");
      });
    }
    const activeBtn = btnsactivator.filter((activator) => {
      return activator.id === button.id;
    });
    activeBtn.forEach((item) => {
      item.classList.toggle("active");
    });
  });
});

/////////confirm delete db admin
const confirmLinks = document.querySelectorAll("a.prompt");
confirmLinks.forEach((link) => {
  link.addEventListener("click", () => {
    confirm("Na pewno chcesz usunąć?");
  });
});
