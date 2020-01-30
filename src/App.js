import React from 'react';
import Fingerboard from './components/Fingerboard';

export const QuestionContext = React.createContext('c');


class App extends React.Component {
  render() {
    return (
      <QuestionContext.Provider value='c'>
      <div className="App">
        app
        <Fingerboard />
      </div>
      </QuestionContext.Provider>
    );
  }

}

export default App;
