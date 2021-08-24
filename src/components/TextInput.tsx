import { FC, ChangeEvent } from "react";
import styled from "styled-components";

export interface TextInputProps {
  title: string;
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  value: string | number;

  onChange: (value: string, e: ChangeEvent) => void;
}

const TextInput: FC<TextInputProps> = ({
  title,
  onChange,

  type = "text",
  disabled = false,
  value,
}) => {
  return (
    <Label>
      {title}
      <Input
        type={type}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value, e)
        }
        disabled={disabled}
        isDisabled={disabled}
        value={value}
      />
    </Label>
  );
};

interface InputProps {
  isDisabled: boolean;
}

const Input = styled.input<InputProps>`
  width: 50%;
  margin: 0 15px;

  border: 2px solid
    ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.gray[100] : theme.colors.orange[900]};
  border-radius: 5px;

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[900]};

  padding: 5px 10px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export default TextInput;
