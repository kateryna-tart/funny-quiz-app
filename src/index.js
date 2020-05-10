import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import pickQuestion from './components/Questions';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

class Quiz extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    };
    getQuestion = () => {
        pickQuestion().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        } 
            this.setState({
                responses: this.state.responses < 3 ? 
                this.state.responses +1 : 3
            })
        };

    playAgain = () => {
        this.setState({
            questionBank: [],
            score: 0,
            responses: 0
        });
        this.getQuestion();

    }

    componentDidMount() {
        this.getQuestion();
    }
    render() {
        return (
        <div className='container'>
            <div className='title'>
                <div className='span'>Quiz for coders :)</div>
                </div>
            {this.state.questionBank.length > 0
            // to check if questionBank array 
            // does have data to render
            && this.state.responses < 3
            && this.state.questionBank.map(({
                question, answers, correct, questionId
            }) => (
            <QuestionBox 
                question={question}
                options={answers}
                key={questionId}
                selected={answer => this.computeAnswer(answer, correct)}
                />
            )
            )}
            {/* <h3>Score: {this.state.score} </h3> */}
            {this.state.responses === 3 ?
            (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
        </div>
        );
    }
}

ReactDOM.render(<Quiz />, document.getElementById('root'));