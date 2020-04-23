var database;
var form;
var StudentNumber=0;
var name;
var quiz;
var qn=1;

var id=false;

var question1Yes;
var question1No;

var question2Yes;
var question2No;

var question3Yes;
var question3No;
var ty;


function preload()
{
  bg=loadImage("bg.jpg");
  ty=loadImage("ty.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  database=firebase.database();
  
  


  var playerCountRef = database.ref('Student/StudentNumber');
  playerCountRef.on('value',(data)=>{
    StudentNumber= data.val();
  })
{//1
  var q1Refy = database.ref('Question1Yes');
  q1Refy.on('value',(data)=>{
    question1Yes= data.val();
  })
  var q1Refn = database.ref('Question1No');
  q1Refn.on('value',(data)=>{
    question1No= data.val();
  })
}

{//2
  var q2Refy = database.ref('Question2Yes');
  q2Refy.on('value',(data)=>{
    question2Yes= data.val();
  })
  var q2Refn = database.ref('Question2No');
  q2Refn.on('value',(data)=>{
    question2No= data.val();
  
  })
}

{//3
  var q3Refy = database.ref('Question3Yes');
  q3Refy.on('value',(data)=>{
    question3Yes= data.val();
  })
  var q3Refn = database.ref('Question3No');
  q3Refn.on('value',(data)=>{
    question3No= data.val();
  })
}


  

  form=new Form();
  
}

function draw() {
  background(bg);  
  form.display();

  if(id===true)
  {
    form.greeting.hide();
    quiz.question.hide();
    quiz.yesButton.hide();
    quiz.noButton.hide();
    image(ty,displayWidth/2,displayHeight/4,displayWidth/3,displayHeight/3)
  }
}

 
