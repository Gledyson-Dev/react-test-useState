import "./style.css"
import {useState} from "react"

function Main() {
    //Cont, setCount
    const [count, setCount] = useState(0)
    
    return (
        <>
        <h1>Clique Abaixo Para <span className="green">Adicionar</span> ou <span className="red">Remover</span></h1>

        <h2>{count}</h2>
        <div className="botao">
        <button 
        className="botao1" 
        onClick={() => setCount(count + 1)}>
        +</button>
        <button 
        className="botao2" 
        onClick={() => count > 0 && setCount(count - 1)}>
        -</button>
        </div>
        </>
    )
    
}

export default Main