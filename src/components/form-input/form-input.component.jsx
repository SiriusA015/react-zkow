import { FormInputLabel, Input, Group, FormInstruction, ErrorMessage } from './form-input.styles';

const FormInput = ({ label, instruction, error, ...otherProps }) => {
  const inputId = otherProps.id || otherProps.name;
  const hasError = !!error;

  return (
    <Group className={hasError ? 'error' : ''}>
      <FormInputLabel htmlFor={inputId}>
        {label}
      </FormInputLabel>
      {instruction && <FormInstruction>{instruction}</FormInstruction>}
      <Input id={inputId} {...otherProps} aria-label={label} aria-required="true" className={hasError ? 'error' : ''} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Group>
  );
};

export default FormInput;
