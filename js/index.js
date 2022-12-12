let figureNode = document.querySelector(`#figure`);
let count = 0;

figureNode.addEventListener(`click`, function () {
    if (count == 0) {
        figureNode.classList.remove(`square`);
        figureNode.classList.add(`circle`);
        count++;
    } else if (count == 1) {
        figureNode.classList.remove(`circle`);
        figureNode.classList.add(`triangle`);
        count++;
    } else if (count == 2) {
        figureNode.classList.remove(`triangle`);
        figureNode.classList.add(`polygon`);
        count++;
    } else {
        figureNode.classList.remove(`polygon`);
        figureNode.classList.add(`square`);
        count = 0;
    }
});