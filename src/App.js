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
      currentNote: "c",
      history: []
    };
    this.handleRangeSubmit = this.handleRangeSubmit.bind(this);
    this.setCurrentNote = this.setCurrentNote.bind(this);
    this.setAttempt = this.setAttempt.bind(this);
  }

  handleRangeSubmit(range) {
    this.setState({rangeLimits: range})
    console.log("state",this.state)
  }

  setCurrentNote(note) {
    this.setState({
      note: note
    })
    console.log("state",this.state)
  }

  setAttempt(attempt) {
    this.setState(prevState => {
      const newHistory = prevState.history.concat(attempt);
       return {history: newHistory};
    })
    console.log("state",this.state)
  }
  render() {
    const { rangeLimits } = this.state;
    return (
      <QuestionContext.Provider value={this.state}>
      <div className="App">
        
        <RangePicker setRange={this.handleRangeSubmit}/>
        <QuestionTab rangeLimits={rangeLimits} setCurrentNote={this.setCurrentNote}/>
        <Fingerboard setAttempt={this.setAttempt}/>
      </div>
      </QuestionContext.Provider>
    );
  }

}

export default App;
