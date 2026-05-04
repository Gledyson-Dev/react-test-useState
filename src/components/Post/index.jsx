import "./style.css"

function Post(props){
    return (

        <article className="article">
        <h1>{props.title}</h1>

        <small>Leia em {props.readingTime}{" "}
            {props.readingTime === 1 ? "minuto" : "minutos"}
        </small>

        {props.children}
        </article>

    )
}

export default Post