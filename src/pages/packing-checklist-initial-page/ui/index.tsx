import { useNavigate } from "react-router-dom";

import { ChecklistButtonWrapper, LongButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import { CenteredHeading1 } from "../../../shared/ui/typography";

const PackingChecklistInitialPage = () => {
  const navigate = useNavigate();

  const handleShowChecklistCreation = () => {
    navigate("/create-packing-checklist");
  };
  const handleShowAllChecklists = () => {
    navigate("/packing-checklists");
  };

  return (
    <CenteringDiv>
      <CenteredHeading1>TRAVEL PACKING CHECKLIST</CenteredHeading1>
      <ChecklistButtonWrapper>
        <LongButton onClick={handleShowChecklistCreation}>
          New checklist
        </LongButton>
        <LongButton onClick={handleShowAllChecklists}>
          Previous checklists
        </LongButton>
      </ChecklistButtonWrapper>
    </CenteringDiv>
  );
};

export default PackingChecklistInitialPage;
