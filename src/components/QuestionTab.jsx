import React, { useState } from 'react';
import getRange from '../utils/tabSelector.js'


const QuestionTab = ({rangeLimits, setCurrentNote, currentNote}) => {

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

    const currentNote = (noteCodeList) => {

        let index = getRandomInt(noteCodeList.length);
        setCurrentNote(noteCodeList[index]);
        return noteCodeList[index];
    }


    return (
        <div>
            {currentNote}
        </div>
    )
    // return note;
}

export default QuestionTab;