class NoteFactory {

    constructor(note) {
      this.note = note;
    }
    getNote() {

      console.log("r", this.note)
      // debugger
      if(this.note) {
        return {
          note: this.note,
          image: require(`../images/low ${this.note}.png`)
        }
      } else return {};

    }
  }

  
  
export const generateRichKey = (outerArr) => {
  
  return outerArr.map(innerArr => {
    return innerArr.map(note => ( 
      new NoteFactory(note).getNote()
    ))
  })
}



