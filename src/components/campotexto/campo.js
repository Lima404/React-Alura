import './campo.css'

const CampoTexto = (props) => {
    return(
        <div className='card'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto