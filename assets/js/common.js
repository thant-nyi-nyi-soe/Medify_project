// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then((res) => res.text())
    .then((html) => {
      document.querySelector("header").innerHTML = html;

      /* MAKING HAMBURGER BUTTON ACTIVE */
      const hamburger = document.querySelector(".hamburger-menu");
      const sidebar = document.querySelector(".sidebar");
      const header = document.querySelector(".header-container");
      const overlay = document.querySelector(".overlay");
      const body = document.querySelector("body");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");

        hamburgerToggle();
      });

      const back = document.querySelector(".close-button");
      back.addEventListener("click", () => {
        hamburger.classList.toggle("active");

        hamburgerToggle();
      });

      function hamburgerToggle() {
        if (hamburger.classList.contains("active")) {
          sidebar.classList.add("show");
          header.classList.add("header-hidden");
          overlay.classList.add("dimmed");
          body.classList.add("no-scroll");
        } else {
          sidebar.classList.remove("show");
          header.classList.remove("header-hidden");
          overlay.classList.remove("dimmed");
          body.classList.remove("no-scroll");
        }
      }
      //----------------

      //----------------

      /* SIDEBAR UNDERLINE ON EVERY PAGE */
      const tabs = document.querySelectorAll(".tab");

      const pageInfo = {
        home: false,
        blog: false,
        contacts: false,
      };

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const pageID = tab.id;

          for (let key in pageInfo) {
            pageInfo[key] = key === pageID;
          }

          localStorage.setItem("pageInfo", JSON.stringify(pageInfo));
        });
      });

      const stored = JSON.parse(localStorage.getItem("pageInfo"));

      if (stored) {
        for (let key in stored) {
          if (stored[key]) {
            document.getElementById(key)?.classList.add("underlined");
          }
        }
      }

      /* MAKING STRENGTHS TABS INTERACTIVE */
      const tabButtons = document.querySelectorAll(".tab-button");
      const textContainers = document.querySelectorAll(
        ".strengths-text-container"
      );

      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const buttonId = button.id;
          console.log(buttonId);

          // Update button opacity and underline
          tabButtons.forEach((btn) => {
            if (btn.id === buttonId) {
              btn.classList.add("opacity-added");
              btn.classList.add("orange-underline");
            } else {
              btn.classList.remove("opacity-added");
              btn.classList.remove("orange-underline");
            }
          });

          //Activate paragraph
          textContainers.forEach((container) => {
            container.classList.remove("show-paragraph");
            if (container.classList.contains(`text-for-${buttonId}`)) {
              container.classList.add("show-paragraph");
            }
          });
        });
      });
      //-------

      /* SIDEBAR DROPDOWN BOX */
      const arrow = document.querySelector(".pages-arrow");
      const pagesList = document.querySelector(".pages-list");

      arrow.addEventListener("click", () => {
        arrow.classList.toggle("arrow-rotate");
        arrowToggle();
      });

      const sidebarPages = document.querySelector(".sidebar-pages");

      sidebarPages.addEventListener("click", () => {
        arrow.classList.toggle("arrow-rotate");
        arrowToggle();
      });

      function arrowToggle() {
        if (arrow.classList.contains("arrow-rotate")) {
          pagesList.classList.add("show-list");
        } else {
          pagesList.classList.remove("show-list");
        }
      }
      // -------------

      /* NUMBERS RUN UP AT REFRESH */

      function countUp(name, end, increment, interval) {
        let count = 0;

        const counter = setInterval(() => {
          count += increment;
          if (count >= end) {
            count = end;
            clearInterval(counter);
          } // BREAKING CONDITION
          name.innerHTML = count;
        }, interval);
      }

      const patientsCounter = document.querySelector('.patients-counter');
      countUp(patientsCounter, 2500, 25, 15);

      const sectionsCounter = document.querySelector('.sections-counter');
      countUp(sectionsCounter, 15, 1, 100);

      const researchesCounter = document.querySelector('.researches-counter');
      countUp(researchesCounter, 40, 1, 40);

      const awardsCounter = document.querySelector('.awards-counter');
      countUp(awardsCounter, 25, 1, 60);

      // --------------------
    });
});

// Your jQuery code goes here
$(function () {
  $(".welcome-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    dots: false,
    fade: true,
  });

  $(".logo-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    dots: false,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //Your code here
  $("button").on("click", () => {
    console.log("Hello");
  });
});
