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