// Captura os elementos necessários
const carrossel = document.getElementById('carrossel-obras');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

// Verificação de segurança (Boa prática de Backend)
if (carrossel && btnNext && btnPrev) {

    // Função para mover o carrossel
    const moverCarrossel = (direcao) => {
        // A MÁGICA: clientWidth pega a largura visível do carrossel no momento
        // Isso garante que ele pule exatamente UM item, não importa o tamanho da tela
        const larguraDaJanela = carrossel.clientWidth;

        if (direcao === 'proximo') {
            carrossel.scrollBy({ left: larguraDaJanela, behavior: 'smooth' });
        } else {
            carrossel.scrollBy({ left: -larguraDaJanela, behavior: 'smooth' });
        }
    };

    // 3. Atribuindo as ordens aos botões
    btnNext.addEventListener('click', () => moverCarrossel('proximo'));
    btnPrev.addEventListener('click', () => moverCarrossel('anterior'));

} else {
    console.error("Erro crítico: Elementos do carrossel não encontrados no DOM.");
}