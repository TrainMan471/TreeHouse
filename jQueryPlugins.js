$(".animation").animistion({
inClass: 'fade-in-right-lg',
outClass: 'fade-out-right-lg',
linkElement: 'header a',
inDuration: 1000,//
outDuration; 500
});

$('.header').sticky();

$('.header').on('sticky-start', function () {
  $('.description').html('We build <strong>great</strong apps');
});

$('.header').on('sticky-end', function () {
$('.description').html('We build apps');
  });

  $('work').sticky({
    topSpacing: 60, getWidthFrom : '.container', responsiveWidth : true
  });

  $('.work').on('sticky-start', function() {
    $(this).append( ' <a href="mailto:email@website.com" class="emailName">Email&nbsp;us</a>');
  });

  $('work').on('sticky-end', function() {
    $('.email-text').remove();
  });

//OTES

  //INCLUDING jQUERY AND jQUERY PLUGINS IN YOUR PROJECTS(TO Be included in the html)
  //Including jQuery first, all other plugins must go below it.
  <script src="js/jquery-1.11.2.min.js"></script>
  //jQuery plugin animistion
  <script src="js/animistion/jquery.animistion.min.js"></script>
  //jQuery plugin "sticky"
  <script src="js/sticky/jquery.sticky.js"></script>
  //Main Java Script File for PROJECTS
  <script src="js/main.js"></script>
