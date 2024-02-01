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
function renderMap() { // map param.
    ctx.imageSmoothingEnabled = false;


    // Draw Map with them dots
    for (let row = 0; row < 31; row++) { 
        for (let col = 0; col < 28; col++) { 
           // const currentTile = map[row][col];
            const srcImageX = col * tileSize;
            const srcImageY = row * tileSize;
            // Draw Tile
            ctx.drawImage(mapImage, srcImageX, srcImageY, tileSize, tileSize, // image, sx, sy, sW, sH
                            col * (tileSize * SCALE), row * (tileSize * SCALE), tileSize * SCALE, tileSize * SCALE); // dx, dy, dW, dH
        }
    }

    // Draw Pac-Man
    // ToDo - make constants for pacman width and height (16x16)
    ctx.drawImage(mapImage, 57 * tileSize, 0, tileSize * 2, tileSize * 2,
                            200, 400, tileSize * SCALE * 2, tileSize * SCALE * 2);
    ctx.drawImage(mapImage, 59 * tileSize, 0, tileSize * 2, tileSize * 2,
        300, 400, tileSize * SCALE * 2, tileSize * SCALE * 2);
    ctx.drawImage(mapImage, 61 * tileSize, 0, tileSize * 2, tileSize * 2,
        400, 400, tileSize * SCALE * 2, tileSize * SCALE * 2);

}

requestAnimationFrame(update);