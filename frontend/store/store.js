import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

let preloadedState = {
  notes: [],
  isRecording: false,
  tracks: {}
};

function configureStore(defaultState = preloadedState) {
  return createStore(rootReducer, defaultState);
}

export default configureStore;
