import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './screens/Login/Login';
import HomeProfessor from './screens/HomeProfessor/HomeProfessor';
import HomeAluno from './screens/HomeAluno/HomeAluno';
import HomeCoordenacao from './screens/HomeCoordenacao/HomeCoordenacao';
import AdicionarPessoas from "./screens/HomeCoordenacao/AdicionarPessoas/AdicionarPessoas"
import GerenciarPessoas from "./screens/HomeCoordenacao/GerenciarPessoas/GerenciarPessoas"
import Ranking from './screens/HomeProfessor/Ranking/Ranking';
import GerenciarTurmas from './screens/HomeProfessor/GerenciarTurmas/GerenciarTurmas';
import AtribuirPontos from './screens/HomeProfessor/AtribuirPontos/AtribuirPontos';
import CategoriaPontuacao from './screens/HomeProfessor/CategoriasPontuacao/CategoriaPontuacao'
import TelaInicialAtribuirPontos from './screens/HomeProfessor/AtribuirPontos/TelaInicialAtribuirPontos';
import AtividadePorTurma from './screens/HomeProfessor/AtribuirPontos/AtividadePorTurma';
import AtividadesDaTurma from './screens/HomeProfessor/AtribuirPontos/AtividadesDaTurma';
import CriarAtividades from './screens/HomeProfessor/CategoriasPontuacao/CriarAtividades';
import Turma from './screens/HomeProfessor/GerenciarTurmas/turma';

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
        <Route
          path='/GerenciarTurmas'
          element={
            <RotaPrivada tipoEsperado={"professor"}>
              <GerenciarTurmas/>
            </RotaPrivada>
          }
        />
        <Route
          path='/AtribuirPontos'
          element={
            <RotaPrivada tipoEsperado={"professor"}>
              <AtribuirPontos/>
            </RotaPrivada>
          }
        />
        <Route
          path='/CategoriasPontuacao'
          element={
            <RotaPrivada tipoEsperado={"professor"}>
              <CategoriaPontuacao/>
            </RotaPrivada>
          }
        />
        <Route
          path='/TelaInicialAtribuirPontos'
          element={
            <RotaPrivada tipoEsperado={"professor"}>
              <TelaInicialAtribuirPontos/>
            </RotaPrivada>
          }
        />
        <Route
          path='/AtividadePorTurma'
          element={
            <RotaPrivada tipoEsperado={"professor"}>
              <AtividadePorTurma/>
            </RotaPrivada>
          }
        />
        <Route
          path='/AtividadesDaTurma'
          element={
            <RotaPrivada tipoEsperado={"professor"}>
              <AtividadesDaTurma/>
            </RotaPrivada>
          }
        />
        <Route
          path='/CriarAtividades'
          element={
            <RotaPrivada tipoEsperado={"professor"}>
              <CriarAtividades/>
            </RotaPrivada>
          }
        />
        <Route
          path='/Turma'
          element={
            <RotaPrivada tipoEsperado={"professor"}>
              <Turma/>
            </RotaPrivada>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

