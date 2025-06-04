import React, { useRef, useState } from 'react';
import { FaCircle, FaStopCircle, FaVideo } from 'react-icons/fa';

export default function CreateVideo() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [localVideo, setLocalVideo] = useState(null);

  const getLastMediaFile = async () => {
    // Note: Browsers can't access file system directly without user input.
    // This simulates fallback (browsers don’t allow auto-access to storage).
    console.log("Browsers don't support auto access to gallery/files due to privacy.");
  };

  const requestPermissions = async () => {
    try {
      const permissionStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      // Auto-start camera and recording setup
      startCamera(permissionStream);
    } catch (error) {
      alert('Permission denied or device not supported.');
      console.error(error);
    }
  };

  const startCamera = (stream) => {
    videoRef.current.srcObject = stream;
    videoRef.current.play();

    mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm' });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const videoURL = URL.createObjectURL(blob);
      setLocalVideo(videoURL);
    };
  };

  const startRecording = () => {
    setRecordedChunks([]);
    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div
      className="w-100 h-100 p-2 position-relative"
      style={{
        zIndex: 100101,
        background: 'black',
        color: 'white',
      }}
    >
      {/* Video Preview */}
      <video
        ref={videoRef}
        className="border mb-4"
        autoPlay
        muted
        style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
      />

      {/* Bottom Controls */}
      <div className="w-100 d-flex justify-content-center gap-4 mb-3 position-absolute bottom-0 start-50 translate-middle-x">
        {/* Permission + Start */}
        <button
          onClick={requestPermissions}
          className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
          style={{ width: 60, height: 60, fontSize: 22, border: 'none' }}
          title="Request Camera Permission"
        >
          <FaVideo />
        </button>

        {/* Record / Stop */}
        {!recording ? (
          <button
            onClick={startRecording}
            className="rounded-circle bg-danger d-flex align-items-center justify-content-center"
            style={{ width: 60, height: 60, fontSize: 22, border: 'none' }}
            title="Start Recording"
          >
            <FaCircle />
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="rounded-circle bg-warning d-flex align-items-center justify-content-center"
            style={{ width: 60, height: 60, fontSize: 22, border: 'none' }}
            title="Stop Recording"
          >
            <FaStopCircle />
          </button>
        )}
      </div>

      {/* Playback Preview */}
      {localVideo && (
        <video
          src={localVideo}
          controls
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            maxHeight: '30vh',
            width: '90%',
            zIndex: 100000,
            borderRadius: 12,
          }}
        />
      )}
    </div>
  );
}
