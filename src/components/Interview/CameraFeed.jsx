import React, { useEffect, useRef } from 'react';

const CameraFeed = ({ onFacesDetected }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        async function enableStream() {
            try {
                console.log('Requesting camera access...');
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                console.log('Camera access granted.');
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    console.log('Camera stream set to video.');
                } else {
                    console.error('Video ref is not available.');
                }
            } catch (err) {
                console.error('Error accessing the camera:', err);
            }
        }

        enableStream();

        if (videoRef.current) {
            videoRef.current.onloadedmetadata = () => {
                console.log('Camera feed metadata loaded, playing video...');
                videoRef.current.play()
                    .then(() => {
                        console.log('Video started playing.');
                        // Here you can start detecting faces as video is now playing
                        // Implement the face detection logic here or in another effect
                    })
                    .catch(error => {
                        console.error('Error attempting to play video:', error);
                    });
            };
        }

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                console.log('Stopping camera feed...');
                videoRef.current.srcObject.getTracks().forEach(track => {
                    track.stop();
                    console.log('Camera feed stopped.');
                });
            }
        };
    }, []);

    // You can include additional logic or useEffect here for face detection using the videoRef
    // ...

    return (
        <div>
            <video ref={videoRef} autoPlay muted id="video-feed" style={{ width: '100%' }} />
        </div>
    );
};

export default CameraFeed;





// // CameraFeed.jsx
// import React, { useState, useEffect, useRef } from 'react';

// const CameraFeed = () => {
//   const [hasPermission, setHasPermission] = useState(false);
//   const [error, setError] = useState('');
//   const videoRef = useRef(null);

//   useEffect(() => {
//     async function getMedia() {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//         setHasPermission(true);
//       } catch (err) {
//         setError('Camera access was denied. Please allow camera access and refresh the page.');
//         setHasPermission(false);
//       }
//     }

//     // Check for permissions first
//     navigator.permissions.query({ name: 'camera' })
//       .then(permission => {
//         if (permission.state === 'granted') {
//           getMedia();
//         } else if (permission.state === 'prompt') {
//           getMedia(); // Will prompt the user
//         } else {
//           setError('Camera access is not allowed. Please allow camera access and refresh the page.');
//           setHasPermission(false);
//         }
//       });

//     // Cleanup the stream on unmount
//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, []);

//   return (
//     <div className="camera-feed">
//       {!hasPermission && <div className="camera-error">{error}</div>}
//       {hasPermission && <video ref={videoRef} autoPlay playsInline />}
//     </div>
//   );
// };

// export default CameraFeed;
