import React from 'react';
import Fingerboard from './components/Fingerboard';
import RangePicker from './components/RangePicker';
import QuestionTab from './components/QuestionTab';

export const QuestionContext = React.createContext('c');


class App extends React.Component {
  render() {
    return (
      <QuestionContext.Provider value='c'>
      <div className="App">
        <RangePicker />
        <QuestionTab />
        <Fingerboard />
      </div>
      </QuestionContext.Provider>
    );
  }

}

export default App;
