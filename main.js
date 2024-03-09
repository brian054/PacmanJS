/*
    Pacman is pretty much the greatest arcade game of all time so you know we had to write it.

    Created: 1/21/2024
    Brian Rowell
*/
// Const
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const gameWindowWidth = canvas.width;
const gameWindowHeight = canvas.height;

// String version of map
/*
    

*/
// let map = [ 
//     "############",
//     "#          #",
//     "#          #",
//     "#   ###    #",
//     "#    #     #",
//     "#   ###    #",
//     "#          #",
//     "#          #",
//     "############"
// ];
    

// Draw Map
const mapImage = new Image();
mapImage.src = 'images/mapPlusSprites.png';

const tileSize = 8;

// update
function update() {
    renderMap();
}
// render 
// test stuff idk 
const SCALE = 3;
// This is the game board size
// Need to add a separate top and bottom section for score 
// and lives counter and all that good stuff
/*
    OK WAIT
    Damn the whole screen is 28 cols x 36 rows

*/
const rows = 31; // 31 for board, 36 for whole screen
const cols = 28;
function renderMap() { // map param.
    ctx.imageSmoothingEnabled = false;

    // Draw Top of Screen

    // Draw Map with them dots
    for (let row = 0; row < rows; row++) { // 31
        for (let col = 0; col < cols; col++) { 
           // const currentTile = map[row][col];
            console.log("Row: ", row);
            console.log("Col: ", col);
            const srcImageX = col * tileSize;
            const srcImageY = row * tileSize;
            // Draw Tile
            ctx.drawImage(mapImage, srcImageX, srcImageY, tileSize, tileSize, // image, sx, sy, sW, sH
                            col * (tileSize * SCALE), row * (tileSize * SCALE), tileSize * SCALE, tileSize * SCALE); // dx, dy, dW, dH
        }
    }

    // Draw Bottom of Screeen


    // Draw Pac-Man
    // ToDo - make constants for pacman width and height (16x16)
    // drawImage(image, sx, sy, sW, sH, dx, dy, dW, dH)
    ctx.drawImage(mapImage, 57 * tileSize, 0, tileSize * 2, tileSize * 2,
                            200, 400, tileSize * SCALE * 2, tileSize * SCALE * 2);
    ctx.drawImage(mapImage, 59 * tileSize, 0, tileSize * 2, tileSize * 2,
        300, 400, tileSize * SCALE * 2, tileSize * SCALE * 2);
    ctx.drawImage(mapImage, 61 * tileSize, 0, tileSize * 2, tileSize * 2,
         ((cols / 2) - 1) * tileSize * SCALE, ((rows / 2) + 7) * tileSize * SCALE, tileSize * SCALE * 2, tileSize * SCALE * 2);

}

requestAnimationFrame(update);