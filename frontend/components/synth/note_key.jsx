import React from "react";
import { NOTE_NAMES } from "../../util/tones";

function NoteKey({note, pressed}) {
  return <li>{NOTE_NAMES[note]}</li>;
}

export default NoteKey;
