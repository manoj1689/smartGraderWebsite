import React, { useEffect, useRef, useCallback } from 'react';
import * as faceapi from 'face-api.js';
import { toast } from 'react-toastify';

const MODEL_URL = '/models';

const loadModels = async () => {
    try {
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
        console.log('Models loaded');
    } catch (error) {
        console.error('Error loading models:', error);
    }
};

const detectFaces = async (videoElement) => {
    if (!videoElement) return [];
    try {
        return await faceapi.detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();
    } catch (error) {
        console.error('Error detecting faces:', error);
        return [];
    }
};

const CameraFeed = ({ onFacesDetected }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const intervalIdRef = useRef(null);
    const noFaceTimeoutRef = useRef(null);
    const multipleFaceTimeoutRef = useRef(null);

    const handleVideoPlay = useCallback(() => {
        intervalIdRef.current = setInterval(async () => {
            if (videoRef.current && canvasRef.current) {
                const detections = await detectFaces(videoRef.current);
                console.log('Detections:', detections);

                const faceVerified = detections.length > 0;
                const multiplePeopleDetected = detections.length > 1;
                console.log(`Face Verified: ${faceVerified}, Multiple People Detected: ${multiplePeopleDetected}`);

                if (!faceVerified && !noFaceTimeoutRef.current) {
                    noFaceTimeoutRef.current = setTimeout(() => {
                        console.log('No face detected for more than 10 seconds.');
                        toast.warn('No face detected for more than 10 seconds.');
                    }, 10000);
                } else if (faceVerified && noFaceTimeoutRef.current) {
                    clearTimeout(noFaceTimeoutRef.current);
                    noFaceTimeoutRef.current = null;
                }

                if (multiplePeopleDetected && !multipleFaceTimeoutRef.current) {
                    multipleFaceTimeoutRef.current = setTimeout(() => {
                        console.log('Multiple faces detected for more than 10 seconds.');
                        toast.warn('Multiple faces detected for more than 10 seconds.');
                    }, 10000);
                } else if (!multiplePeopleDetected && multipleFaceTimeoutRef.current) {
                    clearTimeout(multipleFaceTimeoutRef.current);
                    multipleFaceTimeoutRef.current = null;
                }
            }
        }, 100);
    }, [onFacesDetected]);

    useEffect(() => {
        const startVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                videoRef.current.srcObject = stream;
                console.log('Video stream started');
                videoRef.current.onplay = handleVideoPlay;
            } catch (err) {
                console.error('Error accessing webcam and microphone:', err);
            }
        };

        const loadAndStart = async () => {
            await loadModels();
            await startVideo();
        };

        loadAndStart();

        return () => {
            if (intervalIdRef.current) clearInterval(intervalIdRef.current);
            if (noFaceTimeoutRef.current) clearTimeout(noFaceTimeoutRef.current);
            if (multipleFaceTimeoutRef.current) clearTimeout(multipleFaceTimeoutRef.current);
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
                console.log('Video stream stopped');
            }
        };
    }, [handleVideoPlay]);

    return (
        <div>
            <video ref={videoRef} autoPlay muted style={{ width: '100%' ,borderRadius:'1%'}} />
            <canvas ref={canvasRef} style={{ position: 'absolute' }} />
        </div>
    );
};

export default CameraFeed;
