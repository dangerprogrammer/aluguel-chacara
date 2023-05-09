import React from 'react';
import io from 'socket.io-client';

export default function User() {
    const setWebSocket = () => {
        const socket = io.connect('http://localhost:3001');
        console.log(socket);
    };

    return <div>
        <h1>User</h1>
        <button onClick={() => setWebSocket()}>Entrar WebSocket</button>
    </div>
};
