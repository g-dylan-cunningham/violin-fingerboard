import React from 'react';
import Fingerboard from './components/Fingerboard';
import RangePicker from './components/RangePicker';
import QuestionTab from './components/QuestionTab';

export const QuestionContext = React.createContext('c');


class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      rangeLimits: [],
      currentTestingNote: "",
      history: [],
    };
    this.handleRangeSubmit = this.handleRangeSubmit.bind(this);
    this.setCurrentTestingNote = this.setCurrentTestingNote.bind(this);
    this.setAttempt = this.setAttempt.bind(this);
  }

  handleRangeSubmit(range) {
    this.setState({rangeLimits: range})
    console.log("state - handleRangeSubmit",this.state)
  }

  setCurrentTestingNote(currentTestingNote) {
    this.setState({
      currentTestingNote: currentTestingNote
    })
    console.log("state - setCurrentTestingNote",this.state)
  }

  setAttempt(attempt) {
    this.setState(prevState => {
      const newHistory = prevState.history.concat(attempt);
       return {history: newHistory};
    })
    console.log("state setAttempt",this.state)
  }
  render() {
    const { rangeLimits, history, currentTestingNote } = this.state;
    return (
      <QuestionContext.Provider value={this.state}>
      <div className="App">
        
        <RangePicker setRange={this.handleRangeSubmit}/>
        <QuestionTab rangeLimits={rangeLimits} setCurrentTestingNote={this.setCurrentTestingNote} currentTestingNote={currentTestingNote} history={history}/>
        <Fingerboard setAttempt={this.setAttempt}/>
      </div>
      </QuestionContext.Provider>
    );
  }

}

export default App;
