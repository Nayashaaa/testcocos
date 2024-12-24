
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
        _this.collectedDiamonds = null;
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
        if (this.mummy.width < 500 && this.mummy.height < 500) {
            for (var i = 0; i < 3; i++) {
                var cell = shuffledCells[i];
                var diamond = cc.instantiate(this.diamondPrefab);
                diamond.parent = this.node; // Attach diamond to the main scene node
                diamond.position = cell.position;
                this.diamonds.push(diamond);
            }
        }
    };
    NewClass.prototype.collectDiamond = function (diamond) {
        var _this = this;
        var index = this.diamonds.indexOf(diamond);
        if (index !== -1) {
            this.diamonds.splice(index, 1);
        }
        // Get the layouts inside collectedDiamonds
        var collectedLayouts = this.collectedDiamonds.children;
        if (collectedLayouts.length === 0) {
            console.error("No layouts inside collectedDiamonds.");
            diamond.destroy();
            return;
        }
        // Determine the target layout based on the collected count
        var targetIndex = (this.diamondsCollected % collectedLayouts.length);
        var targetLayout = collectedLayouts[targetIndex];
        // Convert the world position of the target layout to local position
        var worldPosition = targetLayout.parent.convertToWorldSpaceAR(targetLayout.position);
        var targetPosition = this.node.convertToNodeSpaceAR(worldPosition);
        // Tween the diamond to the target layout
        cc.tween(diamond)
            .to(2, { position: targetPosition }, { easing: "sineInOut" })
            .call(function () {
            // Attach the diamond to the target layout and center it
            diamond.setParent(targetLayout);
            diamond.setPosition(cc.Vec3.ZERO);
            // Increment the collected count
            _this.diamondsCollected++;
            // Process collected diamonds if three are collected
            if (_this.diamondsCollected % 3 === 0) {
                _this.collectedDiamonds.children.forEach(function (layout) {
                    layout.removeAllChildren();
                });
            }
        })
            .start();
    };
    NewClass.prototype.moveDiamondToCollected = function (diamond) {
        // Ensure collectedDiamonds has children to target
        if (!this.collectedDiamonds || this.collectedDiamonds.children.length === 0) {
            console.error("No target nodes found in collectedDiamonds.");
            return;
        }
        console.log("travelling");
        // Randomly choose one of the child nodes in collectedDiamonds
        var targetNode = this.collectedDiamonds.children[Math.floor(Math.random() * this.collectedDiamonds.children.length)];
        console.log("target position", targetNode.x, targetNode.y);
        console.log("nayasha", this.collectedDiamonds.children[0].x, this.collectedDiamonds.children[0].y);
        // Move the diamond to the selected target node with a 2-second tween
        cc.tween(diamond)
            .to(2, { position: targetNode.position }, { easing: 'sineInOut' })
            .start();
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
                _this.spawnDiamonds(); // Respawn diamonds after size increase
                _this.increaseMummySize(function () {
                    moveToNextDiamond(); // Restart movement to nearest diamond
                });
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
    NewClass.prototype.increaseMummySize = function (callback) {
        var _this = this;
        var _a, _b;
        console.log("Increasing mummy size");
        var cellWidth = ((_a = this.cells[0]) === null || _a === void 0 ? void 0 : _a.width) || 100; // Default to 100 if undefined
        var cellHeight = ((_b = this.cells[0]) === null || _b === void 0 ? void 0 : _b.height) || 100;
        if (!this.mummy || !this.cellsBox) {
            console.error("Mummy or cellsBox is not defined");
            return;
        }
        if (this.mummy.width >= 500 || this.mummy.height >= 500) {
            console.log("Mummy has reached the maximum size. Game Over!");
            this.stopGame();
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
            callback === null || callback === void 0 ? void 0 : callback(); // Proceed with movement even if expansion is skipped
            return;
        }
        // Remove opposite directions (e.g., left and right, up and down)
        var oppositePairs = [[priorities.left, priorities.right], [priorities.up, priorities.down]];
        for (var _i = 0, oppositePairs_1 = oppositePairs; _i < oppositePairs_1.length; _i++) {
            var _c = oppositePairs_1[_i], dir1 = _c[0], dir2 = _c[1];
            if (validDirections.includes(dir1) && validDirections.includes(dir2)) {
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
            expansionTweens.reduce(function (prev, curr) { return prev.call(function () { return curr.start(); }); }, cc.tween(this.mummy))
                .call(function () {
                // Wait for 2 seconds after the expansion is complete
                _this.scheduleOnce(function () {
                    callback === null || callback === void 0 ? void 0 : callback();
                }, 2);
            })
                .start();
        }
        else {
            callback === null || callback === void 0 ? void 0 : callback(); // Proceed with movement if no expansion happens
        }
    };
    NewClass.prototype.stopGame = function () {
        console.log("Game has been stopped.");
        cc.director.pause(); // Pauses the game
        // Add any additional actions, such as showing a game-over UI
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
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "collectedDiamonds", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcbW9tdW1teS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRztJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0lBQ2QsRUFBRSxFQUFFLElBQUk7SUFDUixJQUFJLEVBQUUsTUFBTTtDQUNmLENBQUE7QUFDRCxJQUFNLFVBQVUsR0FBRztJQUNmLEVBQUUsRUFBRSxJQUFJO0lBQ1IsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0NBQ2pCLENBQUM7QUFFSSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJWQztRQXpWRyxXQUFLLEdBQWMsRUFBRSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyx1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFjLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQjtRQUM1Qyx1QkFBaUIsR0FBVyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7UUFDaEUsb0JBQWMsR0FBVyxJQUFJLENBQUMsQ0FBQywwQkFBMEI7UUFFakUscUJBQXFCO1FBQ2IsY0FBUSxHQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCO1FBQ3pDLGNBQVEsR0FBVyxHQUFHLENBQUMsQ0FBRSxjQUFjO1FBQ3ZDLGNBQVEsR0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQjtRQUN6QyxjQUFRLEdBQVcsR0FBRyxDQUFDLENBQUUsY0FBYzs7SUFtVW5ELENBQUM7SUFqVUcsd0JBQUssR0FBTDtRQUNJLElBQUks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InNvdXJjZXNDb250ZW50IjpbImNvbnN0IERpcmVjdGlvbnNDb25zdCA9IHtcclxuICAgIGxlZnQ6IFwibGVmdFwiLFxyXG4gICAgcmlnaHQ6IFwicmlnaHRcIixcclxuICAgIHVwOiBcInVwXCIsXHJcbiAgICBkb3duOiBcImRvd25cIlxyXG59XHJcbmNvbnN0IHByaW9yaXRpZXMgPSB7XHJcbiAgICB1cDogXCJ1cFwiLFxyXG4gICAgZG93bjogXCJkb3duXCIsXHJcbiAgICBsZWZ0OiBcImxlZnRcIixcclxuICAgIHJpZ2h0OiBcInJpZ2h0XCJcclxufTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgY2VsbHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbXVtbXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2VsbHNCb3g6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBkaWFtb25kUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29sbGVjdGVkRGlhbW9uZHM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGlhbW9uZHM6IGNjLk5vZGVbXSA9IFtdOyAvLyBBY3RpdmUgZGlhbW9uZHNcclxuICAgIHByaXZhdGUgZGlhbW9uZHNDb2xsZWN0ZWQ6IG51bWJlciA9IDA7IC8vIENvdW50ZXIgZm9yIGRpYW1vbmRzIGNvbGxlY3RlZFxyXG4gICAgcHJpdmF0ZSBib3VuZGFyeU9mZnNldDogbnVtYmVyID0gbnVsbDsgLy8gSW5pdGlhbCBib3VuZGFyeSBvZmZzZXRcclxuXHJcbiAgICAvLyBEZWZpbmUgZ3JpZCBib3VuZHNcclxuICAgIHByaXZhdGUgZ3JpZE1pblg6IG51bWJlciA9IC0yMDA7IC8vIEJvdHRvbS1sZWZ0IFhcclxuICAgIHByaXZhdGUgZ3JpZE1heFg6IG51bWJlciA9IDIwMDsgIC8vIFRvcC1yaWdodCBYXHJcbiAgICBwcml2YXRlIGdyaWRNaW5ZOiBudW1iZXIgPSAtMjAwOyAvLyBCb3R0b20tbGVmdCBZXHJcbiAgICBwcml2YXRlIGdyaWRNYXhZOiBudW1iZXIgPSAyMDA7ICAvLyBUb3AtcmlnaHQgWVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3Bhd25EaWFtb25kcygpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvTmVhcmVzdERpYW1vbmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25EaWFtb25kcygpIHtcclxuICAgICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgZGlhbW9uZHNcclxuICAgICAgICB0aGlzLmRpYW1vbmRzLmZvckVhY2goZGlhbW9uZCA9PiBkaWFtb25kLmRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy5kaWFtb25kcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBTaHVmZmxlIGNlbGwgcG9zaXRpb25zIHJhbmRvbWx5XHJcbiAgICAgICAgY29uc3Qgc2h1ZmZsZWRDZWxscyA9IHRoaXMuY2VsbHMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tdW1teS53aWR0aDw1MDAgJiYgdGhpcy5tdW1teS5oZWlnaHQ8NTAwKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBzaHVmZmxlZENlbGxzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbW9uZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlhbW9uZFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBkaWFtb25kLnBhcmVudCA9IHRoaXMubm9kZTsgLy8gQXR0YWNoIGRpYW1vbmQgdG8gdGhlIG1haW4gc2NlbmUgbm9kZVxyXG4gICAgICAgICAgICAgICAgZGlhbW9uZC5wb3NpdGlvbiA9IGNlbGwucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYW1vbmRzLnB1c2goZGlhbW9uZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29sbGVjdERpYW1vbmQoZGlhbW9uZDogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kaWFtb25kcy5pbmRleE9mKGRpYW1vbmQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIEdldCB0aGUgbGF5b3V0cyBpbnNpZGUgY29sbGVjdGVkRGlhbW9uZHNcclxuICAgICAgICBjb25zdCBjb2xsZWN0ZWRMYXlvdXRzID0gdGhpcy5jb2xsZWN0ZWREaWFtb25kcy5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoY29sbGVjdGVkTGF5b3V0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGxheW91dHMgaW5zaWRlIGNvbGxlY3RlZERpYW1vbmRzLlwiKTtcclxuICAgICAgICAgICAgZGlhbW9uZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHRhcmdldCBsYXlvdXQgYmFzZWQgb24gdGhlIGNvbGxlY3RlZCBjb3VudFxyXG4gICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gKHRoaXMuZGlhbW9uZHNDb2xsZWN0ZWQgJSBjb2xsZWN0ZWRMYXlvdXRzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0TGF5b3V0ID0gY29sbGVjdGVkTGF5b3V0c1t0YXJnZXRJbmRleF07XHJcbiAgICBcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSB3b3JsZCBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGxheW91dCB0byBsb2NhbCBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zaXRpb24gPSB0YXJnZXRMYXlvdXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXRMYXlvdXQucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zaXRpb24pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gVHdlZW4gdGhlIGRpYW1vbmQgdG8gdGhlIHRhcmdldCBsYXlvdXRcclxuICAgICAgICBjYy50d2VlbihkaWFtb25kKVxyXG4gICAgICAgICAgICAudG8oMiwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBkaWFtb25kIHRvIHRoZSB0YXJnZXQgbGF5b3V0IGFuZCBjZW50ZXIgaXRcclxuICAgICAgICAgICAgICAgIGRpYW1vbmQuc2V0UGFyZW50KHRhcmdldExheW91dCk7XHJcbiAgICAgICAgICAgICAgICBkaWFtb25kLnNldFBvc2l0aW9uKGNjLlZlYzMuWkVSTyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIEluY3JlbWVudCB0aGUgY29sbGVjdGVkIGNvdW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYW1vbmRzQ29sbGVjdGVkKys7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgY29sbGVjdGVkIGRpYW1vbmRzIGlmIHRocmVlIGFyZSBjb2xsZWN0ZWRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpYW1vbmRzQ29sbGVjdGVkICUgMyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGVkRGlhbW9uZHMuY2hpbGRyZW4uZm9yRWFjaChsYXlvdXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQucmVtb3ZlQWxsQ2hpbGRyZW4oKTt9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbnhcclxuXHJcbiAgICBtb3ZlRGlhbW9uZFRvQ29sbGVjdGVkKGRpYW1vbmQ6IGNjLk5vZGUpIHtcclxuICAgICAgICAvLyBFbnN1cmUgY29sbGVjdGVkRGlhbW9uZHMgaGFzIGNoaWxkcmVuIHRvIHRhcmdldFxyXG4gICAgICAgIGlmICghdGhpcy5jb2xsZWN0ZWREaWFtb25kcyB8fCB0aGlzLmNvbGxlY3RlZERpYW1vbmRzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gdGFyZ2V0IG5vZGVzIGZvdW5kIGluIGNvbGxlY3RlZERpYW1vbmRzLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmF2ZWxsaW5nXCIpO1xyXG4gICAgICAgIC8vIFJhbmRvbWx5IGNob29zZSBvbmUgb2YgdGhlIGNoaWxkIG5vZGVzIGluIGNvbGxlY3RlZERpYW1vbmRzXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuY29sbGVjdGVkRGlhbW9uZHMuY2hpbGRyZW5bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb2xsZWN0ZWREaWFtb25kcy5jaGlsZHJlbi5sZW5ndGgpXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldCBwb3NpdGlvblwiLCB0YXJnZXROb2RlLngsIHRhcmdldE5vZGUueSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuYXlhc2hhXCIsdGhpcy5jb2xsZWN0ZWREaWFtb25kcy5jaGlsZHJlblswXS54LHRoaXMuY29sbGVjdGVkRGlhbW9uZHMuY2hpbGRyZW5bMF0ueSk7XHJcblxyXG4gICAgICAgIC8vIE1vdmUgdGhlIGRpYW1vbmQgdG8gdGhlIHNlbGVjdGVkIHRhcmdldCBub2RlIHdpdGggYSAyLXNlY29uZCB0d2VlblxyXG4gICAgICAgIGNjLnR3ZWVuKGRpYW1vbmQpXHJcbiAgICAgICAgICAgIC50bygyLCB7IHBvc2l0aW9uOiB0YXJnZXROb2RlLnBvc2l0aW9uIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbW92ZVRvTmVhcmVzdERpYW1vbmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bW15IHx8IHRoaXMuZGlhbW9uZHMubGVuZ3RoID09PSAwIHx8IHRoaXMuY2VsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFbnN1cmUgbXVtbXksIGRpYW1vbmRzLCBhbmQgY2VsbHMgYXJlIHByb3Blcmx5IGFzc2lnbmVkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW92ZVRvTmV4dERpYW1vbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpYW1vbmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNdW1teSByZWFjaGVkIGFsbCBkaWFtb25kcyFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRGlhbW9uZHMoKTsgLy8gUmVzcGF3biBkaWFtb25kcyBhZnRlciBzaXplIGluY3JlYXNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlYXNlTXVtbXlTaXplKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlVG9OZXh0RGlhbW9uZCgpOyAvLyBSZXN0YXJ0IG1vdmVtZW50IHRvIG5lYXJlc3QgZGlhbW9uZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBib3VuZGFyeSBvZmZzZXRcclxuICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlQm91bmRhcnlPZmZzZXQgPSAobXVtbXlXaWR0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsV2lkdGggPSB0aGlzLmNlbGxzWzBdLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG11bW15V2lkdGggLyAyIC0gY2VsbFdpZHRoIC8gMjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIG5lYXJlc3QgZGlhbW9uZFxyXG4gICAgICAgICAgICBjb25zdCBtdW1teVBvc2l0aW9uID0gdGhpcy5tdW1teS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IG5lYXJlc3REaWFtb25kID0gdGhpcy5kaWFtb25kc1swXTtcclxuICAgICAgICAgICAgbGV0IHNob3J0ZXN0RGlzdGFuY2UgPSBtdW1teVBvc2l0aW9uLnN1YihuZWFyZXN0RGlhbW9uZC5wb3NpdGlvbikubWFnKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpYW1vbmRzLmZvckVhY2goZGlhbW9uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IG11bW15UG9zaXRpb24uc3ViKGRpYW1vbmQucG9zaXRpb24pLm1hZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgc2hvcnRlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICBuZWFyZXN0RGlhbW9uZCA9IGRpYW1vbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlhbW9uZFBvc2l0aW9uID0gbmVhcmVzdERpYW1vbmQucG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICAvLyBJZGVudGlmeSB0aGUgY2VsbCBjb250YWluaW5nIHRoZSBkaWFtb25kXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldENlbGwgPSB0aGlzLmNlbGxzLmZpbmQoY2VsbCA9PiBjZWxsLnBvc2l0aW9uLmVxdWFscyhkaWFtb25kUG9zaXRpb24pKTtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXRDZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTmVhcmVzdCBkaWFtb25kIGlzIG5vdCBpbnNpZGUgYW55IGNlbGwuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDZWxsUG9zaXRpb24gPSB0YXJnZXRDZWxsLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGJvdW5kYXJ5IG9mZnNldFxyXG4gICAgICAgICAgICB0aGlzLmJvdW5kYXJ5T2Zmc2V0ID0gY2FsY3VsYXRlQm91bmRhcnlPZmZzZXQodGhpcy5tdW1teS53aWR0aCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm91bmRhcnlPZmZzZXQ6XCIsIHRoaXMuYm91bmRhcnlPZmZzZXQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENsYW1wIG11bW15J3MgcG9zaXRpb24gdG8gc3RheSB3aXRoaW4gdGhlIGNlbGxzIGJveFxyXG4gICAgICAgICAgICBjb25zdCBjbGFtcGVkWCA9IGNjLm1pc2MuY2xhbXBmKFxyXG4gICAgICAgICAgICAgICAgbXVtbXlQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgodGhpcy5ncmlkTWluWCArIHRoaXMuYm91bmRhcnlPZmZzZXQsIHRhcmdldENlbGxQb3NpdGlvbi54IC0gdGhpcy5ib3VuZGFyeU9mZnNldCksXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1pbih0aGlzLmdyaWRNYXhYIC0gdGhpcy5ib3VuZGFyeU9mZnNldCwgdGFyZ2V0Q2VsbFBvc2l0aW9uLnggKyB0aGlzLmJvdW5kYXJ5T2Zmc2V0KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBjbGFtcGVkWSA9IGNjLm1pc2MuY2xhbXBmKFxyXG4gICAgICAgICAgICAgICAgbXVtbXlQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgodGhpcy5ncmlkTWluWSArIHRoaXMuYm91bmRhcnlPZmZzZXQsIHRhcmdldENlbGxQb3NpdGlvbi55IC0gdGhpcy5ib3VuZGFyeU9mZnNldCksXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1pbih0aGlzLmdyaWRNYXhZIC0gdGhpcy5ib3VuZGFyeU9mZnNldCwgdGFyZ2V0Q2VsbFBvc2l0aW9uLnkgKyB0aGlzLmJvdW5kYXJ5T2Zmc2V0KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUuZXJyb3IoQ2xhbXBlZCBwb3NpdGlvbjogJHtjbGFtcGVkWH0sICR7Y2xhbXBlZFl9KTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTXVtbXkgcG9zaXRpb246JywgbXVtbXlQb3NpdGlvbi54LCBtdW1teVBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdEaWFtb25kIHBvc2l0aW9uOicsIGRpYW1vbmRQb3NpdGlvbi54LCBkaWFtb25kUG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgICAgICAvLyBNb3ZlIG11bW15IHRvIHRoZSBuZWFyZXN0IGRpYW1vbmQgd2hpbGUgc3RheWluZyB3aXRoaW4gYm91bmRzXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhtdW1teVBvc2l0aW9uLnggLSBkaWFtb25kUG9zaXRpb24ueCkgPiBNYXRoLmFicyhtdW1teVBvc2l0aW9uLnkgLSBkaWFtb25kUG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKGNsYW1wZWRYLCBtdW1teVBvc2l0aW9uLnksIG11bW15UG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogbmV3IGNjLlZlYzMoY2xhbXBlZFgsIGNsYW1wZWRZLCBtdW1teVBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNdW1teSByZWFjaGVkIGEgZGlhbW9uZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0RGlhbW9uZChuZWFyZXN0RGlhbW9uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvTmV4dERpYW1vbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tdW1teSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogbmV3IGNjLlZlYzMobXVtbXlQb3NpdGlvbi54LCBjbGFtcGVkWSwgbXVtbXlQb3NpdGlvbi56KSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tdW1teSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBuZXcgY2MuVmVjMyhjbGFtcGVkWCwgY2xhbXBlZFksIG11bW15UG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk11bW15IHJlYWNoZWQgYSBkaWFtb25kIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3REaWFtb25kKG5lYXJlc3REaWFtb25kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlVG9OZXh0RGlhbW9uZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtb3ZlVG9OZXh0RGlhbW9uZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgaW5jcmVhc2VNdW1teVNpemUoY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbmNyZWFzaW5nIG11bW15IHNpemVcIik7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjZWxsV2lkdGggPSB0aGlzLmNlbGxzWzBdPy53aWR0aCB8fCAxMDA7IC8vIERlZmF1bHQgdG8gMTAwIGlmIHVuZGVmaW5lZFxyXG4gICAgICAgIGNvbnN0IGNlbGxIZWlnaHQgPSB0aGlzLmNlbGxzWzBdPy5oZWlnaHQgfHwgMTAwO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLm11bW15IHx8ICF0aGlzLmNlbGxzQm94KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNdW1teSBvciBjZWxsc0JveCBpcyBub3QgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdW1teS53aWR0aCA+PSA1MDAgfHwgdGhpcy5tdW1teS5oZWlnaHQgPj0gNTAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXVtbXkgaGFzIHJlYWNoZWQgdGhlIG1heGltdW0gc2l6ZS4gR2FtZSBPdmVyIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvLyBDb252ZXJ0IG11bW15J3MgcG9zaXRpb24gdG8gd29ybGQgc3BhY2VcclxuICAgICAgICBjb25zdCBtdW1teVdvcmxkUG9zaXRpb24gPSB0aGlzLm11bW15LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5tdW1teS5wb3NpdGlvbik7XHJcbiAgICBcclxuICAgICAgICAvLyBDb252ZXJ0IG11bW15J3Mgd29ybGQgcG9zaXRpb24gdG8gdGhlIGxvY2FsIHNwYWNlIG9mIGNlbGxzQm94XHJcbiAgICAgICAgY29uc3QgbXVtbXlMb2NhbEluQ2VsbHMgPSB0aGlzLmNlbGxzQm94LmNvbnZlcnRUb05vZGVTcGFjZUFSKG11bW15V29ybGRQb3NpdGlvbik7XHJcbiAgICBcclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG11bW15J3MgY3VycmVudCBib3VuZHMgaW4gY2VsbHNCb3ggbG9jYWwgc3BhY2VcclxuICAgICAgICBjb25zdCBjdXJyZW50TGVmdCA9IG11bW15TG9jYWxJbkNlbGxzLnggLSB0aGlzLm11bW15LndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCBjdXJyZW50UmlnaHQgPSBtdW1teUxvY2FsSW5DZWxscy54ICsgdGhpcy5tdW1teS53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRvcCA9IG11bW15TG9jYWxJbkNlbGxzLnkgKyB0aGlzLm11bW15LmhlaWdodCAvIDI7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEJvdHRvbSA9IG11bW15TG9jYWxJbkNlbGxzLnkgLSB0aGlzLm11bW15LmhlaWdodCAvIDI7XHJcbiAgICBcclxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlcmUgaXMgc3BhY2UgZm9yIGV4cGFuc2lvbiBpbiBlYWNoIGRpcmVjdGlvblxyXG4gICAgICAgIGNvbnN0IGNhbkV4cGFuZExlZnQgPSBjdXJyZW50TGVmdCAtIGNlbGxXaWR0aCA+PSAtdGhpcy5jZWxsc0JveC53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kUmlnaHQgPSBjdXJyZW50UmlnaHQgKyBjZWxsV2lkdGggPD0gdGhpcy5jZWxsc0JveC53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kVXAgPSBjdXJyZW50VG9wICsgY2VsbEhlaWdodCA8PSB0aGlzLmNlbGxzQm94LmhlaWdodCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kRG93biA9IGN1cnJlbnRCb3R0b20gLSBjZWxsSGVpZ2h0ID49IC10aGlzLmNlbGxzQm94LmhlaWdodCAvIDI7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYW5FeHBhbmRMZWZ0LFxyXG4gICAgICAgICAgICByaWdodDogY2FuRXhwYW5kUmlnaHQsXHJcbiAgICAgICAgICAgIHVwOiBjYW5FeHBhbmRVcCxcclxuICAgICAgICAgICAgZG93bjogY2FuRXhwYW5kRG93blxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAvLyBFeHRyYWN0IHZhbGlkIGRpcmVjdGlvbnNcclxuICAgICAgICBjb25zdCB2YWxpZERpcmVjdGlvbnMgPSBPYmplY3Qua2V5cyhkaXJlY3Rpb25zKS5maWx0ZXIoZGlyID0+IGRpcmVjdGlvbnNbZGlyXSk7XHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZhbGlkIGRpcmVjdGlvbnM6XCIsIHZhbGlkRGlyZWN0aW9ucyk7XHJcbiAgICBcclxuICAgICAgICBpZiAodmFsaWREaXJlY3Rpb25zLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3QgZW5vdWdoIHNwYWNlIHRvIGV4cGFuZCBpbiB0d28gZGlyZWN0aW9ucy5cIik7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrPy4oKTsgLy8gUHJvY2VlZCB3aXRoIG1vdmVtZW50IGV2ZW4gaWYgZXhwYW5zaW9uIGlzIHNraXBwZWRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIFJlbW92ZSBvcHBvc2l0ZSBkaXJlY3Rpb25zIChlLmcuLCBsZWZ0IGFuZCByaWdodCwgdXAgYW5kIGRvd24pXHJcbiAgICAgICAgY29uc3Qgb3Bwb3NpdGVQYWlycyA9IFtbcHJpb3JpdGllcy5sZWZ0LCBwcmlvcml0aWVzLnJpZ2h0XSwgW3ByaW9yaXRpZXMudXAsIHByaW9yaXRpZXMuZG93bl1dO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2RpcjEsIGRpcjJdIG9mIG9wcG9zaXRlUGFpcnMpIHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkRGlyZWN0aW9ucy5pbmNsdWRlcyhkaXIxKSAmJiB2YWxpZERpcmVjdGlvbnMuaW5jbHVkZXMoZGlyMikpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkRGlyZWN0aW9ucy5zcGxpY2UodmFsaWREaXJlY3Rpb25zLmluZGV4T2YoZGlyMiksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWYWxpZCBkaXJlY3Rpb25zIGFmdGVyIHJlbW92aW5nIG9wcG9zaXRlczpcIiwgdmFsaWREaXJlY3Rpb25zKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFNlbGVjdCB0d28gZGlyZWN0aW9ucyBmb3IgZXhwYW5zaW9uXHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBbcHJpb3JpdGllcy51cCwgcHJpb3JpdGllcy5kb3duLCBwcmlvcml0aWVzLmxlZnQsIHByaW9yaXRpZXMucmlnaHRdO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGlyZWN0aW9ucyA9IHZhbGlkRGlyZWN0aW9uc1xyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gcHJpb3JpdHkuaW5kZXhPZihhKSAtIHByaW9yaXR5LmluZGV4T2YoYikpXHJcbiAgICAgICAgICAgIC5zbGljZSgwLCAyKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgZGlyZWN0aW9ucyBmb3IgZXhwYW5zaW9uOlwiLCBzZWxlY3RlZERpcmVjdGlvbnMpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gUGVyZm9ybSBleHBhbnNpb24gYmFzZWQgb24gdGhlIHNlbGVjdGVkIGRpcmVjdGlvbnNcclxuICAgICAgICBjb25zdCBleHBhbnNpb25Ud2VlbnMgPSBbXTtcclxuICAgIFxyXG4gICAgICAgIGlmIChzZWxlY3RlZERpcmVjdGlvbnMuaW5jbHVkZXMocHJpb3JpdGllcy5sZWZ0KSkge1xyXG4gICAgICAgICAgICBleHBhbnNpb25Ud2VlbnMucHVzaChjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5tdW1teS53aWR0aCArIGNlbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLm11bW15LnggLSBjZWxsV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMucmlnaHQpKSB7XHJcbiAgICAgICAgICAgIGV4cGFuc2lvblR3ZWVucy5wdXNoKGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMubXVtbXkueCArIGNlbGxXaWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMubXVtbXkud2lkdGggKyBjZWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkRGlyZWN0aW9ucy5pbmNsdWRlcyhwcmlvcml0aWVzLnVwKSkge1xyXG4gICAgICAgICAgICBleHBhbnNpb25Ud2VlbnMucHVzaChjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHtcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm11bW15LnkgKyBjZWxsSGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMubXVtbXkuaGVpZ2h0ICsgY2VsbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMuZG93bikpIHtcclxuICAgICAgICAgICAgZXhwYW5zaW9uVHdlZW5zLnB1c2goY2MudHdlZW4odGhpcy5tdW1teSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5tdW1teS55IC0gY2VsbEhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLm11bW15LmhlaWdodCArIGNlbGxIZWlnaHRcclxuICAgICAgICAgICAgICAgIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBTdGFydCB0aGUgdHdlZW5zIHNlcXVlbnRpYWxseVxyXG4gICAgICAgIGlmIChleHBhbnNpb25Ud2VlbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBleHBhbnNpb25Ud2VlbnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmNhbGwoKCkgPT4gY3Vyci5zdGFydCgpKSwgY2MudHdlZW4odGhpcy5tdW1teSkpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgMiBzZWNvbmRzIGFmdGVyIHRoZSBleHBhbnNpb24gaXMgY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsYmFjaz8uKCk7IC8vIFByb2NlZWQgd2l0aCBtb3ZlbWVudCBpZiBubyBleHBhbnNpb24gaGFwcGVuc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3BHYW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBoYXMgYmVlbiBzdG9wcGVkLlwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpOyAvLyBQYXVzZXMgdGhlIGdhbWVcclxuICAgICAgICAvLyBBZGQgYW55IGFkZGl0aW9uYWwgYWN0aW9ucywgc3VjaCBhcyBzaG93aW5nIGEgZ2FtZS1vdmVyIFVJXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxufSJdfQ==