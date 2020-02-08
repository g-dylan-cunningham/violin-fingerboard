import React, { useState } from 'react';



class QuestionTab extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            winningStreak: 0
        }
    }

    // TODO - don't show last note twice in a row
    // const [lastNote, setLastNote] = useState("");
    // const [winningStreak, setWinningStreak] = useState(0);






    

    render() {
        
        if(!this.props.currentTestingNote) {
            return (
                <div>|| Please choose a range to play ||</div>
            )
        }

        return (
            <div>
                {this.state.winningStreak}
                <CurrentNoteRenderer currentTestingNote={this.props.currentTestingNote} />
            </div>
        )
    }
}

export default QuestionTab;


const CurrentNoteRenderer = ({ currentTestingNote }) => {


    return <div>QUESTION: {currentTestingNote}</div>;
}