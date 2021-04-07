function chapter1_1() {
  /// removing precious element
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);
  var bookbckground = new Image();
  bookbckground.src = "src/images/bookbackground.jpg";
  bookbckground.onload = function () {
    frg.drawImage(bookbckground, 0, 0);
  };
  let booktext = "HASHING IS A CONCEPT OF DOING STUFF HASHING THEORY";
  let book = createBook(booktext);

  let btn = document.createElement("BUTTON");
  ui.appendChild(btn);
  btn.innerHTML = "Next";
  btn.style.fontSize = 20 + "px";
  btn.style.borderColor = "red";
  btn.style.position = "absolute";
  btn.style.left = 265 + "px";
  btn.style.top = 450 + "px";
  btn.style.backgroundColor = "red";

  btn.onclick = function () {
    bookbckground = null;
    ui.removeChild(book);
    ui.removeChild(btn);
    chapter1_2();
  };
}
function chapter1_2() {
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);

  ///////////////////////
  var court = new Image();
  court.src = "src/images/court.jpg";

  var player = new Image();
  player.src = "src/images/player.jpg";

  var inq = new Image();
  inq.src = "src/images/inq1.jpg";

  court.onload = function(){
    bck.drawImage(court,15,15);
  }

  player.onload = function()
  {
        frg.drawImage(player,180,180);
  }

  inq.onload = function()
  {
    frg.drawImage(inq,180,10);
  }

 let qOBJ = createQuiz(q1,300,10,0,0);

 qOBJ[2].onclick = function(){


    let isAns = false;
    let ans = document.getElementsByName('q_ans');
    let ans_key;

    for(let i = 0;i<ans.length;i++)
    {
      if(ans[i].checked)
      {
        isAns = true;
        ans_key = i;
      }
    }

    if(isAns){

        if(q1.checkAns(ans_key) == true)
        {
           console.log('next Quiz');
           /// remove the objects.
           ui.removeChild(qOBJ[0]);
           ui.removeChild(qOBJ[1]);
            chapter2();
        }
        else
        {
           /// remove the objects.
           ui.removeChild(qOBJ[0]);
           ui.removeChild(qOBJ[1]);
          gameEnd();
        }

    }
    else{
      alert("Please ans");
    }


 }


}
/* START OF CHAPTER 1 */


function chapter1(el) {
  //let val = parseInt(el.currentTarget.myParam);
  //console.log(val);
  //ui.removeChild(ui.children[val-1]);

  /// do this before start of each chapter
  ui.removeChild(el.currentTarget.myParam); /// removing previous chapter ui elements
  frg.clearRect(0, 0, frgrnd.width, frgrnd.height); /// clearing the foreground
  ////////////////////////

  var img1 = new Image();
  img1.src = "src/images/village.jpg";

  img1.addEventListener(
    "load",
    function () {
      // execute drawImage statements here
      bck.drawImage(img1, 15, 15);
    },
    false
  );

  /// loading characters
  var inq1 = new Image();
  inq1.src = "src/images/inq1.jpg";
  inq1.addEventListener(
    "load",
    function () {
      // execute drawImage statements here
      frg.drawImage(inq1, 5, 480 - 200);
      var msg1 = createTextBox(
        "Where is the shitty little hash illetrate?",
        5,
        480 - 250
      );
      msg1.addEventListener(
        "click",
        function () {
          ui.removeChild(msg1);

          let tempx = 5;
          let tempy = 480 - 200;
          let temp = setInterval(() => {
            frg.clearRect(tempx, tempy, tempx + 100, tempy + 100);

            if (tempx >= 530 && tempy <= 110) {
              clearInterval(temp);
              var msg2 = createTextBox(
                "You are charged with not knowing the concepts of hashing, court will decide your fate tomorrow",
                tempx - 100,
                tempy + 100
              );

              msg2.onclick = function () {
                ui.removeChild(msg2);
                //document.body.removeChild(inq1);
                //document.body.removeChild(player);

                chapter1_1();
              };
            } else if (tempx >= 530) {
              tempy -= 2;
            } else {
              tempx = tempx + 2;
            }
            frg.drawImage(inq1, tempx, tempy);
          }, 1);
        },
        false
      );
    },
    false
  );

  ///loading  player

  var player = new Image();
  player.src = "src/images/player.jpg";
  player.addEventListener(
    "load",
    function () {
      // execute drawImage statements here
      frg.drawImage(player, 640 - 100, 10);
    },
    false
  );
}


function chapter1_1() {
  /// removing precious element
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);
  var bookbckground = new Image();
  bookbckground.src = "src/images/bookbackground.jpg";
  bookbckground.onload = function () {
    frg.drawImage(bookbckground, 0, 0);
  };
  let booktext = "HASHING IS A CONCEPT OF DOING STUFF HASHING THEORY";
  let book = createBook(booktext);

  let btn = document.createElement("BUTTON");
  ui.appendChild(btn);
  btn.innerHTML = "Next";
  btn.style.fontSize = 20 + "px";
  btn.style.borderColor = "red";
  btn.style.position = "absolute";
  btn.style.left = 265 + "px";
  btn.style.top = 450 + "px";
  btn.style.backgroundColor = "red";

  btn.onclick = function () {
    bookbckground = null;
    ui.removeChild(book);
    ui.removeChild(btn);
    chapter1_2();
  };
}
function chapter1_2() {
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);

  ///////////////////////
  var court = new Image();
  court.src = "src/images/court.jpg";

  var player = new Image();
  player.src = "src/images/player.jpg";

  var inq = new Image();
  inq.src = "src/images/inq1.jpg";

  court.onload = function(){
    bck.drawImage(court,15,15);
  }

  player.onload = function()
  {
        frg.drawImage(player,180,180);
  }

  inq.onload = function()
  {
    frg.drawImage(inq,180,10);
  }

 let qOBJ = createQuiz(q1,300,10,0,0);

 qOBJ[2].onclick = function(){


    let isAns = false;
    let ans = document.getElementsByName('q_ans');
    let ans_key;

    for(let i = 0;i<ans.length;i++)
    {
      if(ans[i].checked)
      {
        isAns = true;
        ans_key = i;
      }
    }

    if(isAns){

        if(q1.checkAns(ans_key) == true)
        {
           console.log('next Quiz');
           /// remove the objects.
           ui.removeChild(qOBJ[0]);
           ui.removeChild(qOBJ[1]);
            chapter2();
        }
        else
        {
           /// remove the objects.
           ui.removeChild(qOBJ[0]);
           ui.removeChild(qOBJ[1]);
          gameEnd();
        }

    }
    else{
      alert("Please ans");
    }


 }


}
///// chapter2
function chapter2()
{
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h); 
  //////////////////////////

  let msg = createTextBox("this is demo, here we will have interaction b/w charcters",frg_w/2,frg_h/2);
  msg.onclick = function(){

    ui.removeChild(msg);
    chapter2_1();
  }
}

function chapter2_1()
{
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);

  //let bk = createBook('theory will be here, after this player will be in dungeon questions will be asked');

  var bookbckground = new Image();
  bookbckground.src = "src/images/bookbackground.jpg";
  bookbckground.onload = function () {
    frg.drawImage(bookbckground, 0, 0);
  };
  let booktext = 'theory will be here, after this player will be in dungeon questions will be asked';
  let book = createBook(booktext);

  let btn = document.createElement("BUTTON");
  ui.appendChild(btn);
  btn.innerHTML = "Next";
  btn.style.fontSize = 20 + "px";
  btn.style.borderColor = "red";
  btn.style.position = "absolute";
  btn.style.left = 265 + "px";
  btn.style.top = 450 + "px";
  btn.style.backgroundColor = "red";

  btn.onclick = function () {
    bookbckground = null;
    ui.removeChild(book);
    ui.removeChild(btn);
    chapter2_2();
  };
}

function chapter2_2()
{
    frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);

  /////////////////////
   let msg = createTextBox('here there will be q_ans',frg_w/2,frg_h/2);
   msg.onclick = function(){

    ui.removeChild(msg);
    chapter2_3();
   }

}

function chapter2_3()
{
  /// this will have a game.
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);

  /////////////////////
   let msg = createTextBox('some game',frg_w/2,frg_h/2);
   msg.onclick = function(){

    ui.removeChild(msg);
    chapter2_4();
   }

}
function init() {
  welcome();
}

init();
