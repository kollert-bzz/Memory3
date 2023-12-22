const brawlers = Array.from({ length: 76 }, (_, index) => index + 1);


console.log(brawlers);
const getBrawlerPath = function (brawler) {
    return `img/img${brawler}.png`;
}

document.addEventListener('DOMContentLoaded', function () {
    const playground = document.getElementById('playground');
    let canton1 = brawlers.sort(() => 0.5 - Math.random())
    let canton_sliced = canton1.slice(0, 10)
    let array_cantons = [...canton_sliced, ...canton_sliced]
    let doublebrawler = array_cantons.sort(() => 0.5 - Math.random())
    doublebrawler.forEach(function (value) {
        const tile = document.createElement('div');
        const tileImage = document.createElement('img');
        tileImage.setAttribute('draggable', 'false');
        tileImage.setAttribute('src', getBrawlerPath(value));
        tileImage.classList.add('button-hide')
        tile.appendChild(tileImage);
        playground.appendChild(tile);
        tileImage.addEventListener('click', function () {
            click(tileImage);
        });
    });
});

let count = 0;
let counter = 0

function click(tileImage) {
    if (tileImage.classList.contains('button-hide') && count <= 1) {
        tileImage.classList.remove('button-hide')
        tileImage.classList.add('test')
        count ++
    } else {
        let check = document.querySelectorAll('img')
        check.forEach(check => check.classList.add('button-hide'))
        check.forEach(check => check.classList.remove('test'))
        count = 0
    }
    let images = document.querySelectorAll('.test');
    let sources = [];
    let imgs = []
    images.forEach(function(image) {
        sources.push(image.src);
        imgs.push(image)

    });
    for (let i = 0; i < sources.length; i++) {
        if (i === 1) {
            if (sources[0] === sources[1]) {
                imgs.forEach(function (img){
                    img.classList.add('img-show')
                    checkAllImagesRevealed();
                });
            } else {
                counter ++
            }
        }
    }
    let tries = document.getElementById('counter')
    tries.innerText='Versuche: ' + counter


    function checkAllImagesRevealed() {
        let allImages = document.querySelectorAll('.img-show');
        if (allImages.length === 20) {
            setTimeout(() => {
                alert('Spiel beendet! Alle Paare gefunden.');
            }, 1000);
        }
    }


}

function restartGame() {
    location.reload();
}