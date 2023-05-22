const Navbar = ({ onChanges }) => {
  const handleChangeInput = (e) => {
    onChanges(e.target.value);
  };
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand text-white">Pokemon</p>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            onChange={handleChangeInput}
            type="search"
            placeholder="Filtrar"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
