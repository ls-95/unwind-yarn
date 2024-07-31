import { useNavigate } from "react-router-dom";
import LinkElement from "../../components/atoms/buttons/LinkElement";
import BoldText from "../../components/atoms/text/BoldText";

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
      <div>
        <BoldText>
          <LinkElement to="/projects" value="Projects" />
        </BoldText>
      </div>
      <div>
        <BoldText>
          <LinkElement to="/yarn" value="Yarn stash" />
        </BoldText>
      </div>
      <div>
        <BoldText>
          <LinkElement to="/myprofile" value="My profile" />
        </BoldText>
      </div>
      <div>
        <BoldText>
          <LinkElement to="/settings" value="Settings" />
        </BoldText>
      </div>
      <div>
        <BoldText>
          <LinkElement to="/" value="Logout" change={handleLogout} />
        </BoldText>
      </div>
    </div>
  );
}
