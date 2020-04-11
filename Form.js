class Form
{
    constructor()
    {
     this.email=createInput("Email ID");
     this.name=createInput("Name");
     this.password=createInput("Password");
     this.button=createButton("play");
     
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
    display()
    {
     var title=createElement('h2');
     title.html("COCO for Coders");
     title.position(200,100);
     this.email.position(200,200);
     this.name.position(200,250);
     this.button.position(200,350);
     this.password.position(200,300)


     this.button.mousePressed(()=>{
       this.name.hide();
      this.email.hide();
      this.button.hide();
      this.password.hide();
      this.button.hide();
      this.title.hide();
     name=this.name.value();
     email=this.email.value();
     password=this.password.value();
      
      this.update(name);
      
      gameState=1;
      

     });


    }
     
     update(name){
      
      database.ref("Player").set({
        name:name,
        
      });
    }
    


}