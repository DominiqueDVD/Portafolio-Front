import { Link } from "react-router-dom";


const HeaderComponent = () => {
  return (
    <header className="header">
      <h2>Header</h2>
      <button>
        <Link to="/technologies">Ir a Tecnologías</Link>
      </button>
    </header>
  );
};

export default HeaderComponent;
