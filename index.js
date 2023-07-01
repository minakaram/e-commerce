var i = document.getElementById("i");
var btn = document.getElementById("btn");
var select = document.getElementById("select");
var category = document.getElementById("category");
var category_list = document.getElementById("category-list");
var hidden_div = document.getElementById("nav-hidden");
var hidden_div1 = document.getElementById("nav-hidden-1");
var link_hide = document.getElementById("link-hide");
var link_hide1 = document.getElementById("link-hide-1");
var link_hide2 = document.getElementById("link-hide-2");
var hidden_div2 = document.getElementById("nav-hidden-2");
var women_btn = document.getElementById("nav-3-women-button");
var women_drop = document.getElementById("nav-3-hidden-1");
var men_button = document.getElementById("nav-3-men-button");
var pages_button = document.getElementById("nav-3-pages-button");
var pages_drop = document.getElementById("nav-3-hidden-3");
var men_drop = document.getElementById("nav-3-hidden-2");
var nav_left_category = document.getElementById("left-nav-category");
var nav_left_category_list = document.getElementById("left-nav-category-list");
var nav_left_menu = document.getElementById("left-nav-menu");
var nav_left_menu_list = document.getElementById("left-nav-menu-list");
var left_nav_link_hide = document.getElementById("left-nav-link-hide");
var left_nav_link_content = document.getElementById(
  "left-nav-link-hide-content"
);
var left_nav_hidden_1 = document.getElementById("left-nav-hidden-1");
var left_nav_link_hide_1 = document.getElementById("left-nav-link-hide-1");
var left_nav_hidden_2 = document.getElementById("left-nav-hidden-2");
var left_nav_link_hide_2 = document.getElementById("left-nav-link-hide-2");
var left_nav_menu_hide_1 = document.getElementById("left-nav-menu-hide-1");
var left_nav_menu_hide_content1 = document.getElementById(
  "left-nav-menu-hide-content1"
);
var left_nav_menu_hide_2 = document.getElementById("left-nav-menu-hide-2");
var left_nav_menu_hide_content2 = document.getElementById(
  "left-nav-menu-hide-content2"
);
var left_nav_menu_hide_3 = document.getElementById("left-nav-menu-hide-3");
var left_nav_menu_hide_content3 = document.getElementById(
  "left-nav-menu-hide-content3"
);
var nav_left_show = document.getElementById("nav-left-show");
var nav_left_id = document.getElementById("left-side-navbar-id");
var section1 = document.getElementById("section1");
var overylay = document.getElementById("overlay-id");
const body = document.querySelector("body");

// set viewport meta tag
// function setViewport() {
//   var viewport = document.querySelector('meta[name="viewport"]');
//   if (viewport) {
//     viewport.setAttribute(
//       "content",
//       "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0"
//     );
//   }
// }
// // call setViewport on page load
// window.addEventListener("load", setViewport);

// // call setViewport on window resize
// window.addEventListener("resize", setViewport);
// ----------------------------- owl caresul jquery 1-------------------------//

$(".carousel1").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    610: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".carousel2").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    610: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
//----------------------------- swiper --------------------------------------//
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: { el: ".swiper-pagination" },
  initialSlide: 4,
});
//----------------------------------------------------------------------------//

// -------------------------------------------------------------------------------------------//
// fixed navbar

let navbar1 = document.getElementById("navbar1");
let navbar2 = document.getElementById("navbar2");
let navbar3 = document.getElementById("navbar3");
let navigation = document.getElementById("navigation-id");
let scroll_button = document.getElementById("scrolling");
window.addEventListener("scroll", function () {
  var scrollHeight = document.documentElement.scrollTop;

  // if (scrollHeight > 100) {
  //   navigation.style.opacity = "0";
  //   navigation.style.height = "0";
  //   navbar1.style.opacity = "0";
  //   navbar2.style.opacity = "0";
  //   navbar3.style.position = "fixed";
  // } else if (scrollHeight < 50) {
  //   navigation.style.opacity = "1";
  //   navbar1.style.opacity = "1";
  //   navbar2.style.opacity = "1";
  //   navigation.style.height = "auto";
  //   navbar3.style.position = "static";
  // }
  if (scrollHeight > 100) {
    scroll_button.classList.add("scroll-up-show");
  } else {
    scroll_button.classList.remove("scroll-up-show");
  }
});
scroll_button.onclick = () => {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
setInterval(function () {
  scroll_button.classList.remove("scroll-anmi");
  scroll_button.offsetWidth;
  scroll_button.classList.add("scroll-anmi");
}, 5000);

// -------------------------------------------------------------------------------------------//
// left nav dropdowns
nav_left_show.addEventListener("click", () => {
  nav_left_id.style.left === "-260px";
  nav_left_id.style.left = "0px";
  overylay.style.display = "block";

  // left nav overlay
  document.addEventListener("click", function (event) {
    if (
      !nav_left_id.contains(event.target) &&
      !nav_left_show.contains(event.target)
    ) {
      nav_left_id.style.left = "-260px";
      overylay.style.display = "none";
    }
  });
});

// categories dropdowns
left_nav_link_hide.addEventListener("click", () => {
  var left_nav_link_content_style = window.getComputedStyle(
    left_nav_link_content
  );
  if (left_nav_link_content_style.display === "none") {
    left_nav_link_content.style.display = "block";
    left_nav_link_content.style.opacity = 0;
    left_nav_link_content.style.height = "0";
    setTimeout(() => {
      left_nav_link_content.style.transition =
        "opacity 0.3s ease-in-out, height 3s ease-in-out";
      left_nav_link_content.style.opacity = 1;
      left_nav_link_content.style.height = "100%";
    }, 10);
  } else {
    left_nav_link_content.style.opacity = 0;
    left_nav_link_content.style.height = "0";
    setTimeout(() => {
      left_nav_link_content.style.display = "none";
    }, 100);
  }
});

left_nav_link_hide_1.addEventListener("click", () => {
  var left_nav_hidden_style = window.getComputedStyle(left_nav_hidden_1);
  if (left_nav_hidden_style.display === "none") {
    left_nav_hidden_1.style.display = "block";
    left_nav_hidden_1.style.opacity = 0;
    left_nav_hidden_1.style.height = "0";
    setTimeout(() => {
      left_nav_hidden_1.style.transition =
        "opacity 0.3s ease-in-out, height 3s ease-in-out";
      left_nav_hidden_1.style.opacity = 1;
      left_nav_hidden_1.style.height = "100%";
    }, 10);
  } else {
    left_nav_hidden_1.style.opacity = 0;
    left_nav_hidden_1.style.height = "0";
    setTimeout(() => {
      left_nav_hidden_1.style.display = "none";
    }, 100);
  }
});

left_nav_link_hide_2.addEventListener("click", () => {
  var left_nav_hidden_2_style = window.getComputedStyle(left_nav_hidden_2);
  if (left_nav_hidden_2_style.display === "none") {
    left_nav_hidden_2.style.display = "block";
    left_nav_hidden_2.style.opacity = 0;
    left_nav_hidden_2.style.height = "0";
    setTimeout(() => {
      left_nav_hidden_2.style.transition =
        "opacity 0.3s ease-in-out, height 3s ease-in-out";
      left_nav_hidden_2.style.opacity = 1;
      left_nav_hidden_2.style.height = "100%";
    }, 10);
  } else {
    left_nav_hidden_2.style.opacity = 0;
    left_nav_hidden_2.style.height = "0";
    setTimeout(() => {
      left_nav_hidden_2.style.display = "none";
    }, 100);
  }
});

nav_left_category.addEventListener("click", function () {
  var nav_left_category_list_style = window.getComputedStyle(
    nav_left_category_list
  );
  if (nav_left_category_list_style.display === "none") {
    nav_left_category_list.style.display = "block";
    nav_left_category_list.style.opacity = 0;
    nav_left_category_list.style.height = "0";
    nav_left_category_list.style.transition =
      "opacity 0.3s ease-in-out, height 3s ease-in-out";
    setTimeout(() => {
      nav_left_category_list.style.opacity = 1;
      nav_left_category_list.style.height = "100%";
    }, 100);
  } else {
    nav_left_category_list.style.opacity = 0;
    nav_left_category_list.style.height = "0";
    setTimeout(() => {
      nav_left_category_list.style.display = "none";
    }, 200);
  }
});
// menu drop down
nav_left_menu.addEventListener("click", function () {
  var nav_left_menu_list_style = window.getComputedStyle(nav_left_menu_list);
  if (nav_left_menu_list_style.display === "none") {
    nav_left_menu_list.style.display = "block";
    nav_left_menu_list.style.opacity = 0;
    nav_left_menu_list.style.height = "0";
    setTimeout(() => {
      nav_left_menu_list.style.transition =
        "opacity 0.3s ease-in-out, height 3s ease-in-out";
      nav_left_menu_list.style.opacity = 1;
      nav_left_menu_list.style.height = "100%";
    }, 100);
  } else {
    nav_left_menu_list.style.opacity = 0;
    nav_left_menu_list.style.height = "0";
    setTimeout(() => {
      nav_left_menu_list.style.display = "none";
    }, 200);
  }
});

left_nav_menu_hide_1.addEventListener("click", () => {
  var left_nav_menu_hide_content1_style = window.getComputedStyle(
    left_nav_menu_hide_content1
  );
  if (left_nav_menu_hide_content1_style.display === "none") {
    left_nav_menu_hide_content1.style.display = "block";
    left_nav_menu_hide_content1.style.opacity = 0;
    left_nav_menu_hide_content1.style.height = "0";
    setTimeout(() => {
      left_nav_menu_hide_content1.style.transition =
        "opacity 0.3s ease-in-out, height 3s ease-in-out";
      left_nav_menu_hide_content1.style.opacity = 1;
      left_nav_menu_hide_content1.style.height = "100%";
    }, 10);
  } else {
    left_nav_menu_hide_content1.style.opacity = 0;
    left_nav_menu_hide_content1.style.height = "0";
    setTimeout(() => {
      left_nav_menu_hide_content1.style.display = "none";
    }, 100);
  }
});

left_nav_menu_hide_2.addEventListener("click", () => {
  var left_nav_menu_hide_content2_style = window.getComputedStyle(
    left_nav_menu_hide_content2
  );
  if (left_nav_menu_hide_content2_style.display === "none") {
    left_nav_menu_hide_content2.style.display = "block";
    left_nav_menu_hide_content2.style.opacity = 0;
    left_nav_menu_hide_content2.style.height = "0";
    setTimeout(() => {
      left_nav_menu_hide_content2.style.transition =
        "opacity 0.3s ease-in-out, height 3s ease-in-out";
      left_nav_menu_hide_content2.style.opacity = 1;
      left_nav_menu_hide_content2.style.height = "100%";
    }, 10);
  } else {
    left_nav_menu_hide_content2.style.opacity = 0;
    left_nav_menu_hide_content2.style.height = "0";
    setTimeout(() => {
      left_nav_menu_hide_content2.style.display = "none";
    }, 100);
  }
});

left_nav_menu_hide_3.addEventListener("click", () => {
  var left_nav_menu_hide_content3_style = window.getComputedStyle(
    left_nav_menu_hide_content3
  );
  if (left_nav_menu_hide_content3_style.display === "none") {
    left_nav_menu_hide_content3.style.display = "block";
    left_nav_menu_hide_content3.style.opacity = 0;
    left_nav_menu_hide_content3.style.height = "0";
    setTimeout(() => {
      left_nav_menu_hide_content3.style.transition =
        "opacity 0.3s ease-in-out, height 3s ease-in-out";
      left_nav_menu_hide_content3.style.opacity = 1;
      left_nav_menu_hide_content3.style.height = "100%";
    }, 10);
  } else {
    left_nav_menu_hide_content3.style.opacity = 0;
    left_nav_menu_hide_content3.style.height = "0";
    setTimeout(() => {
      left_nav_menu_hide_content3.style.display = "none";
    }, 100);
  }
});
// --------------------------------

btn.addEventListener("click", function () {
  i.style.border = "2px solid #3482e7";
  select.style.border = "2px solid #3482e7";
  btn.style.outline = "2px solid #3482e7";
  i.style.borderLeft = "none";
  btn.style.borderLeft = "none";
  btn.style.marginLeft = "-30px";

  document.addEventListener("click", function removeBorder(event) {
    if (!btn.contains(event.target)) {
      i.style.border = "1px solid rgb(182, 176, 176)";
      btn.style.outline = "none";
      select.style.border = "1px solid rgb(182, 176, 176)";
      (i.style.borderLeft = "none"), (btn.style.marginLeft = "-30px");

      document.removeEventListener("click", removeBorder);
    }
  });
});

category.addEventListener("click", function drop() {
  var category_style = window.getComputedStyle(category_list);
  if (category_style.visibility === "hidden") {
    category_list.style.transition =
      "opacity 0.3s ease-in-out, height 3s ease-in-out";
    category_list.style.opacity = 0;
    category_list.style.height = "0";
    category_list.style.visibility = "visible";
    setTimeout(() => {
      category_list.style.opacity = 1;
      category_list.style.height = "100%";
    }, 50);
  } else {
    // Otherwise, hide it
    category_list.style.opacity = 0;
    category_list.style.height = "0";
    setTimeout(() => {
      category_list.style.visibility = "hidden";
    }, 150);
  }
  document.addEventListener("click", function (event) {
    var category_style = window.getComputedStyle(category_list);
    if (
      !category.contains(event.target) &&
      !category_list.contains(event.target) &&
      category_style.visibility !== "hidden"
    ) {
      category_list.style.opacity = 0;
      category_list.style.height = "0";
      setTimeout(() => {
        category_list.style.visibility = "hidden";
      }, 150);
    }
  });
});

link_hide.addEventListener("click", function () {
  if (hidden_div.style.display === "none") {
    hidden_div.style.opacity = "0";
    hidden_div.style.display = "block";
    setTimeout(function () {
      hidden_div.style.opacity = "1";
    }, 10); // Delay to allow display property to take effect before transitioning opacity
  } else {
    hidden_div.style.opacity = "0";
    setTimeout(function () {
      hidden_div.style.display = "none";
    }, 300); // Match transition duration
  }
  hidden_div.style.transition = "opacity 0.3s ease-in-out";
});

hidden_div.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent click event from propagating to document object
});

document.addEventListener("click", function (event) {
  if (!link_hide.contains(event.target) && !hidden_div.contains(event.target)) {
    hidden_div.style.display = "none";
  }
});

link_hide1.addEventListener("click", function () {
  if (hidden_div1.style.display === "none") {
    hidden_div1.style.opacity = "0";
    hidden_div1.style.display = "block";
    setTimeout(function () {
      hidden_div1.style.opacity = "1";
    }, 10); // Delay to allow display property to take effect before transitioning opacity
  } else {
    hidden_div1.style.opacity = "0";
    setTimeout(function () {
      hidden_div1.style.display = "none";
    }, 300); // Match transition duration
  }
  hidden_div1.style.transition = "opacity 0.3s ease-in-out";
});
hidden_div1.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent click event from propagating to document object
});

document.addEventListener("click", function (event) {
  if (
    !link_hide1.contains(event.target) &&
    !hidden_div1.contains(event.target)
  ) {
    hidden_div1.style.display = "none";
  }
});

link_hide2.addEventListener("click", function () {
  if (hidden_div2.style.display === "none") {
    hidden_div2.style.opacity = "0";
    hidden_div2.style.display = "block";
    setTimeout(function () {
      hidden_div2.style.opacity = "1";
    }, 10); // Delay to allow display property to take effect before transitioning opacity
  } else {
    hidden_div2.style.opacity = "0";
    setTimeout(function () {
      hidden_div2.style.display = "none";
    }, 300); // Match transition duration
  }
  hidden_div2.style.transition = "opacity 0.3s ease-in-out";
});

hidden_div2.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent click event from propagating to document object
});

document.addEventListener("click", function (event) {
  if (
    !link_hide2.contains(event.target) &&
    !hidden_div2.contains(event.target)
  ) {
    hidden_div2.style.display = "none";
  }
});

// women display drop down
women_btn.addEventListener("click", function () {
  var women_btn_style = window.getComputedStyle(women_drop);
  if (women_btn_style.display === "none") {
    women_drop.style.opacity = "0";
    women_drop.style.display = "block";
    setTimeout(function () {
      women_drop.style.opacity = "1";
    }, 10);
  } else {
    women_drop.style.opacity = "0";
    setTimeout(function () {
      women_drop.style.display = "none";
    }, 300);
  }
  women_drop.style.transition = "opacity 0.3s ease-in-out";
});

document.addEventListener("click", function (event) {
  if (!women_btn.contains(event.target)) {
    women_drop.style.display = "none";
  }
});
document.addEventListener("click", function (event) {
  if (women_drop.contains(event.target)) {
    women_drop.style.display = "block";
  }
});

// men display drop down
men_button.addEventListener("click", function () {
  var men_button_style = window.getComputedStyle(men_drop);
  if (men_button_style.display === "none") {
    men_drop.style.opacity = "0";
    men_drop.style.display = "block";
    setTimeout(function () {
      men_drop.style.opacity = "1";
    }, 10); // Delay to allow display property to take effect before transitioning opacity
  } else {
    men_drop.style.opacity = "0";
    setTimeout(function () {
      men_drop.style.display = "none";
    }, 300); // Match transition duration
  }
  men_drop.style.transition = "opacity 0.3s ease-in-out";
});

document.addEventListener("click", function (event) {
  if (!men_button.contains(event.target)) {
    men_drop.style.display = "none";
  }
});
document.addEventListener("click", function (event) {
  if (men_drop.contains(event.target)) {
    men_drop.style.display = "block";
  }
});

// pages drop
pages_button.addEventListener("click", function () {
  var pages_button_style = window.getComputedStyle(pages_drop);
  if (pages_button_style.display === "none") {
    pages_drop.style.opacity = "0";
    pages_drop.style.display = "block";
    setTimeout(function () {
      pages_drop.style.opacity = "1";
    }, 10); // Delay to allow display property to take effect before transitioning opacity
  } else {
    pages_drop.style.opacity = "0";
    setTimeout(function () {
      pages_drop.style.display = "none";
    }, 300); // Match transition duration
  }
  pages_drop.style.transition = "opacity 0.3s ease-in-out";
});

document.addEventListener("click", function (event) {
  if (!pages_button.contains(event.target)) {
    pages_drop.style.display = "none";
  }
});
document.addEventListener("click", function (event) {
  if (pages_drop.contains(event.target)) {
    pages_drop.style.display = "block";
  }
});

// ----------------------------------------- slider ----------------------------------------------

const sliderImage = document.getElementById("slider-id");
const slides = [
  document.getElementById("slider-label-1"),
  document.getElementById("slider-label-2"),
  document.getElementById("slider-label-3"),
  document.getElementById("slider-label-4"),
  document.getElementById("slider-label-5"),
];

// Array of image sources
const imageSources = [
  "../icons/WS-Task2/images/1.jpg",
  "../icons/WS-Task2/images/2.jpg",
  "../icons/WS-Task2/images/3.jpg",
  "../icons/WS-Task2/images/4.jpg",
  "../icons/WS-Task2/images/5.jpg",
];

// Set the initial active slide index to 0
let activeSlideIndex = 0;

// Start the interval to change the background image every 5 seconds
const intervalId = setInterval(() => {
  // Update the active slide index to the next index in the list
  activeSlideIndex = (activeSlideIndex + 1) % imageSources.length;

  // Update the background image source to the new active slide
  sliderImage.style.backgroundImage = `url('${imageSources[activeSlideIndex]}')`;

  // Update the border color of the active slide label
  slides[activeSlideIndex].style.borderColor = "#40D3DC";

  // Reset the border color of all other labels
  for (let i = 0; i < slides.length; i++) {
    if (i !== activeSlideIndex) {
      slides[i].style.borderColor = "rgba(0, 0, 0, 0.7)";
    }
  }
}, 5000);

// Function to change the background image source and active slide index
function changeBackgroundImage(index) {
  sliderImage.style.transition = "none";

  // Update the background image source to the clicked label
  sliderImage.style.backgroundImage = `url('${imageSources[index]}')`;

  // Update the active slide index to the clicked label index
  activeSlideIndex = index;

  // Update the border color of the active slide label
  slides[activeSlideIndex].style.borderColor = "#40D3DC";

  // Reset the border color of all other labels
  for (let i = 0; i < slides.length; i++) {
    if (i !== activeSlideIndex) {
      slides[i].style.borderColor = "rgba(0, 0, 0, 0.7)";
    }
  }
}

// Add event listeners to each label to change the background image
for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", function () {
    changeBackgroundImage(i);
    sliderImage.style.transition = " 4s ease-in-out";
  });
}
//--------------------------------- count down ---------------------------------------------//

var displayElement = document.getElementById("countdown-hide");
var endDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;
function countdown(endDate) {
  var countdownInterval = setInterval(function () {
    var now = new Date().getTime();
    var distance = endDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      displayElement.style.display = "none";
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer-day").innerHTML = days;
    document.getElementById("timer-hours").innerHTML = hours;
    document.getElementById("timer-minutes").innerHTML = minutes;
    document.getElementById("timer-seconds").innerHTML = seconds;
  }, 1000);
}
countdown(endDate);
