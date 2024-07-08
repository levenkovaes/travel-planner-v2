import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { TransparentLongButton } from "../../../shared/ui/button";
import { DeleteIconButton } from "../../../shared/ui/button/delete-icon/ui";
import { Link } from "../../../shared/ui/link";
import { CenteredHeading1, Paragraph } from "../../../shared/ui/typography";
import {
  clearPlanners,
  deletePlanner,
  selectPlanners,
} from "../../planner/ui/plannerSlice/plannerSlice";
import { AllPlannersWrapper, PlannersWrapper } from "./styled";

const Planners = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allPlanners = useSelector(selectPlanners);

  const [paragraphContent, setParagraphContent] = useState(
    "You haven't created any planners yet"
  );

  const handleDeletePlanner = (plannerId: string | null) => {
    const notify = () =>
      toast.info("Planner has been deleted!", {
        autoClose: 500,
        hideProgressBar: true,
        progress: undefined,
      });

    if (plannerId) {
      dispatch(deletePlanner(plannerId));
      notify();
    }
  };

  const namesToDisplay = allPlanners.map((planner) => (
    <PlannersWrapper key={planner.id}>
      <Link onClick={() => navigate(`/planner/${planner.id}`)}>
        {planner.name}
      </Link>

      <DeleteIconButton
        handleClick={() => {
          handleDeletePlanner(planner.id);
        }}
      />
    </PlannersWrapper>
  ));

  const handleDeleteAll = () => {
    dispatch(clearPlanners());
    setParagraphContent("All planners have been deleted!");
  };

  return (
    <>
      <CenteredHeading1>Previous Planners</CenteredHeading1>
      <AllPlannersWrapper>
        {namesToDisplay}

        {allPlanners.length ? (
          <TransparentLongButton isDelete onClick={handleDeleteAll}>
            Delete all planners
          </TransparentLongButton>
        ) : (
          <Paragraph>{paragraphContent}</Paragraph>
        )}
      </AllPlannersWrapper>
    </>
  );
};
export default Planners;
