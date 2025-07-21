// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.querySelector('header').innerHTML = html;
    const hamburger = document.querySelector(".hamburger-menu");
    const sidebar = document.querySelector(".sidebar");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      sidebar.classList.toggle("show");
    });

    const back = document.querySelector(".back-button");

    back.addEventListener("click", () => {
      hamburger.classList.toggle("active");  
      sidebar.classList.toggle("show");
    });

    const home = document.querySelector(".sidebar-home");
    const blog = document.querySelector(".sidebar-blog");
    const contacts = document.querySelector(".sidebar-contacts");

    const homeHr = document.querySelector(".home-hr");
    const blogHr = document.querySelector(".blog-hr");
    const contactsHr = document.querySelector(".contacts-hr");

    home.addEventListener("click",() => {
      home.classList.add("color-active");
      blog, contacts.classList.remove("color-acitve");
      homeHr.classList.add("line");
      blogHr.classList.remove("line");
      contactsHr.classList.remove("line");
    });

    blog.addEventListener("click", () => {
      blog.classList.add("color-active");
      home, contacts.classList.remove("color-acitve");
      homeHr.classList.remove("line");
      blogHr.classList.add("line");
      contactsHr.classList.remove("line");
    });

     contacts.addEventListener("click", () => {
      contacts.classList.add("color-active");
      home, blog.classList.remove("color-acitve");
      homeHr.classList.remove("line");
      blogHr.classList.remove("line");
      contactsHr.classList.add("line");
    });

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