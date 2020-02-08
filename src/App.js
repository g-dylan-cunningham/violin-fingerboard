import React from 'react';
import Fingerboard from './components/Fingerboard';
import RangePicker from './components/RangePicker';
import QuestionTab from './components/QuestionTab';
import getRange from './utils/tabSelector.js'

export const QuestionContext = React.createContext('c');




class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      rangeLimits: [],
      currentTestingNote: "",
      history: [],
      winningStreak: 0
    };
    this.handleRangeSubmit = this.handleRangeSubmit.bind(this);
    this.setCurrentTestingNote = this.setCurrentTestingNote.bind(this);
    this.setAttempt = this.setAttempt.bind(this);
  }

  handleRangeSubmit(range) {
    if(!range) {
      return;
    }
    let noteCodeList = getRange(range).map((note) => {
      return note;
    });
    this.setState({rangeLimits: range});
    console.log("state - handleRangeSubmit",this.state);
    this.getQuestion(noteCodeList);
  }

  setWinningStreak = () => this.setState(() => ({
    winningStreaK: this.state.winningStreaK + 1
  }))

  getQuestion = (noteCodeList) => {
    // debugger
    if(noteCodeList && noteCodeList.length > 0) {
      const getRandomInt = (max) => {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1));
      }
  
    
      
      // const { history, currentTestingNote } = this.state;
      let randomIndex = getRandomInt(noteCodeList.length);
      this.setCurrentTestingNote(noteCodeList[randomIndex]);
  
    }
  }

  setCurrentTestingNote(currentTestingNote) {
    this.setState({
      currentTestingNote: currentTestingNote
    })
    console.log("state - setCurrentTestingNote",this.state)
  }

  setAttempt(attempt) {
    // debugger;
    const { history, currentTestingNote } = this.state;
    let lastAttempt = history && history.length && history[history.length-1].noteCode ? history[history.length-1].noteCode : "";

    // first question
    if(history.length === 0 && !currentTestingNote) {
        console.log('first question', currentTestingNote,lastAttempt)
        this.getQuestion();
            
  // gave correct answer
    } else if(currentTestingNote === lastAttempt){
        console.log("correct guess");
        this.getQuestion();
        this.setWinningStreak(this.state.winningStreak + 1);
    } else {
        console.log("incorrect guess");
        this.setWinningStreak(0);
    }
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
        
        <RangePicker
          setRange={this.handleRangeSubmit}
        />
        <QuestionTab 
          rangeLimits={rangeLimits} 
          setCurrentTestingNote={this.setCurrentTestingNote} 
          currentTestingNote={currentTestingNote} 
          history={history}
        />
        <Fingerboard 
          setAttempt={this.setAttempt} 
          currentTestingNote={currentTestingNote}
        />
      </div>
      </QuestionContext.Provider>
    );
  }

}

export default App;
