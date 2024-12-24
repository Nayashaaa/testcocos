
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/basic');
require('./assets/Scripts/column');
require('./assets/Scripts/homescreen');
require('./assets/Scripts/momummy');
require('./assets/Scripts/timer');
require('./assets/Scripts/tween');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/homescreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcaG9tZXNjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTBEQztRQXhERyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDOztJQStDN0IsQ0FBQztJQTdDRywyQkFBTSxHQUFOO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBMkI7WUFDdkUsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2FBQy9FO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVyRSxDQUFDO0lBRUQsd0NBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCx3Q0FBbUIsR0FBbkI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxzQ0FBaUIsR0FBeEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUM7YUFDL0IsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBWFIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTBEOUI7SUFBRCxpQkFBQztDQTFERCxBQTBEQyxDQTFEdUMsRUFBRSxDQUFDLFNBQVMsR0EwRG5EO2tCQTFEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwbGF5QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBleGl0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9hZGluZ1NjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2FkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbi5hY3RpdmUgPSBmYWxzZTsgXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJjYXJyXCIsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUJ1dHRvbi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25QbGF5QnV0dG9uQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5leGl0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkV4aXRCdXR0b25DbGlja2VkLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvblBsYXlCdXR0b25DbGlja2VkKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmdTY3JlZW4oKTtcclxuICAgICAgICB0aGlzLmhpZGVIb21lU2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkTm9kZS5hbmNob3JYID0gMDtcclxuICAgICAgICB0aGlzLnNjYWxlTm9kZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic3RvcHdhdGNoXCIpOyBcclxuICAgICAgICB9LCAyKTsgXHJcbiAgICB9XHJcblxyXG4gICAgb25FeGl0QnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgICAgICBjYy5nYW1lLmVuZCgpOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0xvYWRpbmdTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NyZWVuLmFjdGl2ZSA9IHRydWU7IFxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVIb21lU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5leGl0QnV0dG9uLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBzY2FsZU5vZGUoKXtcclxuICAgICAgICBjb25zdCB0YXJnZXRTY2FsZVggPSAyNTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sb2FkTm9kZSlcclxuICAgICAgICAgICAgLnRvKDIsIHsgc2NhbGVYOiB0YXJnZXRTY2FsZVggfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/timer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdGltZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvRkM7UUFqRkcsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR2pCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7O0lBNkR0QyxDQUFDO0lBM0RHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMscUNBQXFDO0lBQ25FLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUMxQixLQUFJLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQztZQUN4QixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO0lBQ3ZDLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsa0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM5RCxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDaEUsQ0FBQztJQUNNLG9DQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO1FBQ25FLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVWLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNsQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDO2FBQy9CLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUEvRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNZO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFsQlIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9GNUI7SUFBRCxlQUFDO0NBcEZELEFBb0ZDLENBcEZxQyxFQUFFLENBQUMsU0FBUyxHQW9GakQ7a0JBcEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgSG9tZVNjcmVlbiBmcm9tIFwiLi9ob21lc2NyZWVuXCI7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgdG9nZ2xlQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBlaXh0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJ1dHRvbkxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2FkaW5nU2NyZWVuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvYWROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpc1J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZWxhcHNlZFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGludGVydmFsSWQ6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZUxhYmVsKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25MYWJlbCgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy50b2dnbGVUaW1lciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5laXh0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5leGl0R2FtZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGltZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9uTGFiZWwoKTsgLy8gVXBkYXRlIGJ1dHRvbiBsYWJlbCBiYXNlZCBvbiBzdGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGFwc2VkVGltZSArPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZUxhYmVsKCk7XHJcbiAgICAgICAgfSwgMTAwKTsgLy8gVXBkYXRlIGV2ZXJ5IDAuMSBzZWNvbmRcclxuICAgIH1cclxuXHJcbiAgICBzdG9wVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lTGFiZWwoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gdGhpcy5lbGFwc2VkVGltZS50b0ZpeGVkKDEpICsgXCJzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQnV0dG9uTGFiZWwoKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25MYWJlbC5zdHJpbmcgPSB0aGlzLmlzUnVubmluZyA/IFwiU3RvcFwiIDogXCJTdGFydFwiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dMb2FkaW5nU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbi5hY3RpdmUgPSB0cnVlOyBcclxuICAgIH1cclxuXHJcbiAgICBleGl0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nU2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkTm9kZS5hbmNob3JYID0gMDtcclxuICAgICAgICB0aGlzLnNjYWxlTm9kZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiSG9tZVNjZW5lXCIpOyAvLyBMb2FkIHRoZSBTdG9wd2F0Y2ggc2NlbmVcclxuICAgICAgICB9LCAyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVOb2RlKCl7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2NhbGVYID0gMjU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9hZE5vZGUpXHJcbiAgICAgICAgICAgIC50bygyLCB7IHNjYWxlWDogdGFyZ2V0U2NhbGVYIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gIFxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/basic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f33e8vzmktPxo/VNAxtzK/e', 'basic');
// basic.ts

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
var Basic = /** @class */ (function (_super) {
    __extends(Basic, _super);
    function Basic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rows = [];
        _this.intervalId = null;
        _this.isAnimating = false;
        return _this;
    }
    Basic.prototype.start = function () {
        var button = this.node.getChildByName("Button");
        if (button) {
            var buttonComponent = button.getComponent(cc.Button);
            if (buttonComponent) {
                buttonComponent.node.on('click', this.onButtonClicked, this);
            }
        }
    };
    Basic.prototype.onButtonClicked = function () {
        if (this.isAnimating) {
            this.stopPositionUpdates();
        }
        else {
            this.startPositionUpdates();
        }
    };
    Basic.prototype.startPositionUpdates = function () {
        var _this = this;
        this.isAnimating = true;
        this.intervalId = setInterval(function () {
            // Get the texts of each node
            var texts = _this.rows.map(function (row) { return row.getChildByName("Text").getComponent(cc.RichText).string; });
            console.log("fuh");
            // Shift the texts to create the spinning effect
            var firstText = texts[0];
            for (var i = 0; i < texts.length - 1; i++) {
                texts[i] = texts[i + 1]; // Shift texts to the left
            }
            texts[texts.length - 1] = firstText; // Set the last text to the original first text
            // Update the text labels in each node
            for (var i = 0; i < _this.rows.length; i++) {
                var textNode = _this.rows[i].getChildByName("Text").getComponent(cc.Label);
                textNode.string = texts[i];
            }
        }, 100);
    };
    Basic.prototype.stopPositionUpdates = function () {
        this.isAnimating = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    };
    __decorate([
        property([cc.Node])
    ], Basic.prototype, "rows", void 0);
    Basic = __decorate([
        ccclass
    ], Basic);
    return Basic;
}(cc.Component));
exports.default = Basic;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcYmFzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF1REM7UUFwREcsVUFBSSxHQUFjLEVBQUUsQ0FBQztRQUViLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUNqQyxpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUFpRHpDLENBQUM7SUEvQ0cscUJBQUssR0FBTDtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkQsSUFBSSxlQUFlLEVBQUU7Z0JBQ2pCLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2hFO1NBQ0o7SUFDTCxDQUFDO0lBRUQsK0JBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQsb0NBQW9CLEdBQXBCO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzFCLDZCQUE2QjtZQUM3QixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQTNELENBQTJELENBQUMsQ0FBQztZQUM1RyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1AsZ0RBQWdEO1lBQ2hELElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO2FBQ3REO1lBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsK0NBQStDO1lBRXBGLHNDQUFzQztZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELG1DQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQW5ERDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt1Q0FDQztJQUhKLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F1RHpCO0lBQUQsWUFBQztDQXZERCxBQXVEQyxDQXZEa0MsRUFBRSxDQUFDLFNBQVMsR0F1RDlDO2tCQXZEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIHJvd3M6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgaW50ZXJ2YWxJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7IFxyXG4gICAgcHJpdmF0ZSBpc0FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlOyBcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIik7XHJcbiAgICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25Db21wb25lbnQgPSBidXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmIChidXR0b25Db21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbXBvbmVudC5ub2RlLm9uKCdjbGljaycsIHRoaXMub25CdXR0b25DbGlja2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wUG9zaXRpb25VcGRhdGVzKCk7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvblVwZGF0ZXMoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0UG9zaXRpb25VcGRhdGVzKCkge1xyXG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlOyBcclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHRleHRzIG9mIGVhY2ggbm9kZVxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0cyA9IHRoaXMucm93cy5tYXAocm93ID0+IHJvdy5nZXRDaGlsZEJ5TmFtZShcIlRleHRcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcpO1xyXG5jb25zb2xlLmxvZyhcImZ1aFwiKTtcclxuICAgICAgICAgICAgLy8gU2hpZnQgdGhlIHRleHRzIHRvIGNyZWF0ZSB0aGUgc3Bpbm5pbmcgZWZmZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGV4dCA9IHRleHRzWzBdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGV4dHNbaV0gPSB0ZXh0c1tpICsgMV07IC8vIFNoaWZ0IHRleHRzIHRvIHRoZSBsZWZ0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dHNbdGV4dHMubGVuZ3RoIC0gMV0gPSBmaXJzdFRleHQ7IC8vIFNldCB0aGUgbGFzdCB0ZXh0IHRvIHRoZSBvcmlnaW5hbCBmaXJzdCB0ZXh0XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHQgbGFiZWxzIGluIGVhY2ggbm9kZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSB0aGlzLnJvd3NbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJUZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zdHJpbmcgPSB0ZXh0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7IFxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BQb3NpdGlvblVwZGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlOyBcclxuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbElkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTsgXHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tween.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad7b7Jc9/JHmppZkeTCq9XS', 'tween');
// Scripts/tween.ts

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
        _this.nodes = [];
        _this.sprites = [];
        _this.winText = null;
        _this.resetButton = null;
        _this.isTappedMap = new Map();
        _this.elements = ["grand", "mini", "maxi", "major", "minor"];
        _this.trios = {
            grand: [],
            mini: [],
            maxi: [],
            minor: [],
            major: []
        };
        _this.tapCount = 0;
        _this.originalSpriteFrames = [];
        _this.gameOver = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        this.nodes.forEach(function (node, index) {
            _this.initializeNode(node);
            if (_this.sprites[index]) {
                _this.originalSpriteFrames[index] = _this.sprites[index].spriteFrame;
            }
        });
        if (this.resetButton) {
            this.resetButton.node.on('click', this.resetNodes, this);
        }
    };
    NewClass.prototype.initializeNode = function (node) {
        var _this = this;
        if (node) {
            this.isTappedMap.set(node, false);
            node.on(cc.Node.EventType.TOUCH_END, function () {
                if (!_this.gameOver) {
                    _this.addToPair(node);
                }
            }, this);
        }
    };
    NewClass.prototype.addToPair = function (node) {
        var _this = this;
        var _a;
        var isTapped = (_a = this.isTappedMap.get(node)) !== null && _a !== void 0 ? _a : false;
        if (isTapped) {
            return;
        }
        this.refillElements();
        var element = this.elements.shift(); // Remove and get the first element
        if (element !== undefined) {
            var spriteIndex_1 = this.nodes.indexOf(node);
            if (spriteIndex_1 >= 0 && this.sprites[spriteIndex_1]) {
                cc.resources.load(element, cc.SpriteFrame, function (err, spriteFrame) {
                    if (!err && spriteFrame) {
                        // Update the sprite frame
                        _this.sprites[spriteIndex_1].spriteFrame = spriteFrame;
                        console.log("Sprite for node " + spriteIndex_1 + " updated to " + element + ".");
                        // Add the element to its corresponding array
                        _this.trios[element].push(element);
                        console.log("Added " + element + " to " + element + " array:", _this.trios[element]);
                        // Check if the array's length has reached 3
                        if (_this.trios[element].length === 3) {
                            console.log(element + " array has 3 elements, checking for a win.");
                            _this.isWinning(); // Call isWinning here, after sprite update
                        }
                    }
                    else {
                        console.error("Failed to load sprite for " + element + ":", err);
                    }
                });
            }
        }
        else {
            console.error("Unexpected error: Element is undefined.");
        }
        this.isTappedMap.set(node, true);
        this.tapCount++;
    };
    NewClass.prototype.resetNodes = function () {
        var _this = this;
        this.nodes.forEach(function (node, index) {
            if (node) {
                _this.isTappedMap.set(node, false);
                var sprite = _this.sprites[index];
                if (sprite) {
                    sprite.spriteFrame = _this.originalSpriteFrames[index] || null; // Reset to original sprite
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
    };
    NewClass.prototype.isWinning = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        // Filter the indices of tapped nodes
        var tappedIndices = this.nodes
            .map(function (node, index) { return (_this.isTappedMap.get(node) ? index : -1); })
            .filter(function (index) { return index >= 0; });
        // Check for winning combinations only among tapped indices
        for (var i = 0; i < tappedIndices.length - 2; i++) {
            for (var j = i + 1; j < tappedIndices.length - 1; j++) {
                for (var k = j + 1; k < tappedIndices.length; k++) {
                    var sprite1 = (_b = (_a = this.sprites[tappedIndices[i]]) === null || _a === void 0 ? void 0 : _a.spriteFrame) === null || _b === void 0 ? void 0 : _b.name;
                    var sprite2 = (_d = (_c = this.sprites[tappedIndices[j]]) === null || _c === void 0 ? void 0 : _c.spriteFrame) === null || _d === void 0 ? void 0 : _d.name;
                    var sprite3 = (_f = (_e = this.sprites[tappedIndices[k]]) === null || _e === void 0 ? void 0 : _e.spriteFrame) === null || _f === void 0 ? void 0 : _f.name;
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
    };
    NewClass.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
    };
    NewClass.prototype.refillElements = function () {
        if (this.elements.length === 0) {
            this.elements = ["grand", "mini", "maxi", "major", "minor"];
            this.shuffleArray(this.elements);
            console.log("Elements reshuffled:", this.elements);
        }
    };
    __decorate([
        property([cc.Node])
    ], NewClass.prototype, "nodes", void 0);
    __decorate([
        property([cc.Sprite])
    ], NewClass.prototype, "sprites", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "winText", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "resetButton", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdHdlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFXNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1S0M7UUFyS0csV0FBSyxHQUFjLEVBQUUsQ0FBQztRQUd0QixhQUFPLEdBQWdCLEVBQUUsQ0FBQztRQUcxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFFMUMsY0FBUSxHQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWpFLFdBQUssR0FBVTtZQUNuQixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUVNLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYiwwQkFBb0IsR0FBcUIsRUFBRSxDQUFDO1FBQzVDLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBMkl0QyxDQUFDO0lBeklHLHlCQUFNLEdBQU47UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDM0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxD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Q0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzsyQ0FDRTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs2Q0FDSTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1U7SUFYYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUs1QjtJQUFELGVBQUM7Q0F2S0QsQUF1S0MsQ0F2S3FDLEVBQUUsQ0FBQyxTQUFTLEdBdUtqRDtrQkF2S29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxudHlwZSBUcmlvcyA9IHtcclxuICAgIGdyYW5kOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgbWluaTogQXJyYXk8c3RyaW5nPjtcclxuICAgIG1heGk6IEFycmF5PHN0cmluZz47XHJcbiAgICBtaW5vcjogQXJyYXk8c3RyaW5nPjtcclxuICAgIG1ham9yOiBBcnJheTxzdHJpbmc+O1xyXG59O1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIG5vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZV0pXHJcbiAgICBzcHJpdGVzOiBjYy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2luVGV4dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHJlc2V0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNUYXBwZWRNYXAgPSBuZXcgTWFwPGNjLk5vZGUsIGJvb2xlYW4+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBlbGVtZW50czogc3RyaW5nW10gPSBbXCJncmFuZFwiLCBcIm1pbmlcIiwgXCJtYXhpXCIsIFwibWFqb3JcIiwgXCJtaW5vclwiXTtcclxuXHJcbiAgICBwcml2YXRlIHRyaW9zOiBUcmlvcyA9IHtcclxuICAgICAgICBncmFuZDogW10sXHJcbiAgICAgICAgbWluaTogW10sXHJcbiAgICAgICAgbWF4aTogW10sXHJcbiAgICAgICAgbWlub3I6IFtdLFxyXG4gICAgICAgIG1ham9yOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHRhcENvdW50ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIG9yaWdpbmFsU3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107IFxyXG4gICAgcHJpdmF0ZSBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZU5vZGUobm9kZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsU3ByaXRlRnJhbWVzW2luZGV4XSA9IHRoaXMuc3ByaXRlc1tpbmRleF0uc3ByaXRlRnJhbWU7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc2V0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLnJlc2V0Tm9kZXMsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplTm9kZShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1RhcHBlZE1hcC5zZXQobm9kZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5vbihcclxuICAgICAgICAgICAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvUGFpcihub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb1BhaXIobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGlzVGFwcGVkID0gdGhpcy5pc1RhcHBlZE1hcC5nZXQobm9kZSkgPz8gZmFsc2U7XHJcbiAgICAgICAgaWYgKGlzVGFwcGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB0aGlzLnJlZmlsbEVsZW1lbnRzKCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50cy5zaGlmdCgpOyAvLyBSZW1vdmUgYW5kIGdldCB0aGUgZmlyc3QgZWxlbWVudFxyXG4gICAgICAgIGlmIChlbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlSW5kZXggPSB0aGlzLm5vZGVzLmluZGV4T2Yobm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChzcHJpdGVJbmRleCA+PSAwICYmIHRoaXMuc3ByaXRlc1tzcHJpdGVJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGVsZW1lbnQsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyICYmIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc3ByaXRlIGZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tzcHJpdGVJbmRleF0uc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZSBhcyBjYy5TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNwcml0ZSBmb3Igbm9kZSAke3Nwcml0ZUluZGV4fSB1cGRhdGVkIHRvICR7ZWxlbWVudH0uYCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBlbGVtZW50IHRvIGl0cyBjb3JyZXNwb25kaW5nIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpb3NbZWxlbWVudCBhcyBrZXlvZiBUcmlvc10ucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZGVkICR7ZWxlbWVudH0gdG8gJHtlbGVtZW50fSBhcnJheTpgLCB0aGlzLnRyaW9zW2VsZW1lbnQgYXMga2V5b2YgVHJpb3NdKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgYXJyYXkncyBsZW5ndGggaGFzIHJlYWNoZWQgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cmlvc1tlbGVtZW50IGFzIGtleW9mIFRyaW9zXS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2VsZW1lbnR9IGFycmF5IGhhcyAzIGVsZW1lbnRzLCBjaGVja2luZyBmb3IgYSB3aW4uYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzV2lubmluZygpOyAvLyBDYWxsIGlzV2lubmluZyBoZXJlLCBhZnRlciBzcHJpdGUgdXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbG9hZCBzcHJpdGUgZm9yICR7ZWxlbWVudH06YCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOiBFbGVtZW50IGlzIHVuZGVmaW5lZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5pc1RhcHBlZE1hcC5zZXQobm9kZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy50YXBDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICByZXNldE5vZGVzKCkge1xyXG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXBwZWRNYXAuc2V0KG5vZGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuc3ByaXRlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5vcmlnaW5hbFNwcml0ZUZyYW1lc1tpbmRleF0gfHwgbnVsbDsgLy8gUmVzZXQgdG8gb3JpZ2luYWwgc3ByaXRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgdHJpb3MgYW5kIGVsZW1lbnRzXHJcbiAgICAgICAgdGhpcy50cmlvcyA9IHsgZ3JhbmQ6IFtdLCBtaW5pOiBbXSwgbWF4aTogW10sIG1pbm9yOiBbXSwgbWFqb3I6IFtdIH07XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IFtcImdyYW5kXCIsIFwibWluaVwiLCBcIm1heGlcIiwgXCJtYWpvclwiLCBcIm1pbm9yXCJdO1xyXG4gICAgICAgIHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMuZWxlbWVudHMpO1xyXG4gICAgICAgIHRoaXMudGFwQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy53aW5UZXh0LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vZGVzIGFuZCBhcnJheXMgaGF2ZSBiZWVuIHJlc2V0LlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1dpbm5pbmcoKSB7XHJcbiAgICAgICAgLy8gRmlsdGVyIHRoZSBpbmRpY2VzIG9mIHRhcHBlZCBub2Rlc1xyXG4gICAgICAgIGNvbnN0IHRhcHBlZEluZGljZXMgPSB0aGlzLm5vZGVzXHJcbiAgICAgICAgICAgIC5tYXAoKG5vZGUsIGluZGV4KSA9PiAodGhpcy5pc1RhcHBlZE1hcC5nZXQobm9kZSkgPyBpbmRleCA6IC0xKSlcclxuICAgICAgICAgICAgLmZpbHRlcihpbmRleCA9PiBpbmRleCA+PSAwKTtcclxuICAgIFxyXG4gICAgICAgIC8vIENoZWNrIGZvciB3aW5uaW5nIGNvbWJpbmF0aW9ucyBvbmx5IGFtb25nIHRhcHBlZCBpbmRpY2VzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXBwZWRJbmRpY2VzLmxlbmd0aCAtIDI7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0YXBwZWRJbmRpY2VzLmxlbmd0aCAtIDE7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IGogKyAxOyBrIDwgdGFwcGVkSW5kaWNlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTEgPSB0aGlzLnNwcml0ZXNbdGFwcGVkSW5kaWNlc1tpXV0/LnNwcml0ZUZyYW1lPy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTIgPSB0aGlzLnNwcml0ZXNbdGFwcGVkSW5kaWNlc1tqXV0/LnNwcml0ZUZyYW1lPy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTMgPSB0aGlzLnNwcml0ZXNbdGFwcGVkSW5kaWNlc1trXV0/LnNwcml0ZUZyYW1lPy5uYW1lO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcml0ZTEgJiYgc3ByaXRlMiAmJiBzcHJpdGUzICYmIHNwcml0ZTEgPT09IHNwcml0ZTIgJiYgc3ByaXRlMiA9PT0gc3ByaXRlMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5UZXh0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2lubmluZyBjb25kaXRpb24gbWV0OlwiLCBzcHJpdGUxLCBzcHJpdGUyLCBzcHJpdGUzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gd2lubmluZyBjb25kaXRpb24gZm91bmQuXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaHVmZmxlQXJyYXkoYXJyYXk6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVmaWxsRWxlbWVudHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMgPSBbXCJncmFuZFwiLCBcIm1pbmlcIiwgXCJtYXhpXCIsIFwibWFqb3JcIiwgXCJtaW5vclwiXTtcclxuICAgICAgICAgICAgdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5lbGVtZW50cyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxlbWVudHMgcmVzaHVmZmxlZDpcIiwgdGhpcy5lbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/column.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4d18ltDk1Bv7LkLKH3CzrO', 'column');
// Scripts/column.ts

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
var ColumnFitter = /** @class */ (function (_super) {
    __extends(ColumnFitter, _super);
    function ColumnFitter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.columnNode = null; // Reference to the column node
        _this.columnHeight = 700; // Set column height here or in the editor
        _this.sprite = null; // Reference to the sprite node
        _this.sprite2 = null; // Reference to the sprite node
        _this.playerNode = null; // Reference to the node
        _this.timeElapsed = 0;
        _this.resetTime = 20;
        return _this;
    }
    ColumnFitter.prototype.init = function () {
        this.columnHeight = this.columnNode.height;
    };
    ColumnFitter.prototype.onLoad = function () {
        this.init();
    };
    ColumnFitter.prototype.start = function () {
        var scaleInOut = cc.tween(this.playerNode).to(2, { scale: 5 }).to(1, { scale: 1 }).call(function () { scaleInOut.start(); });
        scaleInOut.start();
        console.log(cc.misc.lerp(0, 100, 0.5));
        // Prompt the user for input between 1 and 5
        var userInput = parseInt(prompt("Enter a number of sprites between 1 and 5") || "1", 10);
        // Clamp user input to the range of 1 to 5
        userInput = Math.max(1, Math.min(userInput, 10));
        // Call method to create and position sprites
        this.createSprites(userInput);
    };
    ColumnFitter.prototype.createSprites = function (count) {
        // Remove any existing children in the column node
        this.columnNode.removeAllChildren();
        // Calculate height for each sprite to fit perfectly
        var spriteHeight = this.columnHeight / count;
        console.log(spriteHeight);
        // Define a set of colors for the sprites
        var colors = [
            cc.Color.RED,
            cc.Color.GREEN,
            cc.Color.BLUE,
            cc.Color.YELLOW,
            cc.Color.MAGENTA
        ];
        for (var i = 0; i < count; i++) {
            // Create a new node for each sprite
            var spriteNode = new cc.Node("Sprite" + (i + 1));
            var sprite = spriteNode.addComponent(cc.Sprite);
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
    };
    ColumnFitter.prototype.update = function (dt) {
        this.timeElapsed += dt;
        console.log("Elapsed time: " + this.timeElapsed);
        if (this.timeElapsed > this.resetTime) {
            this.timeElapsed = 0;
        }
        if (this.timeElapsed <= this.resetTime) {
            var ratio = this.timeElapsed / this.resetTime;
            cc.log(cc.misc.lerp(0, 100, ratio));
        }
    };
    __decorate([
        property(cc.Node)
    ], ColumnFitter.prototype, "columnNode", void 0);
    __decorate([
        property
    ], ColumnFitter.prototype, "columnHeight", void 0);
    __decorate([
        property(cc.Sprite)
    ], ColumnFitter.prototype, "sprite", void 0);
    __decorate([
        property(cc.Texture2D)
    ], ColumnFitter.prototype, "sprite2", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "Reference to the node" })
    ], ColumnFitter.prototype, "playerNode", void 0);
    __decorate([
        property(Number)
    ], ColumnFitter.prototype, "resetTime", void 0);
    ColumnFitter = __decorate([
        ccclass
    ], ColumnFitter);
    return ColumnFitter;
}(cc.Component));
exports.default = ColumnFitter;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBdUhDO1FBcEhHLGdCQUFVLEdBQVksSUFBSSxDQUFDLENBQUMsK0JBQStCO1FBRzNELGtCQUFZLEdBQVcsR0FBRyxDQUFDLENBQUMsMENBQTBDO1FBR3RFLFlBQU0sR0FBYyxJQUFJLENBQUMsQ0FBQywrQkFBK0I7UUFHekQsYUFBTyxHQUFpQixJQUFJLENBQUMsQ0FBQywrQkFBK0I7UUFHN0QsZ0JBQVUsR0FBWSxJQUFJLENBQUMsQ0FBQyx3QkFBd0I7UUFFcEQsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsZUFBUyxHQUFZLEVBQUUsQ0FBQzs7SUFtRzVCLENBQUM7SUFqR0csMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0MsQ0FBQztJQUVTLDZCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFHRCw0QkFBSyxHQUFMO1FBSUksSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUUsY0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUV0SCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7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QUMsU0FBUyxFQUNyQztZQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUVMLENBQUM7SUFuSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUztJQUczQjtRQURDLFFBQVE7c0RBQ2tCO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDTTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFHLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxDQUFDO29EQUNsQztJQUszQjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7bURBQ087SUFwQlAsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVIaEM7SUFBRCxtQkFBQztDQXZIRCxBQXVIQyxDQXZIeUMsRUFBRSxDQUFDLFNBQVMsR0F1SHJEO2tCQXZIb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2x1bW5GaXR0ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29sdW1uTm9kZTogY2MuTm9kZSA9IG51bGw7IC8vIFJlZmVyZW5jZSB0byB0aGUgY29sdW1uIG5vZGVcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNvbHVtbkhlaWdodDogbnVtYmVyID0gNzAwOyAvLyBTZXQgY29sdW1uIGhlaWdodCBoZXJlIG9yIGluIHRoZSBlZGl0b3JcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsOyAvLyBSZWZlcmVuY2UgdG8gdGhlIHNwcml0ZSBub2RlXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcclxuICAgIHNwcml0ZTI6IGNjLlRleHR1cmUyRCA9IG51bGw7IC8vIFJlZmVyZW5jZSB0byB0aGUgc3ByaXRlIG5vZGVcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUgLCB0b29sdGlwOiBcIlJlZmVyZW5jZSB0byB0aGUgbm9kZVwifSlcclxuICAgIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsOyAvLyBSZWZlcmVuY2UgdG8gdGhlIG5vZGVcclxuXHJcbiAgICB0aW1lRWxhcHNlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgcmVzZXRUaW1lIDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbkhlaWdodCA9IHRoaXMuY29sdW1uTm9kZS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgc2NhbGVJbk91dCA9IGNjLnR3ZWVuKHRoaXMucGxheWVyTm9kZSkudG8oMiwgeyBzY2FsZTogNSB9ICkudG8oMSwgeyBzY2FsZTogMSB9KS5jYWxsKCAoKSA9PiB7c2NhbGVJbk91dC5zdGFydCgpfSk7XHJcblxyXG4gICAgICAgIHNjYWxlSW5PdXQuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIGNjLm1pc2MubGVycCgwLCAxMDAsIDAuNSkgKTtcclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBQcm9tcHQgdGhlIHVzZXIgZm9yIGlucHV0IGJldHdlZW4gMSBhbmQgNVxyXG4gICAgICAgIGxldCB1c2VySW5wdXQgPSBwYXJzZUludChwcm9tcHQoXCJFbnRlciBhIG51bWJlciBvZiBzcHJpdGVzIGJldHdlZW4gMSBhbmQgNVwiKSB8fCBcIjFcIiwgMTApO1xyXG5cclxuICAgICAgICAvLyBDbGFtcCB1c2VyIGlucHV0IHRvIHRoZSByYW5nZSBvZiAxIHRvIDVcclxuICAgICAgICB1c2VySW5wdXQgPSBNYXRoLm1heCgxLCBNYXRoLm1pbih1c2VySW5wdXQsIDEwKSk7XHJcblxyXG4gICAgICAgIC8vIENhbGwgbWV0aG9kIHRvIGNyZWF0ZSBhbmQgcG9zaXRpb24gc3ByaXRlc1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3ByaXRlcyh1c2VySW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNwcml0ZXMoY291bnQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIGNoaWxkcmVuIGluIHRoZSBjb2x1bW4gbm9kZVxyXG4gICAgICAgIHRoaXMuY29sdW1uTm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgaGVpZ2h0IGZvciBlYWNoIHNwcml0ZSB0byBmaXQgcGVyZmVjdGx5XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gdGhpcy5jb2x1bW5IZWlnaHQgLyBjb3VudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhzcHJpdGVIZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgYSBzZXQgb2YgY29sb3JzIGZvciB0aGUgc3ByaXRlc1xyXG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IFtcclxuICAgICAgICAgICAgY2MuQ29sb3IuUkVELFxyXG4gICAgICAgICAgICBjYy5Db2xvci5HUkVFTixcclxuICAgICAgICAgICAgY2MuQ29sb3IuQkxVRSxcclxuICAgICAgICAgICAgY2MuQ29sb3IuWUVMTE9XLFxyXG4gICAgICAgICAgICBjYy5Db2xvci5NQUdFTlRBXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbm9kZSBmb3IgZWFjaCBzcHJpdGVcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlTm9kZSA9IG5ldyBjYy5Ob2RlKGBTcHJpdGUke2kgKyAxfWApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHNwcml0ZU5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0aGlzLnNwcml0ZTIpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHRoZSBzcHJpdGUgbm9kZSdzIHNpemVcclxuICAgICAgICAgICAgc3ByaXRlTm9kZS53aWR0aCA9IHRoaXMuY29sdW1uTm9kZS53aWR0aDtcclxuICAgICAgICAgICAgc3ByaXRlTm9kZS5oZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gYSBjb2xvciB0byB0aGUgc3ByaXRlXHJcbiAgICAgICAgICAgIHNwcml0ZU5vZGUuY29sb3IgPSBjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGFuZCBzZXQgdGhlIHkgcG9zaXRpb24gZm9yIGVhY2ggc3ByaXRlXHJcbiAgICAgICAgICAgIHNwcml0ZU5vZGUuc2V0UG9zaXRpb24oMCwgKHRoaXMuY29sdW1uSGVpZ2h0IC8gMikgLSAoc3ByaXRlSGVpZ2h0IC8gMikgLSAoaSAqIHNwcml0ZUhlaWdodCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHNwcml0ZSBub2RlIHRvIHRoZSBjb2x1bW4gbm9kZVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbk5vZGUuYWRkQ2hpbGQoc3ByaXRlTm9kZSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVFbGFwc2VkICs9IGR0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWxhcHNlZCB0aW1lOiBcIiArIHRoaXMudGltZUVsYXBzZWQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50aW1lRWxhcHNlZCA+IHRoaXMucmVzZXRUaW1lKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUVsYXBzZWQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMudGltZUVsYXBzZWQgPD0gdGhpcy5yZXNldFRpbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLnRpbWVFbGFwc2VkIC8gdGhpcy5yZXNldFRpbWU7XHJcbiAgICAgICAgICAgIGNjLmxvZyhjYy5taXNjLmxlcnAoMCwgMTAwLCByYXRpbykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/momummy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93127lI1ndIdoXS5kYxnJsE', 'momummy');
// Scripts/momummy.ts

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
var DirectionsConst = {
    left: "left",
    right: "right",
    up: "up",
    down: "down"
};
var priorities = {
    up: "up",
    down: "down",
    left: "left",
    right: "right"
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cells = [];
        _this.mummy = null;
        _this.cellsBox = null;
        _this.diamondPrefab = null;
        _this.diamonds = []; // Active diamonds
        _this.diamondsCollected = 0; // Counter for diamonds collected
        _this.boundaryOffset = null; // Initial boundary offset
        // Define grid bounds
        _this.gridMinX = -200; // Bottom-left X
        _this.gridMaxX = 200; // Top-right X
        _this.gridMinY = -200; // Bottom-left Y
        _this.gridMaxY = 200; // Top-right Y
        return _this;
    }
    NewClass.prototype.start = function () {
        this.spawnDiamonds();
        this.moveToNearestDiamond();
    };
    NewClass.prototype.spawnDiamonds = function () {
        // Remove existing diamonds
        this.diamonds.forEach(function (diamond) { return diamond.destroy(); });
        this.diamonds = [];
        // Shuffle cell positions randomly
        var shuffledCells = this.cells.sort(function () { return Math.random() - 0.5; });
        // Place 3 diamonds randomly
        for (var i = 0; i < 3; i++) {
            var cell = shuffledCells[i];
            var diamond = cc.instantiate(this.diamondPrefab);
            diamond.parent = this.node; // Attach diamond to the main scene node
            diamond.position = cell.position;
            this.diamonds.push(diamond);
        }
    };
    NewClass.prototype.moveToNearestDiamond = function () {
        var _this = this;
        if (!this.mummy || this.diamonds.length === 0 || this.cells.length === 0) {
            console.error("Ensure mummy, diamonds, and cells are properly assigned.");
            return;
        }
        var moveToNextDiamond = function () {
            if (_this.diamonds.length === 0) {
                console.log("Mummy reached all diamonds!");
                _this.increaseMummySize(); // Increase the size of the mummy
                console.error("Mummy position:", _this.mummy.position.x, _this.mummy.position.y);
                console.error("Mummy size:", _this.mummy.width, _this.mummy.height);
                _this.spawnDiamonds(); // Respawn diamonds when all are collected
                moveToNextDiamond(); // Restart movement to nearest diamond
                return;
            }
            // Function to calculate boundary offset
            var calculateBoundaryOffset = function (mummyWidth) {
                var cellWidth = _this.cells[0].width;
                return mummyWidth / 2 - cellWidth / 2;
            };
            // Find the nearest diamond
            var mummyPosition = _this.mummy.position;
            var nearestDiamond = _this.diamonds[0];
            var shortestDistance = mummyPosition.sub(nearestDiamond.position).mag();
            _this.diamonds.forEach(function (diamond) {
                var distance = mummyPosition.sub(diamond.position).mag();
                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    nearestDiamond = diamond;
                }
            });
            var diamondPosition = nearestDiamond.position;
            // Identify the cell containing the diamond
            var targetCell = _this.cells.find(function (cell) { return cell.position.equals(diamondPosition); });
            if (!targetCell) {
                console.error("Nearest diamond is not inside any cell.");
                return;
            }
            var targetCellPosition = targetCell.position;
            // Calculate boundary offset
            _this.boundaryOffset = calculateBoundaryOffset(_this.mummy.width);
            console.log("boundaryOffset:", _this.boundaryOffset);
            // Clamp mummy's position to stay within the cells box
            var clampedX = cc.misc.clampf(mummyPosition.x, Math.max(_this.gridMinX + _this.boundaryOffset, targetCellPosition.x - _this.boundaryOffset), Math.min(_this.gridMaxX - _this.boundaryOffset, targetCellPosition.x + _this.boundaryOffset));
            var clampedY = cc.misc.clampf(mummyPosition.y, Math.max(_this.gridMinY + _this.boundaryOffset, targetCellPosition.y - _this.boundaryOffset), Math.min(_this.gridMaxY - _this.boundaryOffset, targetCellPosition.y + _this.boundaryOffset));
            //  console.error(Clamped position: ${clampedX}, ${clampedY});
            console.error('Mummy position:', mummyPosition.x, mummyPosition.y);
            console.error('Diamond position:', diamondPosition.x, diamondPosition.y);
            // Move mummy to the nearest diamond while staying within bounds
            if (Math.abs(mummyPosition.x - diamondPosition.x) > Math.abs(mummyPosition.y - diamondPosition.y)) {
                cc.tween(_this.mummy)
                    .to(1, { position: new cc.Vec3(clampedX, mummyPosition.y, mummyPosition.z) }, { easing: "sineInOut" })
                    .call(function () {
                    cc.tween(_this.mummy)
                        .to(1, { position: new cc.Vec3(clampedX, clampedY, mummyPosition.z) }, { easing: "sineInOut" })
                        .call(function () {
                        console.log("Mummy reached a diamond!");
                        _this.collectDiamond(nearestDiamond);
                        moveToNextDiamond();
                    })
                        .start();
                })
                    .start();
            }
            else {
                cc.tween(_this.mummy)
                    .to(1, { position: new cc.Vec3(mummyPosition.x, clampedY, mummyPosition.z) }, { easing: "sineInOut" })
                    .call(function () {
                    cc.tween(_this.mummy)
                        .to(1, { position: new cc.Vec3(clampedX, clampedY, mummyPosition.z) }, { easing: "sineInOut" })
                        .call(function () {
                        console.log("Mummy reached a diamond!");
                        _this.collectDiamond(nearestDiamond);
                        moveToNextDiamond();
                    })
                        .start();
                })
                    .start();
            }
        };
        moveToNextDiamond();
    };
    NewClass.prototype.collectDiamond = function (diamond) {
        var index = this.diamonds.indexOf(diamond);
        if (index !== -1) {
            this.diamonds.splice(index, 1);
            diamond.destroy();
        }
        this.diamondsCollected++;
    };
    NewClass.prototype.increaseMummySize = function () {
        var _a, _b;
        console.log("Increasing mummy size");
        var cellWidth = ((_a = this.cells[0]) === null || _a === void 0 ? void 0 : _a.width) || 100; // Default to 100 if undefined
        var cellHeight = ((_b = this.cells[0]) === null || _b === void 0 ? void 0 : _b.height) || 100;
        if (!this.mummy || !this.cellsBox) {
            console.error("Mummy or cellsBox is not defined");
            return;
        }
        // Convert mummy's position to world space
        var mummyWorldPosition = this.mummy.parent.convertToWorldSpaceAR(this.mummy.position);
        // Convert mummy's world position to the local space of cellsBox
        var mummyLocalInCells = this.cellsBox.convertToNodeSpaceAR(mummyWorldPosition);
        // Calculate the mummy's current bounds in cellsBox local space
        var currentLeft = mummyLocalInCells.x - this.mummy.width / 2;
        var currentRight = mummyLocalInCells.x + this.mummy.width / 2;
        var currentTop = mummyLocalInCells.y + this.mummy.height / 2;
        var currentBottom = mummyLocalInCells.y - this.mummy.height / 2;
        // Determine if there is space for expansion in each direction
        var canExpandLeft = currentLeft - cellWidth >= -this.cellsBox.width / 2;
        var canExpandRight = currentRight + cellWidth <= this.cellsBox.width / 2;
        var canExpandUp = currentTop + cellHeight <= this.cellsBox.height / 2;
        var canExpandDown = currentBottom - cellHeight >= -this.cellsBox.height / 2;
        var directions = {
            left: canExpandLeft,
            right: canExpandRight,
            up: canExpandUp,
            down: canExpandDown
        };
        // Extract valid directions
        var validDirections = Object.keys(directions).filter(function (dir) { return directions[dir]; });
        console.log("Valid directions:", validDirections);
        if (validDirections.length < 2) {
            console.log("Not enough space to expand in two directions.");
            return;
        }
        // Remove opposite directions (e.g., left and right, up and down)
        var oppositePairs = [[priorities.left, priorities.right], [priorities.up, priorities.down]];
        for (var _i = 0, oppositePairs_1 = oppositePairs; _i < oppositePairs_1.length; _i++) {
            var _c = oppositePairs_1[_i], dir1 = _c[0], dir2 = _c[1];
            if (validDirections.includes(dir1) && validDirections.includes(dir2)) {
                //console.log(Removing opposite directions: ${dir1} and ${dir2});
                validDirections.splice(validDirections.indexOf(dir2), 1);
            }
        }
        console.log("Valid directions after removing opposites:", validDirections);
        // Select two directions for expansion
        var priority = [priorities.up, priorities.down, priorities.left, priorities.right];
        var selectedDirections = validDirections
            .sort(function (a, b) { return priority.indexOf(a) - priority.indexOf(b); })
            .slice(0, 2);
        console.log("Selected directions for expansion:", selectedDirections);
        // Perform expansion based on the selected directions
        var expansionTweens = [];
        if (selectedDirections.includes(priorities.left)) {
            expansionTweens.push(cc.tween(this.mummy)
                .to(1, {
                width: this.mummy.width + cellWidth,
                x: this.mummy.x - cellWidth / 2,
            }, { easing: "sineInOut" }));
        }
        if (selectedDirections.includes(priorities.right)) {
            expansionTweens.push(cc.tween(this.mummy)
                .to(1, {
                x: this.mummy.x + cellWidth / 2,
                width: this.mummy.width + cellWidth
            }, { easing: "sineInOut" }));
        }
        if (selectedDirections.includes(priorities.up)) {
            expansionTweens.push(cc.tween(this.mummy)
                .to(1, {
                y: this.mummy.y + cellHeight / 2,
                height: this.mummy.height + cellHeight
            }, { easing: "sineInOut" }));
        }
        if (selectedDirections.includes(priorities.down)) {
            expansionTweens.push(cc.tween(this.mummy)
                .to(1, {
                y: this.mummy.y - cellHeight / 2,
                height: this.mummy.height + cellHeight
            }, { easing: "sineInOut" }));
        }
        // Start the tweens sequentially
        if (expansionTweens.length > 0) {
            expansionTweens.reduce(function (prev, curr) { return prev.call(function () { return curr.start(); }); }, cc.tween(this.mummy)).start();
        }
        console.error("Mummy position:", this.mummy.position.x, this.mummy.position.y);
        console.error("Mummy size:", this.mummy.width, this.mummy.height);
    };
    __decorate([
        property([cc.Node])
    ], NewClass.prototype, "cells", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mummy", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cellsBox", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "diamondPrefab", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcbW9tdW1teS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRztJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0lBQ2QsRUFBRSxFQUFFLElBQUk7SUFDUixJQUFJLEVBQUUsTUFBTTtDQUNmLENBQUE7QUFDRCxJQUFNLFVBQVUsR0FBRztJQUNmLEVBQUUsRUFBRSxJQUFJO0lBQ1IsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0NBQ2pCLENBQUM7QUFJSSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlSQztRQS9RRyxXQUFLLEdBQWMsRUFBRSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWMsRUFBRSxDQUFDLENBQUMsa0JBQWtCO1FBQzVDLHVCQUFpQixHQUFXLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztRQUNoRSxvQkFBYyxHQUFXLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtRQUVqRSxxQkFBcUI7UUFDYixjQUFRLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0I7UUFDekMsY0FBUSxHQUFXLEdBQUcsQ0FBQyxDQUFFLGNBQWM7UUFDdkMsY0FBUSxHQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCO1FBQ3pDLGNBQVEsR0FBVyxHQUFHLENBQUMsQ0FBRSxjQUFjOztJQTRQbkQsQ0FBQztJQTFQRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElB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SyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZHO1FBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBelFEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzJDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNZO0lBWGYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlSNUI7SUFBRCxlQUFDO0NBalJELEFBaVJDLENBalJxQyxFQUFFLENBQUMsU0FBUyxHQWlSakQ7a0JBalJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRGlyZWN0aW9uc0NvbnN0ID0ge1xyXG4gICAgbGVmdDogXCJsZWZ0XCIsXHJcbiAgICByaWdodDogXCJyaWdodFwiLFxyXG4gICAgdXA6IFwidXBcIixcclxuICAgIGRvd246IFwiZG93blwiXHJcbn1cclxuY29uc3QgcHJpb3JpdGllcyA9IHtcclxuICAgIHVwOiBcInVwXCIsXHJcbiAgICBkb3duOiBcImRvd25cIixcclxuICAgIGxlZnQ6IFwibGVmdFwiLFxyXG4gICAgcmlnaHQ6IFwicmlnaHRcIlxyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGNlbGxzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG11bW15OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNlbGxzQm94OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZGlhbW9uZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRpYW1vbmRzOiBjYy5Ob2RlW10gPSBbXTsgLy8gQWN0aXZlIGRpYW1vbmRzXHJcbiAgICBwcml2YXRlIGRpYW1vbmRzQ29sbGVjdGVkOiBudW1iZXIgPSAwOyAvLyBDb3VudGVyIGZvciBkaWFtb25kcyBjb2xsZWN0ZWRcclxuICAgIHByaXZhdGUgYm91bmRhcnlPZmZzZXQ6IG51bWJlciA9IG51bGw7IC8vIEluaXRpYWwgYm91bmRhcnkgb2Zmc2V0XHJcblxyXG4gICAgLy8gRGVmaW5lIGdyaWQgYm91bmRzXHJcbiAgICBwcml2YXRlIGdyaWRNaW5YOiBudW1iZXIgPSAtMjAwOyAvLyBCb3R0b20tbGVmdCBYXHJcbiAgICBwcml2YXRlIGdyaWRNYXhYOiBudW1iZXIgPSAyMDA7ICAvLyBUb3AtcmlnaHQgWFxyXG4gICAgcHJpdmF0ZSBncmlkTWluWTogbnVtYmVyID0gLTIwMDsgLy8gQm90dG9tLWxlZnQgWVxyXG4gICAgcHJpdmF0ZSBncmlkTWF4WTogbnVtYmVyID0gMjAwOyAgLy8gVG9wLXJpZ2h0IFlcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNwYXduRGlhbW9uZHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlVG9OZWFyZXN0RGlhbW9uZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkRpYW1vbmRzKCkge1xyXG4gICAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBkaWFtb25kc1xyXG4gICAgICAgIHRoaXMuZGlhbW9uZHMuZm9yRWFjaChkaWFtb25kID0+IGRpYW1vbmQuZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLmRpYW1vbmRzID0gW107XHJcblxyXG4gICAgICAgIC8vIFNodWZmbGUgY2VsbCBwb3NpdGlvbnMgcmFuZG9tbHlcclxuICAgICAgICBjb25zdCBzaHVmZmxlZENlbGxzID0gdGhpcy5jZWxscy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG5cclxuICAgICAgICAvLyBQbGFjZSAzIGRpYW1vbmRzIHJhbmRvbWx5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHNodWZmbGVkQ2VsbHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRpYW1vbmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpYW1vbmRQcmVmYWIpO1xyXG4gICAgICAgICAgICBkaWFtb25kLnBhcmVudCA9IHRoaXMubm9kZTsgLy8gQXR0YWNoIGRpYW1vbmQgdG8gdGhlIG1haW4gc2NlbmUgbm9kZVxyXG4gICAgICAgICAgICBkaWFtb25kLnBvc2l0aW9uID0gY2VsbC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kcy5wdXNoKGRpYW1vbmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbW92ZVRvTmVhcmVzdERpYW1vbmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bW15IHx8IHRoaXMuZGlhbW9uZHMubGVuZ3RoID09PSAwIHx8IHRoaXMuY2VsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFbnN1cmUgbXVtbXksIGRpYW1vbmRzLCBhbmQgY2VsbHMgYXJlIHByb3Blcmx5IGFzc2lnbmVkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW92ZVRvTmV4dERpYW1vbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpYW1vbmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNdW1teSByZWFjaGVkIGFsbCBkaWFtb25kcyFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlYXNlTXVtbXlTaXplKCk7IC8vIEluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBtdW1teVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTXVtbXkgcG9zaXRpb246XCIsIHRoaXMubXVtbXkucG9zaXRpb24ueCwgdGhpcy5tdW1teS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNdW1teSBzaXplOlwiLCB0aGlzLm11bW15LndpZHRoLCB0aGlzLm11bW15LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRGlhbW9uZHMoKTsgLy8gUmVzcGF3biBkaWFtb25kcyB3aGVuIGFsbCBhcmUgY29sbGVjdGVkXHJcbiAgICAgICAgICAgICAgICBtb3ZlVG9OZXh0RGlhbW9uZCgpOyAvLyBSZXN0YXJ0IG1vdmVtZW50IHRvIG5lYXJlc3QgZGlhbW9uZFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGdW5jdGlvbiB0byBjYWxjdWxhdGUgYm91bmRhcnkgb2Zmc2V0XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZUJvdW5kYXJ5T2Zmc2V0ID0gKG11bW15V2lkdGg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbFdpZHRoID0gdGhpcy5jZWxsc1swXS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtdW1teVdpZHRoIC8gMiAtIGNlbGxXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBuZWFyZXN0IGRpYW1vbmRcclxuICAgICAgICAgICAgY29uc3QgbXVtbXlQb3NpdGlvbiA9IHRoaXMubXVtbXkucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCBuZWFyZXN0RGlhbW9uZCA9IHRoaXMuZGlhbW9uZHNbMF07XHJcbiAgICAgICAgICAgIGxldCBzaG9ydGVzdERpc3RhbmNlID0gbXVtbXlQb3NpdGlvbi5zdWIobmVhcmVzdERpYW1vbmQucG9zaXRpb24pLm1hZygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kcy5mb3JFYWNoKGRpYW1vbmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBtdW1teVBvc2l0aW9uLnN1YihkaWFtb25kLnBvc2l0aW9uKS5tYWcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHNob3J0ZXN0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVhcmVzdERpYW1vbmQgPSBkaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpYW1vbmRQb3NpdGlvbiA9IG5lYXJlc3REaWFtb25kLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy8gSWRlbnRpZnkgdGhlIGNlbGwgY29udGFpbmluZyB0aGUgZGlhbW9uZFxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDZWxsID0gdGhpcy5jZWxscy5maW5kKGNlbGwgPT4gY2VsbC5wb3NpdGlvbi5lcXVhbHMoZGlhbW9uZFBvc2l0aW9uKSk7XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0Q2VsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5lYXJlc3QgZGlhbW9uZCBpcyBub3QgaW5zaWRlIGFueSBjZWxsLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0Q2VsbFBvc2l0aW9uID0gdGFyZ2V0Q2VsbC5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBib3VuZGFyeSBvZmZzZXRcclxuICAgICAgICAgICAgdGhpcy5ib3VuZGFyeU9mZnNldCA9IGNhbGN1bGF0ZUJvdW5kYXJ5T2Zmc2V0KHRoaXMubXVtbXkud2lkdGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvdW5kYXJ5T2Zmc2V0OlwiLCB0aGlzLmJvdW5kYXJ5T2Zmc2V0KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBDbGFtcCBtdW1teSdzIHBvc2l0aW9uIHRvIHN0YXkgd2l0aGluIHRoZSBjZWxscyBib3hcclxuICAgICAgICAgICAgY29uc3QgY2xhbXBlZFggPSBjYy5taXNjLmNsYW1wZihcclxuICAgICAgICAgICAgICAgIG11bW15UG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuZ3JpZE1pblggKyB0aGlzLmJvdW5kYXJ5T2Zmc2V0LCB0YXJnZXRDZWxsUG9zaXRpb24ueCAtIHRoaXMuYm91bmRhcnlPZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5taW4odGhpcy5ncmlkTWF4WCAtIHRoaXMuYm91bmRhcnlPZmZzZXQsIHRhcmdldENlbGxQb3NpdGlvbi54ICsgdGhpcy5ib3VuZGFyeU9mZnNldClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgY2xhbXBlZFkgPSBjYy5taXNjLmNsYW1wZihcclxuICAgICAgICAgICAgICAgIG11bW15UG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuZ3JpZE1pblkgKyB0aGlzLmJvdW5kYXJ5T2Zmc2V0LCB0YXJnZXRDZWxsUG9zaXRpb24ueSAtIHRoaXMuYm91bmRhcnlPZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5taW4odGhpcy5ncmlkTWF4WSAtIHRoaXMuYm91bmRhcnlPZmZzZXQsIHRhcmdldENlbGxQb3NpdGlvbi55ICsgdGhpcy5ib3VuZGFyeU9mZnNldClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmVycm9yKENsYW1wZWQgcG9zaXRpb246ICR7Y2xhbXBlZFh9LCAke2NsYW1wZWRZfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ011bW15IHBvc2l0aW9uOicsIG11bW15UG9zaXRpb24ueCwgbXVtbXlQb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRGlhbW9uZCBwb3NpdGlvbjonLCBkaWFtb25kUG9zaXRpb24ueCwgZGlhbW9uZFBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICAgICAgLy8gTW92ZSBtdW1teSB0byB0aGUgbmVhcmVzdCBkaWFtb25kIHdoaWxlIHN0YXlpbmcgd2l0aGluIGJvdW5kc1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMobXVtbXlQb3NpdGlvbi54IC0gZGlhbW9uZFBvc2l0aW9uLngpID4gTWF0aC5hYnMobXVtbXlQb3NpdGlvbi55IC0gZGlhbW9uZFBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBuZXcgY2MuVmVjMyhjbGFtcGVkWCwgbXVtbXlQb3NpdGlvbi55LCBtdW1teVBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKGNsYW1wZWRYLCBjbGFtcGVkWSwgbXVtbXlQb3NpdGlvbi56KSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXVtbXkgcmVhY2hlZCBhIGRpYW1vbmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdERpYW1vbmQobmVhcmVzdERpYW1vbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUb05leHREaWFtb25kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKG11bW15UG9zaXRpb24ueCwgY2xhbXBlZFksIG11bW15UG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogbmV3IGNjLlZlYzMoY2xhbXBlZFgsIGNsYW1wZWRZLCBtdW1teVBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNdW1teSByZWFjaGVkIGEgZGlhbW9uZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0RGlhbW9uZChuZWFyZXN0RGlhbW9uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvTmV4dERpYW1vbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW92ZVRvTmV4dERpYW1vbmQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29sbGVjdERpYW1vbmQoZGlhbW9uZDogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kaWFtb25kcy5pbmRleE9mKGRpYW1vbmQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBkaWFtb25kLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaWFtb25kc0NvbGxlY3RlZCsrO1xyXG4gICAgfVxyXG4gICAgIGluY3JlYXNlTXVtbXlTaXplKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5jcmVhc2luZyBtdW1teSBzaXplXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsV2lkdGggPSB0aGlzLmNlbGxzWzBdPy53aWR0aCB8fCAxMDA7IC8vIERlZmF1bHQgdG8gMTAwIGlmIHVuZGVmaW5lZFxyXG4gICAgICAgIGNvbnN0IGNlbGxIZWlnaHQgPSB0aGlzLmNlbGxzWzBdPy5oZWlnaHQgfHwgMTAwO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubXVtbXkgfHwgIXRoaXMuY2VsbHNCb3gpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk11bW15IG9yIGNlbGxzQm94IGlzIG5vdCBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IG11bW15J3MgcG9zaXRpb24gdG8gd29ybGQgc3BhY2VcclxuICAgICAgICBjb25zdCBtdW1teVdvcmxkUG9zaXRpb24gPSB0aGlzLm11bW15LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5tdW1teS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgbXVtbXkncyB3b3JsZCBwb3NpdGlvbiB0byB0aGUgbG9jYWwgc3BhY2Ugb2YgY2VsbHNCb3hcclxuICAgICAgICBjb25zdCBtdW1teUxvY2FsSW5DZWxscyA9IHRoaXMuY2VsbHNCb3guY29udmVydFRvTm9kZVNwYWNlQVIobXVtbXlXb3JsZFBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtdW1teSdzIGN1cnJlbnQgYm91bmRzIGluIGNlbGxzQm94IGxvY2FsIHNwYWNlXHJcbiAgICAgICAgY29uc3QgY3VycmVudExlZnQgPSBtdW1teUxvY2FsSW5DZWxscy54IC0gdGhpcy5tdW1teS53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJpZ2h0ID0gbXVtbXlMb2NhbEluQ2VsbHMueCArIHRoaXMubXVtbXkud2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3AgPSBtdW1teUxvY2FsSW5DZWxscy55ICsgdGhpcy5tdW1teS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb3R0b20gPSBtdW1teUxvY2FsSW5DZWxscy55IC0gdGhpcy5tdW1teS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlcmUgaXMgc3BhY2UgZm9yIGV4cGFuc2lvbiBpbiBlYWNoIGRpcmVjdGlvblxyXG4gICAgICAgIGNvbnN0IGNhbkV4cGFuZExlZnQgPSBjdXJyZW50TGVmdCAtIGNlbGxXaWR0aCA+PSAtdGhpcy5jZWxsc0JveC53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kUmlnaHQgPSBjdXJyZW50UmlnaHQgKyBjZWxsV2lkdGggPD0gdGhpcy5jZWxsc0JveC53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kVXAgPSBjdXJyZW50VG9wICsgY2VsbEhlaWdodCA8PSB0aGlzLmNlbGxzQm94LmhlaWdodCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kRG93biA9IGN1cnJlbnRCb3R0b20gLSBjZWxsSGVpZ2h0ID49IC10aGlzLmNlbGxzQm94LmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNhbkV4cGFuZExlZnQsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYW5FeHBhbmRSaWdodCxcclxuICAgICAgICAgICAgdXA6IGNhbkV4cGFuZFVwLFxyXG4gICAgICAgICAgICBkb3duOiBjYW5FeHBhbmREb3duXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCB2YWxpZCBkaXJlY3Rpb25zXHJcbiAgICAgICAgY29uc3QgdmFsaWREaXJlY3Rpb25zID0gT2JqZWN0LmtleXMoZGlyZWN0aW9ucykuZmlsdGVyKGRpciA9PiBkaXJlY3Rpb25zW2Rpcl0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZhbGlkIGRpcmVjdGlvbnM6XCIsIHZhbGlkRGlyZWN0aW9ucyk7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZERpcmVjdGlvbnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggc3BhY2UgdG8gZXhwYW5kIGluIHR3byBkaXJlY3Rpb25zLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG9wcG9zaXRlIGRpcmVjdGlvbnMgKGUuZy4sIGxlZnQgYW5kIHJpZ2h0LCB1cCBhbmQgZG93bilcclxuICAgICAgICBjb25zdCBvcHBvc2l0ZVBhaXJzID0gW1twcmlvcml0aWVzLmxlZnQsIHByaW9yaXRpZXMucmlnaHRdLCBbcHJpb3JpdGllcy51cCwgcHJpb3JpdGllcy5kb3duXV07XHJcbiAgICAgICAgZm9yIChjb25zdCBbZGlyMSwgZGlyMl0gb2Ygb3Bwb3NpdGVQYWlycykge1xyXG4gICAgICAgICAgICBpZiAodmFsaWREaXJlY3Rpb25zLmluY2x1ZGVzKGRpcjEpICYmIHZhbGlkRGlyZWN0aW9ucy5pbmNsdWRlcyhkaXIyKSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhSZW1vdmluZyBvcHBvc2l0ZSBkaXJlY3Rpb25zOiAke2RpcjF9IGFuZCAke2RpcjJ9KTtcclxuICAgICAgICAgICAgICAgIHZhbGlkRGlyZWN0aW9ucy5zcGxpY2UodmFsaWREaXJlY3Rpb25zLmluZGV4T2YoZGlyMiksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZhbGlkIGRpcmVjdGlvbnMgYWZ0ZXIgcmVtb3Zpbmcgb3Bwb3NpdGVzOlwiLCB2YWxpZERpcmVjdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBTZWxlY3QgdHdvIGRpcmVjdGlvbnMgZm9yIGV4cGFuc2lvblxyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gW3ByaW9yaXRpZXMudXAsIHByaW9yaXRpZXMuZG93biwgcHJpb3JpdGllcy5sZWZ0LCBwcmlvcml0aWVzLnJpZ2h0XTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZERpcmVjdGlvbnMgPSB2YWxpZERpcmVjdGlvbnNcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHByaW9yaXR5LmluZGV4T2YoYSkgLSBwcmlvcml0eS5pbmRleE9mKGIpKVxyXG4gICAgICAgICAgICAuc2xpY2UoMCwgMik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgZGlyZWN0aW9ucyBmb3IgZXhwYW5zaW9uOlwiLCBzZWxlY3RlZERpcmVjdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBQZXJmb3JtIGV4cGFuc2lvbiBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgZGlyZWN0aW9uc1xyXG4gICAgICAgIGNvbnN0IGV4cGFuc2lvblR3ZWVucyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMubGVmdCkpIHtcclxuICAgICAgICAgICAgZXhwYW5zaW9uVHdlZW5zLnB1c2goY2MudHdlZW4odGhpcy5tdW1teSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMubXVtbXkud2lkdGggKyBjZWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5tdW1teS54IC0gY2VsbFdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMucmlnaHQpKSB7XHJcbiAgICAgICAgICAgIGV4cGFuc2lvblR3ZWVucy5wdXNoKGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMubXVtbXkueCArIGNlbGxXaWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMubXVtbXkud2lkdGggKyBjZWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkRGlyZWN0aW9ucy5pbmNsdWRlcyhwcmlvcml0aWVzLnVwKSkge1xyXG4gICAgICAgICAgICBleHBhbnNpb25Ud2VlbnMucHVzaChjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHtcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm11bW15LnkgKyBjZWxsSGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMubXVtbXkuaGVpZ2h0ICsgY2VsbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMuZG93bikpIHtcclxuICAgICAgICAgICAgZXhwYW5zaW9uVHdlZW5zLnB1c2goY2MudHdlZW4odGhpcy5tdW1teSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5tdW1teS55IC0gY2VsbEhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLm11bW15LmhlaWdodCArIGNlbGxIZWlnaHRcclxuICAgICAgICAgICAgICAgIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSB0d2VlbnMgc2VxdWVudGlhbGx5XHJcbiAgICAgICAgaWYgKGV4cGFuc2lvblR3ZWVucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGV4cGFuc2lvblR3ZWVucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuY2FsbCgoKSA9PiBjdXJyLnN0YXJ0KCkpLCBjYy50d2Vlbih0aGlzLm11bW15KSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNdW1teSBwb3NpdGlvbjpcIiwgdGhpcy5tdW1teS5wb3NpdGlvbi54LCB0aGlzLm11bW15LnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNdW1teSBzaXplOlwiLCB0aGlzLm11bW15LndpZHRoLCB0aGlzLm11bW15LmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------
