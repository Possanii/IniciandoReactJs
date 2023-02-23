import './TextField.css'

const TextField = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className='text-field'>
            <label>{props.name}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.isRequired} placeholder={props.labelDescription ?? 'Digite seu ' + props.name}/>
        </div>
    ) 
}

export default TextField