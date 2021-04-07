
/*GAME ON HASHING AND MEMORY
MAKE THE YELLOW REGION BLACK*/
var values = [0,1,2,9,21,22,10,20,40,8,3,2]
var maxTableSize = [4,3,1]
var table_size = 4; /// STORES TABLE SIZE
var _table_ = []; /// THE ACTUAL TABLE

function intializeBall()
{
	var sx = 15;
	var sy = 15;
	//var values = [0,1,2,11,21,22,10,20,40];
	var divObj = [];
	for(let i = 0;i<10;i++)
	{
		let obj = document.createElement('div');
		ui.appendChild(obj);
		obj.id = "bl" + values[i];
		obj.innerHTML = `
			<div id = "bl${values[i]}header" style = "cursor: move; height: 80px;width:80px;">
		        <img src="src/images/ball.png" id = "B${values[i]}" style = "position: absolute;">
		        <span id = "T${values[i]}" style = "position:relative; color:white;">${values[i]}</span>
		     </div> `;

		obj.style = `  
		position: absolute;
  		height: 80px;
  		width:80px;
  		z-index: 9;`;
		divObj.push(obj);
	}

	/// setting position for balls and text
	for(let i = 0;i<10;i++)
	{
		//let b_id = 'B' + values[i];
		let t_id = 'T' + values[i];

		//let b_obj = document.getElementById(b_id);
		let t_obj = document.getElementById(t_id);

		//b_obj.style.left = sx + "px";
		//b_obj.style.top = sy + "px";
		t_obj.style.left = 40 + 'px';
		t_obj.style.top = 40 + 'px';
		divObj[i].style.left = sx + "px";
		divObj[i].style.top = sy + "px";

		if(sx + 80 >= 240)
		{
			sy = sy + 80;
			sx = 15;
		}
		else
		{
			sx = sx + 80;
		}

	}

	console.log(divObj);
	return divObj;
}

function makeKey()
{
	/// row size;
	var offsetX = 4;
	var offsetY = 1;
	var row_size = [4,3,1];

	frg.fillStyle = "#ffff66";
	for(let i = 0;i<row_size.length;i++)
	{
		var x = offsetX;
		var y = i + offsetY;
    frg.fillStyle = "#ffff66";
		frg.fillRect(x*80,y*80,row_size[i]*80,80);
    frg.fillStyle = "black";
    frg.fillText(i + '',(x-1)*80 + 40,y*80 + 40);
	}

  
}

function clearTable(){

  _table_ = [];
  for(i = 0;i<table_size;i++)
  {
     _table_.push([]);
  }
  console.table(_table_)
}
function makeBucket()
{
	var x = 0;
	var y = 320;

	var bucket = new Image();
	bucket.src = "src/images/Inkedbucket.jpg";

	bucket.onload = function()
	{
	
		frg.drawImage(bucket,x,y);
	}
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    //document.getElementById('B1')
    //console.log(elmnt.id);
    //console.log(document.getElementById('B1').style.left);
    var id = elmnt.id;
    var id_no = parseInt(id.slice(2));
    //console.log(id_no);
   	//var ball_node = document.getElementById("B" + id_no);
   	//var txt_node = document.getElementById("T" + id_no);
   	var posx = elmnt.style.left;
   	var posy = elmnt.style.top;
   	var x = parseInt(posx.slice(0,posx.length - 2));
   	var y = parseInt(posy.slice(0,posy.length - 2));
   	//console.log(x,y);

   	if(x <= 240 + 15 && x >= 15 && y <= 495  && y >= 335)
   	{
   		/// inside the region
   		document.onmouseup = null;
    	document.onmousemove = null;
   		hashGame(id_no);
   		ui.removeChild(elmnt);

   	}
   	else{
    document.onmouseup = null;
    document.onmousemove = null;
	}
  }
}

function hash(val){

	if(val>= 0)
   {
    return val%table_size;
   }
   else
   {
     return table_size - (-val)%table_size;
   }

}

function addValuetoTable(key,val)
{
  _table_[key].push(val)
  console.table(_table_)
}

function hashGame(id_no){

	console.log(id_no);

	let key = hash(id_no);

	addValuetoTable(key,id_no);
  colorTable();

}

function colorTable()
{
   /// makes the color table black


   /// checking if violating the conditions
   var check = true;
   var isGood = true;
   var offsetX = 4;
   var offsetY = 1;
   for(var i = 0;i<3;i++)
   {
      if(_table_[i].length > maxTableSize[i])
      {
          check = false;
      }


      if(_table_[i].length != maxTableSize[i])
      {
          isGood = false;
      }
   }

  if(isGood == true)
  {
      console.log('nextChapter')
      for(var i = 0;i<3;i++)
      {
          var sizeTemp = _table_[i].length;
          var x = offsetX;
          var y = i + offsetY;
          if(sizeTemp > 0)
          {
              for(var j = 0;j<sizeTemp;j++)
              {
                  frg.fillStyle = 'black';
                  frg.fillRect((j+x)*80,y*80,80,80);
              }
          }   
      }

  }
  else if(check == true)
   {
      console.log(100)
      for(var i = 0;i<3;i++)
      {
          var sizeTemp = _table_[i].length;
          var x = offsetX;
          var y = i + offsetY;
          if(sizeTemp > 0)
          {
              for(var j = 0;j<sizeTemp;j++)
              {
                  frg.fillStyle = 'black';
                  frg.fillRect((j+x)*80,y*80,80,80);
              }
          }   
      }
   }
   else
   {
    gameEnd();
   }
}

function chapter2_4()
{
   /// 
  frg.clearRect(0, 0, 640, 480);
  bck.clearRect(0, 0, bck_w, bck_h);

  ///

  var grid = new Image();
  grid.src = "src/images/grid.png";

  grid.onload = function(){
  	bck.drawImage(grid,15,15);
  }

  //////

  /*var ball = new Image();
  ball.src = "src/ball.png";

  ball.onload = function(){
  	frg.drawImage(ball,0,0);
  }*/

  var divobj = intializeBall();
  makeKey();
  makeBucket();

  dragElement(document.getElementById("bl0"));
  dragElement(document.getElementById("bl1"));
  dragElement(document.getElementById("bl2"));
  dragElement(document.getElementById("bl9"));
  dragElement(document.getElementById("bl21"));
  dragElement(document.getElementById("bl22"));
  dragElement(document.getElementById("bl10"));
  dragElement(document.getElementById("bl20"));
  dragElement(document.getElementById("bl40"));
  dragElement(document.getElementById("bl8"));
  //dragElement(document.getElementById("bl3"));
  //ragElement(document.getElementById("bl2"));
  clearTable();  

}