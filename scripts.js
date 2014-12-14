$(document).ready(function() {    


$('<div id="navigation_blob"></div>').css({
width: $('#nav li:first a').width() + 10,
//height: $('#nav li:first a').height() + 10
}).appendTo('#nav');

var navleft=$('#nav li a.current').position().left;
var width_of_blob=$('#nav li a.current').width() + 10;
$('#navigation_blob').css({left: navleft});


$('#nav a').hover(function() {
$('#navigation_blob').animate({width: $(this).width() + 10, left: $(this).position().left},
{duration: 'slow', queue: false},'linear'
);}
,function() {
$('#navigation_blob').animate({left: navleft,width:width_of_blob},{duration: 'slow', queue: false});});




$('#slides').slides({
play: 2000,
pause: 1500,
hoverPause: true});


$(window).scroll(function(){
$('#eventnav').stop()
.animate({top: $(document).scrollTop()},'normal','swing');
});




$('#eventnav ul a').click(function(){
$('#eventnav ul a.active').removeClass('active');
$('html,body').animate({scrollTop:$($(this).attr('href')).position().top},800);
$(this).addClass('active');
return false;
});



$('#slides').slides({
play: 2000,
pause: 1500,
hoverPause: true});

//$('#news').vTicker({speed: 500,
//pause: 2000,
//showItems: 4,
//animation: 'fade',
//mousePause: true,
//height: 200,
//direction: 'up'
//});

});