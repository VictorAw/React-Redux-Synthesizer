import $ from 'jquery';
import React from 'react';

function Recorder({ isRecording, isPlaying, startRecording, stopRecording}) {
  return (
    <div className='recorder'>
      <div className='recorder-title'>
        Recorder
      </div>
      <button
        className='start-button'
        onClick={startRecording}
        disabled={isRecording || isPlaying}>
        Start
      </button>
      <button
        className='stop-button'
        onClick={stopRecording}
        disabled={!isRecording || isPlaying}>
        Stop
      </button>
    </div>
  );
}

export default Recorder;
