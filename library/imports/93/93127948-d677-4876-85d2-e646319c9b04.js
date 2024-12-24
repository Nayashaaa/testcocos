"use strict";
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