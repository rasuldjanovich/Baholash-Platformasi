$(document).ready(function () {
  $(".switcher").on("click", function () {
    // $(".radio-inner").toggleClass("active");
    // Header
    // $("header").removeClass("bg-[#211F4A]");
    $("header").toggleClass("bg-[#211F4A]");
    // News
    $("section").removeClass("bg-[#fff]");
    $("section").removeClass("bg-[#F1F3F9]");
    $("p").toggleClass("text-white");
    $("h1").toggleClass("text-white");
    $("a").children('h1').toggleClass("text-slate-400");
    $("body").toggleClass("dark");
    // Participants
    $("div").children('span').children('div').removeClass("bg-white");
    // Table
    $("thead").removeClass("bg-white");
    $("tr").removeClass("bg-[#FAFBFF]");
    $("div").children('table').children('thead').children('tr').children('th').toggleClass("text-white");
    $("div").children('table').children('tbody').children('tr').children('th').children('div').toggleClass("text-white");
    $("div").children('table').children('tbody').children('tr').children('td').children('span').children('a').toggleClass("text-white");
    $("div").children('table').children('tbody').children('tr').children('td').children('span').children('p').removeClass("bg-[#dfeadd]");
    $("div").children('table').children('tbody').children('tr').children('td').children('span').children('p').toggleClass("text-black");
    $("div").children('table').children('tbody').children('tr').children('td').children('a').children('button').removeClass("bg-white");
    $("div").children('table').children('tbody').children('tr').children('td').children('a').children('button').toggleClass("border-[#2861F5]");
    // Statistics
    $("section").children('div').removeClass("bg-white");
    // Regulatory_documents
    $("section").children("div").children('span').children('p').toggleClass("text-white");
    $("main").removeClass("bg-white");
    // Map
    $("section").children('div').children('div').removeClass("bg-white");
    $("section").children('div').children('div').children('h1').toggleClass("text-white");
    $("section").children('div').children('div').children('p').toggleClass("text-white");
    $("section").children('div').children('span').removeClass("bg-[#FAFBFF]");
    // Useful links
    $("div").children("div").removeClass("bg-white");
    // Contact Us
    $("section").children('code').children('main').removeClass("bg-[#fff]");
    // $("section").children("code").children("main").children("form").children("input").removeClass("bg-[#F9FBFF]");
    // Footer
    $("footer").removeClass("bg-[#211F4A]")
  })
})
