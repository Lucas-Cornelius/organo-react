import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value)} required={props.required} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
            <p className='lista-suspensa__aviso'>{props.aviso}</p>
        </div>
    )
};

export default ListaSuspensa;