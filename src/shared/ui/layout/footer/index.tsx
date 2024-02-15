import SFooter, { FooterParagraph } from "./styled";
import FooterProps from "./types";

const Footer: React.FC<FooterProps> = ({ variant }) => {
  return (
    <SFooter variant={variant}>
      <FooterParagraph>© 2024. All Rights Reserved.</FooterParagraph>
    </SFooter>
  );
};

export default Footer;
