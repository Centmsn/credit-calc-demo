import styled from "styled-components";
import { MouseEvent } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CheckboxProps {
  isChecked: boolean;
  label?: string;
  onClick: (event: MouseEvent, currentState: boolean) => any;
}

const Checkbox = ({ isChecked, onClick, label }: CheckboxProps) => {
  if (label) {
    return (
      <Label>
        {label}
        <Wrapper
          onClick={(e: MouseEvent) => onClick(e, !isChecked)}
          isActive={isChecked}
        >
          <FontAwesomeIcon icon={isChecked ? faCheck : faTimes} />
        </Wrapper>
      </Label>
    );
  }

  return (
    <Wrapper
      onClick={(e: MouseEvent) => onClick(e, !isChecked)}
      isActive={isChecked}
    >
      <FontAwesomeIcon icon={isChecked ? faCheck : faTimes} />
    </Wrapper>
  );
};

interface WrapperProps {
  isActive: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 35px;
  height: 35px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border: 2px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.orange[900] : theme.colors.gray[100]};
  border-radius: 10px;

  font-size: 1.5rem;

  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.orange[700] : theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[900]};

  cursor: pointer;
  user-select: none;
`;

const Label = styled.label``;

export default Checkbox;
