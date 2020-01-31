import React from 'react';
import { generateRichKey } from '../utils/generateRichKey';
import { keyOfC } from "../notesInKeys"
import './Fingerboard.css'
import { QuestionContext } from '../App';
import SoundPlayer from '../utils/soundPlayer';
import pitches from '../utils/pitches';


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



    const handleClick = () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audio = new AudioContext();
        // console.log(audio)
        // debugger
        const pitch = parseFloat(pitches[obj.note + (obj.octave.toString())]);
        (new SoundPlayer(audio)).play(pitch, 0.8, "sine").stop(0.5);
    }





    return (
        <QuestionContext.Consumer>
            {value => (
                <div onClick={handleClick} className="note-container">{obj.note}</div>
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