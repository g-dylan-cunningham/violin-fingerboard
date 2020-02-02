import React from 'react';
import getRange from '../utils/tabSelector.js'


const QuestionTab = () => {


    const notes = getRange("1", "2", "a", "f").map((note) => {
        console.log(note)
    });
    
    return (
        <div>


        questiontab
        </div>
    )
    // return note;
}

export default QuestionTab;