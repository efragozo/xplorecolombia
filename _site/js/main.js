$("a[data-slider]").click(function(event) {
  var target = $(this).attr('href');

  event.preventDefault();

  $(target).toggleClass('slider-expanded');
});
