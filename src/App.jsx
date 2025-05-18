import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './screens/Login/Login';
import HomeProfessor from './screens/HomeProfessor/HomeProfessor';
import HomeAluno from './screens/HomeAluno/HomeAluno';
import HomeCoordenacao from './screens/HomeCoordenacao/HomeCoordenacao';
import AdicionarPessoas from "./screens/HomeCoordenacao/AdicionarPessoas/AdicionarPessoas"
import GerenciarPessoas from "./screens/HomeCoordenacao/GerenciarPessoas/GerenciarPessoas"
import Ranking from './screens/HomeProfessor/Ranking/Ranking';

import RotaPrivada from './components/RotaPrivada/RotaPrivada';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/professor"
          element={
            <RotaPrivada tipoEsperado="professor">
              <HomeProfessor />
            </RotaPrivada>
          }
        />
        <Route
          path="/aluno"
          element={
            <RotaPrivada tipoEsperado="aluno">
              <HomeAluno />
            </RotaPrivada>
          }
        />
        <Route
          path="/coordenacao"
          element={
            <RotaPrivada tipoEsperado="coordenacao">
              <HomeCoordenacao />
            </RotaPrivada>
          }
        />
        <Route
          path="/coordenacao"
          element={
            <RotaPrivada tipoEsperado="coordenacao">
              <HomeCoordenacao />
            </RotaPrivada>
          }
        />
        <Route
          path="/AdicionarPessoas"
          element={
            <RotaPrivada tipoEsperado="coordenacao">
              <AdicionarPessoas/>
            </RotaPrivada>
          }
        />
        <Route
          path='/GerenciarPessoas'
          element={
            <RotaPrivada tipoEsperado={"coordenacao"}>
              <GerenciarPessoas/>
            </RotaPrivada>
          }
        />
        <Route
          path='/Ranking'
          element={
            <RotaPrivada tipoEsperado={"professor"}>
              <Ranking/>
            </RotaPrivada>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

