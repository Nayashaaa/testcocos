"use strict";
cc._RF.push(module, '8aa334u5sBK35T/PFzAh84R', 'timer');
// Scripts/timer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeLabel = null;
        _this.toggleButton = null;
        _this.eixtButton = null;
        _this.buttonLabel = null;
        _this.loadingScreen = null;
        _this.loadNode = null;
        _this.isRunning = false;
        _this.elapsedTime = 0;
        _this.intervalId = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.updateTimeLabel();
        this.updateButtonLabel();
        this.toggleButton.node.on('click', this.toggleTimer, this);
        this.eixtButton.node.on('click', this.exitGame, this);
    };
    NewClass.prototype.toggleTimer = function () {
        if (this.isRunning) {
            this.stopTimer();
        }
        else {
            this.startTimer();
        }
        this.updateButtonLabel(); // Update button label based on state
    };
    NewClass.prototype.startTimer = function () {
        var _this = this;
        this.isRunning = true;
        this.intervalId = setInterval(function () {
            _this.elapsedTime += 0.1;
            _this.updateTimeLabel();
        }, 100); // Update every 0.1 second
    };
    NewClass.prototype.stopTimer = function () {
        this.isRunning = false;
        clearInterval(this.intervalId);
        this.intervalId = null;
    };
    NewClass.prototype.updateTimeLabel = function () {
        this.timeLabel.string = this.elapsedTime.toFixed(1) + "s";
    };
    NewClass.prototype.updateButtonLabel = function () {
        this.buttonLabel.string = this.isRunning ? "Stop" : "Start";
    };
    NewClass.prototype.showLoadingScreen = function () {
        this.loadingScreen.active = true;
    };
    NewClass.prototype.exitGame = function () {
        this.showLoadingScreen();
        this.loadNode.anchorX = 0;
        this.scaleNode();
        this.scheduleOnce(function () {
            cc.director.loadScene("HomeScene"); // Load the Stopwatch scene
        }, 2);
    };
    NewClass.prototype.scaleNode = function () {
        var targetScaleX = 25;
        cc.tween(this.loadNode)
            .to(2, { scaleX: targetScaleX })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "timeLabel", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "toggleButton", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "eixtButton", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "buttonLabel", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "loadingScreen", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "loadNode", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();