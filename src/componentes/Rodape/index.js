import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape-container'>
            <ul className='rodape-redes'>
                <li>
                    <a href='#'><img src='/imagens/fb.png' alt='Logo do Facebook' /></a>
                </li>
                <li>
                    <a href='#'><img src='/imagens/ig.png' alt='Logo do Instagran' /></a>
                </li>
                <li>
                    <a href='#'><img src='/imagens/tw.png' alt='Logo do Twitter/X' /></a>
                </li>
            </ul>

            <img src='/imagens/logo.png' alt='Logo da plataforma Organo' />

            <p>Desenvolvido por Alura</p>
        </footer>
    );
};

export default Rodape;