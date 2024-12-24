"use strict";
cc._RF.push(module, '350eeKbPBRK54QsYs9+5SC6', 'homescreen');
// Scripts/homescreen.ts

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
var HomeScreen = /** @class */ (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playButton = null;
        _this.exitButton = null;
        _this.loadingScreen = null;
        _this.loadNode = null;
        return _this;
    }
    HomeScreen.prototype.onLoad = function () {
        var _this = this;
        this.loadingScreen.active = false;
        cc.resources.load("carr", cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err);
            }
            else {
                _this.playButton.getComponentInChildren(cc.Sprite).spriteFrame = spriteFrame;
            }
        });
        this.playButton.node.on('click', this.onPlayButtonClicked, this);
        this.exitButton.node.on('click', this.onExitButtonClicked, this);
    };
    HomeScreen.prototype.onPlayButtonClicked = function () {
        this.showLoadingScreen();
        this.hideHomeScreen();
        this.loadNode.anchorX = 0;
        this.scaleNode();
        this.scheduleOnce(function () {
            cc.director.loadScene("stopwatch");
        }, 2);
    };
    HomeScreen.prototype.onExitButtonClicked = function () {
        cc.game.end();
    };
    HomeScreen.prototype.showLoadingScreen = function () {
        this.loadingScreen.active = true;
    };
    HomeScreen.prototype.hideHomeScreen = function () {
        this.playButton.destroy();
        this.exitButton.destroy();
    };
    HomeScreen.prototype.scaleNode = function () {
        var targetScaleX = 25;
        cc.tween(this.loadNode)
            .to(2, { scaleX: targetScaleX })
            .start();
    };
    __decorate([
        property(cc.Button)
    ], HomeScreen.prototype, "playButton", void 0);
    __decorate([
        property(cc.Button)
    ], HomeScreen.prototype, "exitButton", void 0);
    __decorate([
        property(cc.Node)
    ], HomeScreen.prototype, "loadingScreen", void 0);
    __decorate([
        property(cc.Node)
    ], HomeScreen.prototype, "loadNode", void 0);
    HomeScreen = __decorate([
        ccclass
    ], HomeScreen);
    return HomeScreen;
}(cc.Component));
exports.default = HomeScreen;

cc._RF.pop();