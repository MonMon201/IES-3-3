import styled from "styled-components";
import { colors } from "../constants";
import { TextField, Button } from "@material-ui/core";

export const StyledDiophant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  color: ${colors.white10};
`;

export const StyledTextField = styled(TextField)`
  border-radius: 5px;
  width: 50px;
  background: ${colors.white10};
`;

export const StyledButton = styled(Button)`
  width: 200px;
`;

export const StyledOutput = styled.div`
  width: 200px;
  height: 20px;
  color: ${colors.white10};
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
