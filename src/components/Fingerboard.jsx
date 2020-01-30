import React from 'react';
import { generateRichKey } from '../utils/generateRichKey';
import { keyOfC } from "../notesInKeys"
import './Fingerboard.css'
import { QuestionContext } from '../App';
const Fingerboard = () => {

    const arr = generateRichKey(keyOfC).map(string => {
        return <String arr={string} />
    })

    return (
        <div>
            {arr}
        </div>
    )
}

const String = ({arr}) => {
    return (
        <div className="string-container">
            {
                arr.map(note => {
                    return <Note obj={note} />
                })
            }
        </div>
    )
}

const Note = ({obj}) => {
    return (
        <QuestionContext.Consumer>
            {value => (
                <div className="note-container">{obj.note}</div>
            )}

        </QuestionContext.Consumer>
    )

}

// class Note extends React {
//     static contextType = QuestionContext;
//     render() {
//         return (
//             // <QuestionContext.Consumer>
//             <div className="note-container" context={this.context}>
//                 {this.props.note} {this.context}
//             </div>
//             // </QuestionContext.Consumer>
//         )
//     }

// }

export default Fingerboard;