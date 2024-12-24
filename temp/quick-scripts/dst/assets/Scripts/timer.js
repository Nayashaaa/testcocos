
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