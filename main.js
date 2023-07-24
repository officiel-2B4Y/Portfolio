$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
    });
  
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    // owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });
  
  //scroll(front circle)
  const circles = document.querySelectorAll(".circle");
  circles.forEach((elem) => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * marked) / 100);
    var rotate = 360 / dots;
    var points = "";
    for (let i = 0; i < dots; i++) {
      points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
  });
  
  //scroll(skills)
  let observer = new IntersectionObserver((entries, observer) => {
    setTimeout(() => {
      entries.forEach((entry) => {
        // Si l'élément est visible
        if (entry.isIntersecting) {
          const circles = document.querySelectorAll(".circle");
          circles.forEach((elem) => {
            var dots = elem.getAttribute("data-dots");
            var marked = elem.getAttribute("data-percent");
            var percent = Math.floor((dots * marked) / 100);
            var rotate = 360 / dots;
            var points = "";
            for (let i = 0; i < dots; i++) {
              points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
            }
            elem.innerHTML = points;
            const pointsMarked = elem.querySelectorAll(".points");
            for (let i = 0; i < percent; i++) {
              pointsMarked[i].classList.add("marked");
            }
          });
        }
      });
    }, 3500);
  });
  
  // Select the element you wish to observe:
  let section = document.querySelector("#skills");
  
  // Start observation:
  observer.observe(section);
  