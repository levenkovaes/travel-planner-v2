import { Heading1, Paragraph } from "../../../shared/ui/typography";
import { NoPageContainer } from "./styled";

const NoPage = () => {
  return (
    <NoPageContainer>
      <Heading1>404. PAGE NOT FOUND</Heading1>
      <Paragraph>
        We're sorry, but the page you're looking for is unavailable
      </Paragraph>
    </NoPageContainer>
  );
};

export default NoPage;
