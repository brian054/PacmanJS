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
const SCALE = 2;
function renderMap() { // map param.
    ctx.imageSmoothingEnabled = false;

    for (let row = 0; row < mapImage.width / tileSize; row++) {
        for (let col = 0; col < mapImage.height / tileSize; col++) {
           // const currentTile = map[row][col];
            const srcImageX = col * tileSize;
            const srcImageY = row * tileSize;
            // Draw Tile
            // drawImage(image, sx, sy, sW, sH, dx, dy, dW, dH)
            ctx.drawImage(mapImage, srcImageX, srcImageY, tileSize, tileSize, col * (tileSize * SCALE), row * (tileSize * SCALE), tileSize * SCALE, tileSize * SCALE);
        }
    }
    //const srcImageX = 0 * tileSize;
    // const srcImageY = 0 * tileSize;
    // ctx.drawImage(mapImage, srcImageX, srcImageY, tileSize, tileSize, 0 * tileSize, 0 * tileSize, tileSize * SCALE, tileSize * SCALE);

    // const srcImageX2 = 1 * tileSize;
    // const srcImageY2 = 0 * tileSize;
    // ctx.drawImage(mapImage, srcImageX2, srcImageY2, tileSize, tileSize, 1 * (tileSize * SCALE), 0 * (tileSize * SCALE), tileSize * SCALE, tileSize * SCALE);

}

requestAnimationFrame(update);