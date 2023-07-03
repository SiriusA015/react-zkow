import styled, { css } from 'styled-components';

const subColor = '#535353';

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 18px;
`;

export const Input = styled.input`
  color: ${subColor};
  font-size: 18px;
  padding: 0.5em 0.75em;
  display: block;
  width: 100%;
  border: 1px solid ${subColor};
  margin: .5em 0 0;
`;

export const Group = styled.div`
  margin: 35px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
  &.error {
    label {
      color: red;
    }
    input {
      border-color: red;
      color: red;
    }
  }
`;

export const FormInstruction = styled.p`
  font-size: 16px;
  margin-top: 5px;
  line-height: 22px;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  margin-top: 5px;
  line-height: 22px;
  color: red;
`;
