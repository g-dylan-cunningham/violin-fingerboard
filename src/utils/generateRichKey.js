class NoteFactory {
    
    constructor(note, octave, noteCode) {
      this.note = note;
      this.octave = octave;
      this.noteCode = noteCode;
    }
    getNote() {
      if(this.note) {
        return {
          note: this.note,
          octave: this.octave,
          noteCode: this.noteCode,
          image: require(`../images/${this.octave}-${this.note}.png`)
        }
      } else return {noteCode: this.noteCode};

    }
  }

  
  
export const generateRichKey = (outerArr) => {
  return outerArr.map((innerArr) => {
    return innerArr.map(note => { 
      const noteCode = note[1]+"-"+note[0];
      return new NoteFactory(note[0], note[1], noteCode).getNote()
    })
  })
}



