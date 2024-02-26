import { useNavigate } from "react-router-dom";

import { LongButton } from "../../../shared/ui/button";
import CenteringDiv from "../../../shared/ui/centering-div";
import { CenteredHeading1 } from "../../../shared/ui/typography";
import { PackingChecklistButtonWrapper } from "./styled";

const PackingChecklistInitialPage = () => {
  const navigate = useNavigate();

  const handleShowChecklistCreation = () => {
    navigate("/create-packing-checklist");
  };
  const handleShowAllChecklists = () => {
    navigate("/all-packing-checklists");
  };

  return (
    <CenteringDiv>
      <CenteredHeading1>TRAVEL PACKING CHECKLIST</CenteredHeading1>
      <PackingChecklistButtonWrapper>
        <LongButton onClick={handleShowChecklistCreation}>
          New checklist
        </LongButton>
        <LongButton onClick={handleShowAllChecklists}>
          Previous checklists
        </LongButton>
      </PackingChecklistButtonWrapper>
    </CenteringDiv>
  );
};

export default PackingChecklistInitialPage;
