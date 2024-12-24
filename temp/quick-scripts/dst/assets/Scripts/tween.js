
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
        _this.node1 = null;
        _this.node2 = null;
        _this.node3 = null;
        _this.flipButton = null;
        // Properties to store original colors
        _this.originalColors = {
            node1: cc.Color.MAGENTA,
            node2: cc.Color.GREEN,
            node3: cc.Color.BLUE,
        };
        // Track the color state
        _this.isRed = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // Set the original colors of the nodes
        this.node1.children[0].color = this.originalColors.node1;
        this.node2.children[0].color = this.originalColors.node2;
        this.node3.children[0].color = this.originalColors.node3;
        this.flipButton.node.on('click', this.flipAllNodes, this);
    };
    NewClass.prototype.flipAllNodes = function () {
        var _this = this;
        // Define the flip and color change animation for each node
        var flipTween = function (node, originalColor) {
            return cc.tween(node)
                .to(0.2, { scaleX: 0 }) // Shrink horizontally to 0
                .call(function () {
                node.scaleX = -node.scaleX;
                // Toggle color based on isRed state
                node.children[0].color = _this.isRed ? originalColor : cc.Color.RED;
            })
                .to(0.2, { scaleX: 1 }); // Expand back to full size
        };
        // Run the flip and color change animation on each node with its respective original color
        flipTween(this.node1, this.originalColors.node1).start();
        flipTween(this.node2, this.originalColors.node2).start();
        flipTween(this.node3, this.originalColors.node3).start();
        // Toggle the color state for the next click
        this.isRed = !this.isRed;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "node1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "node2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "node3", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "flipButton", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdHdlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtREM7UUFoREcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0Isc0NBQXNDO1FBQzlCLG9CQUFjLEdBQUc7WUFDckIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTztZQUN2QixLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3JCLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7U0FDdkIsQ0FBQztRQUVGLHdCQUF3QjtRQUNoQixXQUFLLEdBQVksS0FBSyxDQUFDOztJQWdDbkMsQ0FBQztJQTlCRyx5QkFBTSxHQUFOO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBRXpELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUFBLGlCQW9CQztRQW5CRywyREFBMkQ7UUFDM0QsSUFBTSxTQUFTLEdBQUcsVUFBQyxJQUFhLEVBQUUsYUFBdUI7WUFDckQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDaEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLDJCQUEyQjtpQkFDbkQsSUFBSSxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixvQ0FBb0M7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDdkUsQ0FBQyxDQUFDO2lCQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLDJCQUEyQjtRQUM3RCxDQUFDLENBQUM7UUFFRiwwRkFBMEY7UUFDMUYsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6RCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pELFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFekQsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUEvQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUztJQVRaLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRDVCO0lBQUQsZUFBQztDQW5ERCxBQW1EQyxDQW5EcUMsRUFBRSxDQUFDLFNBQVMsR0FtRGpEO2tCQW5Eb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub2RlMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vZGUyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm9kZTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGZsaXBCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgLy8gUHJvcGVydGllcyB0byBzdG9yZSBvcmlnaW5hbCBjb2xvcnNcclxuICAgIHByaXZhdGUgb3JpZ2luYWxDb2xvcnMgPSB7XHJcbiAgICAgICAgbm9kZTE6IGNjLkNvbG9yLk1BR0VOVEEsXHJcbiAgICAgICAgbm9kZTI6IGNjLkNvbG9yLkdSRUVOLFxyXG4gICAgICAgIG5vZGUzOiBjYy5Db2xvci5CTFVFLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gVHJhY2sgdGhlIGNvbG9yIHN0YXRlXHJcbiAgICBwcml2YXRlIGlzUmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIFNldCB0aGUgb3JpZ2luYWwgY29sb3JzIG9mIHRoZSBub2Rlc1xyXG4gICAgICAgIHRoaXMubm9kZTEuY2hpbGRyZW5bMF0uY29sb3IgPSB0aGlzLm9yaWdpbmFsQ29sb3JzLm5vZGUxO1xyXG4gICAgICAgIHRoaXMubm9kZTIuY2hpbGRyZW5bMF0uY29sb3IgPSB0aGlzLm9yaWdpbmFsQ29sb3JzLm5vZGUyO1xyXG4gICAgICAgIHRoaXMubm9kZTMuY2hpbGRyZW5bMF0uY29sb3IgPSB0aGlzLm9yaWdpbmFsQ29sb3JzLm5vZGUzO1xyXG5cclxuICAgICAgICB0aGlzLmZsaXBCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLmZsaXBBbGxOb2RlcywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcEFsbE5vZGVzKCkge1xyXG4gICAgICAgIC8vIERlZmluZSB0aGUgZmxpcCBhbmQgY29sb3IgY2hhbmdlIGFuaW1hdGlvbiBmb3IgZWFjaCBub2RlXHJcbiAgICAgICAgY29uc3QgZmxpcFR3ZWVuID0gKG5vZGU6IGNjLk5vZGUsIG9yaWdpbmFsQ29sb3I6IGNjLkNvbG9yKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZVg6IDAgfSkgIC8vIFNocmluayBob3Jpem9udGFsbHkgdG8gMFxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGVYID0gLW5vZGUuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBjb2xvciBiYXNlZCBvbiBpc1JlZCBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW5bMF0uY29sb3IgPSB0aGlzLmlzUmVkID8gb3JpZ2luYWxDb2xvciA6IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlWDogMSB9KTsgIC8vIEV4cGFuZCBiYWNrIHRvIGZ1bGwgc2l6ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFJ1biB0aGUgZmxpcCBhbmQgY29sb3IgY2hhbmdlIGFuaW1hdGlvbiBvbiBlYWNoIG5vZGUgd2l0aCBpdHMgcmVzcGVjdGl2ZSBvcmlnaW5hbCBjb2xvclxyXG4gICAgICAgIGZsaXBUd2Vlbih0aGlzLm5vZGUxLCB0aGlzLm9yaWdpbmFsQ29sb3JzLm5vZGUxKS5zdGFydCgpO1xyXG4gICAgICAgIGZsaXBUd2Vlbih0aGlzLm5vZGUyLCB0aGlzLm9yaWdpbmFsQ29sb3JzLm5vZGUyKS5zdGFydCgpO1xyXG4gICAgICAgIGZsaXBUd2Vlbih0aGlzLm5vZGUzLCB0aGlzLm9yaWdpbmFsQ29sb3JzLm5vZGUzKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyBUb2dnbGUgdGhlIGNvbG9yIHN0YXRlIGZvciB0aGUgbmV4dCBjbGlja1xyXG4gICAgICAgIHRoaXMuaXNSZWQgPSAhdGhpcy5pc1JlZDtcclxuICAgIH1cclxufVxyXG4iXX0=