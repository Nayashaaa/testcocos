const { ccclass, property } = cc._decorator;

type Trios = {
    grand: Array<string>;
    mini: Array<string>;
    maxi: Array<string>;
    minor: Array<string>;
    major: Array<string>;
};

@ccclass
export default class NewClass extends cc.Component {
    @property([cc.Node])
    nodes: cc.Node[] = [];

    @property([cc.Sprite])
    sprites: cc.Sprite[] = [];

    @property(cc.Node)
    winText: cc.Node = null;

    @property(cc.Button)
    resetButton: cc.Button = null;

    private isTappedMap = new Map<cc.Node, boolean>();

    private elements: string[] = ["grand", "mini", "maxi", "major", "minor"];

    private trios: Trios = {
        grand: [],
        mini: [],
        maxi: [],
        minor: [],
        major: []
    };

    private tapCount = 0;

    private originalSpriteFrames: cc.SpriteFrame[] = []; 
    private gameOver: boolean = false;

    onLoad() {
        this.nodes.forEach((node, index) => {
            this.initializeNode(node);
            if (this.sprites[index]) {
                this.originalSpriteFrames[index] = this.sprites[index].spriteFrame; 
            }
        });

        if (this.resetButton) {
            this.resetButton.node.on('click', this.resetNodes, this);
        }
    }

    initializeNode(node: cc.Node) {
        if (node) {
            this.isTappedMap.set(node, false);

            node.on(
                cc.Node.EventType.TOUCH_END,
                () => {
                    if(!this.gameOver) {
                        this.addToPair(node);
                    }
                },
                this
            );
        }
    }

    addToPair(node: cc.Node) {
        const isTapped = this.isTappedMap.get(node) ?? false;
        if (isTapped) {
            return;
        }
    
        this.refillElements();
    
        const element = this.elements.shift(); // Remove and get the first element
        if (element !== undefined) {
            const spriteIndex = this.nodes.indexOf(node);
            if (spriteIndex >= 0 && this.sprites[spriteIndex]) {
                cc.resources.load(element, cc.SpriteFrame, (err, spriteFrame) => {
                    if (!err && spriteFrame) {
                        // Update the sprite frame
                        this.sprites[spriteIndex].spriteFrame = spriteFrame as cc.SpriteFrame;
                        console.log(`Sprite for node ${spriteIndex} updated to ${element}.`);
    
                        // Add the element to its corresponding array
                        this.trios[element as keyof Trios].push(element);
                        console.log(`Added ${element} to ${element} array:`, this.trios[element as keyof Trios]);
    
                        // Check if the array's length has reached 3
                        if (this.trios[element as keyof Trios].length === 3) {
                            console.log(`${element} array has 3 elements, checking for a win.`);
                            this.isWinning(); // Call isWinning here, after sprite update
                        }
                    } else {
                        console.error(`Failed to load sprite for ${element}:`, err);
                    }
                });
            }
        } else {
            console.error("Unexpected error: Element is undefined.");
        }
    
        this.isTappedMap.set(node, true);
        this.tapCount++;
    }
    
    

    resetNodes() {
        this.nodes.forEach((node, index) => {
            if (node) {
                this.isTappedMap.set(node, false);
                const sprite = this.sprites[index];
                if (sprite) {
                    sprite.spriteFrame = this.originalSpriteFrames[index] || null; // Reset to original sprite
                }
            }
        });

        // Reset trios and elements
        this.trios = { grand: [], mini: [], maxi: [], minor: [], major: [] };
        this.elements = ["grand", "mini", "maxi", "major", "minor"];
        this.shuffleArray(this.elements);
        this.tapCount = 0;
        this.gameOver = false;

        this.winText.active = false;

        console.log("Nodes and arrays have been reset.");
    }

    isWinning() {
        // Filter the indices of tapped nodes
        const tappedIndices = this.nodes
            .map((node, index) => (this.isTappedMap.get(node) ? index : -1))
            .filter(index => index >= 0);
    
        // Check for winning combinations only among tapped indices
        for (let i = 0; i < tappedIndices.length - 2; i++) {
            for (let j = i + 1; j < tappedIndices.length - 1; j++) {
                for (let k = j + 1; k < tappedIndices.length; k++) {
                    const sprite1 = this.sprites[tappedIndices[i]]?.spriteFrame?.name;
                    const sprite2 = this.sprites[tappedIndices[j]]?.spriteFrame?.name;
                    const sprite3 = this.sprites[tappedIndices[k]]?.spriteFrame?.name;
    
                    if (sprite1 && sprite2 && sprite3 && sprite1 === sprite2 && sprite2 === sprite3) {
                        this.gameOver = true;
                        this.winText.active = true;
                        console.log("Winning condition met:", sprite1, sprite2, sprite3);
                        return;
                    }
                }
            }
        }
        
    
        console.log("No winning condition found.");
    }
    
    shuffleArray(array: string[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    refillElements() {
        if (this.elements.length === 0) {
            this.elements = ["grand", "mini", "maxi", "major", "minor"];
            this.shuffleArray(this.elements);
            console.log("Elements reshuffled:", this.elements);
        }
    }
    
}
