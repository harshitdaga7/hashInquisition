/// some utilitiy function 
class quesAns {
  constructor(ques, option_array, key) {
    this.question = ques;
    this.option = option_array;
    this.key = key;
  }

  getQuestion() {
    return this.question;
  }

  getOption() {
    return this.option;
  }

  checkAns(option_no) {
    if (option_no === this.key) return true;
    else return false;
  }
}

var q1 = new quesAns(
  "What is hash function?",
  [
    "a function which transforms a given key to some value.",
    "a matrix transformation",
    "a library in c++"
  ],
  0
);

function gameEnd() {
  let msg = createTextBox("GAME END", frg_w / 2, frg_h / 2);

  msg.onclick = function () {
    ui.removeChild(msg);
    while(ui.firstChild)
    {
      ui.firstChild.remove();
    }
    welcome();
  };
}

function createQuiz(qObject, qx, qy, ax, ay) {
  // ques ans objetc,qx,qy poistio of question and ax,ay position of answer

  let ques = createTextBox(qObject.getQuestion(), qx, qy);
  let op = createOptionbox(qObject.getOption(),ax,ay);

  let sbmt = document.getElementById('submt');

  return [ques,op,sbmt];
}

function createOptionbox(optionArray, x, y) {
  
  //let op = document.createElement()

  let optionStyle = `
      max-width:300px;
      max-height: 400px;
      overflow-x: auto;
      overflow-y: auto;
      display: inline-block;
      border: 2px solid black;
      padding: 8px;
      font-size: 20px; 
      background-color: white;
      border-radius: 10%;`;

  let optionHTML = "";

  for(let i = 0;i<optionArray.length;i++)
  {
    let temp = '<input id = "' + i + '" type = "radio" name = "q_ans" value = "' + i + '">'
    let lbl = '<label for = "' + i + '">' + optionArray[i] + '</label> <br>'
    optionHTML += (temp + lbl);
  }

  optionHTML += '<hr><input id = "submt" type = "submit" style = "  width:100%; font-size: inherit; background-color:red; color: white; border-radius: 10%;"value = "submit">'

  let op = document.createElement('div');
  ui.appendChild(op);
  op.id = 'op';
  op.innerHTML = optionHTML;
  op.style = optionStyle;
  op.left = x + "px";
  op.top = y + "px";

  return op;

}

function createTextBox(stringMessage, x, y) {
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
}
/*welcome*/
function welcome() {
  /// clear the previous

  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);

  /// setting up the welcome screen.
  frg.font = "60px serif";
  frg.textAlign = "center";
  frg.textBaseline = "middle";
  frg.fillText("Welcome", frg_w / 2, frg_h / 2);

  /// draw the btn.
  let btn = document.createElement("BUTTON");
  ui.appendChild(btn);
  btn.innerHTML = "Continue";
  btn.style.fontSize = 30 + "px";
  btn.style.borderColor = "red";
  btn.style.borderRadius = 2 + "cm";
  btn.style.position = "absolute";
  btn.style.left = 265 + "px";
  btn.style.top = 350 + "px";
  btn.style.backgroundColor = "red";

  //// add event listener
  btn.addEventListener("click", chapter1);
  btn.myParam = btn; /// add button param
}

function createBook(bookContent) {
  let booktxt = document.createElement("div");
  ui.appendChild(booktxt);
  booktxt.innerHTML = bookContent;

  booktxt.style.position = "absolute";
  //booktxt.style.border = "2px solid black";
  booktxt.style.left = 7 + "px";
  booktxt.style.top = 7 + "px";
  booktxt.style.width = 600 + "px";
  booktxt.style.height = 440 + "px";
  booktxt.style.display = "inline-block";
  booktxt.style.textAlign = "justify";
  booktxt.style.padding = 30 + "px";
  booktxt.style.borderRadius = 10 + "%";
  booktxt.style.backgroundImage = "bookbackground.jpg";
  booktxt.style.fontSize = 20 + "px";

  return booktxt;
}