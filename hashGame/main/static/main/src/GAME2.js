/*var frgrnd = document.getElementById("foreground");
var bkgrnd = document.getElementById("background");
var frg = document.getElementById("foreground").getContext("2d");
var bck = document.getElementById("background").getContext("2d");
var ui = document.getElementById("ui");*/
let hashing_style = `
  position: absolute;
  margin-top:18px;
  margin-left: 245px;
  font-size: 50px; 
  color:rgb(3, 141, 3);
  font-weight: bolder;
`;
let hashing = document.createElement("hash");
hashing.innerHTML = "Hashing";
hashing.style = hashing_style;
//menu();
function menu(){

  var backGround = new Image();
  backGround.src = "/static/main/src/images/backgroundWelcome.jpeg";

  backGround.onload = function(){
    bck.drawImage(backGround,15,15);
  }
  let menu_style = `
  position: absolute;
  margin-top:150px;
  margin-left: 275px;
  font-size: 40px; 
  color:rgb(255, 0, 0);
  font-weight: bolder;
`;

ui.appendChild(hashing);

let menulist = document.createElement("menulist");
ui.appendChild(menulist);
menulist.innerHTML = "MENU";
menulist.style = menu_style;

btnm_style =` padding: 10px 50px;
position : absolute;
font-size: 26px; 
font-weight: 700;   
text-align: center;
outline: none;
color: rgb(8, 248, 40);
background-color: #fffb01;
border: none;
border-radius: 15px;
box-shadow: 0 5px #999;
margin-left: 180px;
margin-top: 40px;`;


let btnm0 = document.createElement("btnm0");
  ui.appendChild(btnm0);
  btnm0.innerHTML = "Hashing Function";
  btnm0.style=btnm_style;
  btnm0.style.top = 170 + "px";
  btnm0.onclick = function(){
    ui.removeChild(menulist);
    ui.removeChild(btnm0);
    ui.removeChild(btnm1);
    ui.removeChild(btnm2);
    actual_game();};

  let btnm1 = document.createElement("btnm1");
  ui.appendChild(btnm1);
  btnm1.innerHTML = "Linear Probing";
  btnm1.style=btnm_style;
  btnm1.style.top = 240 + "px";
  btnm1.style.paddingLeft = 65 +"px";
  btnm1.style.paddingRight = 65 +"px";
  btnm1.onclick = function(){
    ui.removeChild(menulist);
    ui.removeChild(btnm0);
    ui.removeChild(btnm1);
    ui.removeChild(btnm2);
    hashing.innerHTML = "Linear Probing";
    hashing.style.marginLeft = 190 + "px";
    actual_game();};

  let btnm2 = document.createElement("btnm2");
  ui.appendChild(btnm2);
  btnm2.innerHTML = "Quadratic Probing";
  btnm2.style=btnm_style;
  btnm2.style.top = 310 + "px";
  btnm2.style.paddingLeft =45 +"px";
  btnm2.style.paddingRight = 45 +"px";
  btnm2.onclick = function(){
    ui.removeChild(menulist);
    ui.removeChild(btnm0);
    ui.removeChild(btnm1);
    ui.removeChild(btnm2);
    hashing.innerHTML = "Quadratic Probing";
    hashing.style.marginLeft = 130 + "px";
    actual_game();};
}

function actual_game(){
  var x,y,m=0,flag=0,funct;
  var array = Array();
var status=1;
var status2=1;
let lives_style =`position: absolute;
                font-size: 30px; 
                color:rgb(255, 0, 0);
                font-weight: bolder;`;
let lives = document.createElement("span");
  var life = 3;
  ui.appendChild(lives);
  lives.innerHTML = life;
  lives.style = lives_style
  lives.style.left = 620 + "px";
  lives.style.top = 30 + "px";
  

  var heart = new Image();
  heart.src = "static/main/src/images/heart.jfif";
  heart.addEventListener(
    "load",
    function () {
      frg.drawImage(heart,550,10,40,40);
    },
    false
  );

let timer_style = ` position: absolute;
font-size: 30px; 
color:rgb(255, 0, 0);
font-weight: bolder;`;

let timer = document.createElement("timer");
  var second = 20;
  ui.appendChild(timer);
  timer.innerHTML = "00:"+second;
  timer.style = timer_style;
  timer.style.left = 25 + "px";
  timer.style.top = 25 + "px";

let key_style = `position: absolute;
margin-top: 140px;
margin-left: 300px;
font-size: 50px; 
color:rgb(255, 94, 0);
font-weight: bolder;`;

let key = document.createElement("key");
  ui.appendChild(key);
  key.innerHTML = "";
  key.style = key_style;

  let keylist_style = `position: absolute;
  margin-top: 230px;
  margin-left: 30px;
  font-size: 30px; 
  color:rgb(0, 255, 0);
  font-weight: bolder;`;
  
  let key_list = document.createElement("key_list");
    ui.appendChild(key_list);
    key_list.innerHTML = "";
    key_list.style = keylist_style;


let btn_d = `background-color: #f80606;
height: 200px;
width: 570px;
border: 3px solid rgb(1, 61, 1);
margin-left:48px;
margin-top: 270px;
position: absolute;`;

var btn_div = document.createElement("btn_div");
ui.appendChild(btn_div);
btn_div.style=btn_d;

btn_style =` padding: 10px 50px;
position : absolute;
font-size: 26px; 
font-weight: 700;   
text-align: center;
outline: none;
color: rgb(8, 248, 40);
background-color: #fffb01;
border: none;
border-radius: 15px;
box-shadow: 0 5px #999;
margin-left: 30px;
margin-top: 7px;
z-index : 4`;

var index_f = 0;

let btn0 = document.createElement("btn0");
  btn_div.appendChild(btn0);
  btn0.innerHTML = 0;
  btn0.style=btn_style;
  btn0.onclick = function(){index_f = index_f*10+parseInt(btn0.innerHTML);};

  let btn1 = document.createElement("btn1");
  btn_div.appendChild(btn1);
  btn1.innerHTML = 1;
  btn1.style=btn_style;
  btn1.style.left = 135 + "px";
  btn1.onclick = function(){index_f = index_f*10+parseInt(btn1.innerHTML);};

  let btn2 = document.createElement("btn2");
  btn_div.appendChild(btn2);
  btn2.innerHTML = 2;
  btn2.style=btn_style;
  btn2.style.left = 270 + "px";
  btn2.onclick = function(){index_f = index_f*10+parseInt(btn2.innerHTML);};
  

  let btn3 = document.createElement("btn3");
  btn_div.appendChild(btn3);
  btn3.innerHTML = 3;
  btn3.style=btn_style;
  btn3.style.left = 405 + "px";
  btn3.onclick = function(){index_f = index_f*10+parseInt(btn3.innerHTML);};

  let btn4 = document.createElement("btn4");
  btn_div.appendChild(btn4);
  btn4.innerHTML = 4;
  btn4.style=btn_style;
  btn4.style.top = 65 + "px";
  btn4.onclick = function(){index_f = index_f*10+parseInt(btn4.innerHTML);};

  let btn5 = document.createElement("btn5");
  btn_div.appendChild(btn5);
  btn5.innerHTML = 5;
  btn5.style=btn_style;
  btn5.style.left = 135 + "px";
  btn5.style.top = 65 + "px";
  btn5.onclick = function(){index_f = index_f*10+parseInt(btn5.innerHTML);};

  let btn6 = document.createElement("btn6");
  btn_div.appendChild(btn6);
  btn6.innerHTML = 6;
  btn6.style=btn_style;
  btn6.style.left = 270 + "px";
  btn6.style.top = 65 + "px";
  btn6.onclick = function(){index_f = index_f*10+parseInt(btn6.innerHTML);};

  let btn7 = document.createElement("btn7");
  btn_div.appendChild(btn7);
  btn7.innerHTML = 7;
  btn7.style=btn_style;
  btn7.style.left = 405 + "px";
  btn7.style.top = 65 + "px";
  btn7.onclick = function(){index_f = index_f*10+parseInt(btn7.innerHTML);};

  let btn8 = document.createElement("btn8");
  btn_div.appendChild(btn8);
  btn8.innerHTML = 8;
  btn8.style=btn_style;
  btn8.style.top = 130 + "px";
  btn8.onclick = function(){index_f = index_f*10+parseInt(btn8.innerHTML);};

  let btn9 = document.createElement("btn9");
  btn_div.appendChild(btn9);
  btn9.innerHTML = 9;
  btn9.style=btn_style;
  btn9.style.left = 135 + "px";
  btn9.style.top = 130 + "px";
  btn9.onclick = function(){index_f = index_f*10+parseInt(btn9.innerHTML);};

  btngo_style =` padding: 10px 50px;
position : absolute;
font-size: 26px; 
font-weight: 700;   
text-align: center;
outline: none;
color: rgb(8, 248, 40);
background-color: #0000ff;
border: none;
border-radius: 15px;
box-shadow: 0 5px #999;
margin-left: 30px;
margin-top: 7px;
z-index : 4`;


  let btn10 = document.createElement("btn10");
  btn_div.appendChild(btn10);
  btn10.innerHTML = "GO";
  btn10.style=btngo_style;
  btn10.style.paddingLeft = 105 + "px";
  btn10.style.paddingRight = 105 + "px";
  btn10.style.left = 270 + "px";
  btn10.style.top = 130 + "px";
  btn10.onclick = function(){
    status=0;
    if(hashing.innerHTML=="Hashing"){
      if(keys%50==index_f){
        status2=1;
        key_list.innerHTML=key_list.innerHTML+"\xa0\xa0\xa0\xa0"+index_f;
        }
       else
        status2=0;
    }
    else{
        funct = keys%50;
        for(x=1;x<10;x++)
        {
          flag=0;
          for(y=0;y<array.length;y++){
            if(array[y]==funct){
              flag=1;
              break;
            }
          }
          if(flag==0){
            break;
          }
          else{
            if(hashing.innerHTML=="Linear Probing")
            funct=funct+x;
            else
            funct=funct+(x*x);
          }
        }
        if(funct==index_f){
            array[m]=index_f;
            status2=1;
            key_list.innerHTML=key_list.innerHTML+"\xa0\xa0\xa0\xa0"+index_f;
            m++;
          }
         else
          status2=0;
}
    index_f=0;
  };
  
  /*function createTextBox(stringMessage, x, y) {
    let msg = document.createElement("span");
    ui.appendChild(msg);
    msg.innerHTML = stringMessage;
  
    msg.style.position = "absolute";
    msg.style.left = x + "px";
    msg.style.top = y + "px";
    msg.style.border = "2px solid black";
    msg.style.maxWidth = 200 + "px";
    msg.style.display = "inline-block";
    msg.style.textAlign = "justify";
    msg.style.padding = 10 + "px";
    msg.style.borderRadius = 10 + "%";
    msg.style.backgroundColor = "white";
    msg.style.fontSize = 20 + "px";
  
    return msg;
  }*/

  var inq1 = new Image();
  inq1.src = "/static/main/src/images/inq1.png";
  inq1.addEventListener(
    "load",
    function () {
      
      frg.drawImage(inq1, 270, 110);
      var msg1 = createTextBox(
        "Let's see how much knowledge you gained from this chapter!!!!",
        40,
        110
      );
      msg1.addEventListener(
        "click",
        function () {
          ui.removeChild(msg1);
          var msg2 = createTextBox(
            "First, I will guide you about this game....",415,120
          );
          msg2.addEventListener(
            "click",
            function () {
              ui.removeChild(msg2);
              var msg3 = createTextBox(
                "Key will be displayed here in the center....",
                50,110
              );
              msg3.addEventListener(
                "click",
                function () {
                  ui.removeChild(msg3);
                  var msg4 = createTextBox(
                    "You have to apply a hash function (key%50) on keys and select appropriate index location for them..",
                    400,100
                  );
                  msg4.addEventListener(
                    "click",
                    function () {
                      ui.removeChild(msg4);
                      var msg5= createTextBox(
                        "Button present below represents the index locations...",
                        55,150
                      );
                      msg5.addEventListener(
                        "click",
                        function () {
                          ui.removeChild(msg5);
                          var msg6 = createTextBox(
                            "Timer...You have to select Index within this time.....",
                            40,
                            65
                          );
                          msg6.addEventListener(
                            "click",
                            function () {
                              ui.removeChild(msg6);
                              var msg7 = createTextBox(
                                "Life....You will get 3 chances.....",
                                430,
                                70
                              );
                              msg7.addEventListener(
                                "click",
                                function () {
                                  ui.removeChild(msg7);
                                  let tempx =270;
          let temp = setInterval(() => {
            frg.clearRect(tempx, 110, tempx + 100, 110);
            if (tempx <=20 ) {
              clearInterval(temp);
              var msg8 = createTextBox(
                "Are You Ready ???? Click to start the game!",
                210,
                130
              );

              msg8.onclick = function () {
                ui.removeChild(msg8);
                key_definition();
                working();
              };
            }else {
              tempx = tempx - 2;
            }
            frg.drawImage(inq1, tempx, 110);
            
          }, 1);
},false);},false);},false );},false);},false);},false);},false);},false);  
      var keys;
      var i=0;
      function key_definition(){ 
        keys=Math.floor(Math.random()*1000);
        key.innerHTML = keys;
    }
    
    function working(){
        var countdown = setInterval(function() {
        second--;
        if(second<10){
          timer.innerHTML = "00:0"+second;
        }
        else{
          timer.innerHTML = "00:"+second;
        }
        if (second <= 0||status==0) {
            if(second>0){
                if(status2!=1){
                  life--;
                  lives.innerHTML = life;
                    status2=1;
                }
                else{
                    i++;
                }
            }
            else{
              life--;
              lives.innerHTML = life;
            }   
            if(life==0||i==10){
                clearInterval(countdown);
                if(life==0){
                    keys="";
                    key.innerHTML=keys;
                    var msg9 = createTextBox(
                        "You Lost.....  Now you will get the punishment!!!!!!",
                        210,
                        110
                      );
                      msg9.addEventListener(
                        "click",
                        function () {
                          ui.removeChild(msg9);
                          ui.removeChild(timer);
                          ui.removeChild(lives);
                          ui.removeChild(btn_div);
                          ui.removeChild(key);
                          ui.removeChild(key_list);
                          frg.clearRect(0, 0, 640, 480);
                          menu();
                        } ,false);
                }
                else{
                    keys="";
                    key.innerHTML=keys;
                    var msg10 = createTextBox(
                        "You Won..... Now you are free !!!!!!",
                        210,
                        110
                      );
                      msg10.addEventListener(
                        "click",
                        function () {
                          ui.removeChild(msg9);
                          ui.removeChild(timer);
                          ui.removeChild(lives);
                          ui.removeChild(btn_div);
                          ui.removeChild(key);
                          ui.removeChild(key_list);
                          frg.clearRect(0, 0, 640, 480);
                          menu();
                        } ,false);
                }
            }
            else{
                key_definition();
                second=20;
                timer.innerHTML = "00:"+second;
                status=1;
            }
        }
    }, 1000);}
  }