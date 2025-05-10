import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './screens/Login/Login';
import HomeProfessor from './screens/HomeProfessor/HomeProfessor';
import HomeAluno from './screens/HomeAluno/HomeAluno';
import HomeCoordenacao from './screens/HomeCoordenacao/HomeCoordenacao';
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
      </Routes>
    </Router>
  );
}

export default App;

