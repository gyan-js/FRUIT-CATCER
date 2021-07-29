class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h3');
       this.reset = createButton('Reset');
       this.controls = createButton('')
       this.back = createButton('')
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.back.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        
        this.title.position(400, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.button.style('border-radius', '40px');
        this.reset.position(800, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'yellow');
        this.controls.position(1250, 660);
        this.controls.style('width', '100px');
        this.controls.style('height', '30px');
        this.controls.style('background', 'yellow');
        this.controls.style('border-radius', '80px');
        this.back.style('width', '100px');
        this.back.style('height', '30px');
        this.back.style('background', 'yellow');
        this.back.style('border-radius', '80px');
        this.back.hide();


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.controls.mousePressed(() =>{
            this.input.hide();
            this.button.hide();
            this.greeting.hide();
            this.title.hide();
            this.controls.hide();
            
        })

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            
        });

    }
}