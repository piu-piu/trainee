function mobMenu() {
  $('.nav-mobmenu__btn').click(function() {
    $('.nav-mobmenu__list').toggleClass('visible');
    $('.nav-mobmenu__btn').toggleClass('closebtn');
  });
  // $('.nav-mobmenu__search').click(function() {
  //   $('.nav-searchfield').slideToggle();
  // });
}
