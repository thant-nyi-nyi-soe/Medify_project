// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then((res) => res.text())
    .then((html) => {
      document.querySelector("header").innerHTML = html;

      const hamburger = document.querySelector(".hamburger-menu");
      const sidebar = document.querySelector(".sidebar");
      const header = document.querySelector(".header-container");
      const overlay = document.querySelector(".overlay");

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
        } else {
          sidebar.classList.remove("show");
          header.classList.remove("header-hidden");
          overlay.classList.remove("dimmed");
        }
      }
      //---------------------------------------
      // const pageInfo = {
      //   homePage: false,
      //   blogPage: false,
      //   contactsPage: false
      // }
      // const home = document.querySelector('.sidebar-home');
      // const blog = document.querySelector('.sidebar-blog');
      // const contacts = document.querySelector('.sidebar-contacts');

      // const onHomePage = JSON.parse(localStorage.getItem('homePage'));
      // const onBlogPage = JSON.parse(localStorage.getItem('homePage'));
      // const onContactsPage = JSON.parse(localStorage.getItem('homePage'));

      // if (onHomePage == true) {
      //   home.classList.add('bottom-border-active');
      //   blog.classList.remove('bottom-border-active');
      //   contacts.classList.remove('bottom-border-active');
      //   console.log(onHomePage);
      // }
      // else if (onBlogPage == true) {
      //   home.classList.remove('bottom-border-active');
      //   blog.classList.add('bottom-border-active');
      //   contacts.classList.remove('bottom-border-active');
      // }
      // else if (onContactsPage == true) {
      //   home.classList.remove('bottom-border-active');
      //   blog.classList.remove('bottom-border-active');
      //   contacts.classList.add('bottom-border-active');
      // }

      // home.addEventListener('click',() => {
      //   pageInfo.homePage = true;
      //   localStorage.setItem('homePage', pageInfo.homePage);
      // });

      // blog.addEventListener('click', () => {
      //   pageInfo.blogPage = true;
      //   pageInfo.home = false;
      //   pageInfo.contactsPage = false;
      //   console.log('blogPage: '+pageInfo.blogPage);
      //   localStorage.setItem('blogPage', pageInfo.blogPage);
      // });

      // contacts.addEventListener('click', () => {
      //   pageInfo.contactsPage = true;
      //   localStorage.setItem('contactsPage', pageInfo.contactsPage);
      // });

      const tabs = document.querySelectorAll(".tab");

      // local Storage Done
      const pageInfo = {
        home: false,
        blog: false,
        contacts: false,
      };

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const pageID = tab.id;

          // Reset all pages to false
          for (let key in pageInfo) {
            pageInfo[key] = key === pageID;
            console.log(pageInfo[key]);
          }

          // Save to localStorage
          localStorage.setItem("pageInfo", JSON.stringify(pageInfo));
        });
      });

      // Retrieve saved state from localStorage
      const stored = JSON.parse(localStorage.getItem("pageInfo"));

      // Check which page is true and apply 'underline' class
      if (stored) {
        for (let key in stored) {
          if (stored[key]) {
            document.getElementById(key)?.classList.add("underlined");
          }
        }
      }

      const tabButton = document.querySelectorAll(".tab-button");
      const bars = document.querySelectorAll(".bar");
      const textContainers = document.querySelectorAll(
        ".strengths-text-container"
      );

      tabButton.forEach((button) => {
        button.addEventListener("click", () => {
          const buttonId = button.id;
          console.log(buttonId);

          // Update bars
          bars.forEach((bar) => {
            if (bar.classList.contains(buttonId)) {
              bar.classList.add("orange-underline");
            } else {
              bar.classList.remove("orange-underline");
            }
          });

          // Update button opacity
          tabButton.forEach((btn) => {
            if (btn.id === buttonId) {
              btn.classList.add("opacity-added");
            } else {
              btn.classList.remove("opacity-added");
            }
          });

          //sdfgsg
          textContainers.forEach((container) => {
            container.classList.remove("show-paragraph");
            if (container.classList.contains(`text-for-${buttonId}`)) {
              container.classList.add("show-paragraph");
            }
          });
        });
      });

      //-------
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
    });
});

// Your jQuery code goes here
$(function () {
  $(".welcome-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
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
    cssEase: 'linear',
    dots: false,
    arrows: false,
    pauseOnHover: false,
  });

  //Your code here
  $("button").on("click", () => {
    console.log("Hello");
  });
});
