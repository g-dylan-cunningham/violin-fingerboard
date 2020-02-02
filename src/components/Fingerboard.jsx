import React, { useState } from 'react';
import { generateRichKey } from '../utils/generateRichKey';
import { keyOfC } from "../notesInKeys"
import './Fingerboard.css'
import { QuestionContext } from '../App';
import SoundPlayer from '../utils/soundPlayer';
import pitches from '../utils/pitches';

const Fingerboard = ({setAttempt}) => {

    const arr = generateRichKey(keyOfC).map(string => {
        return <String arr={string} setAttempt={setAttempt}/>
    })

    return (
        <div>
            {arr}
        </div>
    )
}

const String = ({arr, setAttempt}) => {
    return (
        <div className="string-container">
            {
                arr.map(note => {
                    return <Note obj={note} setAttempt={setAttempt}/>
                })
            }
        </div>
    )
}

const Note = ({obj, setAttempt}) => {
    const [isHidden, setIsHidden] = useState('none');
    const handleClick = () => {
        setAttempt(obj);
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audio = new AudioContext();
        const pitch = parseFloat(pitches[obj.note + (obj.octave.toString())]);
        (new SoundPlayer(audio)).play(pitch, 0.8, "sine").stop(0.5);
        setIsHidden('');
        setTimeout(()=> {
            setIsHidden('none');
        }, 1000);
    }




    return (
        <QuestionContext.Consumer>
            {value => (
                <div onClick={handleClick} className="note-container">{obj.note}
                    <img src={obj.image} style={{display:isHidden, position: 'absolute', left: 0, bottom: 0}} alt=''/>
                </div>
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