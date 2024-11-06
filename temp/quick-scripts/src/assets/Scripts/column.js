"use strict";
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