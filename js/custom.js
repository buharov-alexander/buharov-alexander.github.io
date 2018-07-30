$(window).on("scroll", function() {
  $(window).scrollTop() >= 50 ? $("#mainNav").addClass("stickyadd") : $("#mainNav").removeClass("stickyadd")
}),
$(".scroll-down a").on("click", function(e) {
  var t = $(this);
  $("html, body").stop().animate({
      scrollTop: $(t.attr("href")).offset().top
  }, 1500, "easeInOutExpo"),
  e.preventDefault()
})