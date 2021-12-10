import { styled } from '@mui/material/styles';
import { TextField, Button, FormGroup } from '@mui/material/';

export const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 10px auto;
`;

export const StyledTextField = styled(TextField)`
  outline: 0;
  border: none;
  resize: none;

  .MuiOutlinedInput-root {
    width: 100%;
    height: 60px;
    padding: 0;
    border: 1px solid #ccc;
    outline: 0;
  }

  .uiInputBase-root {
    width: 100%;
    height: 60px;
    padding: 0;
    border: 1px solid #ccc;
    outline: 0;
    resize: none;
  }

  & .Mui-focused {
    border: none;
    outline: 0;
  }

  & .MuiOutlinedInput-input,
  & .MuiInputBase-input {
    padding: 0;
    border: none;
    outline: 0;
  }

  & .MuiOutlinedInput-input.MuiInputBase-input.MuiInputBase-inputMultiline {
    padding: 0;
    background-color: #2b2c33;
    padding: 5px 10px;
    border: none;
    border-image-width: 0;
    font-size: 14px;
    font-weight: 300;
    color: #cacaca;
    outline: 0;

    &::placeholder {
      font-weight: 200;
      translate: opacity 0.25s ease-in;
    }

    &:focus-within {
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  width: max-content;
  margin: 10px 0 0;
  padding: 7px 15px;
  border: 1px solid #cacaca;
  border-radius: 3px;
  color: #cacaca;
  font-size: 14px;
  outline: 0;
  cursor: pointer;
`;
