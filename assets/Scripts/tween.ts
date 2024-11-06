const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    node1: cc.Node = null;
    @property(cc.Node)
    node2: cc.Node = null;
    @property(cc.Node)
    node3: cc.Node = null;
    @property(cc.Button)
    flipButton: cc.Button = null;

    // Properties to store original colors
    private originalColors = {
        node1: cc.Color.MAGENTA,
        node2: cc.Color.GREEN,
        node3: cc.Color.BLUE,
    };
    
    // Track the color state
    private isRed: boolean = false;

    onLoad() {
        // Set the original colors of the nodes
        this.node1.children[0].color = this.originalColors.node1;
        this.node2.children[0].color = this.originalColors.node2;
        this.node3.children[0].color = this.originalColors.node3;

        this.flipButton.node.on('click', this.flipAllNodes, this);
    }

    flipAllNodes() {
        // Define the flip and color change animation for each node
        const flipTween = (node: cc.Node, originalColor: cc.Color) => {
            return cc.tween(node)
                .to(0.2, { scaleX: 0 })  // Shrink horizontally to 0
                .call(() => {
                    node.scaleX = -node.scaleX;
                    // Toggle color based on isRed state
                    node.children[0].color = this.isRed ? originalColor : cc.Color.RED;
                })
                .to(0.2, { scaleX: 1 });  // Expand back to full size
        };

        // Run the flip and color change animation on each node with its respective original color
        flipTween(this.node1, this.originalColors.node1).start();
        flipTween(this.node2, this.originalColors.node2).start();
        flipTween(this.node3, this.originalColors.node3).start();

        // Toggle the color state for the next click
        this.isRed = !this.isRed;
    }
}
