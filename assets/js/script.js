// $(document).ready(function() {
//     setTimeout(function() {
//         $('body').addClass('loaded');
//     }, 1000);
 
// });

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

window.addEventListener("scroll", function() {
  let header = document.querySelector("nav");
  if (this.window.scrollY > 0) {
    header.classList.add("scrolled")
  }else {
    header.classList.remove("scrolled")
  }
})

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

new WOW().init();