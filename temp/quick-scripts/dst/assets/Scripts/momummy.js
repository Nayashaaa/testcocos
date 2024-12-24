
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
        // Place 3 diamonds randomly
        for (var i = 0; i < 3; i++) {
            var cell = shuffledCells[i];
            var diamond = cc.instantiate(this.diamondPrefab);
            diamond.parent = this.node; // Attach diamond to the main scene node
            diamond.position = cell.position;
            this.diamonds.push(diamond);
        }
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
                _this.increaseMummySize(); // Increase the size of the mummy
                console.error("Mummy position:", _this.mummy.position.x, _this.mummy.position.y);
                console.error("Mummy size:", _this.mummy.width, _this.mummy.height);
                _this.spawnDiamonds(); // Respawn diamonds when all are collected
                moveToNextDiamond(); // Restart movement to nearest diamond
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
    NewClass.prototype.collectDiamond = function (diamond) {
        var index = this.diamonds.indexOf(diamond);
        if (index !== -1) {
            this.diamonds.splice(index, 1);
            diamond.destroy();
        }
        this.diamondsCollected++;
    };
    NewClass.prototype.increaseMummySize = function () {
        var _a, _b;
        console.log("Increasing mummy size");
        var cellWidth = ((_a = this.cells[0]) === null || _a === void 0 ? void 0 : _a.width) || 100; // Default to 100 if undefined
        var cellHeight = ((_b = this.cells[0]) === null || _b === void 0 ? void 0 : _b.height) || 100;
        if (!this.mummy || !this.cellsBox) {
            console.error("Mummy or cellsBox is not defined");
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
            return;
        }
        // Remove opposite directions (e.g., left and right, up and down)
        var oppositePairs = [[priorities.left, priorities.right], [priorities.up, priorities.down]];
        for (var _i = 0, oppositePairs_1 = oppositePairs; _i < oppositePairs_1.length; _i++) {
            var _c = oppositePairs_1[_i], dir1 = _c[0], dir2 = _c[1];
            if (validDirections.includes(dir1) && validDirections.includes(dir2)) {
                //console.log(Removing opposite directions: ${dir1} and ${dir2});
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
            expansionTweens.reduce(function (prev, curr) { return prev.call(function () { return curr.start(); }); }, cc.tween(this.mummy)).start();
        }
        console.error("Mummy position:", this.mummy.position.x, this.mummy.position.y);
        console.error("Mummy size:", this.mummy.width, this.mummy.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcbW9tdW1teS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLGVBQWUsR0FBRztJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0lBQ2QsRUFBRSxFQUFFLElBQUk7SUFDUixJQUFJLEVBQUUsTUFBTTtDQUNmLENBQUE7QUFDRCxJQUFNLFVBQVUsR0FBRztJQUNmLEVBQUUsRUFBRSxJQUFJO0lBQ1IsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0NBQ2pCLENBQUM7QUFJSSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlSQztRQS9RRyxXQUFLLEdBQWMsRUFBRSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWMsRUFBRSxDQUFDLENBQUMsa0JBQWtCO1FBQzVDLHVCQUFpQixHQUFXLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztRQUNoRSxvQkFBYyxHQUFXLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtRQUVqRSxxQkFBcUI7UUFDYixjQUFRLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0I7UUFDekMsY0FBUSxHQUFXLEdBQUcsQ0FBQyxDQUFFLGNBQWM7UUFDdkMsY0FBUSxHQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCO1FBQ3pDLGNBQVEsR0FBVyxHQUFHLENBQUMsQ0FBRSxjQUFjOztJQTRQbkQsQ0FBQztJQTFQRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElB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SyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZHO1FBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBelFEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzJDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNZO0lBWGYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlSNUI7SUFBRCxlQUFDO0NBalJELEFBaVJDLENBalJxQyxFQUFFLENBQUMsU0FBUyxHQWlSakQ7a0JBalJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRGlyZWN0aW9uc0NvbnN0ID0ge1xyXG4gICAgbGVmdDogXCJsZWZ0XCIsXHJcbiAgICByaWdodDogXCJyaWdodFwiLFxyXG4gICAgdXA6IFwidXBcIixcclxuICAgIGRvd246IFwiZG93blwiXHJcbn1cclxuY29uc3QgcHJpb3JpdGllcyA9IHtcclxuICAgIHVwOiBcInVwXCIsXHJcbiAgICBkb3duOiBcImRvd25cIixcclxuICAgIGxlZnQ6IFwibGVmdFwiLFxyXG4gICAgcmlnaHQ6IFwicmlnaHRcIlxyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGNlbGxzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG11bW15OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNlbGxzQm94OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZGlhbW9uZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRpYW1vbmRzOiBjYy5Ob2RlW10gPSBbXTsgLy8gQWN0aXZlIGRpYW1vbmRzXHJcbiAgICBwcml2YXRlIGRpYW1vbmRzQ29sbGVjdGVkOiBudW1iZXIgPSAwOyAvLyBDb3VudGVyIGZvciBkaWFtb25kcyBjb2xsZWN0ZWRcclxuICAgIHByaXZhdGUgYm91bmRhcnlPZmZzZXQ6IG51bWJlciA9IG51bGw7IC8vIEluaXRpYWwgYm91bmRhcnkgb2Zmc2V0XHJcblxyXG4gICAgLy8gRGVmaW5lIGdyaWQgYm91bmRzXHJcbiAgICBwcml2YXRlIGdyaWRNaW5YOiBudW1iZXIgPSAtMjAwOyAvLyBCb3R0b20tbGVmdCBYXHJcbiAgICBwcml2YXRlIGdyaWRNYXhYOiBudW1iZXIgPSAyMDA7ICAvLyBUb3AtcmlnaHQgWFxyXG4gICAgcHJpdmF0ZSBncmlkTWluWTogbnVtYmVyID0gLTIwMDsgLy8gQm90dG9tLWxlZnQgWVxyXG4gICAgcHJpdmF0ZSBncmlkTWF4WTogbnVtYmVyID0gMjAwOyAgLy8gVG9wLXJpZ2h0IFlcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNwYXduRGlhbW9uZHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlVG9OZWFyZXN0RGlhbW9uZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkRpYW1vbmRzKCkge1xyXG4gICAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBkaWFtb25kc1xyXG4gICAgICAgIHRoaXMuZGlhbW9uZHMuZm9yRWFjaChkaWFtb25kID0+IGRpYW1vbmQuZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLmRpYW1vbmRzID0gW107XHJcblxyXG4gICAgICAgIC8vIFNodWZmbGUgY2VsbCBwb3NpdGlvbnMgcmFuZG9tbHlcclxuICAgICAgICBjb25zdCBzaHVmZmxlZENlbGxzID0gdGhpcy5jZWxscy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG5cclxuICAgICAgICAvLyBQbGFjZSAzIGRpYW1vbmRzIHJhbmRvbWx5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHNodWZmbGVkQ2VsbHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRpYW1vbmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpYW1vbmRQcmVmYWIpO1xyXG4gICAgICAgICAgICBkaWFtb25kLnBhcmVudCA9IHRoaXMubm9kZTsgLy8gQXR0YWNoIGRpYW1vbmQgdG8gdGhlIG1haW4gc2NlbmUgbm9kZVxyXG4gICAgICAgICAgICBkaWFtb25kLnBvc2l0aW9uID0gY2VsbC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kcy5wdXNoKGRpYW1vbmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbW92ZVRvTmVhcmVzdERpYW1vbmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bW15IHx8IHRoaXMuZGlhbW9uZHMubGVuZ3RoID09PSAwIHx8IHRoaXMuY2VsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFbnN1cmUgbXVtbXksIGRpYW1vbmRzLCBhbmQgY2VsbHMgYXJlIHByb3Blcmx5IGFzc2lnbmVkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW92ZVRvTmV4dERpYW1vbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpYW1vbmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNdW1teSByZWFjaGVkIGFsbCBkaWFtb25kcyFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlYXNlTXVtbXlTaXplKCk7IC8vIEluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBtdW1teVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTXVtbXkgcG9zaXRpb246XCIsIHRoaXMubXVtbXkucG9zaXRpb24ueCwgdGhpcy5tdW1teS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNdW1teSBzaXplOlwiLCB0aGlzLm11bW15LndpZHRoLCB0aGlzLm11bW15LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRGlhbW9uZHMoKTsgLy8gUmVzcGF3biBkaWFtb25kcyB3aGVuIGFsbCBhcmUgY29sbGVjdGVkXHJcbiAgICAgICAgICAgICAgICBtb3ZlVG9OZXh0RGlhbW9uZCgpOyAvLyBSZXN0YXJ0IG1vdmVtZW50IHRvIG5lYXJlc3QgZGlhbW9uZFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGdW5jdGlvbiB0byBjYWxjdWxhdGUgYm91bmRhcnkgb2Zmc2V0XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZUJvdW5kYXJ5T2Zmc2V0ID0gKG11bW15V2lkdGg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbFdpZHRoID0gdGhpcy5jZWxsc1swXS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtdW1teVdpZHRoIC8gMiAtIGNlbGxXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBuZWFyZXN0IGRpYW1vbmRcclxuICAgICAgICAgICAgY29uc3QgbXVtbXlQb3NpdGlvbiA9IHRoaXMubXVtbXkucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCBuZWFyZXN0RGlhbW9uZCA9IHRoaXMuZGlhbW9uZHNbMF07XHJcbiAgICAgICAgICAgIGxldCBzaG9ydGVzdERpc3RhbmNlID0gbXVtbXlQb3NpdGlvbi5zdWIobmVhcmVzdERpYW1vbmQucG9zaXRpb24pLm1hZygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kcy5mb3JFYWNoKGRpYW1vbmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBtdW1teVBvc2l0aW9uLnN1YihkaWFtb25kLnBvc2l0aW9uKS5tYWcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHNob3J0ZXN0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVhcmVzdERpYW1vbmQgPSBkaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpYW1vbmRQb3NpdGlvbiA9IG5lYXJlc3REaWFtb25kLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy8gSWRlbnRpZnkgdGhlIGNlbGwgY29udGFpbmluZyB0aGUgZGlhbW9uZFxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDZWxsID0gdGhpcy5jZWxscy5maW5kKGNlbGwgPT4gY2VsbC5wb3NpdGlvbi5lcXVhbHMoZGlhbW9uZFBvc2l0aW9uKSk7XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0Q2VsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5lYXJlc3QgZGlhbW9uZCBpcyBub3QgaW5zaWRlIGFueSBjZWxsLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0Q2VsbFBvc2l0aW9uID0gdGFyZ2V0Q2VsbC5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBib3VuZGFyeSBvZmZzZXRcclxuICAgICAgICAgICAgdGhpcy5ib3VuZGFyeU9mZnNldCA9IGNhbGN1bGF0ZUJvdW5kYXJ5T2Zmc2V0KHRoaXMubXVtbXkud2lkdGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvdW5kYXJ5T2Zmc2V0OlwiLCB0aGlzLmJvdW5kYXJ5T2Zmc2V0KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBDbGFtcCBtdW1teSdzIHBvc2l0aW9uIHRvIHN0YXkgd2l0aGluIHRoZSBjZWxscyBib3hcclxuICAgICAgICAgICAgY29uc3QgY2xhbXBlZFggPSBjYy5taXNjLmNsYW1wZihcclxuICAgICAgICAgICAgICAgIG11bW15UG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuZ3JpZE1pblggKyB0aGlzLmJvdW5kYXJ5T2Zmc2V0LCB0YXJnZXRDZWxsUG9zaXRpb24ueCAtIHRoaXMuYm91bmRhcnlPZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5taW4odGhpcy5ncmlkTWF4WCAtIHRoaXMuYm91bmRhcnlPZmZzZXQsIHRhcmdldENlbGxQb3NpdGlvbi54ICsgdGhpcy5ib3VuZGFyeU9mZnNldClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgY2xhbXBlZFkgPSBjYy5taXNjLmNsYW1wZihcclxuICAgICAgICAgICAgICAgIG11bW15UG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuZ3JpZE1pblkgKyB0aGlzLmJvdW5kYXJ5T2Zmc2V0LCB0YXJnZXRDZWxsUG9zaXRpb24ueSAtIHRoaXMuYm91bmRhcnlPZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5taW4odGhpcy5ncmlkTWF4WSAtIHRoaXMuYm91bmRhcnlPZmZzZXQsIHRhcmdldENlbGxQb3NpdGlvbi55ICsgdGhpcy5ib3VuZGFyeU9mZnNldClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmVycm9yKENsYW1wZWQgcG9zaXRpb246ICR7Y2xhbXBlZFh9LCAke2NsYW1wZWRZfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ011bW15IHBvc2l0aW9uOicsIG11bW15UG9zaXRpb24ueCwgbXVtbXlQb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRGlhbW9uZCBwb3NpdGlvbjonLCBkaWFtb25kUG9zaXRpb24ueCwgZGlhbW9uZFBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICAgICAgLy8gTW92ZSBtdW1teSB0byB0aGUgbmVhcmVzdCBkaWFtb25kIHdoaWxlIHN0YXlpbmcgd2l0aGluIGJvdW5kc1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMobXVtbXlQb3NpdGlvbi54IC0gZGlhbW9uZFBvc2l0aW9uLngpID4gTWF0aC5hYnMobXVtbXlQb3NpdGlvbi55IC0gZGlhbW9uZFBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBuZXcgY2MuVmVjMyhjbGFtcGVkWCwgbXVtbXlQb3NpdGlvbi55LCBtdW1teVBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKGNsYW1wZWRYLCBjbGFtcGVkWSwgbXVtbXlQb3NpdGlvbi56KSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXVtbXkgcmVhY2hlZCBhIGRpYW1vbmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdERpYW1vbmQobmVhcmVzdERpYW1vbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUb05leHREaWFtb25kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKG11bW15UG9zaXRpb24ueCwgY2xhbXBlZFksIG11bW15UG9zaXRpb24ueikgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogbmV3IGNjLlZlYzMoY2xhbXBlZFgsIGNsYW1wZWRZLCBtdW1teVBvc2l0aW9uLnopIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNdW1teSByZWFjaGVkIGEgZGlhbW9uZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0RGlhbW9uZChuZWFyZXN0RGlhbW9uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvTmV4dERpYW1vbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW92ZVRvTmV4dERpYW1vbmQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29sbGVjdERpYW1vbmQoZGlhbW9uZDogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kaWFtb25kcy5pbmRleE9mKGRpYW1vbmQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBkaWFtb25kLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaWFtb25kc0NvbGxlY3RlZCsrO1xyXG4gICAgfVxyXG4gICAgIGluY3JlYXNlTXVtbXlTaXplKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5jcmVhc2luZyBtdW1teSBzaXplXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsV2lkdGggPSB0aGlzLmNlbGxzWzBdPy53aWR0aCB8fCAxMDA7IC8vIERlZmF1bHQgdG8gMTAwIGlmIHVuZGVmaW5lZFxyXG4gICAgICAgIGNvbnN0IGNlbGxIZWlnaHQgPSB0aGlzLmNlbGxzWzBdPy5oZWlnaHQgfHwgMTAwO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubXVtbXkgfHwgIXRoaXMuY2VsbHNCb3gpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk11bW15IG9yIGNlbGxzQm94IGlzIG5vdCBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IG11bW15J3MgcG9zaXRpb24gdG8gd29ybGQgc3BhY2VcclxuICAgICAgICBjb25zdCBtdW1teVdvcmxkUG9zaXRpb24gPSB0aGlzLm11bW15LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5tdW1teS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgbXVtbXkncyB3b3JsZCBwb3NpdGlvbiB0byB0aGUgbG9jYWwgc3BhY2Ugb2YgY2VsbHNCb3hcclxuICAgICAgICBjb25zdCBtdW1teUxvY2FsSW5DZWxscyA9IHRoaXMuY2VsbHNCb3guY29udmVydFRvTm9kZVNwYWNlQVIobXVtbXlXb3JsZFBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtdW1teSdzIGN1cnJlbnQgYm91bmRzIGluIGNlbGxzQm94IGxvY2FsIHNwYWNlXHJcbiAgICAgICAgY29uc3QgY3VycmVudExlZnQgPSBtdW1teUxvY2FsSW5DZWxscy54IC0gdGhpcy5tdW1teS53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJpZ2h0ID0gbXVtbXlMb2NhbEluQ2VsbHMueCArIHRoaXMubXVtbXkud2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3AgPSBtdW1teUxvY2FsSW5DZWxscy55ICsgdGhpcy5tdW1teS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb3R0b20gPSBtdW1teUxvY2FsSW5DZWxscy55IC0gdGhpcy5tdW1teS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlcmUgaXMgc3BhY2UgZm9yIGV4cGFuc2lvbiBpbiBlYWNoIGRpcmVjdGlvblxyXG4gICAgICAgIGNvbnN0IGNhbkV4cGFuZExlZnQgPSBjdXJyZW50TGVmdCAtIGNlbGxXaWR0aCA+PSAtdGhpcy5jZWxsc0JveC53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kUmlnaHQgPSBjdXJyZW50UmlnaHQgKyBjZWxsV2lkdGggPD0gdGhpcy5jZWxsc0JveC53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kVXAgPSBjdXJyZW50VG9wICsgY2VsbEhlaWdodCA8PSB0aGlzLmNlbGxzQm94LmhlaWdodCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2FuRXhwYW5kRG93biA9IGN1cnJlbnRCb3R0b20gLSBjZWxsSGVpZ2h0ID49IC10aGlzLmNlbGxzQm94LmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNhbkV4cGFuZExlZnQsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYW5FeHBhbmRSaWdodCxcclxuICAgICAgICAgICAgdXA6IGNhbkV4cGFuZFVwLFxyXG4gICAgICAgICAgICBkb3duOiBjYW5FeHBhbmREb3duXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCB2YWxpZCBkaXJlY3Rpb25zXHJcbiAgICAgICAgY29uc3QgdmFsaWREaXJlY3Rpb25zID0gT2JqZWN0LmtleXMoZGlyZWN0aW9ucykuZmlsdGVyKGRpciA9PiBkaXJlY3Rpb25zW2Rpcl0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZhbGlkIGRpcmVjdGlvbnM6XCIsIHZhbGlkRGlyZWN0aW9ucyk7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZERpcmVjdGlvbnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggc3BhY2UgdG8gZXhwYW5kIGluIHR3byBkaXJlY3Rpb25zLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG9wcG9zaXRlIGRpcmVjdGlvbnMgKGUuZy4sIGxlZnQgYW5kIHJpZ2h0LCB1cCBhbmQgZG93bilcclxuICAgICAgICBjb25zdCBvcHBvc2l0ZVBhaXJzID0gW1twcmlvcml0aWVzLmxlZnQsIHByaW9yaXRpZXMucmlnaHRdLCBbcHJpb3JpdGllcy51cCwgcHJpb3JpdGllcy5kb3duXV07XHJcbiAgICAgICAgZm9yIChjb25zdCBbZGlyMSwgZGlyMl0gb2Ygb3Bwb3NpdGVQYWlycykge1xyXG4gICAgICAgICAgICBpZiAodmFsaWREaXJlY3Rpb25zLmluY2x1ZGVzKGRpcjEpICYmIHZhbGlkRGlyZWN0aW9ucy5pbmNsdWRlcyhkaXIyKSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhSZW1vdmluZyBvcHBvc2l0ZSBkaXJlY3Rpb25zOiAke2RpcjF9IGFuZCAke2RpcjJ9KTtcclxuICAgICAgICAgICAgICAgIHZhbGlkRGlyZWN0aW9ucy5zcGxpY2UodmFsaWREaXJlY3Rpb25zLmluZGV4T2YoZGlyMiksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZhbGlkIGRpcmVjdGlvbnMgYWZ0ZXIgcmVtb3Zpbmcgb3Bwb3NpdGVzOlwiLCB2YWxpZERpcmVjdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBTZWxlY3QgdHdvIGRpcmVjdGlvbnMgZm9yIGV4cGFuc2lvblxyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gW3ByaW9yaXRpZXMudXAsIHByaW9yaXRpZXMuZG93biwgcHJpb3JpdGllcy5sZWZ0LCBwcmlvcml0aWVzLnJpZ2h0XTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZERpcmVjdGlvbnMgPSB2YWxpZERpcmVjdGlvbnNcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHByaW9yaXR5LmluZGV4T2YoYSkgLSBwcmlvcml0eS5pbmRleE9mKGIpKVxyXG4gICAgICAgICAgICAuc2xpY2UoMCwgMik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgZGlyZWN0aW9ucyBmb3IgZXhwYW5zaW9uOlwiLCBzZWxlY3RlZERpcmVjdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBQZXJmb3JtIGV4cGFuc2lvbiBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgZGlyZWN0aW9uc1xyXG4gICAgICAgIGNvbnN0IGV4cGFuc2lvblR3ZWVucyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMubGVmdCkpIHtcclxuICAgICAgICAgICAgZXhwYW5zaW9uVHdlZW5zLnB1c2goY2MudHdlZW4odGhpcy5tdW1teSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMubXVtbXkud2lkdGggKyBjZWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5tdW1teS54IC0gY2VsbFdpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMucmlnaHQpKSB7XHJcbiAgICAgICAgICAgIGV4cGFuc2lvblR3ZWVucy5wdXNoKGNjLnR3ZWVuKHRoaXMubXVtbXkpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMubXVtbXkueCArIGNlbGxXaWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMubXVtbXkud2lkdGggKyBjZWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkRGlyZWN0aW9ucy5pbmNsdWRlcyhwcmlvcml0aWVzLnVwKSkge1xyXG4gICAgICAgICAgICBleHBhbnNpb25Ud2VlbnMucHVzaChjYy50d2Vlbih0aGlzLm11bW15KVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHtcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLm11bW15LnkgKyBjZWxsSGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMubXVtbXkuaGVpZ2h0ICsgY2VsbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25zLmluY2x1ZGVzKHByaW9yaXRpZXMuZG93bikpIHtcclxuICAgICAgICAgICAgZXhwYW5zaW9uVHdlZW5zLnB1c2goY2MudHdlZW4odGhpcy5tdW1teSlcclxuICAgICAgICAgICAgICAgIC50bygxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5tdW1teS55IC0gY2VsbEhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLm11bW15LmhlaWdodCArIGNlbGxIZWlnaHRcclxuICAgICAgICAgICAgICAgIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSB0d2VlbnMgc2VxdWVudGlhbGx5XHJcbiAgICAgICAgaWYgKGV4cGFuc2lvblR3ZWVucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGV4cGFuc2lvblR3ZWVucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuY2FsbCgoKSA9PiBjdXJyLnN0YXJ0KCkpLCBjYy50d2Vlbih0aGlzLm11bW15KSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNdW1teSBwb3NpdGlvbjpcIiwgdGhpcy5tdW1teS5wb3NpdGlvbi54LCB0aGlzLm11bW15LnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNdW1teSBzaXplOlwiLCB0aGlzLm11bW15LndpZHRoLCB0aGlzLm11bW15LmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSJdfQ==