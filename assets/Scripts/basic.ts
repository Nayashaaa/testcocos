const { ccclass, property } = cc._decorator;

@ccclass
export default class Basic extends cc.Component {

    @property([cc.Node])
    rows: cc.Node[] = [];

    private intervalId: number | null = null; 
    private isAnimating: boolean = false; 

    start() {
        const button = this.node.getChildByName("Button");
        if (button) {
            const buttonComponent = button.getComponent(cc.Button);
            if (buttonComponent) {
                buttonComponent.node.on('click', this.onButtonClicked, this);
            }
        }
    }

    onButtonClicked() {
        if (this.isAnimating) {
            this.stopPositionUpdates(); 
        } else {
            this.startPositionUpdates(); 
        }
    }

    startPositionUpdates() {
        this.isAnimating = true; 

        this.intervalId = setInterval(() => {
            // Get the texts of each node
            const texts = this.rows.map(row => row.getChildByName("Text").getComponent(cc.RichText).string);
console.log("fuh");
            // Shift the texts to create the spinning effect
            const firstText = texts[0];
            for (let i = 0; i < texts.length - 1; i++) {
                texts[i] = texts[i + 1]; // Shift texts to the left
            }
            texts[texts.length - 1] = firstText; // Set the last text to the original first text

            // Update the text labels in each node
            for (let i = 0; i < this.rows.length; i++) {
                const textNode = this.rows[i].getChildByName("Text").getComponent(cc.Label);
                textNode.string = texts[i];
            }
        }, 100); 
    }

    stopPositionUpdates() {
        this.isAnimating = false; 
        if (this.intervalId) {
            clearInterval(this.intervalId); 
            this.intervalId = null; 
        }
    }
}
