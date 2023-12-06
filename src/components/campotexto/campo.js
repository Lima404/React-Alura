import './campo.css'

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='card'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.prior} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto