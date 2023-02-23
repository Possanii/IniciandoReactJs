import './Form.css'
import TextField from '../TextField'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Programação')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    return (
        <section className='formLayout'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card</h2>
                <TextField
                    isRequired={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    name='Nome'/>
                <TextField 
                    isRequired={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    name='Cargo'/>
                <TextField
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                    name='Imagem' />
                <ListaSuspensa 
                    isRequired={true}
                    label='Time'
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    itens = {props.times}/>
                <Botao texto='Criar card'/>
            </form>
        </section>
    )
}

export default Form