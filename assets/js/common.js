// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.querySelector('header').innerHTML = html;
    
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
    } 
    else {
      sidebar.classList.remove("show");
      header.classList.remove("header-hidden");
      overlay.classList.remove("dimmed");
    }
    }

    // const home = document.querySelector(".sidebar-home");
    // const blog = document.querySelector(".sidebar-blog");
    // const contacts = document.querySelector(".sidebar-contacts");

    // const homeHr = document.querySelector(".home-option");
    // const blogHr = document.querySelector(".blog-hr");
    // const contactsHr = document.querySelector(".contacts-hr");

    // home.addEventListener("click",() => {
    //   home.classList.add("color-active");
    //   blog.classList.remove("color-active");
    //   contacts.classList.remove("color-active");
    //   homeHr.classList.add("line");
    //   blogHr.classList.remove("line");
    //   contactsHr.classList.remove("line");
    // });

    // blog.addEventListener("click", () => {
    //   blog.classList.add("color-active");
    //   home.classList.remove("color-active");
    //   contacts.classList.remove("color-active");
    //   homeHr.classList.remove("line");
    //   blogHr.classList.add("line");
    //   contactsHr.classList.remove("line");
    // });

    //  contacts.addEventListener("click", () => {
    //   contacts.classList.add("color-active");
    //   home.classList.remove("color-active");
    //   blog.classList.remove("color-active");
    //   homeHr.classList.remove("line");
    //   blogHr.classList.remove("line");
    //   contactsHr.classList.add("line");
    // });

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
      }
      else {
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

  //Your code here
  $("button").on("click", () => {
    console.log("Hello");
  });
});
;