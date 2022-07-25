import "./style.css";

const Header = ({setIndexPage}) => {

    function switchPage(){
        setIndexPage(false)
    }

  return (
    <header>
      <div>
        <h1 className="title-home">
          <span className="emphasis__title">Nu</span> Kenzie
        </h1>
        <button onClick={switchPage} className="button__start">Inicio</button>
      </div>
    </header>
  );
};

export default Header;
