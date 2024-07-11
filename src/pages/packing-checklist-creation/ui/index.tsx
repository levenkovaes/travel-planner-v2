import React from "react";

import CenteringDiv from "../../../shared/ui/centering-div";
import { CenteredHeading1 } from "../../../shared/ui/typography";
import PackingChecklistCreationForm from "../../../widgets/packing-checklist-creation-form/ui";

const PackingChecklistCreation: React.FC = () => {
  return (
    <CenteringDiv>
      <CenteredHeading1>CREATE NEW CHECKLIST</CenteredHeading1>
      <PackingChecklistCreationForm />
    </CenteringDiv>
  );
};

export default PackingChecklistCreation;
