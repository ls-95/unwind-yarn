import { useNavigate } from "react-router-dom";
import LinkElement from "../../components/atoms/buttons/LinkElement";

export default function SidebarLinks() {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("http://localhost:3001/logout", {
      method: "POST",
      body: JSON.stringify({
        text: "The user has logged out",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        navigate("/");
      });
  }
  return (
    <div className="SidebarLinks">
      <p className="Strong">
        <LinkElement to="/projects" value="Projects" />
      </p>
      <p className="Strong">
        <LinkElement to="/yarn" value="Yarn stash" />
      </p>
      <p className="Strong">
        <LinkElement to="/myprofile" value="My profile" />
      </p>
      <p className="Strong">
        <LinkElement to="/settings" value="Settings" />
      </p>
      <p className="Strong">
        <LinkElement to="/" value="Logout" change={handleLogout} />
      </p>
    </div>
  );
}
