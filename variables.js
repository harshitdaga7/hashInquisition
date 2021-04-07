///// stores the variables
/* game variables */
var lives = 3; /// default 3.
var difficulty = 2; /// 1 - easy, 2 - medium , 3 - hard, default -> 2

var frgrnd = document.getElementById("foreground");
var bkgrnd = document.getElementById("background");
var frg = document.getElementById("foreground").getContext("2d");
var bck = document.getElementById("background").getContext("2d");
var ui = document.getElementById("ui");
var frg_h = 480,
  frg_w = 640,
  bck_h = 510,
  bck_w = 670; /// css height and width of frg and bck canvas , after being in fixDpi it will give the canvas width and
//var dpi = window.devicePixelRatio;
/*function fixDPI()
{
  frgrnd.setAttribute('width',parseInt(dpi*frg_w));
  frgrnd.setAttribute('height',parseInt(dpi*frg_h));
  bkgrnd.setAttribute('width', parseInt(dpi*bck_w));
  bkgrnd.setAttribute('height',parseInt(dpi*bck_h));
  
};*/

