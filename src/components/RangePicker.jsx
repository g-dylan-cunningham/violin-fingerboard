import React from 'react';
import './RangePicker.css'

class RangePicker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          lowOctave: '1',
          highOctave: '2',  
          lowNote: 'g',
          highNote: 'g'  
        };
  
        this.handleLowOctaveChange = this.handleLowOctaveChange.bind(this);
        this.handleHighOctaveChange = this.handleHighOctaveChange.bind(this);
        this.handleLowNoteChange = this.handleLowNoteChange.bind(this);
        this.handleHighNoteChange = this.handleHighNoteChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleLowOctaveChange(event) {
      this.setState({lowOctave: event.target.value});
    }
    handleHighOctaveChange(event) {
        this.setState({highOctave: event.target.value});
    }
    handleLowNoteChange(event) {
        this.setState({lowNote: event.target.value});
    }
    handleHighNoteChange(event) {
        this.setState({highNote: event.target.value});
    }
  
    handleSubmit(event) {
      this.props.setRange([this.state.lowOctave, this.state.highOctave, this.state.lowNote, this.state.highNote])
      event.preventDefault();
    }
  
    render() {

      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick low range for octave
            <select value={this.state.lowOctave} onChange={this.handleLowOctaveChange}>
              <option value="1">Low</option>
              <option value="2">Mid</option>
              <option value="3">High</option>
              <option value="4">Very High</option>
            </select>
          </label>

        <label>
            Pick high range for octave
            <select value={this.state.highOctave} onChange={this.handleHighOctaveChange}>
              <option value="1">Low</option>
              <option value="2">Mid</option>
              <option value="3">High</option>
              <option value="4">Very High</option>
            </select>
          </label>

        <label>
            Pick low range for note
            <select value={this.state.lowNote} onChange={this.handleLowNoteChange}>
                <option value="g">G</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
                <option value="f">F</option>
            </select>
          </label>

        <label>
            Pick high range for note
            <select value={this.state.highNote} onChange={this.handleHighNoteChange}>
            <option value="g">G</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
                <option value="f">F</option>
            </select>
          </label>


          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default RangePicker;