
import {Component} from 'react';
import PersonCard from '../PersonCard/PersonCard';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      personCard: [{
        firstName: "Jane",
        lastName: "Doe",
        age: 45,
        hairColor: "Black"
        },
        {
          firstName: "John",
          lastName: "Smith",
          age: 88,
          hairColor: "Brown"
        },
        {
          firstName: "Millard",
          lastName: "Fillmore",
          age: 50,
          hairColor: "Brown"
        },
        {
          firstName: "Maria",
          lastName: "Smith",
          age: 62,
          hairColor: "Brown"
        }]
    }
  }

  render = () => {
    return(
      <div id="containerPersonCard">
        {this.state.personCard.map((personCard) => {
          return (<PersonCard firstName={personCard.firstName}
                              lastName={personCard.lastName}
                              age={personCard.age}
                              hairColor={personCard.hairColor}
                            />)
        })}
      </div>
    );
  }
}


export default App
