
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQW5ERDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt1Q0FDQztJQUhKLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F1RHpCO0lBQUQsWUFBQztDQXZERCxBQXVEQyxDQXZEa0MsRUFBRSxDQUFDLFNBQVMsR0F1RDlDO2tCQXZEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIHJvd3M6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgaW50ZXJ2YWxJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7IFxyXG4gICAgcHJpdmF0ZSBpc0FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlOyBcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25cIik7XHJcbiAgICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25Db21wb25lbnQgPSBidXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmIChidXR0b25Db21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbXBvbmVudC5ub2RlLm9uKCdjbGljaycsIHRoaXMub25CdXR0b25DbGlja2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wUG9zaXRpb25VcGRhdGVzKCk7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvblVwZGF0ZXMoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0UG9zaXRpb25VcGRhdGVzKCkge1xyXG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlOyBcclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHRleHRzIG9mIGVhY2ggbm9kZVxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0cyA9IHRoaXMucm93cy5tYXAocm93ID0+IHJvdy5nZXRDaGlsZEJ5TmFtZShcIlRleHRcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcpO1xyXG5jb25zb2xlLmxvZyhcImZ1aFwiKTtcclxuICAgICAgICAgICAgLy8gU2hpZnQgdGhlIHRleHRzIHRvIGNyZWF0ZSB0aGUgc3Bpbm5pbmcgZWZmZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGV4dCA9IHRleHRzWzBdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGV4dHNbaV0gPSB0ZXh0c1tpICsgMV07IC8vIFNoaWZ0IHRleHRzIHRvIHRoZSBsZWZ0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dHNbdGV4dHMubGVuZ3RoIC0gMV0gPSBmaXJzdFRleHQ7IC8vIFNldCB0aGUgbGFzdCB0ZXh0IHRvIHRoZSBvcmlnaW5hbCBmaXJzdCB0ZXh0XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHQgbGFiZWxzIGluIGVhY2ggbm9kZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSB0aGlzLnJvd3NbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJUZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zdHJpbmcgPSB0ZXh0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7IFxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BQb3NpdGlvblVwZGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlOyBcclxuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbElkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTsgXHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdHdlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
