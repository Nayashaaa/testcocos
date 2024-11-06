const { ccclass, property } = cc._decorator;

@ccclass
export default class ColumnFitter extends cc.Component {

    @property(cc.Node)
    columnNode: cc.Node = null; // Reference to the column node

    @property
    columnHeight: number = 700; // Set column height here or in the editor

    @property(cc.Sprite)
    sprite: cc.Sprite = null; // Reference to the sprite node

    @property(cc.Texture2D)
    sprite2: cc.Texture2D = null; // Reference to the sprite node

    @property({type: cc.Node , tooltip: "Reference to the node"})
    playerNode: cc.Node = null; // Reference to the node

    timeElapsed: number = 0;

    @property(Number)
    resetTime : number = 20;

    init() {
        this.columnHeight = this.columnNode.height;
    }

    protected onLoad(): void {
        this.init();
    }


    start() {

        

        let scaleInOut = cc.tween(this.playerNode).to(2, { scale: 5 } ).to(1, { scale: 1 }).call( () => {scaleInOut.start()});

        scaleInOut.start();

        console.log( cc.misc.lerp(0, 100, 0.5) );
        



        // Prompt the user for input between 1 and 5
        let userInput = parseInt(prompt("Enter a number of sprites between 1 and 5") || "1", 10);

        // Clamp user input to the range of 1 to 5
        userInput = Math.max(1, Math.min(userInput, 10));

        // Call method to create and position sprites
        this.createSprites(userInput);
    }

    createSprites(count: number) {

        // Remove any existing children in the column node
        this.columnNode.removeAllChildren();

        // Calculate height for each sprite to fit perfectly
        const spriteHeight = this.columnHeight / count;
        console.log(spriteHeight);

        // Define a set of colors for the sprites
        const colors = [
            cc.Color.RED,
            cc.Color.GREEN,
            cc.Color.BLUE,
            cc.Color.YELLOW,
            cc.Color.MAGENTA
        ];

        

        for (let i = 0; i < count; i++) {
            // Create a new node for each sprite
            const spriteNode = new cc.Node(`Sprite${i + 1}`);


            const sprite = spriteNode.addComponent(cc.Sprite);
            sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            sprite.spriteFrame = new cc.SpriteFrame(this.sprite2);

            // Set the sprite node's size
            spriteNode.width = this.columnNode.width;
            spriteNode.height = spriteHeight;

            // Assign a color to the sprite
            spriteNode.color = colors[i % colors.length];

            // Calculate and set the y position for each sprite
            spriteNode.setPosition(0, (this.columnHeight / 2) - (spriteHeight / 2) - (i * spriteHeight));

            // Add sprite node to the column node
            this.columnNode.addChild(spriteNode);

            
        }
    }


    protected update(dt: number): void {

        this.timeElapsed += dt;
        console.log("Elapsed time: " + this.timeElapsed);

        if (this.timeElapsed > this.resetTime) 
        {
            this.timeElapsed = 0;
        }


        if(this.timeElapsed <= this.resetTime)
        {
            let ratio = this.timeElapsed / this.resetTime;
            cc.log(cc.misc.lerp(0, 100, ratio));
        }

    }
}
