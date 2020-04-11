class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
          player = new Player();
         
          form = new Form()
          form.display();
          
          if(gameState===1)
          {
            cb=new cocoBuilding();
            cb.display();
          }
        }
      }

    play(){
        form.hide();
   
}
}
    
           
    
    
  