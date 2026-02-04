// Captura os elementos necessários
const carrossel_fab = document.getElementById('carrosel-processo-frabri');
const btnNext_fab = document.getElementById('btn-next-fabri');
const btnPrev_fab = document.getElementById('btn-prev-fabri');

// Verificação de segurança (Boa prática de Backend)
if (carrossel_fab && btnNext_fab && btnPrev_fab) {

    // Função para mover o carrossel
    const moverCarrossel = (direcao) => {
        // A MÁGICA: clientWidth pega a largura visível do carrossel no momento
        // Isso garante que ele pule exatamente UM item, não importa o tamanho da tela
        const larguraDaJanela = carrossel_fab.clientWidth;

        if (direcao === 'proximo') {
            carrossel_fab.scrollBy({ left: larguraDaJanela, behavior: 'smooth' });
        } else {
            carrossel_fab.scrollBy({ left: -larguraDaJanela, behavior: 'smooth' });
        }
    };

    // 3. Atribuindo as ordens aos botões
    btnNext_fab.addEventListener('click', () => moverCarrossel('proximo'));
    btnPrev_fab.addEventListener('click', () => moverCarrossel('anterior'));

} else {
    console.error("Erro crítico: Elementos do carrossel não encontrados no DOM.");
}