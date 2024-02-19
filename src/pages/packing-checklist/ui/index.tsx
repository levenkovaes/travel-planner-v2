import { useNavigate } from "react-router-dom";

import { LongButton } from "../../../shared/ui/button";
import { Heading1 } from "../../../shared/ui/typography";
import {
  PackingChecklistButtonWrapper,
  PackingChecklistContainer,
} from "./styled";

const PackingChecklist = () => {
  const navigate = useNavigate();

  const handleShowNewChecklist = () => {
    navigate("/new-checklist");
  };
  const handleShowChecklist = () => {
    navigate("/new-checklist");
  };

  return (
    <PackingChecklistContainer>
      <Heading1>TRAVEL PACKING CHECKLIST</Heading1>
      <PackingChecklistButtonWrapper>
        <LongButton onClick={handleShowNewChecklist}>New checklist</LongButton>
        <LongButton onClick={handleShowChecklist}>
          Previous checklists
        </LongButton>
      </PackingChecklistButtonWrapper>
    </PackingChecklistContainer>
  );
};

export default PackingChecklist;
