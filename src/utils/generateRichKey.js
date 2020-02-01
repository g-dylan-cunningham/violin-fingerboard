class NoteFactory {
    
    constructor(note, octave) {
      this.note = note;
      this.octave = octave;
    }
    getNote() {
      if(this.note) {
        return {
          note: this.note,
          octave: this.octave,
          image: require(`../images/${this.octave}-${this.note}.png`)
        }
      } else return {};

    }
  }

  
  
export const generateRichKey = (outerArr) => {
  return outerArr.map((innerArr) => {
    return innerArr.map(note => { 
      return new NoteFactory(note[0], note[1]).getNote()
    })
  })
}



