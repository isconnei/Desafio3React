export default function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Total: ${total.toLocaleString()}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
