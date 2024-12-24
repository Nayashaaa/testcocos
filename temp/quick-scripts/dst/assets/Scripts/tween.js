
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