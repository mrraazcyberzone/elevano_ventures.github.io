import React from 'react';
import PropTypes from 'prop-types';

// Utility to detect if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent)
    );
    setIsMobile(mobile);
  }, []);

  return isMobile;
};

const VideoPlayer = ({ desktopVideoPath, mobileVideoPath, width = "100%", height = "auto" }) => {
  const isMobile = useIsMobile();

  return (
    <div className="video-container" style={{ width, height, position: 'relative' }}>
      {isMobile ? (
        // Mobile view video
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          style={{ border: 'none' }}
        >
          <source src={mobileVideoPath} type="video/mp4" />
        </video>
      ) : (
        // Desktop view video
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          style={{ border: 'none' }}
        >
          <source src={desktopVideoPath} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

VideoPlayer.propTypes = {
  desktopVideoPath: PropTypes.string.isRequired,
  mobileVideoPath: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default VideoPlayer;
