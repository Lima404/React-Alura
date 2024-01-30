import './form.css'
import CampoTexto from '../campotexto/campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({ nome, cargo, imagem, time })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    
    return(
        <section>
                <form onSubmit = {aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador!</h2>
                    <div className='box-interno'>
                        <div>
                            <CampoTexto 
                                prior={true} 
                                label="Nome" 
                                placeholder="Digite seu nome..."
                                valor={nome}
                                aoAlterado={valor => setNome(valor)}/>
                            <CampoTexto 
                                prior={true} 
                                label="Cargo" 
                                placeholder="Digite seu cargo..."
                                valor={cargo}
                                aoAlterado={valor => setCargo(valor)}/>
                            <CampoTexto 
                                label="Imagem" placeholder="Digite seuo endereço de imagem..."
                                valor={imagem}
                                aoAlterado={valor => setImagem(valor)}/>
                            <ListaSuspensa 
                                prior={true}
                                label="Time" 
                                itens={props.times}
                                valor={time}
                                aoAlterado={valor => setTime(valor)}
                                />
                            <Botao>
                                Criar Card
                            </Botao>
                        </div>
                    </div>
                </form>
        </section>
    )
}

export default Formulario