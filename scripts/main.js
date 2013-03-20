$(document).ready(function(){
  accordion();

  $('#challenges-filter').affix({ offset: $('#challenges-filter').position() });

  $("#all-filter").click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.challenges_page_list-challenge').show();
  });
  $("#software-filter").click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.challenges_page_list-challenge').hide();
    $('.challenges_page_list-challenge').filter('.software').show();
  });
  $("#hardware-filter").click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.challenges_page_list-challenge').hide();
    $('.challenges_page_list-challenge').filter('.hardware').show();
  });
  $("#design-filter").click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.challenges_page_list-challenge').hide();
    $('.challenges_page_list-challenge').filter('.design').show();
  });
  $("#strategy-filter").click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.challenges_page_list-challenge').hide();
    $('.challenges_page_list-challenge').filter('.strategy').show();
  });
});


function accordion(){
  var toggle = $(".accordion-trigger");
  var content = $(".accordion-content");
  content.hide();
  toggle.on("click", function(e){
    if ($(e.target).hasClass("faq-q")){
      content.slideUp();
    }
    e.preventDefault();
    var targetContent = $(this).attr("href");
    $(targetContent).slideToggle();
  });
}