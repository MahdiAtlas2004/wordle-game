const Header = ({handleInfo}) => {
  return (
    <div className="header">
      <div className="d1"></div>
      <div className="d2">
        <h1>Wordle (Lingo)</h1>
      </div>
      <div className="d3">
        <i className="bi bi-patch-question info" onClick={handleInfo}></i>
      </div>
    </div>
  );
};

export default Header;
