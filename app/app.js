// Variável global para armazenar a timeline
let tl;

/**
 * Cria a animação usando Anime.js timeline com loop infinito
 */
function createAnimation() {
    // Criar timeline com configurações padrão e loop infinito
    tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750,
        loop: true,
        direction: 'alternate' // Vai e volta (opcional)
    });

    // Adicionar animações à timeline
    tl.add({
        targets: '.triangle',
        translateX: '15rem',
        rotate: '1turn',
        scale: [0.8, 1.2, 1],
        duration: 1000
    })
    .add({
        targets: '.square',
        translateX: '15rem',
        rotate: '180deg',
        scale: [1, 1.3, 1],
        duration: 800
    }, '-=200') // Inicia 200ms antes da animação anterior terminar
    .add({
        targets: '.circle',
        translateX: '15rem',
        scale: [1, 1.5, 1],
        duration: 600
    }, '-=500'); // Inicia 500ms antes da animação anterior terminar
}

/**
 * Inicia a animação
 */
function startAnimation() {
    resetAnimation();
    createAnimation();
}

/**
 * Reseta todas as animações e posições dos elementos
 */
function resetAnimation() {
    if (tl) {
        tl.pause();
    }
    
    // Resetar posições dos elementos
    anime.set(['.triangle', '.square', '.circle'], {
        translateX: 0,
        rotate: 0,
        scale: 1
    });
}

window.addEventListener('load', () => {
    createAnimation(); 
});