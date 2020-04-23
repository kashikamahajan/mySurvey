class Quiz
{
    constructor()
    {
        this.question=createElement('h3');
        this.yesButton=createButton("Yes");
        this.noButton=createButton("No");
        this.thankYou=createElement('image');
        
    }
    display(qn)
    {
        if(qn===1)
        {
            this.question.html("Question1. Are You well aquinted with Java or any other coding language ");
            this.question.position(displayWidth/2, displayHeight/15+300);
            this.noButton.position(displayWidth/2+50, displayHeight/15+450);
            this.yesButton.position(displayWidth/2+180, displayHeight/15+450);

            this.yesButton.mousePressed(()=>{
                question1Yes+=1;
                this.updateAnswerYes1();
                qn=2;
                this.goToQuestion2();      
              });

              this.noButton.mousePressed(()=>{
                question1No+=1;
                this.updateAnswerNo1();
                qn=2;
                this.goToQuestion2(); 
              });
              
        }
    }

    

    goToQuestion2()
    {
        this.question.html("Question2.  Do you think learing Java improves our logic building  skills in day to day to life?");
        this.question.position(displayWidth/2, displayHeight/15+300);
        this.noButton.position(displayWidth/2+50, displayHeight/15+450);
        this.yesButton.position(displayWidth/2+180, displayHeight/15+450);

        this.yesButton.mousePressed(()=>{
            question2Yes+=1;
            this.updateAnswerYes2();    
            this.goToQuestion3();                      
        });
       
        this.noButton.mousePressed(()=>{
             question2No+=1;
             this.updateAnswerNo2();
             this.goToQuestion3();
        });
    }

    goToQuestion3()
    {
        this.question.html("Question3. Should Java be made a part of the compuslsory curriculum in schools? ");
        this.question.position(displayWidth/2, displayHeight/15+300);
        this.noButton.position(displayWidth/2+50, displayHeight/15+450);
        this.yesButton.position(displayWidth/2+180, displayHeight/15+450);

        this.yesButton.mousePressed(()=>{
            question3Yes+=1;
            this.updateAnswerYes3(); 
            id=true; 
                                  
        });

        this.noButton.mousePressed(()=>{
             question3No+=1;
             this.updateAnswerNo3();
            id=true;
             
        });
    }
    

    updateAnswerYes1()
    {
        database.ref('/').update({
            Question1Yes: question1Yes
            
        });
    }
        updateAnswerNo1()
        {
            database.ref('/').update({
                Question1No: question1No
                
            });
        
    }


    updateAnswerYes2()
    {
        database.ref('/').update({
            Question2Yes: question2Yes
            
        });
    }
        updateAnswerNo2()
        {
            database.ref('/').update({
                Question2No: question2No
                
            });
        
    }


    updateAnswerYes3()
    {
        database.ref('/').update({
            Question3Yes: question3Yes
            
        });
    }
        updateAnswerNo3()
        {
            database.ref('/').update({
                Question3No: question3No
                
            });
        
    }

    


}
