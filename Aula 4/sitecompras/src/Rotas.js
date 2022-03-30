const { BrowserRouter, Routes } = require ("react-router-dom");

function Rotas() {
    return (
        <BrowserRouter>
            <Routes path="/" element={<h1>Home</h1>}/>
        </BrowserRouter>
    );
}

export default Rotas;