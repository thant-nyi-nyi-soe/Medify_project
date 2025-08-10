// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  fetch("./header.html")
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

          // UPDATE BUTTON OPACITY AND UNDERLINE
          tabButtons.forEach((btn) => {
            if (btn.id === buttonId) {
              btn.classList.add("opacity-added");
              btn.classList.add("orange-underline");
            } else {
              btn.classList.remove("opacity-added");
              btn.classList.remove("orange-underline");
            }
          });

          // START PARAGRAPH ACTION
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

      /* NUMBERS RUN UP WHEN THE PAGE IS REFRESHED*/
      function countUp(element, end, increment, interval) {
        let count = 0;

        const counter = setInterval(() => {
          count += increment;
          if (count >= end) {
            count = end;
            clearInterval(counter);
          }
          element.innerHTML = count;
        }, interval);
      }

      const patientsCounter = document.querySelector(".patients-counter");
      if (patientsCounter) {
        countUp(patientsCounter, 2500, 25, 15);
      }

      const sectionsCounter = document.querySelector(".sections-counter");
      if (sectionsCounter) {
        countUp(sectionsCounter, 15, 1, 100);
      }

      const researchesCounter = document.querySelector(".researches-counter");
      if (researchesCounter) {
        countUp(researchesCounter, 40, 1, 40);
      }

      const awardsCounter = document.querySelector(".awards-counter");
      if (awardsCounter) {
        countUp(awardsCounter, 25, 1, 60);
      }

      // --------------------

      /* MAKE BACK TO TOP BUTTON DISAPPEAR AT THE TOP OF THE PAGE */
      window.addEventListener("scroll", () => {
        const toTop = document.querySelector(".back-to-top-button");
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          toTop.classList.remove("no-back-to-top");
        } else {
          toTop.classList.add("no-back-to-top");
        }
      });

      /* MAKE BACK TO TOP BUTTON STICK TO THE TOP OF THE FOOTER */
      window.addEventListener("scroll", () => {
        const toTop = document.querySelector(".back-to-top-button");
        const footer = document.getElementById("footerPart");
        const footerTop = footer.getBoundingClientRect().top;
        const winHeight = window.innerHeight;

        if (footerTop < winHeight) {
          toTop.classList.add("above-footer");
        } else {
          toTop.classList.remove("above-footer");
        }
      });

      /* MAKE PROFILE PLUS BUTTON INTERACTIVE */
      const plusBtns = document.querySelectorAll(".plus-button");
      const plusDds = document.querySelectorAll(".plus-dropdown");

      plusBtns.forEach((plusBtn, index) => {
        plusBtn.addEventListener("mouseenter", () => {
          plusBtn.classList.add("plus-to-x");
        });
        plusBtn.addEventListener("mouseleave", () => {
          plusBtn.classList.remove("plus-to-x");
        });

        const plusDd = plusDds[index];

        if (plusDd) {
          plusDd.addEventListener("mouseenter", () => {
            plusBtn.classList.add("plus-to-x");
          });
          plusDd.addEventListener("mouseleave", () => {
            plusBtn.classList.remove("plus-to-x");
          });
        }
      });

      /* MAKE FAQ PAGE QUESTION BUTTON INTERACTIVE */
      const qLines = document.querySelectorAll(".question-line");
      const answers = document.querySelectorAll(".answer");
      const qPluses = document.querySelectorAll(".question-plus");

      qLines.forEach((line, index) => {
        line.addEventListener("click", () => {
          const answer = answers[index];
          const qPlus = qPluses[index];
          const isAlreadyOpen = line.classList.contains("question-clicked");

          // Close all questions first
          qLines.forEach((ln, i) => {
            ln.classList.remove("question-clicked");
            answers[i].classList.remove("show-answer");
            qPluses[i].classList.remove("minus");
          });

          // Toggle current question only if it was previously closed
          if (!isAlreadyOpen) {
            line.classList.add("question-clicked");
            answer.classList.add("show-answer");
            qPlus.classList.add("minus");
          }
        });
      });

      /* HISTORY BUTTON ACTIVATE HISTORY CARD TITLE */
      const hvls = document.querySelectorAll(".history-vertical-line");
      const hcs = document.querySelectorAll(".history-card");

      hvls.forEach((hvl, i) => {
        
        const hc = hcs[i];
        
        hvl.addEventListener("mouseenter", () => {
          hc.classList.add("marked-for-orange");
        });
        hvl.addEventListener("mouseleave", () => {
          hc.classList.remove("marked-for-orange");
        })
      });


      // hvl.addEventListener("mouseenter", () => {
      //   hc.classList.add("marked-for-orange");
      // });
      // hvl.addEventListener("mouseleave", () => {
      //   hc.classList.remove("marked-for-orange");
      // });
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

  $(".treatment-card-slider").slick({
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

  //Your code here
  $("button").on("click", () => {
    console.log("Hello");
  });
});
