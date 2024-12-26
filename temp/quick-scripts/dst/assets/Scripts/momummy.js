
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
        _this.spinBtn = null;
        _this.cells = [];
        _this.mummy = null;
        _this.cellsBox = null;
        _this.diamondPrefab = null;
        _this.collectedDiamonds = null;
        _this.diamonds = [];
        _this.diamondsCollected = 0;
        _this.boundaryOffset = null;
        _this.gridMinX = -200; // Bottom-left X
        _this.gridMaxX = 200; // Top-right X
        _this.gridMinY = -200; // Bottom-left Y
        _this.gridMaxY = 200; // Top-right Y
        _this.isSpawning = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.spinBtn.node.on('click', this.spawnDiamonds, this);
    };
    NewClass.prototype.spawnDiamonds = function () {
        // Remove existing diamonds
        this.diamonds.forEach(function (diamond) { return diamond.destroy(); });
        this.diamonds = [];
        // Shuffle cell positions randomly
        var shuffledCells = this.cells.sort(function () { return Math.random() - 0.5; });
        // Generate a random number between 1 and 3 (inclusive) to determine how many diamonds to spawn
        var diamondCount = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
        if (this.mummy.width < 500 && this.mummy.height < 500) {
            for (var i = 0; i < diamondCount; i++) {
                var cell = shuffledCells[i];
                var diamond = cc.instantiate(this.diamondPrefab);
                diamond.parent = this.node; // Attach diamond to the main scene node
                diamond.position = cell.position;
                this.diamonds.push(diamond);
            }
            this.moveToNearestDiamond(); // Move to the nearest diamond
        }
    };
    NewClass.prototype.collectDiamond = function (diamond) {
        var _this = this;
        var index = this.diamonds.indexOf(diamond);
        if (index !== -1) {
            this.diamonds.splice(index, 1);
        }
        this.diamondsCollected++;
        var collectedLayouts = this.collectedDiamonds.children;
        if (collectedLayouts.length === 0) {
            diamond.destroy();
            return;
        }
        var targetIndex = (this.diamondsCollected - 1) % collectedLayouts.length;
        var targetLayout = collectedLayouts[targetIndex];
        var worldPosition = targetLayout.parent.convertToWorldSpaceAR(targetLayout.position);
        var targetPosition = this.node.convertToNodeSpaceAR(worldPosition);
        cc.tween(diamond)
            .to(1, { position: targetPosition }, { easing: "sineInOut" })
            .call(function () {
            diamond.setParent(targetLayout);
            diamond.setPosition(cc.Vec3.ZERO);
            if (_this.diamondsCollected % 3 === 0) {
                collectedLayouts.forEach(function (layout) { return layout.removeAllChildren(); });
                _this.increaseMummySize();
            }
        })
            .start();
    };
    NewClass.prototype.moveToNearestDiamond = function () {
        var _this = this;
        if (!this.mummy || this.diamonds.length === 0) {
            return;
        }
        var moveToNextDiamond = function () {
            if (_this.diamonds.length === 0) {
                // this.scheduleOnce(() => {
                //     this.increaseMummySize(() => {
                //         // Restart movement if diamonds are left
                //         if (this.diamonds.length > 0) {
                //             moveToNextDiamond();
                //         }
                //     });
                // }, 3);
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
            var targetCell = _this.cells.find(function (cell) { return cell.position.equals(diamondPosition); });
            if (!targetCell) {
                return;
            }
            var targetCellPosition = targetCell.position;
            // Calculate boundary offset
            _this.boundaryOffset = calculateBoundaryOffset(_this.mummy.width);
            // Clamp mummy's position to stay within the cells box
            var clampedX = cc.misc.clampf(mummyPosition.x, Math.max(_this.gridMinX + _this.boundaryOffset, targetCellPosition.x - _this.boundaryOffset), Math.min(_this.gridMaxX - _this.boundaryOffset, targetCellPosition.x + _this.boundaryOffset));
            var clampedY = cc.misc.clampf(mummyPosition.y, Math.max(_this.gridMinY + _this.boundaryOffset, targetCellPosition.y - _this.boundaryOffset), Math.min(_this.gridMaxY - _this.boundaryOffset, targetCellPosition.y + _this.boundaryOffset));
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
        var cellWidth = ((_a = this.cells[0]) === null || _a === void 0 ? void 0 : _a.width) || 100;
        var cellHeight = ((_b = this.cells[0]) === null || _b === void 0 ? void 0 : _b.height) || 100;
        if (!this.mummy || this.mummy.width >= 500 || this.mummy.height >= 500) {
            console.log("Mummy has reached the maximum size. Game Over!");
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
        if (validDirections.length < 2) {
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
        // Select two directions for expansion
        var priority = [priorities.up, priorities.down, priorities.left, priorities.right];
        var selectedDirections = validDirections
            .sort(function (a, b) { return priority.indexOf(a) - priority.indexOf(b); })
            .slice(0, 2);
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
        cc.director.pause();
    };
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "spinBtn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcbW9tdW1teS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLFVBQVUsR0FBRztJQUNmLEVBQUUsRUFBRSxJQUFJO0lBQ1IsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0NBQ2pCLENBQUM7QUFFSSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBTQztRQXhTRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QixvQkFBYyxHQUFXLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0I7UUFDekMsY0FBUSxHQUFXLEdBQUcsQ0FBQyxDQUFFLGNBQWM7UUFDdkMsY0FBUSxHQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCO1FBQ3pDLGNBQVEsR0FBVyxHQUFHLENBQUMsQ0FBRSxjQUFjO1FBRXZDLGdCQUFVLEdBQWEsS0FBSyxDQUFDOztJQThRekMsQ0FBQztJQTVRRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxnQ0FBYSxHQUFi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SSxDQUFDO3VEQUNnQjtJQWpCakIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBTNUI7SUFBRCxlQUFDO0NBMVNELEFBMFNDLENBMVNxQyxFQUFFLENBQUMsU0FBUyxHQTBTakQ7a0JBMVNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJpb3JpdGllcyA9IHtcclxuICAgIHVwOiBcInVwXCIsXHJcbiAgICBkb3duOiBcImRvd25cIixcclxuICAgIGxlZnQ6IFwibGVmdFwiLFxyXG4gICAgcmlnaHQ6IFwicmlnaHRcIlxyXG59O1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzcGluQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBjZWxsczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtdW1teTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjZWxsc0JveDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGRpYW1vbmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2xsZWN0ZWREaWFtb25kczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBkaWFtb25kczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIGRpYW1vbmRzQ29sbGVjdGVkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBib3VuZGFyeU9mZnNldDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdyaWRNaW5YOiBudW1iZXIgPSAtMjAwOyAvLyBCb3R0b20tbGVmdCBYXHJcbiAgICBwcml2YXRlIGdyaWRNYXhYOiBudW1iZXIgPSAyMDA7ICAvLyBUb3AtcmlnaHQgWFxyXG4gICAgcHJpdmF0ZSBncmlkTWluWTogbnVtYmVyID0gLTIwMDsgLy8gQm90dG9tLWxlZnQgWVxyXG4gICAgcHJpdmF0ZSBncmlkTWF4WTogbnVtYmVyID0gMjAwOyAgLy8gVG9wLXJpZ2h0IFlcclxuXHJcbiAgICBwcml2YXRlIGlzU3Bhd25pbmcgOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc3BpbkJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMuc3Bhd25EaWFtb25kcywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25EaWFtb25kcygpIHtcclxuICAgICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgZGlhbW9uZHNcclxuICAgICAgICB0aGlzLmRpYW1vbmRzLmZvckVhY2goZGlhbW9uZCA9PiBkaWFtb25kLmRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy5kaWFtb25kcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBTaHVmZmxlIGNlbGwgcG9zaXRpb25zIHJhbmRvbWx5XHJcbiAgICAgICAgY29uc3Qgc2h1ZmZsZWRDZWxscyA9IHRoaXMuY2VsbHMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMSBhbmQgMyAoaW5jbHVzaXZlKSB0byBkZXRlcm1pbmUgaG93IG1hbnkgZGlhbW9uZHMgdG8gc3Bhd25cclxuICAgICAgICBjb25zdCBkaWFtb25kQ291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7IC8vIDEsIDIsIG9yIDNcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXVtbXkud2lkdGggPCA1MDAgJiYgdGhpcy5tdW1teS5oZWlnaHQgPCA1MDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWFtb25kQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHNodWZmbGVkQ2VsbHNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFtb25kID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWFtb25kUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGRpYW1vbmQucGFyZW50ID0gdGhpcy5ub2RlOyAvLyBBdHRhY2ggZGlhbW9uZCB0byB0aGUgbWFpbiBzY2VuZSBub2RlXHJcbiAgICAgICAgICAgICAgICBkaWFtb25kLnBvc2l0aW9uID0gY2VsbC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZHMucHVzaChkaWFtb25kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVUb05lYXJlc3REaWFtb25kKCk7IC8vIE1vdmUgdG8gdGhlIG5lYXJlc3QgZGlhbW9uZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbGxlY3REaWFtb25kKGRpYW1vbmQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGlhbW9uZHMuaW5kZXhPZihkaWFtb25kKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbW9uZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlhbW9uZHNDb2xsZWN0ZWQrKztcclxuXHJcbiAgICAgICAgY29uc3QgY29sbGVjdGVkTGF5b3V0cyA9IHRoaXMuY29sbGVjdGVkRGlhbW9uZHMuY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKGNvbGxlY3RlZExheW91dHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRpYW1vbmQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9ICh0aGlzLmRpYW1vbmRzQ29sbGVjdGVkIC0gMSkgJSBjb2xsZWN0ZWRMYXlvdXRzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCB0YXJnZXRMYXlvdXQgPSBjb2xsZWN0ZWRMYXlvdXRzW3RhcmdldEluZGV4XTtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3NpdGlvbiA9IHRhcmdldExheW91dC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldExheW91dC5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGRpYW1vbmQpXHJcbiAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiB0YXJnZXRQb3NpdGlvbiB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFtb25kLnNldFBhcmVudCh0YXJnZXRMYXlvdXQpO1xyXG4gICAgICAgICAgICAgICAgZGlhbW9uZC5zZXRQb3NpdGlvbihjYy5WZWMzLlpFUk8pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpYW1vbmRzQ29sbGVjdGVkICUgMyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3RlZExheW91dHMuZm9yRWFjaChsYXlvdXQgPT4gbGF5b3V0LnJlbW92ZUFsbENoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VNdW1teVNpemUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvTmVhcmVzdERpYW1vbmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bW15IHx8IHRoaXMuZGlhbW9uZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdmVUb05leHREaWFtb25kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaWFtb25kcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmluY3JlYXNlTXVtbXlTaXplKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gUmVzdGFydCBtb3ZlbWVudCBpZiBkaWFtb25kcyBhcmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5kaWFtb25kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBtb3ZlVG9OZXh0RGlhbW9uZCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9LCAzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIGJvdW5kYXJ5IG9mZnNldFxyXG4gICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlQm91bmRhcnlPZmZzZXQgPSAobXVtbXlXaWR0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsV2lkdGggPSB0aGlzLmNlbGxzWzBdLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG11bW15V2lkdGggLyAyIC0gY2VsbFdpZHRoIC8gMjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gRmluZCB0aGUgbmVhcmVzdCBkaWFtb25kXHJcbiAgICAgICAgICAgIGNvbnN0IG11bW15UG9zaXRpb24gPSB0aGlzLm11bW15LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBsZXQgbmVhcmVzdERpYW1vbmQgPSB0aGlzLmRpYW1vbmRzWzBdO1xyXG4gICAgICAgICAgICBsZXQgc2hvcnRlc3REaXN0YW5jZSA9IG11bW15UG9zaXRpb24uc3ViKG5lYXJlc3REaWFtb25kLnBvc2l0aW9uKS5tYWcoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlhbW9uZHMuZm9yRWFjaChkaWFtb25kID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gbXVtbXlQb3NpdGlvbi5zdWIoZGlhbW9uZC5wb3NpdGlvbikubWFnKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBzaG9ydGVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5lYXJlc3REaWFtb25kID0gZGlhbW9uZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaWFtb25kUG9zaXRpb24gPSBuZWFyZXN0RGlhbW9uZC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IHRoaXMuY2VsbHMuZmluZChjZWxsID0+IGNlbGwucG9zaXRpb24uZXF1YWxzKGRpYW1vbmRQb3NpdGlvbikpO1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldENlbGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDZWxsUG9zaXRpb24gPSB0YXJnZXRDZWxsLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGJvdW5kYXJ5IG9mZnNldFxyXG4gICAgICAgICAgICB0aGlzLmJvdW5kYXJ5T2Zmc2V0ID0gY2FsY3VsYXRlQm91bmRhcnlPZmZzZXQodGhpcy5tdW1teS53aWR0aCk7XHJcbiAgICAgICAgICAgIC8vIENsYW1wIG11bW15J3MgcG9zaXRpb24gdG8gc3RheSB3aXRoaW4gdGhlIGNlbGxzIGJveFxyXG4gICAgICAgICAgICBjb25zdCBjbGFtcGVkWCA9IGNjLm1pc2MuY2xhbXBmKFxyXG4gICAgICAgICAgICAgICAgbXVtbXlQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgodGhpcy5ncmlkTWluWCArIHRoaXMuYm91bmRhcnlPZmZzZXQsIHRhcmdldENlbGxQb3NpdGlvbi54IC0gdGhpcy5ib3VuZGFyeU9mZnNldCksXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1pbih0aGlzLmdyaWRNYXhYIC0gdGhpcy5ib3VuZGFyeU9mZnNldCwgdGFyZ2V0Q2VsbFBvc2l0aW9uLnggKyB0aGlzLmJvdW5kYXJ5T2Zmc2V0KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBjbGFtcGVkWSA9IGNjLm1pc2MuY2xhbXBmKFxyXG4gICAgICAgICAgICAgICAgbXVtbXlQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgodGhpcy5ncmlkTWluWSArIHRoaXMuYm91bmRhcnlPZmZzZXQsIHRhcmdldENlbGxQb3NpdGlvbi55IC0gdGhpcy5ib3VuZGFyeU9mZnNldCksXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1pbih0aGlzLmdyaWRNYXhZIC0gdGhpcy5ib3VuZGFyeU9mZnNldCwgdGFyZ2V0Q2VsbFBvc2l0aW9uLnkgKyB0aGlzLmJvdW5kYXJ5T2Zmc2V0KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyBNb3ZlIG11bW15IHRvIHRoZSBuZWFyZXN0IGRpYW1vbmQgd2hpbGUgc3RheWluZyB3aXRoaW4gYm91bmRzXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhtdW1teVBvc2l0aW9uLnggLSBkaWFtb25kUG9zaXRpb24ueCkgPiBNYXRoLmFicyhtdW1teVBvc2l0aW9uLnkgLSBkaWFtb25kUG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKGNsYW1wZWRYLCBtdW1teVBvc2l0aW9uLnksIG11bW15UG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogbmV3IGNjLlZlYzMoY2xhbXBlZFgsIGNsYW1wZWRZLCBtdW1teVBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNdW1teSByZWFjaGVkIGEgZGlhbW9uZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0RGlhbW9uZChuZWFyZXN0RGlhbW9uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvTmV4dERpYW1vbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBuZXcgY2MuVmVjMyhtdW1teVBvc2l0aW9uLngsIGNsYW1wZWRZLCBtdW1teVBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKGNsYW1wZWRYLCBjbGFtcGVkWSwgbXVtbXlQb3NpdGlvbi56KSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXVtbXkgcmVhY2hlZCBhIGRpYW1vbmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdERpYW1vbmQobmVhcmVzdERpYW1vbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUb05leHREaWFtb25kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1vdmVUb05leHREaWFtb25kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgaW5jcmVhc2VNdW1teVNpemUoY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGxXaWR0aCA9IHRoaXMuY2VsbHNbMF0/LndpZHRoIHx8IDEwMDtcclxuICAgICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gdGhpcy5jZWxsc1swXT8uaGVpZ2h0IHx8IDEwMDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm11bW15IHx8IHRoaXMubXVtbXkud2lkdGggPj0gNTAwIHx8IHRoaXMubXVtbXkuaGVpZ2h0ID49IDUwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk11bW15IGhhcyByZWFjaGVkIHRoZSBtYXhpbXVtIHNpemUuIEdhbWUgT3ZlciFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbnZlcnQgbXVtbXkncyBwb3NpdGlvbiB0byB3b3JsZCBzcGFjZVxyXG4gICAgICAgIGNvbnN0IG11bW15V29ybGRQb3NpdGlvbiA9IHRoaXMubXVtbXkucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm11bW15LnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBtdW1teSdzIHdvcmxkIHBvc2l0aW9uIHRvIHRoZSBsb2NhbCBzcGFjZSBvZiBjZWxsc0JveFxyXG4gICAgICAgIGNvbnN0IG11bW15TG9jYWxJbkNlbGxzID0gdGhpcy5jZWxsc0JveC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihtdW1teVdvcmxkUG9zaXRpb24pO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG11bW15J3MgY3VycmVudCBib3VuZHMgaW4gY2VsbHNCb3ggbG9jYWwgc3BhY2VcclxuICAgICAgICBjb25zdCBjdXJyZW50TGVmdCA9IG11bW15TG9jYWxJbkNlbGxzLnggLSB0aGlzLm11bW15LndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCBjdXJyZW50UmlnaHQgPSBtdW1teUxvY2FsSW5DZWxscy54ICsgdGhpcy5tdW1teS53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRvcCA9IG11bW15TG9jYWxJbkNlbGxzLnkgKyB0aGlzLm11bW15LmhlaWdodCAvIDI7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEJvdHRvbSA9IG11bW15TG9jYWxJbkNlbGxzLnkgLSB0aGlzLm11bW15LmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIC8vIERldGVybWluZSBpZiB0aGVyZSBpcyBzcGFjZSBmb3IgZXhwYW5zaW9uIGluIGVhY2ggZGlyZWN0aW9uXHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kTGVmdCA9IGN1cnJlbnRMZWZ0IC0gY2VsbFdpZHRoID49IC10aGlzLmNlbGxzQm94LndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCBjYW5FeHBhbmRSaWdodCA9IGN1cnJlbnRSaWdodCArIGNlbGxXaWR0aCA8PSB0aGlzLmNlbGxzQm94LndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCBjYW5FeHBhbmRVcCA9IGN1cnJlbnRUb3AgKyBjZWxsSGVpZ2h0IDw9IHRoaXMuY2VsbHNCb3guaGVpZ2h0IC8gMjtcclxuICAgICAgICBjb25zdCBjYW5FeHBhbmREb3duID0gY3VycmVudEJvdHRvbSAtIGNlbGxIZWlnaHQgPj0gLXRoaXMuY2VsbHNCb3guaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGVmdDogY2FuRXhwYW5kTGVmdCxcclxuICAgICAgICAgICAgcmlnaHQ6IGNhbkV4cGFuZFJpZ2h0LFxyXG4gICAgICAgICAgICB1cDogY2FuRXhwYW5kVXAsXHJcbiAgICAgICAgICAgIGRvd246IGNhbkV4cGFuZERvd25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBFeHRyYWN0IHZhbGlkIGRpcmVjdGlvbnNcclxuICAgICAgICBjb25zdCB2YWxpZERpcmVjdGlvbnMgPSBPYmplY3Qua2V5cyhkaXJlY3Rpb25zKS5maWx0ZXIoZGlyID0+IGRpcmVjdGlvbnNbZGlyXSk7XHJcblxyXG5cclxuICAgICAgICBpZiAodmFsaWREaXJlY3Rpb25zLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2s/LigpOyAvLyBQcm9jZWVkIHdpdGggbW92ZW1lbnQgZXZlbiBpZiBleHBhbnNpb24gaXMgc2tpcHBlZFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgb3Bwb3NpdGUgZGlyZWN0aW9ucyAoZS5nLiwgbGVmdCBhbmQgcmlnaHQsIHVwIGFuZCBkb3duKVxyXG4gICAgICAgIGNvbnN0IG9wcG9zaXRlUGFpcnMgPSBbW3ByaW9yaXRpZXMubGVmdCwgcHJpb3JpdGllcy5yaWdodF0sIFtwcmlvcml0aWVzLnVwLCBwcmlvcml0aWVzLmRvd25dXTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtkaXIxLCBkaXIyXSBvZiBvcHBvc2l0ZVBhaXJzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZERpcmVjdGlvbnMuaW5jbHVkZXMoZGlyMSkgJiYgdmFsaWREaXJlY3Rpb25zLmluY2x1ZGVzKGRpcjIpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZERpcmVjdGlvbnMuc3BsaWNlKHZhbGlkRGlyZWN0aW9ucy5pbmRleE9mKGRpcjIpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIFNlbGVjdCB0d28gZGlyZWN0aW9ucyBmb3IgZXhwYW5zaW9uXHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBbcHJpb3JpdGllcy51cCwgcHJpb3JpdGllcy5kb3duLCBwcmlvcml0aWVzLmxlZnQsIHByaW9yaXRpZXMucmlnaHRdO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGlyZWN0aW9ucyA9IHZhbGlkRGlyZWN0aW9uc1xyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gcHJpb3JpdHkuaW5kZXhPZihhKSAtIHByaW9yaXR5LmluZGV4T2YoYikpXHJcbiAgICAgICAgICAgIC5zbGljZSgwLCAyKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFBlcmZvcm0gZXhwYW5zaW9uIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBkaXJlY3Rpb25zXHJcbiAgICAgICAgY29uc3QgZXhwYW5zaW9uVHdlZW5zID0gW107XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZERpcmVjdGlvbnMuaW5jbHVkZXMocHJpb3JpdGllcy5sZWZ0KSkge1xyXG4gICAgICAgICAgICBleHBhbnNpb25Ud2VlbnMucHVzaChjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5tdW1teS53aWR0aCArIGNlbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLm11bW15LnggLSBjZWxsV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMucmlnaHQpKSB7XHJcbiAgICAgICAgICAgIGV4cGFuc2lvblR3ZWVucy5wdXNoKGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMubXVtbXkueCArIGNlbGxXaWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMubXVtbXkud2lkdGggKyBjZWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkRGlyZWN0aW9ucy5pbmNsdWRlcyhwcmlvcml0aWVzLnVwKSkge1xyXG4gICAgICAgICAgICBleHBhbnNpb25Ud2VlbnMucHVzaChjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHtcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm11bW15LnkgKyBjZWxsSGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMubXVtbXkuaGVpZ2h0ICsgY2VsbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMuZG93bikpIHtcclxuICAgICAgICAgICAgZXhwYW5zaW9uVHdlZW5zLnB1c2goY2MudHdlZW4odGhpcy5tdW1teSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5tdW1teS55IC0gY2VsbEhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLm11bW15LmhlaWdodCArIGNlbGxIZWlnaHRcclxuICAgICAgICAgICAgICAgIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSB0d2VlbnMgc2VxdWVudGlhbGx5XHJcbiAgICAgICAgaWYgKGV4cGFuc2lvblR3ZWVucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGV4cGFuc2lvblR3ZWVucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuY2FsbCgoKSA9PiBjdXJyLnN0YXJ0KCkpLCBjYy50d2Vlbih0aGlzLm11bW15KSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciAyIHNlY29uZHMgYWZ0ZXIgdGhlIGV4cGFuc2lvbiBpcyBjb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s/LigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrPy4oKTsgLy8gUHJvY2VlZCB3aXRoIG1vdmVtZW50IGlmIG5vIGV4cGFuc2lvbiBoYXBwZW5zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BHYW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBoYXMgYmVlbiBzdG9wcGVkLlwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuIl19