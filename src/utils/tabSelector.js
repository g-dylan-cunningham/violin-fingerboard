



const getRange = (lowerOctave, upperOctave, lowestNote, highestNote ) => {
    const notes = [ "1-a", "1-b", '1-c', '1-d','1-e','1-f','1-g',
    '2-a', '2-b', '2-c','2-d', '2-e', '2-f','2-g', 
    '3-a', '3-b', '3-c', '3-d', '3-e', '3-f', '3-g'];
    let start;
    let end;
    return notes.filter((note) => {
        // debugger;

        if (note === (lowerOctave + "-" + lowestNote)) {
            start = true;
        } else if (note === (upperOctave + "-" + highestNote)){
            end = true;
            return note;
        }
        console.log(note, start, end, lowerOctave + "-" + lowestNote)
        if(start && !end) {
            return note;
        }
        
    })


   

}
export default getRange;

// export const getRandomWithinRange = () => 

