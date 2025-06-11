import "./RankingComponente.css"

const rankingData = [
  { pos: "1º", nome: "Nicole Silva Mascaretti", pontos: 1500 },
  { pos: "2º", nome: "Gustavo Versolatto", pontos: 360 },
  { pos: "3º", nome: "Gustavo Noronha Bomfim", pontos: 15 },
];

const TabelaRanking = () => {
  return (
    <div className="ranking-box1">
      <div className="ranking-header1">Ranking de desempenho</div>
      {rankingData.map((item, index) => (
        <div className="ranking-content1" key={index}>
          <div className="ranking-item">{item.pos}</div>
          <div className="ranking-item">{item.nome}</div>
          <div className="ranking-item">{item.pontos}</div>
        </div>
      ))}
      <div className="ranking-bar1">
        <div className="bar red"></div>
        <div className="bar blue"></div>
        <div className="bar yellow"></div>
      </div>
    </div>
  );
};

export default TabelaRanking;
