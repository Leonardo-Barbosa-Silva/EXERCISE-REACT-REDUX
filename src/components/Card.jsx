import './Card.css';


export default function Card(props) {

    function getColor(props) {
        if (props.red) return "Red"
        if (props.green) return "Green"
        if (props.purple) return "Purple"
        if (props.pink) return "Pink"
        if (props.range) return "Range"
        return ""
    }


    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
};