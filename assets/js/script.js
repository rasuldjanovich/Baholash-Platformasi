

const handleTheme = () => {
  const htmlElem = document.querySelector(".switch")
  htmlElem.classList.toggle("dark")
}


var header = document.getElementById("myHeader");
var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("whiteHeader");
  } else {
    header.classList.remove("whiteHeader");
  }
}


window.onscroll = function () {
  myFunction()
};


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
    [''],
    ['']
  ],
  datasets: [{
    data: [1000000, 900000, 800000, 700000, 600000, 500000, 400000, 300000, 200000, 100000],
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
    barPercentage: 0.50,
    categoryPercentage: 0.50
  }]
};

// config block
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

