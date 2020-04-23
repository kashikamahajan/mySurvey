class Form
{
    constructor()
    {
        this.nameInput=createInput('Enter Geek Name');
        this.button=createButton('Start Survey');
        this.greeting=createElement('h1');
        this.title=createElement('h2');

    }

    hide1(){
        
        this.button.hide();
        this.nameInput.hide();
        this.title.hide();
    }

    display()
    {
       
        this.title.html("Java Survey");
        this.title.position(displayWidth/2, displayHeight/15);

        this.nameInput.position(displayWidth/2, displayHeight/15+200);
        
        this.button.position(displayWidth/2, displayHeight/15+250);

        
        this.button.mousePressed(()=>{
            
            
            this.nameInput.hide();
            this.button.hide();
            name=this.nameInput.value();
            StudentNumber+=1;
            
            this.hide1();
            
            this.updateCount(StudentNumber);
            
            this.greeting.html("Hello " +name+" !!")
            this.greeting.position(displayWidth/2, displayHeight/15);
            
            quiz=new Quiz();
            quiz.display(qn);
            
          });

    }

    
      updateCount(count){
        database.ref('Student').set({
            StudentNumber: count
        });
      }
      
      
    
      
    

    
    
}