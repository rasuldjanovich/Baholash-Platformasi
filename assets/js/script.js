// Preloader 
$(window).on("load", function () {
  $(".preloader").fadeOut();
  isotopeintial();
  $(".slick-slider").slick("refresh");
});

if ($(".preloader").length > 0) {
  $(".preloaderCls").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".preloader").css("display", "none");
    });
  });
}

// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("nav");
  if (this.window.scrollY > 0) {
    header.classList.add("scrolled")
    // header.classList.add("logos")
  } else {
    header.classList.remove("scrolled")
    // header.classList.remove("logos")
  }
})

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open")
}

// Wow animation
new WOW().init();

// SLider
$('.logo-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 1,
    }
  }

});

// setup block
const data = {
  labels: [
    ['Akfa', 'universiteti'],
    ['Muhammad Al-Xorazmiy', 'nomidagi Toshkent axborot', 'texnologiyalari universiteti'],
    ['Farg’ona davlat', 'universiteti'],
    ['Andijon davlat', 'universiteti'],
    ['Namangan Davlat', 'universiteti'],
    ['Islom karimov nomidagi', 'Toshkent davlat texnika', 'universiteti'],
    ['Toshkent tibbiyot', 'universiteti Urganch filiali'],
    ['Qo’qon davlat', 'pedagogika instituti'],
    ['Farg’ona politexnika', 'instituti'],
    ['Farg’ona politexnika', 'instituti']
  ],
  datasets: [{
    data: [1000000, 900000, 800000, 700000, 600000, 500000, 400000, 300000, 200000, 100000],

    label: 'Ovozlar soni',
    backgroundColor: [
      '#1E9A37',
      '#5BBA54',
      '#93CC88',
      '#FCBF0E',
      '#FCBF0E',
      '#F59038',
      '#F1575F',
      '#DA2129',
      '#DA2129',
      '#DA2129'
    ],
    borderColor: [
      '#1E9A37',
      '#5BBA54',
      '#93CC88',
      '#FCBF0E',
      '#FCBF0E',
      '#F59038',
      '#F1575F',
      '#DA2129',
      '#DA2129',
      '#DA2129'
    ],
    borderWidth: 1,
    borderRadius: 50,
    borderSkipped: false,
    barPercentage: 0.40,
    categoryPercentage: 0.40
  }]
};

// config block
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
};

// render block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Map
jQuery('#vmap').vectorMap({
  map: 'uzbekistan_uz',
  backgroundColor: null,
  color: '#273c75',
  hoverColor: '#999999',
  enableZoom: false,
  showTooltip: false
});

// $(document).ready(function(){
//   $("#vmap").click(function(){
//    var s = $("#test");
//    if(s == " ") {
//     console.log("dededed");
//    }else {
//     console.log("xaxaxaxa");
//    }

//   });
// });
