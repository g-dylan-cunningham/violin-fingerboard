class NoteFactory {
    constructor(note) {
      this.note = note;
    }
    getNote() {
      return {
        note: this.note
      }
    }
  }

  
  
export const generateRichKey = (outerArr) => {
  return outerArr.map(innerArr => {
    return innerArr.map(note => ( 
      new NoteFactory(note).getNote()
    ))
  })
}



