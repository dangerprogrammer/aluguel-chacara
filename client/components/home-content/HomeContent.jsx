import io from 'socket.io-client';

function HomeContent({setSocket}) {
    (async () => {
        const socket = await io.connect('http://localhost:3001');
        
        setSocket(socket);
    })();

    return <div>Opa!</div>
};

export default HomeContent;