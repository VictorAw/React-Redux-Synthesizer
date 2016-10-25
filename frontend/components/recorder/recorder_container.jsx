import { connect } from "react-redux";
import Recorder from "./recorder";
import { startRecording, stopRecording }
  from "../../actions/tracks_actions";

function mapStateToProps(state) {
  return {isRecording: state.isRecording};
}

function mapDispatchToProps(dispatch) {
  return {
    startRecording: () => dispatch(startRecording()),
    stopRecording: () => dispatch(stopRecording())
  };
}

const RecorderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);

export default RecorderContainer;
