import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IconButton } from "../../button";
import { changeTheme, selectTheme } from "../../theme/themeSlice/themeSlice";
import DarkMode from "./assets/DarkMode";
import LightMode from "./assets/LightMode";
import { Logo } from "./assets/Logo";
import SHeader, { LogoButton } from "./styled";
import { HeaderProps } from "./types";

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
        <Logo></Logo>
      </LogoButton>

      <IconButton onClick={changeMode}>
        {selectedTheme.name === "light" ? <LightMode /> : <DarkMode />}
      </IconButton>
    </SHeader>
  );
};

export default Header;
