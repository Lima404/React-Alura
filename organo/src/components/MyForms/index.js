import './Forms.css'

const Formulario = () => {
    return(
        <div className='background'>
            <div className='box-formulario'>
                <div className='form'>
                    <h2>Preencha os cargos para criar o card do colaborador!</h2>
                    <div className='box-interno'>
                        <div className='card'>
                            <label>Nome:</label>
                            <input/>
                        </div>
                        <div className='card'>
                            <label>Cargo:</label>
                            <input/>
                        </div>
                        <div className='card'>
                            <label>Imagem:</label>
                            <input/>
                        </div>
                        <div className='card'>
                            <label>Time:</label>
                            <input/>
                        </div>
                        <div className='buttom'>
                            <button>Criar card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario