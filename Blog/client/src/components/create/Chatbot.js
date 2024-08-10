import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Load Botpress Webchat
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Load Botpress Config
    const script2 = document.createElement('script');
    script2.src = "https://mediafiles.botpress.cloud/44fc32bf-5938-4401-a033-66831fc4347b/webchat/v2/config.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const handleClick = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: 'show' });
    }
  };

  return (
    <div
      id="help-chatbot"
      onClick={handleClick}
    >
    </div>
  );
};

export default Chatbot;
