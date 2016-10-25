import { START_RECORDING, STOP_RECORDING } from "../actions/tracks_actions";

function isRecordingReducer(state = false, action) {
  switch(action.type) {
    case START_RECORDING:
      return true;
    case STOP_RECORDING:
      return false;
    default:
      return state;
  }
}

export default isRecordingReducer;
