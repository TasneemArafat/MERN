import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));
    // import io from 'socket.io';
    // const srverRef = useRef();
    // serverRef.current.on() ||  serverRef.current.emit()
    
        useEffect(() => {
    
            console.log('Is this running?');
            socket.on("Welcome", data => console.log(data))//
        
          }, []);
    return (
        <div>
            <h1>Socket Test</h1>
        </div>
    )
}

export default Chat
