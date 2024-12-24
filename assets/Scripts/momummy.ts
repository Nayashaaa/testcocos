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

    @property(cc.Node)
    collectedDiamonds: cc.Node = null;

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

        if(this.mummy.width<500 && this.mummy.height<500){
            for (let i = 0; i < 3; i++) {
                const cell = shuffledCells[i];
                const diamond = cc.instantiate(this.diamondPrefab);
                diamond.parent = this.node; // Attach diamond to the main scene node
                diamond.position = cell.position;
                this.diamonds.push(diamond);
            }
        }
        
    }

    collectDiamond(diamond: cc.Node) {
        const index = this.diamonds.indexOf(diamond);
        if (index !== -1) {
            this.diamonds.splice(index, 1);
        }
    
        // Get the layouts inside collectedDiamonds
        const collectedLayouts = this.collectedDiamonds.children;
        if (collectedLayouts.length === 0) {
            console.error("No layouts inside collectedDiamonds.");
            diamond.destroy();
            return;
        }
    
        // Determine the target layout based on the collected count
        const targetIndex = (this.diamondsCollected % collectedLayouts.length);
        const targetLayout = collectedLayouts[targetIndex];
    
        // Convert the world position of the target layout to local position
        const worldPosition = targetLayout.parent.convertToWorldSpaceAR(targetLayout.position);
        const targetPosition = this.node.convertToNodeSpaceAR(worldPosition);
    
        // Tween the diamond to the target layout
        cc.tween(diamond)
            .to(2, { position: targetPosition }, { easing: "sineInOut" })
            .call(() => {
                // Attach the diamond to the target layout and center it
                diamond.setParent(targetLayout);
                diamond.setPosition(cc.Vec3.ZERO);
    
                // Increment the collected count
                this.diamondsCollected++;
    
                // Process collected diamonds if three are collected
                if (this.diamondsCollected % 3 === 0) {
                    this.collectedDiamonds.children.forEach(layout => {
                        layout.removeAllChildren();})
                }
            })
            .start();
    }
    
    
x

    moveDiamondToCollected(diamond: cc.Node) {
        // Ensure collectedDiamonds has children to target
        if (!this.collectedDiamonds || this.collectedDiamonds.children.length === 0) {
            console.error("No target nodes found in collectedDiamonds.");
            return;
        }

        console.log("travelling");
        // Randomly choose one of the child nodes in collectedDiamonds
        const targetNode = this.collectedDiamonds.children[Math.floor(Math.random() * this.collectedDiamonds.children.length)];
        console.log("target position", targetNode.x, targetNode.y);
        console.log("nayasha",this.collectedDiamonds.children[0].x,this.collectedDiamonds.children[0].y);

        // Move the diamond to the selected target node with a 2-second tween
        cc.tween(diamond)
            .to(2, { position: targetNode.position }, { easing: 'sineInOut' })
            .start();
    }


    moveToNearestDiamond() {
        if (!this.mummy || this.diamonds.length === 0 || this.cells.length === 0) {
            console.error("Ensure mummy, diamonds, and cells are properly assigned.");
            return;
        }

        const moveToNextDiamond = () => {
            if (this.diamonds.length === 0) {
                console.log("Mummy reached all diamonds!");
                this.spawnDiamonds(); // Respawn diamonds after size increase
                this.increaseMummySize(() => {
                    moveToNextDiamond(); // Restart movement to nearest diamond
                });
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


    
    
    increaseMummySize(callback?: () => void) {
        console.log("Increasing mummy size");
    
        const cellWidth = this.cells[0]?.width || 100; // Default to 100 if undefined
        const cellHeight = this.cells[0]?.height || 100;
    
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
            callback?.(); // Proceed with movement even if expansion is skipped
            return;
        }
    
        // Remove opposite directions (e.g., left and right, up and down)
        const oppositePairs = [[priorities.left, priorities.right], [priorities.up, priorities.down]];
        for (const [dir1, dir2] of oppositePairs) {
            if (validDirections.includes(dir1) && validDirections.includes(dir2)) {
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
            expansionTweens.reduce((prev, curr) => prev.call(() => curr.start()), cc.tween(this.mummy))
                .call(() => {
                    // Wait for 2 seconds after the expansion is complete
                    this.scheduleOnce(() => {
                        callback?.();
                    }, 2);
                })
                .start();
        } else {
            callback?.(); // Proceed with movement if no expansion happens
        }
    }
    stopGame() {
        console.log("Game has been stopped.");
        cc.director.pause(); // Pauses the game
        // Add any additional actions, such as showing a game-over UI
    }
    
    

}