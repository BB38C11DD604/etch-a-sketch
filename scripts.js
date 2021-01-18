// Use CSS flex to create rows and pixels inside the rows.
let body = document.getElementsByTagName("BODY")[0];
let board = document.querySelector('#board');
let boardRow;
let pixel;

function newBoard(x) {
    for (i = 1; i <= x; i++) {
        boardRow = document.createElement('div');
        boardRow.id = `board-row-${i}`;
        boardRow.classList = 'board-row';
        board.appendChild(boardRow);

        for (j = 1; j <= x; j++) {
            pixel = document.createElement('div');
            pixel.id = `pixel`;
            pixel.classList = 'pixel-fill-0';
            boardRow.appendChild(pixel);
        }
    }
}

// Initialize with 16 x 16
newBoard(16);
colorPixels();

// Coloring logic
function colorPixels() {
    document.querySelectorAll('#pixel').forEach(item => {
        item.addEventListener('mouseover', event => {
            let pixelClass = item.classList.toString();
            if (pixelClass === 'pixel-fill-10') {
                return;
            } else {
                let currentShade = pixelClass.slice(-1);
                let nextShade = (currentShade * 1) + 1; // Turn string into number.
                let newPixelClass = pixelClass.replace(currentShade, nextShade);
                item.classList = newPixelClass;
            }
        })
    })
}

// Reset button deletes board and all elements inside and creates anew.
const button = document.querySelector('button');
button.addEventListener("click", function(){
    function getNewPixels() {
        let newPixels = prompt("How many pixels would you like per row? Enter a number from 1 to 100.");
        if (!(newPixels <= 100 && newPixels >= 0)) {
            getNewPixels();
        } else {
            board.remove();
            board = document.createElement('div');
            board.id = "board";
            body.appendChild(board);
            newBoard(newPixels);
            colorPixels();
        }    
    }
    getNewPixels();
});
