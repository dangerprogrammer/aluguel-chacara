import io from 'socket.io-client';

function HomeContent({socket, setSocket}) {
    const loadSocket = async socket => {
        socket ||= await io.connect('http://localhost:3001');

        setSocket(socket);
    };

    return <h1>Opa!</h1>
};

export default HomeContent;