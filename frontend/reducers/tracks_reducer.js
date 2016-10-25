import { START_RECORDING, STOP_RECORDING, ADD_NOTES }
  from "../actions/tracks_actions";
import merge from "lodash/merge";

let currTrackId = 0;

function tracksReducer(state = {}, action) {
  Object.freeze(state);

  // merge mutates the first argument, so we need to copy state
  let currState = merge({}, state);

  switch(action.type) {
    case START_RECORDING: {
      currTrackId++;
      let newTrack = {
        id: currTrackId,
        name: action.name,
        roll: [],
        timeStart: action.timeNow
      };
      let trackRecord = {};
      trackRecord[currTrackId] = newTrack;
      return merge(currState, trackRecord);
    }
    case STOP_RECORDING: {
      console.log(state);
      let currTrack = merge({}, state[currTrackId]);
      console.log(currTrack);
      currTrack.roll.push({
        notes: action.notes,
        timeSlice: action.timeNow - state[currTrackId].timeStart
      });
      let trackRecord = {};
      trackRecord[currTrackId] = currTrack;
      return merge(currState, trackRecord);
    }
    case ADD_NOTES: {
      let currTrack = merge({}, state[currTrackId]);
      currTrack.roll.push({
        notes: action.notes,
        timeSlice: action.timeNow - state[currTrackId].timeStart
      });
      let trackRecord = {};
      trackRecord[currTrackId] = currTrack;
      return merge(currState, trackRecord);
    }
    default:
      return state;
  }
}

export default tracksReducer;
