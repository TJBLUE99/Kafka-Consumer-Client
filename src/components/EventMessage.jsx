import React, { useEffect, useState } from "react";

const EventMessage = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const sse = new EventSource("http://localhost:8080/stream-flux");

    const handleStream = (data) => {
      setMessage(data);
    };

    sse.onmessage = (e) => {
      handleStream(e.data);
    };

    sse.onerror = (e) => {
      sse.close();
    };

    return () => {
      sse.close();
    };
  }, []);

  return <div className="">The streaming data is : {message}</div>;
};

export default EventMessage;
