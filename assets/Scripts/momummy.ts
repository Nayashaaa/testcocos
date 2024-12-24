const DirectionsConst = {
    left: "left",
    right: "right",
    up: "up",
    down: "down"
}
const priorities = {
    up: "up",
    down: "down",
    left: "left",
    right: "right"
};



const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property([cc.Node])
    cells: cc.Node[] = [];

    @property(cc.Node)
    mummy: cc.Node = null;

    @property(cc.Node)
    cellsBox: cc.Node = null;

    @property(cc.Prefab)
    diamondPrefab: cc.Prefab = null;

    private diamonds: cc.Node[] = []; // Active diamonds
    private diamondsCollected: number = 0; // Counter for diamonds collected
    private boundaryOffset: number = null; // Initial boundary offset

    // Define grid bounds
    private gridMinX: number = -200; // Bottom-left X
    private gridMaxX: number = 200;  // Top-right X
    private gridMinY: number = -200; // Bottom-left Y
    private gridMaxY: number = 200;  // Top-right Y

    start() {
        this.spawnDiamonds();

        this.moveToNearestDiamond();

    }

    spawnDiamonds() {
        // Remove existing diamonds
        this.diamonds.forEach(diamond => diamond.destroy());
        this.diamonds = [];

        // Shuffle cell positions randomly
        const shuffledCells = this.cells.sort(() => Math.random() - 0.5);

        // Place 3 diamonds randomly
        for (let i = 0; i < 3; i++) {
            const cell = shuffledCells[i];
            const diamond = cc.instantiate(this.diamondPrefab);
            diamond.parent = this.node; // Attach diamond to the main scene node
            diamond.position = cell.position;
            this.diamonds.push(diamond);
        }
    }


    moveToNearestDiamond() {
        if (!this.mummy || this.diamonds.length === 0 || this.cells.length === 0) {
            console.error("Ensure mummy, diamonds, and cells are properly assigned.");
            return;
        }

        const moveToNextDiamond = () => {
            if (this.diamonds.length === 0) {
                console.log("Mummy reached all diamonds!");
                this.increaseMummySize(); // Increase the size of the mummy
                
                console.error("Mummy position:", this.mummy.position.x, this.mummy.position.y);
                console.error("Mummy size:", this.mummy.width, this.mummy.height);
                this.spawnDiamonds(); // Respawn diamonds when all are collected
                moveToNextDiamond(); // Restart movement to nearest diamond
                return;
            }

            // Function to calculate boundary offset
            const calculateBoundaryOffset = (mummyWidth: number) => {
                const cellWidth = this.cells[0].width;
                return mummyWidth / 2 - cellWidth / 2;
            };

            // Find the nearest diamond
            const mummyPosition = this.mummy.position;
            let nearestDiamond = this.diamonds[0];
            let shortestDistance = mummyPosition.sub(nearestDiamond.position).mag();

            this.diamonds.forEach(diamond => {
                const distance = mummyPosition.sub(diamond.position).mag();
                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    nearestDiamond = diamond;
                }
            });

            const diamondPosition = nearestDiamond.position;

            // Identify the cell containing the diamond
            const targetCell = this.cells.find(cell => cell.position.equals(diamondPosition));
            if (!targetCell) {
                console.error("Nearest diamond is not inside any cell.");
                return;
            }

            const targetCellPosition = targetCell.position;

            // Calculate boundary offset
            this.boundaryOffset = calculateBoundaryOffset(this.mummy.width);
            console.log("boundaryOffset:", this.boundaryOffset);


            // Clamp mummy's position to stay within the cells box
            const clampedX = cc.misc.clampf(
                mummyPosition.x,
                Math.max(this.gridMinX + this.boundaryOffset, targetCellPosition.x - this.boundaryOffset),
                Math.min(this.gridMaxX - this.boundaryOffset, targetCellPosition.x + this.boundaryOffset)
            );
            const clampedY = cc.misc.clampf(
                mummyPosition.y,
                Math.max(this.gridMinY + this.boundaryOffset, targetCellPosition.y - this.boundaryOffset),
                Math.min(this.gridMaxY - this.boundaryOffset, targetCellPosition.y + this.boundaryOffset)
            );

            //  console.error(Clamped position: ${clampedX}, ${clampedY});
            console.error('Mummy position:', mummyPosition.x, mummyPosition.y);
            console.error('Diamond position:', diamondPosition.x, diamondPosition.y);

            // Move mummy to the nearest diamond while staying within bounds
            if (Math.abs(mummyPosition.x - diamondPosition.x) > Math.abs(mummyPosition.y - diamondPosition.y)) {
                cc.tween(this.mummy)
                    .to(1, { position: new cc.Vec3(clampedX, mummyPosition.y, mummyPosition.z) }, { easing: "sineInOut" })
                    .call(() => {
                        cc.tween(this.mummy)
                            .to(1, { position: new cc.Vec3(clampedX, clampedY, mummyPosition.z) }, { easing: "sineInOut" })
                            .call(() => {
                                console.log("Mummy reached a diamond!");
                                this.collectDiamond(nearestDiamond);
                                moveToNextDiamond();
                            })
                            .start();
                    })
                    .start();
            } else {
                cc.tween(this.mummy)
                    .to(1, { position: new cc.Vec3(mummyPosition.x, clampedY, mummyPosition.z) }, { easing: "sineInOut" })
                    .call(() => {
                        cc.tween(this.mummy)
                            .to(1, { position: new cc.Vec3(clampedX, clampedY, mummyPosition.z) }, { easing: "sineInOut" })
                            .call(() => {
                                console.log("Mummy reached a diamond!");
                                this.collectDiamond(nearestDiamond);
                                moveToNextDiamond();
                            })
                            .start();
                    })
                    .start();
            }
        };

        moveToNextDiamond();
    }


    collectDiamond(diamond: cc.Node) {
        const index = this.diamonds.indexOf(diamond);
        if (index !== -1) {
            this.diamonds.splice(index, 1);
            diamond.destroy();
        }
        this.diamondsCollected++;
    }
     increaseMummySize() {
        console.log("Increasing mummy size");

        const cellWidth = this.cells[0]?.width || 100; // Default to 100 if undefined
        const cellHeight = this.cells[0]?.height || 100;

        if (!this.mummy || !this.cellsBox) {
            console.error("Mummy or cellsBox is not defined");
            return;
        }

        // Convert mummy's position to world space
        const mummyWorldPosition = this.mummy.parent.convertToWorldSpaceAR(this.mummy.position);

        // Convert mummy's world position to the local space of cellsBox
        const mummyLocalInCells = this.cellsBox.convertToNodeSpaceAR(mummyWorldPosition);

        // Calculate the mummy's current bounds in cellsBox local space
        const currentLeft = mummyLocalInCells.x - this.mummy.width / 2;
        const currentRight = mummyLocalInCells.x + this.mummy.width / 2;
        const currentTop = mummyLocalInCells.y + this.mummy.height / 2;
        const currentBottom = mummyLocalInCells.y - this.mummy.height / 2;

        // Determine if there is space for expansion in each direction
        const canExpandLeft = currentLeft - cellWidth >= -this.cellsBox.width / 2;
        const canExpandRight = currentRight + cellWidth <= this.cellsBox.width / 2;
        const canExpandUp = currentTop + cellHeight <= this.cellsBox.height / 2;
        const canExpandDown = currentBottom - cellHeight >= -this.cellsBox.height / 2;

        const directions = {
            left: canExpandLeft,
            right: canExpandRight,
            up: canExpandUp,
            down: canExpandDown
        };

        // Extract valid directions
        const validDirections = Object.keys(directions).filter(dir => directions[dir]);

        console.log("Valid directions:", validDirections);

        if (validDirections.length < 2) {
            console.log("Not enough space to expand in two directions.");
            return;
        }

        // Remove opposite directions (e.g., left and right, up and down)
        const oppositePairs = [[priorities.left, priorities.right], [priorities.up, priorities.down]];
        for (const [dir1, dir2] of oppositePairs) {
            if (validDirections.includes(dir1) && validDirections.includes(dir2)) {
                //console.log(Removing opposite directions: ${dir1} and ${dir2});
                validDirections.splice(validDirections.indexOf(dir2), 1);
            }
        }

        console.log("Valid directions after removing opposites:", validDirections);

        // Select two directions for expansion
        const priority = [priorities.up, priorities.down, priorities.left, priorities.right];
        const selectedDirections = validDirections
            .sort((a, b) => priority.indexOf(a) - priority.indexOf(b))
            .slice(0, 2);

        console.log("Selected directions for expansion:", selectedDirections);

        // Perform expansion based on the selected directions
        const expansionTweens = [];

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
            expansionTweens.reduce((prev, curr) => prev.call(() => curr.start()), cc.tween(this.mummy)).start();
        }

        console.error("Mummy position:", this.mummy.position.x, this.mummy.position.y);
        console.error("Mummy size:", this.mummy.width, this.mummy.height);
    }





}