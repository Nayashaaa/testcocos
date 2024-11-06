
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