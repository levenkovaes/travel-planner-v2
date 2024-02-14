import { SmallerParagraph } from "../../typography";
import SFooter from "./styled";
import { FooterProps } from "./types";

const Footer: React.FC<FooterProps> = ({ variant }) => {
  return (
    <SFooter variant={variant}>
      <SmallerParagraph>© 2024. All Rights Reserved.</SmallerParagraph>
    </SFooter>
  );
};

export default Footer;
