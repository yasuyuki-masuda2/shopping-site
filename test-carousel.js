$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});


$(window).load(function(){
  $(".pro_img_small img").click(function(){
    var img_src = $(this).attr("src");
    $(".pro_img_left img").attr("src", img_src);
  });
});


$(document).ready(function(){
  $(".header_menu").click(function(){
    $(".header_hunba").slideToggle();
  });
});