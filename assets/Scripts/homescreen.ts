const { ccclass, property } = cc._decorator;

@ccclass
export default class HomeScreen extends cc.Component {
    @property(cc.Button)
    playButton: cc.Button = null;

    @property(cc.Button)
    exitButton: cc.Button = null;

    @property(cc.Node)
    loadingScreen: cc.Node = null;

    @property(cc.Node)
    loadNode: cc.Node = null;

    onLoad() {
        this.loadingScreen.active = false; 
        cc.resources.load("carr", cc.SpriteFrame, (err, spriteFrame: cc.SpriteFrame) => {
            if (err) {
                cc.error(err);
            } else {
                this.playButton.getComponentInChildren(cc.Sprite).spriteFrame = spriteFrame;
            }
        });
        this.playButton.node.on('click', this.onPlayButtonClicked, this);
        this.exitButton.node.on('click', this.onExitButtonClicked, this);
        
    }

    onPlayButtonClicked() {
        this.showLoadingScreen();
        this.hideHomeScreen();
        this.loadNode.anchorX = 0;
        this.scaleNode();
        this.scheduleOnce(() => {
            cc.director.loadScene("stopwatch"); 
        }, 2); 
    }

    onExitButtonClicked() {
        cc.game.end(); 
    }

    public showLoadingScreen() {
        this.loadingScreen.active = true; 
    }

    hideHomeScreen() {
        this.playButton.destroy();
        this.exitButton.destroy();
    }

    scaleNode(){
        const targetScaleX = 25;

        cc.tween(this.loadNode)
            .to(2, { scaleX: targetScaleX })
            .start();
    }
    
}
