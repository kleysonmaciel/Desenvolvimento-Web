const figure = document.querySelectorAll('figure');
const legenda = document.querySelectorAll('figcaption');
const legendacompleta = document.querySelectorAll('.legenda-completa');
const figureImage = document.querySelectorAll('figure img');

figure.forEach((fig, idx) => {
    fig.addEventListener('mouseover', () => {
        caption[idx].classList.add('expanded');
        fullCaption[idx].classList.add('visible');
        figureImage[idx].classList.add('image-filter');
    });
    
    fig.addEventListener('mouseout', () => {
       caption[idx].classList.remove('expanded');
       fullCaption[idx].classList.remove('visible');
       figureImage[idx].classList.remove('image-filter');
    });
});