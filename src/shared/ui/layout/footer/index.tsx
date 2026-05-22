import SFooter, { FooterParagraph } from "./styled";
import FooterProps from "./types";

const Footer: React.FC<FooterProps> = ({ variant }) => {
  const year = new Date().getFullYear();

  return (
    <SFooter variant={variant}>
      <FooterParagraph>© {year}. All Rights Reserved.</FooterParagraph>
    </SFooter>
  );
};

export default Footer;
