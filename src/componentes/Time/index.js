import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <div>
                <h3>{props.nome}</h3>
                <div className='divisor' style={{ backgroundColor: props.corPrimaria }}></div>
            </div>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    key={colaborador.nome}
                    corDeFundo={props.corPrimaria}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    );
};

export default Time;