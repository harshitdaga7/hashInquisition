/// fetching questions objects from database

var q = [0]; /// storing q ans objects
url = 'http://127.0.0.1:8000/data/';
var q1;

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  		
  		console.log(data);

  		for(var i = 1;i<=21;i++)
  		{
  		  	let temp = data[i];
  		  	let obj = new quesAns(temp.question,temp.options,temp.ans);
  		  	q.push(obj);
  		}

  		q1 = q[1];

  		console.log(q);
})
.catch(function(error) {
  console.log(error);
});
