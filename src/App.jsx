import reactDOM from 'react-dom/client';

function App(){
    return (
        <h1>Hello, React!</h1>
    );
}

const container = document.getElementById('root');
const root = reactDOM.createRoot(container);

root.render(<App/>);