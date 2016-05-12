//Add Carousel plugin to webpages. It helps produce slideshow effects to webpages
//and is quite popular.
//Put the Carousel plugin before the main.css file because it is going to modify the CSS in that folder
<link rel="stylesheet" href="js/slick/slick.css">
//Link to Javascript File, plugin must come after the jQuery File
<script src="js/slick/slick.min.js"></script>
//In order for the Slick plugin in to work, you must stucture your HTML in a specific way.
/* You must create a div tag to hold your slides. An easy way to do this is: */
<div class="slides">
/* After you do this, add div tags inside of the div tag with the class "slides" Like this: */
<div>Slide 1</div>
<div>Slide 2</div>
<div>Slide 3</div>
</div>

//Since you are using the plugin only on that page, you can write a line of code in which
//you call div using the class "slides" using jQuery and the plugin like this:
$('slides').slick();
//If you are going to call it in the html file, do it like this:
<script>
$('slides').slick();
</script>
//This plugin has a lot of customizable settings. To use it, do this:
//Pass a javascript object into this code:
$('slides').slick({
fade: true;.//This is allows the slides to fade into each other.

});

$('slides').slick({
autoplay: true,//This allows the plugin to run the slideshow on its own instead of by pressing
                    //a button.
  autoplaySpeed: 1000,//This allows you to control the speed of the slideshow.
  arrows: false, //gets rid of the next and previous buttons and replaces them with dots that
  dots: true      //Lets you naviagate the slides.
});

//However, doing this without linking to the proper css file will cause the web-page to produce
//horrible, ugly buttons.
//Post it before the main css file.
<link rel="stylesheet" href="js/slick/slick-theme.css">









//Below is HTML which is only an example you can use to set up your slidesshow or your divs
//To be used with the plugin Carousel.
<div class="slide blue">
<div class="grid-half">
    <h2>DailyFeed</h2>
    <p>Your number one podcast app</p>
    <a href="#" class="button">Check it Out</a>
  </div>
  <div class="grid-half">
    <img src="img/slide-dailyFeed.png" alt="" />
  </div>
</div><!--/Slide 1-->

<div class="slide orange">
  <div class="grid-half">
    <h2>ChitChat</h2>
    <p>The worldest easiest to use cross device chat app</p>
    <a href="#" class="button">Check it Out</a>
  </div>
  <div class="grid-half">
    <img src="img/slide-chitChat.png" alt="" />
  </div>
</div><!--/Slide 2-->

<div class="slide green">
  <div class="grid-half">
    <h2>MixTape</h2>
    <p>An app to search, create and share mixtapes</p>
    <a href="#" class="button">Check it Out</a>
  </div>
  <div class="grid-half">
    <img src="img/slide-mixTape.png" alt="" />
  </div>
</div><!--/Slide 3-->

<div class="slide yellow">
  <div class="grid-half">
    <h2>KITT</h2>
    <p>Turn your car into KITT from Knight Rider</p>
    <a href="#" class="button">Check it Out</a>
  </div>
  <div class="grid-half">
    <img src="img/slide-Kitt.png" alt="" />
  </div>
</div><!--/Slide 4-->
