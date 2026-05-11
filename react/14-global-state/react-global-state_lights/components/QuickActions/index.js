import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  isAllLightsOn,
  isAllLightsOff,
  onTurnAllLightsOff,
  onTurnAllLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={onTurnAllLightsOff}
        disabled={isAllLightsOff ? true : false}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={onTurnAllLightsOn}
        disabled={isAllLightsOn ? true : false}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
