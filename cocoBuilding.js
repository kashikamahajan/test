class cocoBuilding
{
    
    constructor()
    {
       this.image=ci;
       this.Visibility=255;
       this.greetings=createElements(h2);
       
    }
    display()
    {
        background("black");
        

    }
    mousePressed()
    {
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        if(this.Visibility===0)
        inside();
    }
    inside()
    {
        this.greetings.html("Hello "+Player1.name);

    }
}
