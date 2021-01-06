class Form {
    constructor(){}
    
    display(){
        var title = createElement('h2');
        title.html("Vroom Screeeeeeech")
        //title.html("Vroom Screeeeeeech Thud Thud Thud Ka-BOOM")
        title.position(130,100);
        
        var input = createInput("NAME")
        var button = createButton('play')
        var greeting = createElement('h3');

        input.position(130,160)
        button.position(150,200);

        button.mousePressed(function(){
            input.hide()
            button.hide()
            
            var name = input.value()
            
            playerCount+=1;
            player.update(name)
            player.updateCount(playerCount)

            greeting.html("Hello "+name)//+"! If you win, you get ABSOLUTELY NOTHING! YAY!")
            greeting.position(130,160);
        })
    }
}