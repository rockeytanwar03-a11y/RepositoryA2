function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-left">
        
      </div>

      <div className="navbar-right">

        <div className="search-box">
          🔍
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="notification">
          🔔
          <span className="notification-dot"></span>
        </div>

        <div className="navbar-avatar">
          AU
        </div>

      </div>

    </header>
  );
}

export default Navbar;