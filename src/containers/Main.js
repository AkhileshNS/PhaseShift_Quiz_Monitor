//External Libraries
import React, {Component, Fragment} from 'react';

//Internal Libraries
import firebase from '../firebase';
import Score from '../components/Score';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            answers: []
        };
    }

    componentDidMount() {

        let list = [];
    
        let ref = firebase.database().ref().child('Answers');
        ref.once('value').then((snapshot) => {
          snapshot.forEach((child) => {
            let answer = child.val();
            list.push({
              ...answer,
              final: Math.round((answer.score - (answer.time/120)) * 100)/100
            });
          });
          
          list.sort((a1, a2) => {
            return a2.final-a1.final;
          })
    
          this.setState({
            answers: list
          });
        }).catch((err) => {
          console.log(err);
        });
    
      }

    render() {
        let list = [];
        let answers = this.state.answers;
    
        for (let answer of answers) {
          list.push(<Fragment><Score
              key={answer.mobileno}
              name={answer.name}
              mobileno={answer.mobileno}
              email={answer.email}
              time={answer.time}
              score={answer.score}
              final={answer.final}
            /><br /></Fragment>);
        }

        return <Fragment>
            <h2>ScoreBoard</h2>
            {list}
        </Fragment>
    }
}

export default Main;
