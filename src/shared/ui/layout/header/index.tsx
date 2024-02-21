import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IconButton } from "../../button";
import { changeTheme, selectTheme } from "../../theme/themeSlice/themeSlice";
import DarkModeIcon from "./assets/dark_mode.svg";
import LogoIcon from "./assets/landscape_40.svg";
import LightModeIcon from "./assets/light_mode.svg";
import SHeader, { LogoButton } from "./styled";
import HeaderProps from "./types";

const Header: React.FC<HeaderProps> = ({ variant }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedTheme = useSelector(selectTheme);

  const handleLogoClick = () => {
    navigate("/");
  };

  const changeMode = () => {
    dispatch(changeTheme());
  };

  return (
    <SHeader variant={variant}>
      <LogoButton onClick={handleLogoClick}>
        <LogoIcon />
      </LogoButton>

      <IconButton onClick={changeMode}>
        {selectedTheme.name === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </SHeader>
  );
};

export default Header;
