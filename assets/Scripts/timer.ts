
const {ccclass, property} = cc._decorator;
import HomeScreen from "./homescreen";
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    timeLabel: cc.Label = null;

    @property(cc.Button)
    toggleButton: cc.Button = null;

    @property(cc.Button)
    eixtButton: cc.Button = null;

    @property(cc.Label)
    buttonLabel: cc.Label = null;

    @property(cc.Node)
    loadingScreen: cc.Node = null;

    @property(cc.Node)
    loadNode: cc.Node = null;


    private isRunning: boolean = false;
    private elapsedTime: number = 0;
    private intervalId: number = null;

    onLoad() {
        this.updateTimeLabel();
        this.updateButtonLabel();
        this.toggleButton.node.on('click', this.toggleTimer, this);
        this.eixtButton.node.on('click', this.exitGame, this);
    }

    toggleTimer() {
        if (this.isRunning) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
        this.updateButtonLabel(); // Update button label based on state
    }

    startTimer() {
        this.isRunning = true;
        this.intervalId = setInterval(() => {
            this.elapsedTime += 0.1;
            this.updateTimeLabel();
        }, 100); // Update every 0.1 second
    }

    stopTimer() {
        this.isRunning = false;
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    updateTimeLabel() {
        this.timeLabel.string = this.elapsedTime.toFixed(1) + "s";
    }

    updateButtonLabel() {
        this.buttonLabel.string = this.isRunning ? "Stop" : "Start";
    }
    public showLoadingScreen() {
        this.loadingScreen.active = true; 
    }

    exitGame() {
        this.showLoadingScreen();
        this.loadNode.anchorX = 0;
        this.scaleNode();
        this.scheduleOnce(() => {
            cc.director.loadScene("HomeScene"); // Load the Stopwatch scene
        }, 2);

    }

    scaleNode(){
        const targetScaleX = 25;

        cc.tween(this.loadNode)
            .to(2, { scaleX: targetScaleX })
            .start();
    }
  
}
