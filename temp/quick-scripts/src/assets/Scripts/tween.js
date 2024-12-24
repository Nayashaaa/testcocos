"use strict";
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