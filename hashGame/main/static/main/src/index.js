/// testing update
/*function chapter1_1() {
  /// removing precious element

  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);
  var bookbckground = new Image();
  bookbckground.src = "/static/main/src/images/bookbackground.jpg";
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
}*/
/*function chapter1_2() {
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);

  ///////////////////////
  var court = new Image();
  court.src = "/static/main/src/images/court.jpg";

  var player = new Image();
  player.src = "/static/main/src/images/player.png";

  var inq = new Image();
  inq.src = "/static/main/src/images/inq1.png";

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


}*/
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
  img1.src = "/static/main/src/images/village.jpg";

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
  inq1.src = "/static/main/src/images/inq1.png";
  inq1.addEventListener(
    "load",
    function () {
      // execute drawImage statements here
      frg.drawImage(inq1, 5, 480 - 200);
      var msg1 = createTextBox(
        "Where is that little hash illetrate?",
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
  player.src = "/static/main/src/images/player.png";
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
  bookbckground.src = "/static/main/src/images/bookbackground.jpg";
  bookbckground.onload = function () {
    frg.drawImage(bookbckground, 0, 0);
  };
  let booktext = `Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data..


Hashing is a technique to convert a range of key values into a range of indexes of an array.
Chaining:The idea is to make each cell of hash table point to a linked list of records that have same hash function value. Chaining is simple, but requires additional memory outside the table.
Open Addressing: In open addressing, all elements are stored in the hash table itself. Each table entry contains either a record or NIL. When searching for an element, we one by one examine table slots until the desired element is found or it is clear that the element is not in the table.`;
  let book = createBook(booktext);

  let btn = document.createElement("BUTTON");
  ui.appendChild(btn);
  btn.innerHTML = "Next";
  btn.style.fontSize = 25 + "px";
  btn.style.borderColor = "red";
  btn.style.position = "absolute";
  btn.style.left = 265 + "px";
  btn.style.top = 450 + "px";
  btn.style.backgroundColor = "red";

  btn.onclick = function () {
    bookbckground = null;
    ui.removeChild(book);
    ui.removeChild(btn);
    chapter1_11();
  };
}

function chapter1_11()
{
    /// removing precious element
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);
  var bookbckground = new Image();
  bookbckground.src = "/static/main/src/images/bookbackground.jpg";
  bookbckground.onload = function () {
    frg.drawImage(bookbckground, 0, 0);
  };
  let booktext = 
  `
  Separate Chaining:  
The idea is to make each cell of hash table point to a linked list of records that have same hash function value.
  Linear Probing :   
As we can see, it may happen that the hashing technique is used to create an already used index of the array. In such a case, we can search the next empty location in the array by looking into the next cell until we find an empty cell. This technique is called linear probing

Open Addressing 
Like separate chaining, open addressing is a method for handling collisions. In Open Addressing, all elements are stored in the hash table itself. So at any point, the size of the table must be greater than or equal to the total number of keys. 
`;
  let book = createBook(booktext);

  let btn = document.createElement("BUTTON");
  ui.appendChild(btn);
  btn.innerHTML = "Next";
  btn.style.fontSize = 25 + "px";
  btn.style.borderColor = "red";
  btn.style.position = "absolute";
  btn.style.left = 265 + "px";
  btn.style.top = 450 + "px";
  btn.style.backgroundColor = "red";

  btn.onclick = function () {
    bookbckground = null;
    ui.removeChild(book);
    ui.removeChild(btn);
    chapter1_12();
  };
}

function chapter1_12()
{
    /// removing precious element
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);
  var bookbckground = new Image();
  bookbckground.src = "/static/main/src/images/bookbackground.jpg";
  bookbckground.onload = function () {
    frg.drawImage(bookbckground, 0, 0);
  };
  let booktext = 
  `Double hashing is a collision resolving technique in Open Addressed Hash tables. Double hashing uses the idea of applying a second hash function to key when a collision occurs.
  
  Complexity and Load Factor
So, on an average, if there are n entries and b is the size of the array there would be n/b entries on each index. This value n/b is called the load factor that represents the load that is there on our map.
Rehashing:
As the name suggests, rehashing means hashing again. Basically, when the load factor increases to more than its pre-defined value (default value of load factor is 0.75), the complexity increases. So to overcome this, the size of the array is increased (doubled) and all the values are hashed again and stored in the new double sized array to maintain a low load factor and low complexity.
  `;
  let book = createBook(booktext);

  let btn = document.createElement("BUTTON");
  ui.appendChild(btn);
  btn.innerHTML = "Next";
  btn.style.fontSize = 25 + "px";
  btn.style.borderColor = "red";
  btn.style.position = "absolute";
  btn.style.left = 265 + "px";
  btn.style.top = 450 + "px";
  btn.style.backgroundColor = "red";

  btn.onclick = function () {
    bookbckground = null;
    ui.removeChild(book);
    ui.removeChild(btn);
    chapter1_2(1);
  };
}


function chapter1_2(n) {

  /// making questions and an
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);

  ///////////////////////
  var court = new Image();
  court.src = "/static/main/src/images/court.jpg";

  var player = new Image();
  player.src = "/static/main/src/images/player.png";

  var inq = new Image();
  inq.src = "/static/main/src/images/inq1.png";

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

 let qOBJ = createQuiz(q[n],300,10,300,230);

 qOBJ[2].onclick = function(){


    let isAns = false;
    let ans = document.getElementsByName('q_ans');
    let ans_key;

    for(let i = 0;i<ans.length;i++)
    {
      if(ans[i].checked)
      {
        isAns = true;
        ans_key = i+1;
      }
    }

    console.log(n,ans_key);

    if(isAns){

        if(q[n].checkAns(ans_key) == true)
        {
           console.log('next Quiz');
           /// remove the objects.
           ui.removeChild(qOBJ[0]);
           ui.removeChild(qOBJ[1]);

           if(n >= 2)
            {
              chapter2_3();
            }
          else
            {
              chapter1_2(n+1);
            }
        }
        //else
        //{
           /// remove the objects.
          // ui.removeChild(qOBJ[0]);
           //ui.removeChild(qOBJ[1]);
          //gameEnd();
        //}

    }
    else{
      alert("Please ans");
    }


 }


}
/*
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
  bookbckground.src = "/static/main/src/images/bookbackground.jpg";
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

}*/

function chapter2_3()
{
  /// this will have a game.
     /// removing precious element
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);
  var bookbckground = new Image();
  bookbckground.src = "/static/main/src/images/bookbackground.jpg";
  bookbckground.onload = function () {
    frg.drawImage(bookbckground, 0, 0);
  };
  let booktext = `

  You will have to make the yellow region black,using hash function and chaining principles`;
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
    chapter2_4();
  };
}
function init() {
  welcome();
}

init();
