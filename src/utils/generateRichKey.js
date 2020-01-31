class NoteFactory {
    
    constructor(note, octave) {
      this.note = note;
      this.octave = octave;
    }
    getNote() {

      console.log("r", this.note, this.octave)
      // debugger
      if(this.note) {
        return {
          note: this.note,
          octave: this.octave,
          image: require(`../images/low ${this.note}.png`)
        }
      } else return {};

    }
  }

  
  
export const generateRichKey = (outerArr) => {
  // debugger;

  return outerArr.map((innerArr) => {
    
    return innerArr.map(note => { 

      return new NoteFactory(note[0], note[1]).getNote()
    })
  })
}



