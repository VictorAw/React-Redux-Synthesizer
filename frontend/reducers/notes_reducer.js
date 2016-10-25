import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions.js';
import { KEY_NAMES } from '../util/tones.js';

function validKey(key) {
  return KEY_NAMES.includes(key);
}

function notesReducer(state = [], action) {
  Object.freeze(state);
  switch (action.type) {
    case KEY_PRESSED:
      if ( validKey(action.key) && !state.includes(action.key)) {
        return [...state, action.key];
      }
      return state;
    case KEY_RELEASED:
      let index = state.indexOf(action.key);
      if (validKey(action.key) && index !== -1) {
        return [...state.slice(0,index), ...state.slice(index + 1)];
      }
      return state;
    default:
      return state;
  }
}

export default notesReducer;
