import { connect } from 'react-redux';
import Synth from './synth';
import { keyPressed, keyReleased } from '../../actions/notes_actions';
import { addNotes } from "../../actions/tracks_actions";

/*const mapStateToProps = state => ({
  notes: state.notes
});*/
function mapStateToProps(state) {
  return {
    notes: state.notes,
    isRecording: state.isRecording,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    keyPressed: key => dispatch(keyPressed(key)),
    keyReleased: key => dispatch(keyReleased(key)),
    addNotes: notes => dispatch(addNotes(notes))
  };
};

const SynthContainer = connect(
// export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);

export default SynthContainer;
