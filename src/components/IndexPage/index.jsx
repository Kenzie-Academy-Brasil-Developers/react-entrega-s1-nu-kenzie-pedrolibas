import "./style.css";
import log from "../../assets/log.svg";

const IndexPage = ({ setIndexPage }) => {
  function switchPage() {
    setIndexPage(true);
  }

  return (
    <div className="index__page">
      <div className="index__info">
        <h1>
          <span className="emphasis__title">Nu</span> Kenzie
        </h1>
        <p className="p__info">Centralize o controle das suas finanças</p>
        <span className="span__info">de forma rápida e segura</span>
        <button onClick={switchPage} className="button">Iniciar</button>
      </div>
      <div className="image__info">
        <img src={log} alt="" />
      </div>
    </div>
  );
};

export default IndexPage;
