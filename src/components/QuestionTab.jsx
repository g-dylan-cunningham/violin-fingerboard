import React, { useState } from 'react';
import getRange from '../utils/tabSelector.js'


const QuestionTab = ({rangeLimits, setCurrentTestingNote, currentTestingNote, history}) => {

    // TODO - don't show last note twice in a row
    const [lastNote, setLastNote] = useState("");
    const noteCodeList = getRange(rangeLimits).map((note) => {
        return note;
    });

    if(noteCodeList.length === 0) {
        return (
            <div>Please choose a range to play</div>
        )
    }

    const getRandomInt = (max) => {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1));
    }

    const CurrentNoteRenderer = ({noteCodeList, history, currentTestingNote}) => {
        let lastAttempt = history && history.length && history[history.length-1].noteCode ? history[history.length-1].noteCode : "";
        let randomIndex = getRandomInt(noteCodeList.length);
        if((noteCodeList.length !== 0 
            && history.length === 0 
            && !currentTestingNote) 
            || currentTestingNote === lastAttempt) {
                console.log('correct guess', currentTestingNote,lastAttempt)
                setCurrentTestingNote(noteCodeList[randomIndex]);
        } else {
            console.log("incorrect guess", currentTestingNote, lastAttempt)
        }

        return <div>QUESTION: {currentTestingNote}</div>;
    }


    return (
        <div>
            <CurrentNoteRenderer noteCodeList={noteCodeList} currentTestingNote={currentTestingNote} history={history}/>
        </div>
    )
    // return note;
}

export default QuestionTab;