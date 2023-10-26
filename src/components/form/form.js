import './form.css'
import CampoTexto from '../campotexto/campo'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão'
    ]
    return(
        <section>
                <form>
                    <h2>Preencha os cargos para criar o card do colaborador!</h2>
                    <div className='box-interno'>
                        <div>
                            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                            <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                            <CampoTexto label="Imagem" placeholder="Digite seuo endereço de imagem"/>
                            <ListaSuspensa itens={times}/>
                        </div>
                        <div className='buttom'>
                            <button>Criar card</button>
                        </div>
                    </div>
                </form>
        </section>
    )
}

export default Formulario