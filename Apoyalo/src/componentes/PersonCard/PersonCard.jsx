//Para los estilos de este componente, edite el :root{} de index.css
import { Component } from "react";
class PersonCard extends Component{
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <>
                <h1>{lastName}, {firstName} </h1>
                <h3>Age: {age} </h3>
                <h3>Hair Color: {hairColor} </h3>
            </>
        )
    }
}

export default PersonCard;