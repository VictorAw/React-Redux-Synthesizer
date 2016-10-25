import $ from 'jquery';
import React from 'react';
import { KEY_NAMES, TONES } from "../../util/tones";
import Note from "../../util/notes";
import NoteKey from "./note_key";

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = {};
    KEY_NAMES.forEach((note) => {
      this.notes[note] = new Note(TONES[note]);
    });
  }

  render() {
    this.playNotes();
    return (
      <div>
        Synth

        <ul>
        {
          Object.keys(this.notes).map((key) => {
            return <NoteKey key={key} note={key} pressed={false}/>;
          })
        }
        </ul>
      </div>
    );
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);

    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);

    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  componentDidMount() {
    $(document).on("keydown", (e) => { this.onKeyDown(e); });
    $(document).on("keyup", (e) => { this.onKeyUp(e); });
  }

  playNotes() {
    KEY_NAMES.forEach((note) => {
      // debugger
      if (this.props.notes.includes(note)) {
        this.notes[note].start();
      }
      else {
        this.notes[note].stop();
      }
    });
  }
}

export default Synth;
