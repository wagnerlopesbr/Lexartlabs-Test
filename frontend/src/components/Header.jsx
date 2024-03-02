import linkedinIcon from "../utils/images/linkedin-icon.png";
import githubIcon from "../utils/images/github-icon.png";
import logoutIcon from "../utils/images/logout-icon.png";
import lexartIcon from "../utils/images/lexart-icon.png";

const Header = () => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,2)",
        width: "100%",
        position: "relative",
        zIndex: "100",
      }}
    >
      <nav
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
          }}
        >
          <a href="https://lexartlabs.com/" rel="noreferrer" target="_blank">
            <img src={lexartIcon} height="20%" alt="lexart icon" />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: "3px",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <a
              href="https://www.linkedin.com/in/wagnerlopesbr"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedinIcon} width="24px" alt="linkedin-icon" />
            </a>
          </div>
          <div>
            <a
              href="https://www.github.com/wagnerlopesbr"
              rel="noreferrer"
              target="_blank"
            >
              <img src={githubIcon} width="24px" alt="github-icon" />
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
          }}
        >
          <button
            className="nav-btn"
            onClick={() => handleLogout(!setLogged)}
            style={{
              fontSize: "30px",
              backgroundColor: "black",
              border: "none",
              paddingTop: "3px",
              paddingRight: "5px",
              cursor: "pointer",
            }}
          >
            <img src={logoutIcon} width="22px" alt="logout icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
